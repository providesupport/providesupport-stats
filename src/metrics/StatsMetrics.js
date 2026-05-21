/* global localStorage */
import { LS_TIMEZONE_KEY } from '../constants/constants';
import createRandomString from '../libs/createRandomString';
import { parseRawResponse } from '../parsers/parsers';
import {
  transformLevelToStandartFormal,
  handleLevel,
  validateArgument,
  transformMetricsToObj,
  splitMetricsByCounterAndValue,
  isNestedSummaryShape,
} from '../helpers';

export default class StatsMetrics {
  constructor({ jsonp, getParserByName, getTimePeriod, rawResponses, onAccountInfo }) {
    this.jsonp = jsonp;
    this.getParserByName = getParserByName;
    this.getTimePeriod = getTimePeriod;
    this.rawResponses = rawResponses;
    this.onAccountInfo = onAccountInfo;
  }

  retrieveDataByMetrics = ({ metricsGroups, callback, opts }) => {
    try {
      /* validate params */
      if (opts.level) opts.level = transformLevelToStandartFormal(opts.level)
      if (opts.customParserName) opts.customParser = this.getParserByName(opts.customParserName)
      metricsGroups.forEach(({ metrics, opts: localOpts }, ii) => {
        let { level } = opts
        if (localOpts) {
          if (localOpts.level) {
            localOpts.level = transformLevelToStandartFormal(localOpts.level);
            level = localOpts.level
          }
          if (localOpts.customParserName) localOpts.customParser = this.getParserByName(localOpts.customParserName)
        }
        if (!level) return
        metricsGroups[ii].metrics = handleLevel(level, metrics)
      });
      metricsGroups.forEach(({ metrics }, ii) => {
        metricsGroups[ii].metrics = transformMetricsToObj(metrics)
      });
      validateArgument(callback, 'FUNCTION');
      if (opts.customParser) validateArgument(opts.customParser, 'FUNCTION');
      if (opts.postParser) validateArgument(opts.postParser, 'FUNCTION');

      const HASH_LENGTH = 6;
      let hash = createRandomString(HASH_LENGTH);

      let url = this.jsonp.buildURL(metricsGroups, hash, opts.isWebsitesStats, opts.timePeriod, opts.limitedOpts);
      this.jsonp.createJSONPhandler(hash);
      this.jsonp.makeJSONPrequest(url, hash, () => {
        let response = this.rawResponses[hash];
        opts.timePeriod = opts.timePeriod || this.getTimePeriod();
        if (!response) {
          response = {
            error: 'Error',
            message: 'Connection to the remote server failed. Please try again later.',
            httpStatus: "No status code — JSONP loads via <script>, so errors aren't exposed.",
          }
        } else if (response.error) {
          response = {
            error: response.error,
            message: response.errorDescription,
            httpStatus: response.httpStatus,
          }
        } else {
          const { timeZone, callDistributionMode } = response.statisticsPool.accountInfo;
          this.onAccountInfo({ timeZone, callDistributionMode });
          localStorage.setItem(LS_TIMEZONE_KEY, timeZone);

          if (!response.statisticsPool.statsPeriods.length) {
            response = {
              noStats: true,
              message: `No statistics for this time period: ${opts.timePeriod.startDate} - ${opts.timePeriod.endDate}`,
              startDate: new Date(opts.timePeriod.startDate),
              endDate: new Date(opts.timePeriod.endDate),
            };
          } else {
            response = parseRawResponse(response, metricsGroups, opts);
          }
        }
        delete this.rawResponses[hash];
        delete window[`_psHandleStatsResponse_${hash}`];
        callback(response);
      });
      return () => {
        let scriptElement = document.getElementById(`ps_stats_${hash}`);
        if (!scriptElement) return false;
        scriptElement.onload = () => { delete window[`_psHandleStatsResponse_${hash}`] };
        scriptElement.parentNode.removeChild(scriptElement);
        return true;
      }
    } catch (error) {
      console.error(error)
    }
  }

  mergeLimitedAndStandardResults = (metrics, opts, callback) => {
    const metricsMap = transformMetricsToObj(metrics);
    const {
      counterMetricsMap,
      valueMetricsMap,
      hasCounterMetrics,
      hasValueMetrics,
    } = splitMetricsByCounterAndValue(metricsMap);
    const expectedRequests = (hasCounterMetrics ? 1 : 0) + (hasValueMetrics ? 1 : 0);

    let counterResult = null;
    let valueResult = null;
    let counterError = null;
    let valueError = null;
    let completedRequests = 0;

    const checkComplete = () => {
      completedRequests++;
      if (completedRequests !== expectedRequests) return;

      let mergedResult;
      const valueIsNestedSummary = isNestedSummaryShape(valueResult);

      if (valueIsNestedSummary && counterResult != null && typeof counterResult === 'object') {
        mergedResult = { ...valueResult };
        if (counterResult.preChatSurvey != null && 'referrers' in counterResult.preChatSurvey) {
          mergedResult.preChatSurvey = {
            ...mergedResult.preChatSurvey,
            referrers: counterResult.preChatSurvey.referrers,
          };
        }
        if (counterResult.offlineForm != null && 'referrers' in counterResult.offlineForm) {
          mergedResult.offlineForm = {
            ...mergedResult.offlineForm,
            referrers: counterResult.offlineForm.referrers,
          };
        }
      } else {
        mergedResult = {
          ...(counterResult || {}),
          ...(valueResult || {}),
        }
      }

      if (counterError && valueError) {
        if (counterError.noStats && valueError.noStats) {
          callback(counterError);
          return;
        }
        callback({
          error: 'Both requests failed',
          counterError,
          valueError,
        });
        return;
      }

      if (counterError && !hasValueMetrics) {
        callback(counterError);
        return;
      }

      if (valueError && !hasCounterMetrics) {
        callback(valueError);
        return;
      }

      if (counterError || valueError) {
        callback({
          data: mergedResult,
          partial: true,
          warnings: {
            ...(counterError && { counterError }),
            ...(valueError && { valueError }),
          },
        });
        return;
      }

      callback(mergedResult);
    };

    if (opts.limitedOpts == null) {
      this.retrieveDataByMetrics({
        metricsGroups: [{ metrics: metricsMap }],
        callback,
        opts,
      });
      return;
    }

    if (hasCounterMetrics) {
      this.retrieveDataByMetrics({
        metricsGroups: [{ metrics: counterMetricsMap }],
        callback: response => {
          if (response.error || response.noStats) {
            counterError = response;
          } else {
            counterResult = response;
          }
          checkComplete();
        },
        opts,
      });
    }

    if (hasValueMetrics) {
      const { limitedOpts: _dropped, ...optsWithoutLimited } = opts;
      this.retrieveDataByMetrics({
        metricsGroups: [{ metrics: valueMetricsMap }],
        callback: response => {
          if (response.error || response.noStats) {
            valueError = response;
          } else {
            const isNestedSummary = isNestedSummaryShape(response);
            if (isNestedSummary) {
              valueResult = response;
            } else {
              valueResult = {};
              for (const [metricKey, targetName] of Object.entries(valueMetricsMap)) {
                const name = targetName || metricKey;
                if (response.total != null && response.timeline != null && targetName) {
                  valueResult[targetName] = {
                    total: response.total,
                    timeline: response.timeline,
                  };
                } else if (response[name] !== undefined) {
                  valueResult[name] = response[name];
                } else if (response[metricKey] !== undefined) {
                  valueResult[name] = response[metricKey];
                } else {
                  valueResult[name] = response;
                }
              }
            }
          }
          checkComplete();
        },
        opts: optsWithoutLimited,
      })
    }
  }
}
