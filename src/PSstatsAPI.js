/* global localStorage */
/* eslint-disable implicit-arrow-linebreak */
import './libs/polyfills';
import * as METRICS from './constants/metrics';
import {
  ADMIN_LOGIN_COUNT,
  WOP_LOGIN_COUNT,
  CHAT_START_CHAT_FORM_OPEN_COUNT,
  CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT,
  CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL,
  CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL,
  CHAT_START_CHAT_FORM_SUBMIT_COUNT,
  CHAT_OFFLINE_MESSAGE_COUNT,
  CHAT_INVITATION_SENT_COUNT_PER_ACCOUNT,
  CHAT_INVITATION_SENT_COUNT_PER_OPERATOR,
  CHAT_INVITATION_SENT_COUNT_PER_DEPARTMENT,
  CHAT_INVITATION_ACCEPT_COUNT_PER_ACCOUNT,
  CHAT_INVITATION_ACCEPT_COUNT_PER_OPERATOR,
  CHAT_INVITATION_ACCEPT_COUNT_PER_DEPARTMENT,
  CHAT_INVITATION_DECLINE_COUNT_PER_ACCOUNT,
  CHAT_INVITATION_DECLINE_COUNT_PER_OPERATOR,
  CHAT_INVITATION_DECLINE_COUNT_PER_DEPARTMENT,
  CHAT_START_CHAT_FORM_FILLOUT_TIME,
  CHAT_LEAVE_MESSAGE_FORM_FILLOUT_TIME,
  CHAT_CHATS_PER_ACCOUNT,
  CHAT_CHATS_PER_OPERATOR,
  CHAT_CHATS_PER_DEPARTMENT,
  CHAT_ACCEPTED_CHATS_PER_ACCOUNT,
  CHAT_ACCEPTED_CHATS_PER_OPERATOR,
  CHAT_ACCEPTED_CHATS_PER_DEPARTMENT,
  CHAT_MISSED_CALLS_PER_ACCOUNT,
  CHAT_MISSED_CALLS_PER_OPERATOR,
  CHAT_MISSED_CALLS_PER_DEPARTMENT,
  CHAT_VISITOR_MESSAGES_COUNT_PER_CHAT,
  CHAT_ALL_OPERATORS_MESSAGES_COUNT_PER_CHAT,
  CHAT_OPERATOR_MESSAGES_COUNT_PER_CHAT_PER_OPERATOR,
  CHAT_OPERATOR_MESSAGES_COUNT_PER_CHAT_PER_DEPARTMENT,
  CHAT_ACCEPT_CHAT_DELAY_PER_ACCOUNT,
  CHAT_ACCEPT_CHAT_DELAY_PER_OPERATOR,
  CHAT_ACCEPT_CHAT_DELAY_PER_DEPARTMENT,
  CHAT_AWAY_TIME_PER_OPERATOR,
  CHAT_ONLINE_TIME_PER_ACCOUNT,
  CHAT_ONLINE_TIME_PER_OPERATOR,
  CHAT_ONLINE_TIME_PER_DEPARTMENT,
  CHAT_PCS_PROFICIENCY_PER_ACCOUNT,
  CHAT_PCS_POLITENESS_PER_ACCOUNT,
  CHAT_PCS_CASE_SOLVED_COUNT_PER_ACCOUNT,
  CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_ACCOUNT,
  CHAT_PCS_CONTENTED_COUNT_PER_ACCOUNT,
  CHAT_PCS_NOT_CONTENTED_COUNT_PER_ACCOUNT,
  CHAT_PCS_PROFICIENCY_PER_OPERATOR,
  CHAT_PCS_POLITENESS_PER_OPERATOR,
  CHAT_PCS_CASE_SOLVED_COUNT_PER_OPERATOR,
  CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_OPERATOR,
  CHAT_PCS_CONTENTED_COUNT_PER_OPERATOR,
  CHAT_PCS_NOT_CONTENTED_COUNT_PER_OPERATOR,
  CHAT_PCS_PROFICIENCY_PER_DEPARTMENT,
  CHAT_PCS_POLITENESS_PER_DEPARTMENT,
  CHAT_PCS_CASE_SOLVED_COUNT_PER_DEPARTMENT,
  CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_DEPARTMENT,
  CHAT_PCS_CONTENTED_COUNT_PER_DEPARTMENT,
  CHAT_PCS_NOT_CONTENTED_COUNT_PER_DEPARTMENT,
  WEBSITE_HITS_PER_VISITOR,
  WEBSITE_HITS_BY_URL,
  WEBSITE_VISITORS_BY_REFERRER_URL,
  CHAT_ACCEPTANCE_RATE,
  CHAT_PROACTIVE_ACCEPTANCE_RATE,
  CHAT_PRE_CHAT_SURVEY_CLICK_TROUGH_RATE,
  CHAT_OFFLINE_FORM_CLICK_TROUGH_RATE,
  CHAT_ACCEPTANCE_RATE_PER_OPERATOR,
  CHAT_OPERATOR_LOAD_RATE,
  CHAT_ACCEPTANCE_RATE_PER_DEPARTMENT,
  CHAT_DEPARTMENT_LOAD_RATE,
  CHAT_OPERATOR_RESPONSE_TIME_PER_ACCOUNT,
  CHAT_VISITOR_RESPONSE_TIME,
} from './constants/metrics'
import {
  NO_STATS_METRIC_MSG,
  NOT_ENOUGH_STATS_MSG,
  NO_STATS_OPERATOR_OR_DEPARTMENT_MSG,
  LS_TIMEZONE_KEY,
} from './constants/constants';
import {
  OP_LOGIN,
  OP_NAME,
  OFFLINE_TIME,
  OFFLINE_TIME_BY_PERIODS,
  // LOAD_RATE,
  // LOAD_RATE_BY_PERIODS,
  // TIMELINE,
  // TIMELINE_BY_PERIODS,
} from './constants/customMetricsTypes';
import createRandomString from './libs/createRandomString';
import {
  parseRawResponse,
  parseSummaryDataWithLevel,
  parseSummaryData,
  parseAccountSummaryData,
  parseAccountTimelineData,
  parseWebsiteSummaryData,
  parseDPsOrOPsSummaryData,
  parseDPsOrOPsTimelineData,
  parseOfflineTime,
  parseSummaryAllItems,
} from './parsers/parsers';
import {
  addTimeStringsToResponse,
  transformLevelToStandartFormal,
  handleLevel,
  validateArgument,
  processTimePeriodArg,
  formatDate,
  transformMetricsToObj,
  transformMetricsGroupsToStr,
} from './helpers';
import md5 from './libs/md5';
import {
  DEFAULT_TAKE_COUNT,
  DEFAULT_SKIP_COUNT,
  DEFAULT_SORT_DIRECTION,
  WEBSITE_COUNTER_METRICS,
  WEBSITE_VALUE_METRICS,
  CHAT_REFERRERS_COUNTER_METRICS,
  ACCOUNT_REFERRERS_COUNTER_METRICS,
  ACCOUNT_VALUE_METRICS,
} from './constants/limitedRequest.js';

export default class PSstatsAPI {
  constructor(accountName, password, initTimePeriod, isPasswordAlreadyInMd5 = false) {
    /* state */
    // this.user = {

    // }
    validateArgument(accountName, 'STRING');
    validateArgument(password, 'STRING');
    this.accountName = accountName;
    this.md5Password = isPasswordAlreadyInMd5 ? password : md5(password);
    this.rawResponses = {};
    this.timeZone = null;
    this.callDistributionMode = null;
    /* cloning object because of METRICS is a module (not a regular object) */
    this.METRICS = JSON.parse(JSON.stringify(METRICS));
    this.NO_STATS_MSG = {
      NO_STATS_METRIC_MSG,
      NOT_ENOUGH_STATS_MSG,
      NO_STATS_OPERATOR_OR_DEPARTMENT_MSG,
    };

    if (initTimePeriod) this.setTimePeriod(initTimePeriod);
  }

  /* PRIVATE ******************************************************************************************************* */

  // TODO: убрать, переименовать лимитед реквест в стандарт реквест
  _standardRequest = (metrics, opts) => (callback, timePeriod) => this._retrieveDataByMetrics({
    metricsGroups: [{ metrics }],
    callback,
    opts: { ...opts, timePeriod },
  })

  _requestWithLevel = (metrics, opts) => (level, callback, timePeriod) => this._retrieveDataByMetrics({
    metricsGroups: [{ metrics }],
    callback,
    opts: { ...opts, timePeriod, level },
  })

  _limitedRequest = (metrics, opts) => (callback, timePeriod, limitedOpts) => this._retrieveDataByMetrics({
    metricsGroups: [{ metrics }],
    callback,
    opts: { ...opts, timePeriod, limitedOpts },
  })

  _retrieveDataByMetrics = ({ metricsGroups, callback, opts }) => {
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

      let url = this._buildURL(metricsGroups, hash, opts.isWebsitesStats, opts.timePeriod, opts.limitedOpts);
      this._createJSONPhandler(hash);
      this._makeJSONPrequest(url, hash, () => {
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
          this.timeZone = response.statisticsPool.accountInfo.timeZone;
          this.callDistributionMode = response.statisticsPool.accountInfo.callDistributionMode;
          localStorage.setItem(LS_TIMEZONE_KEY, this.timeZone);

          if (!response.statisticsPool.statsPeriods.length) {
            response = {
              noStats: true,
              message: `No statistics for this time period: ${opts.timePeriod.startDate} - ${opts.timePeriod.endDate}`,
              startDate: new Date(opts.timePeriod.startDate),
              endDate: new Date(opts.timePeriod.endDate),
            };
          } else response = parseRawResponse(response, metricsGroups, opts);
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

  _buildURL = (metricsGroups, hash, isWebsitesStats, optTimePeriod, limitedOpts = null) => {
    let processedTimePeriod;
    let startDate;
    let endDate;
    let websiteHash = isWebsitesStats ? 'websites-' : '';

    // TODO: если ничего не передано, то будет идти запрос на стандартный хендлер
    const hasLimitedParams = limitedOpts && (
      limitedOpts.takeCount !== undefined ||
      limitedOpts.skipCount !== undefined ||
      limitedOpts.sortDirection !== undefined
    );

    let endpoint = hasLimitedParams ? 'get-limited-statistics' : 'get-statistics';
    let baseURL =
      `https://stats-${websiteHash}api.providesupport.com/api/v1/${endpoint}/providesupport/${
        this.accountName
      }?human-readable-json=false&access_token=${
        this.md5Password}`;
    let metricsInStr = transformMetricsGroupsToStr(metricsGroups);

    if (optTimePeriod) {
      processTimePeriodArg(optTimePeriod);
      optTimePeriod.startDate = formatDate(optTimePeriod.startDate);
      optTimePeriod.endDate = formatDate(optTimePeriod.endDate);
      processedTimePeriod =
        `${optTimePeriod.duration
        }&start-date=${
          optTimePeriod.startDate.replace(/ /g, '%20')
        }&end-date=${
          optTimePeriod.endDate.replace(/ /g, '%20')}`;
    } else {
      if (this.getTimePeriod() === 'Time period is undefined!') {
        throw new Error(
          'You need to set time period via \'setTimePeriod\' method or by passing time period object on method call!',
        );
      }
      startDate = formatDate(this.startDate);
      endDate = formatDate(this.endDate);
      processedTimePeriod = `${this.duration}&start-date=${startDate.replace(/ /g, '%20')}&end-date=${
        endDate.replace(/ /g, '%20')}`;
    }

    let queryParams;

    if (hasLimitedParams) {
      let durationParam;
      let startDateParam;
      let endDateParam;

      if (optTimePeriod) {
        durationParam = optTimePeriod.duration;
        startDateParam = optTimePeriod.startDate.replace(/ /g, '%20');
        endDateParam = optTimePeriod.endDate.replace(/ /g, '%20');
      } else {
        durationParam = this.duration;
        startDateParam = startDate.replace(/ /g, '%20');
        endDateParam = endDate.replace(/ /g, '%20');
      }

      const {
        takeCount = DEFAULT_TAKE_COUNT,
        skipCount = DEFAULT_SKIP_COUNT,
        sortDirection = DEFAULT_SORT_DIRECTION,
      } = limitedOpts;
      queryParams = `${'&timezone=' + 'ACCOUNT' + '&metric-names='}${metricsInStr}&duration-name=${durationParam}&start-date=${startDateParam}&end-date=${endDateParam}&take-count=${takeCount}&skip-count=${skipCount}&sort-direction=${sortDirection}&callback=_psHandleStatsResponse_${hash}`;
    } else {
      queryParams = `${'&timezone=' + 'ACCOUNT' + '&metric-names='}${metricsInStr}&duration-names=${
        processedTimePeriod}&callback=_psHandleStatsResponse_${hash}`;
    }

    return baseURL + queryParams;
  }

  _createJSONPhandler = hash => {
    let uniqueHandler = `_psHandleStatsResponse_${hash}`;
    window[uniqueHandler] = (response => {
      this.rawResponses[hash] = response;
    });
  }

  _makeJSONPrequest = (url, hash, onloadHandler) => {
    const request = document.createElement('script');
    request.id = `ps_stats_${hash}`;
    request.src = url;
    const cleanUpAndCall = event => {
      onloadHandler();
      event.target?.parentNode?.removeChild(event.target);
    };
    request.onload = cleanUpAndCall;
    request.onerror = cleanUpAndCall;
    document.body.appendChild(request);
  }

  _mergeLimitedAndStandardResults = (counterMetricsMap, valueMetricsMap, opts, callback, timePeriod) => {
    const hasValueMetrics = Object.keys(valueMetricsMap).length > 0;
    const expectedRequests = hasValueMetrics ? 2 : 1;

    let counterResult = null;
    let valueResult = null;
    let completedRequests = 0;

    const checkComplete = () => {
      completedRequests++;
      if (completedRequests === expectedRequests) {
        if (!counterResult && !valueResult) {
          callback({
            error: 'Both requests failed',
            counterError: counterResult?.error,
            valueError: valueResult?.error,
          })
        }
        const mergedResult = {
          ...(counterResult || {}),
          ...(valueResult || {}),
        };
        callback(mergedResult);
      }
    }

    const limitedMethod = this._limitedRequest(counterMetricsMap, opts);
    limitedMethod(response => {
      if (!response.error && !response.noStats) {
        counterResult = response;
      }
      checkComplete();
    }, timePeriod, opts.limitedOpts);

    if (hasValueMetrics) {
      const { limitedOpts, ...standardOpts } = opts;
      const standardMethod = this._standardRequest(valueMetricsMap, standardOpts);
      standardMethod(response => {
        if (!response.error && !response.noStats) {
          valueResult = {};
          for (const [metricKey, targetName] of Object.entries(valueMetricsMap)) {
            if (response.total && response.timeline && targetName) {
              valueResult[targetName] = {
                total: response.total,
                timeline: response.timeline,
              };
            } else if (response[targetName || metricKey]) {
              valueResult[targetName || metricKey] = response[targetName || metricKey];
            }
          }
        }
        checkComplete();
      }, timePeriod);
    }
  }

  _createLimitedRequestWithMerge = (counterMetricsMap, valueMetricsMap, baseOpts, fallbackMethod) =>
    (callback, timePeriod, limitedOpts = null) => {
      if (limitedOpts) {
        this._mergeLimitedAndStandardResults(
          counterMetricsMap,
          valueMetricsMap,
          { ...baseOpts, limitedOpts },
          callback,
          timePeriod,
        )
      } else {
        fallbackMethod(callback, timePeriod);
      }
    };

  /* PUBLICK ******************************************************************************************************* */
  setTimePeriod = timePeriod => {
    processTimePeriodArg(timePeriod);
    this.duration = timePeriod.duration;
    this.startDate = timePeriod.startDate;
    this.endDate = timePeriod.endDate;
  }

  setMakeJSONPrequest(fun) {
    this._makeJSONPrequest = fun;
  }

  getTimePeriod = () => {
    if (!this.startDate || !this.endDate || !this.duration) return 'Time period is undefined!';
    return {
      startDate: this.startDate,
      endDate: this.endDate,
      duration: this.duration,
    }
  }

  getParserByName(name) {
    const parsers = {
      parseRawResponse,
      parseSummaryDataWithLevel,
      parseSummaryData,
      parseAccountSummaryData,
      parseAccountTimelineData,
      parseWebsiteSummaryData,
      parseDPsOrOPsSummaryData,
      parseDPsOrOPsTimelineData,
      parseOfflineTime,
      parseSummaryAllItems,
    }
    return parsers[name]
  }

  /* Requests for metrics ***** */

  getControlPanelLoginCount = this._standardRequest(ADMIN_LOGIN_COUNT)

  getWebAgentAppLoginCount = this._standardRequest(WOP_LOGIN_COUNT)

  getPreChatSurveyLoadCount = this._standardRequest(CHAT_START_CHAT_FORM_OPEN_COUNT)

  getOfflineFormLoadCount = this._standardRequest(CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT)

  getPreChatSurveyReferrers = this._standardRequest(CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL)

  getLimitedPreChatSurveyReferrers = this._limitedRequest(CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL)

  getOfflineFormReferrers = this._standardRequest(CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL)

  getLimitedOfflineFormReferrers = this._limitedRequest(CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL)

  getPreChatSurveySubmitCount = this._standardRequest(CHAT_START_CHAT_FORM_SUBMIT_COUNT)

  getOfflineMessageSubmitCount = this._standardRequest(CHAT_OFFLINE_MESSAGE_COUNT)

  getVisitorMessagesCount = this._standardRequest(CHAT_VISITOR_MESSAGES_COUNT_PER_CHAT)

  getPreChatSurveyFilloutTime = this._standardRequest(CHAT_START_CHAT_FORM_FILLOUT_TIME,
    { postParser: addTimeStringsToResponse })

  getOfflineFormFilloutTime = this._standardRequest(CHAT_LEAVE_MESSAGE_FORM_FILLOUT_TIME,
    { postParser: addTimeStringsToResponse })

  getSentProactiveChatsCount = this._requestWithLevel([
    CHAT_INVITATION_SENT_COUNT_PER_ACCOUNT,
    CHAT_INVITATION_SENT_COUNT_PER_OPERATOR,
    CHAT_INVITATION_SENT_COUNT_PER_DEPARTMENT,
  ])

  getAcceptedProactiveChatsCount = this._requestWithLevel([
    CHAT_INVITATION_ACCEPT_COUNT_PER_ACCOUNT,
    CHAT_INVITATION_ACCEPT_COUNT_PER_OPERATOR,
    CHAT_INVITATION_ACCEPT_COUNT_PER_DEPARTMENT,
  ])

  getDeclinedProactiveChatsCount = this._requestWithLevel([
    CHAT_INVITATION_DECLINE_COUNT_PER_ACCOUNT,
    CHAT_INVITATION_DECLINE_COUNT_PER_OPERATOR,
    CHAT_INVITATION_DECLINE_COUNT_PER_DEPARTMENT,
  ])

  getReceivedChatsCount = this._requestWithLevel([
    CHAT_CHATS_PER_ACCOUNT,
    CHAT_CHATS_PER_OPERATOR,
    CHAT_CHATS_PER_DEPARTMENT,
  ])

  getAcceptedChatsCount = this._requestWithLevel([
    CHAT_ACCEPTED_CHATS_PER_ACCOUNT,
    CHAT_ACCEPTED_CHATS_PER_OPERATOR,
    CHAT_ACCEPTED_CHATS_PER_DEPARTMENT,
  ])

  getMissedChatsCount = this._requestWithLevel([
    CHAT_MISSED_CALLS_PER_ACCOUNT,
    CHAT_MISSED_CALLS_PER_OPERATOR,
    CHAT_MISSED_CALLS_PER_DEPARTMENT,
  ])

  getOperatorMessagesCount = this._requestWithLevel([
    CHAT_ALL_OPERATORS_MESSAGES_COUNT_PER_CHAT,
    CHAT_OPERATOR_MESSAGES_COUNT_PER_CHAT_PER_OPERATOR,
    CHAT_OPERATOR_MESSAGES_COUNT_PER_CHAT_PER_DEPARTMENT,
  ])

  getChatAcceptDelay = this._requestWithLevel([
    CHAT_ACCEPT_CHAT_DELAY_PER_ACCOUNT,
    CHAT_ACCEPT_CHAT_DELAY_PER_OPERATOR,
    CHAT_ACCEPT_CHAT_DELAY_PER_DEPARTMENT,
  ], { postParser: addTimeStringsToResponse })

  getOnlineTime = this._requestWithLevel([
    CHAT_ONLINE_TIME_PER_ACCOUNT,
    CHAT_ONLINE_TIME_PER_OPERATOR,
    CHAT_ONLINE_TIME_PER_DEPARTMENT,
  ], { postParser: addTimeStringsToResponse })

  getOperatorsAwayTime = this._standardRequest(CHAT_AWAY_TIME_PER_OPERATOR, { postParser: addTimeStringsToResponse })

  getOfflineTime = this._requestWithLevel([
    CHAT_ONLINE_TIME_PER_ACCOUNT,
    [CHAT_ONLINE_TIME_PER_OPERATOR, CHAT_AWAY_TIME_PER_OPERATOR],
    CHAT_ONLINE_TIME_PER_DEPARTMENT,
  ], { reverse: true, customParser: parseOfflineTime, isRemove1NestingLevel: false })

  getPostChatSurveySummary = this._requestWithLevel([
    {
      [CHAT_PCS_PROFICIENCY_PER_ACCOUNT]: 'proficiency',
      [CHAT_PCS_POLITENESS_PER_ACCOUNT]: 'politeness',
      [CHAT_PCS_CASE_SOLVED_COUNT_PER_ACCOUNT]: 'caseSolved',
      [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_ACCOUNT]: 'caseNotSolved',
      [CHAT_PCS_CONTENTED_COUNT_PER_ACCOUNT]: 'contented',
      [CHAT_PCS_NOT_CONTENTED_COUNT_PER_ACCOUNT]: 'notContented',
    }, {
      [CHAT_PCS_PROFICIENCY_PER_OPERATOR]: 'proficiency',
      [CHAT_PCS_POLITENESS_PER_OPERATOR]: 'politeness',
      [CHAT_PCS_CASE_SOLVED_COUNT_PER_OPERATOR]: 'caseSolved',
      [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_OPERATOR]: 'caseNotSolved',
      [CHAT_PCS_CONTENTED_COUNT_PER_OPERATOR]: 'contented',
      [CHAT_PCS_NOT_CONTENTED_COUNT_PER_OPERATOR]: 'notContented',
    }, {
      [CHAT_PCS_PROFICIENCY_PER_DEPARTMENT]: 'proficiency',
      [CHAT_PCS_POLITENESS_PER_DEPARTMENT]: 'politeness',
      [CHAT_PCS_CASE_SOLVED_COUNT_PER_DEPARTMENT]: 'caseSolved',
      [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_DEPARTMENT]: 'caseNotSolved',
      [CHAT_PCS_CONTENTED_COUNT_PER_DEPARTMENT]: 'contented',
      [CHAT_PCS_NOT_CONTENTED_COUNT_PER_DEPARTMENT]: 'notContented',
    },
  ], { customParser: parseSummaryDataWithLevel })

  getChatsSummary = this._requestWithLevel([
    {
      [CHAT_CHATS_PER_ACCOUNT]: 'sent',
      [CHAT_ACCEPTED_CHATS_PER_ACCOUNT]: 'accepted',
      [CHAT_MISSED_CALLS_PER_ACCOUNT]: 'missed',
      [CHAT_ACCEPTANCE_RATE]: 'acceptanceRate',
    }, {
      [CHAT_CHATS_PER_OPERATOR]: 'sent',
      [CHAT_ACCEPTED_CHATS_PER_OPERATOR]: 'accepted',
      [CHAT_MISSED_CALLS_PER_OPERATOR]: 'missed',
      [CHAT_ACCEPTANCE_RATE_PER_OPERATOR]: 'acceptanceRate',
    }, {
      [CHAT_CHATS_PER_DEPARTMENT]: 'sent',
      [CHAT_ACCEPTED_CHATS_PER_DEPARTMENT]: 'accepted',
      [CHAT_MISSED_CALLS_PER_DEPARTMENT]: 'missed',
      [CHAT_ACCEPTANCE_RATE_PER_DEPARTMENT]: 'acceptanceRate',
    },
  ], { customParser: parseSummaryDataWithLevel })

  getProactiveChatsSummary = this._requestWithLevel([
    {
      [CHAT_INVITATION_SENT_COUNT_PER_ACCOUNT]: 'sent',
      [CHAT_INVITATION_ACCEPT_COUNT_PER_ACCOUNT]: 'accepted',
      [CHAT_INVITATION_DECLINE_COUNT_PER_ACCOUNT]: 'declined',
      [CHAT_PROACTIVE_ACCEPTANCE_RATE]: 'acceptanceRate',
    }, {
      [CHAT_INVITATION_SENT_COUNT_PER_OPERATOR]: 'sent',
      [CHAT_INVITATION_ACCEPT_COUNT_PER_OPERATOR]: 'accepted',
      [CHAT_INVITATION_DECLINE_COUNT_PER_OPERATOR]: 'declined',
    }, {
      [CHAT_INVITATION_SENT_COUNT_PER_DEPARTMENT]: 'sent',
      [CHAT_INVITATION_ACCEPT_COUNT_PER_DEPARTMENT]: 'accepted',
      [CHAT_INVITATION_DECLINE_COUNT_PER_DEPARTMENT]: 'declined',
    },
  ], {
    customParser: parseSummaryDataWithLevel,
    customMetrics: [{
      name: 'acceptanceRate',
      propsToCalculate: ['sent', 'accepted'],
    }],
  })

  getPreChatSurveySummary = this._standardRequest({
    [CHAT_START_CHAT_FORM_OPEN_COUNT]: 'loads',
    [CHAT_START_CHAT_FORM_SUBMIT_COUNT]: 'submits',
    [CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL]: 'referrers',
    [CHAT_PRE_CHAT_SURVEY_CLICK_TROUGH_RATE]: 'clickThroughRate',
  }, { customParser: parseSummaryData })

  getOfflineFormSummary = this._standardRequest({
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT]: 'loads',
    [CHAT_OFFLINE_MESSAGE_COUNT]: 'submits',
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL]: 'referrers',
    [CHAT_OFFLINE_FORM_CLICK_TROUGH_RATE]: 'clickThroughRate',
  }, { customParser: parseSummaryData })

  getAccountSummary = this._standardRequest({
    [CHAT_ONLINE_TIME_PER_ACCOUNT]: 'onlinePresence-chatOnlineTime',
    [CHAT_ACCEPT_CHAT_DELAY_PER_ACCOUNT]: 'averages-chatAcceptTime',
    [CHAT_START_CHAT_FORM_FILLOUT_TIME]: 'averages-preChatSurveyFilloutTime',
    [CHAT_LEAVE_MESSAGE_FORM_FILLOUT_TIME]: 'averages-offlineFormFilloutTime',
    [CHAT_VISITOR_MESSAGES_COUNT_PER_CHAT]: 'averages-visitorMessagesPerChat',
    [CHAT_ALL_OPERATORS_MESSAGES_COUNT_PER_CHAT]: 'averages-operatorMessagesPerChat',
    [CHAT_OPERATOR_RESPONSE_TIME_PER_ACCOUNT]: 'averages-operatorResponseTime',
    [CHAT_VISITOR_RESPONSE_TIME]: 'averages-visitorResponseTime',
    [CHAT_START_CHAT_FORM_OPEN_COUNT]: 'preChatSurvey-loads',
    [CHAT_START_CHAT_FORM_SUBMIT_COUNT]: 'preChatSurvey-submits',
    [CHAT_PRE_CHAT_SURVEY_CLICK_TROUGH_RATE]: 'preChatSurvey-clickThroughRate',
    [CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL]: 'preChatSurvey-referrers',
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT]: 'offlineForm-loads',
    [CHAT_OFFLINE_MESSAGE_COUNT]: 'offlineForm-submits',
    [CHAT_OFFLINE_FORM_CLICK_TROUGH_RATE]: 'offlineForm-clickThroughRate',
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL]: 'offlineForm-referrers',
    [CHAT_CHATS_PER_ACCOUNT]: 'chats-sent',
    [CHAT_ACCEPTED_CHATS_PER_ACCOUNT]: 'chats-accepted',
    [CHAT_ACCEPTANCE_RATE]: 'chats-acceptanceRate',
    [CHAT_MISSED_CALLS_PER_ACCOUNT]: 'chats-missed',
    [CHAT_INVITATION_SENT_COUNT_PER_ACCOUNT]: 'proactiveChats-sent',
    [CHAT_INVITATION_ACCEPT_COUNT_PER_ACCOUNT]: 'proactiveChats-accepted',
    [CHAT_PROACTIVE_ACCEPTANCE_RATE]: 'proactiveChats-acceptanceRate',
    [CHAT_INVITATION_DECLINE_COUNT_PER_ACCOUNT]: 'proactiveChats-declined',
    [CHAT_PCS_PROFICIENCY_PER_ACCOUNT]: 'postChatSurvey-proficiency',
    [CHAT_PCS_POLITENESS_PER_ACCOUNT]: 'postChatSurvey-politeness',
    [CHAT_PCS_CASE_SOLVED_COUNT_PER_ACCOUNT]: 'postChatSurvey-caseSolved',
    [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_ACCOUNT]: 'postChatSurvey-caseNotSolved',
    [CHAT_PCS_CONTENTED_COUNT_PER_ACCOUNT]: 'postChatSurvey-contented',
    [CHAT_PCS_NOT_CONTENTED_COUNT_PER_ACCOUNT]: 'postChatSurvey-notContented',
  }, {
    customParser: parseAccountSummaryData,
  })

  getLimitedAccountSummary = this._createLimitedRequestWithMerge(
    ACCOUNT_REFERRERS_COUNTER_METRICS,
    ACCOUNT_VALUE_METRICS,
    { customParser: parseAccountSummaryData },
    this.getAccountSummary,
  )

  getAccountTimeline = this._standardRequest({
    [CHAT_ONLINE_TIME_PER_ACCOUNT]: 'onlinePresence-chatOnlineTime',
    [CHAT_ACCEPT_CHAT_DELAY_PER_ACCOUNT]: 'averages-chatAcceptTime',
    [CHAT_START_CHAT_FORM_FILLOUT_TIME]: 'averages-preChatSurveyFilloutTime',
    [CHAT_LEAVE_MESSAGE_FORM_FILLOUT_TIME]: 'averages-offlineFormFilloutTime',
    [CHAT_VISITOR_MESSAGES_COUNT_PER_CHAT]: 'averages-visitorMessagesPerChat',
    [CHAT_ALL_OPERATORS_MESSAGES_COUNT_PER_CHAT]: 'averages-operatorMessagesPerChat',
    [CHAT_OPERATOR_RESPONSE_TIME_PER_ACCOUNT]: 'averages-operatorResponseTime',
    [CHAT_VISITOR_RESPONSE_TIME]: 'averages-visitorResponseTime',
    [CHAT_START_CHAT_FORM_OPEN_COUNT]: 'preChatSurvey-loads',
    [CHAT_START_CHAT_FORM_SUBMIT_COUNT]: 'preChatSurvey-submits',
    [CHAT_PRE_CHAT_SURVEY_CLICK_TROUGH_RATE]: 'preChatSurvey-clickThroughRate',
    [CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL]: 'preChatSurvey-referrers',
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT]: 'offlineForm-loads',
    [CHAT_OFFLINE_MESSAGE_COUNT]: 'offlineForm-submits',
    [CHAT_OFFLINE_FORM_CLICK_TROUGH_RATE]: 'offlineForm-clickThroughRate',
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL]: 'offlineForm-referrers',
    [CHAT_CHATS_PER_ACCOUNT]: 'chats-sent',
    [CHAT_ACCEPTED_CHATS_PER_ACCOUNT]: 'chats-accepted',
    [CHAT_ACCEPTANCE_RATE]: 'chats-acceptanceRate',
    [CHAT_MISSED_CALLS_PER_ACCOUNT]: 'chats-missed',
    [CHAT_INVITATION_SENT_COUNT_PER_ACCOUNT]: 'proactiveChats-sent',
    [CHAT_INVITATION_ACCEPT_COUNT_PER_ACCOUNT]: 'proactiveChats-accepted',
    [CHAT_PROACTIVE_ACCEPTANCE_RATE]: 'proactiveChats-acceptanceRate',
    [CHAT_INVITATION_DECLINE_COUNT_PER_ACCOUNT]: 'proactiveChats-declined',
    [CHAT_PCS_PROFICIENCY_PER_ACCOUNT]: 'postChatSurvey-proficiency',
    [CHAT_PCS_POLITENESS_PER_ACCOUNT]: 'postChatSurvey-politeness',
    [CHAT_PCS_CASE_SOLVED_COUNT_PER_ACCOUNT]: 'postChatSurvey-caseSolved',
    [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_ACCOUNT]: 'postChatSurvey-caseNotSolved',
    [CHAT_PCS_CONTENTED_COUNT_PER_ACCOUNT]: 'postChatSurvey-contented',
    [CHAT_PCS_NOT_CONTENTED_COUNT_PER_ACCOUNT]: 'postChatSurvey-notContented',
  }, { customParser: parseAccountTimelineData, isShouldAddTotals: true })

  getLimitedAccountTimeline = this._createLimitedRequestWithMerge(
    ACCOUNT_REFERRERS_COUNTER_METRICS,
    ACCOUNT_VALUE_METRICS,
    { customParser: parseAccountTimelineData, isShouldAddTotals: true },
    this.getAccountTimeline,
  )

  getOperatorsSummary = this._standardRequest({
    [CHAT_CHATS_PER_OPERATOR]: 'chatsSent',
    [CHAT_ACCEPTED_CHATS_PER_OPERATOR]: 'chatsAccepted',
    [CHAT_ACCEPTANCE_RATE_PER_OPERATOR]: 'acceptanceRate',
    [CHAT_MISSED_CALLS_PER_OPERATOR]: 'chatsMissed',
    [CHAT_ACCEPT_CHAT_DELAY_PER_OPERATOR]: 'chatAcceptTime',
    [CHAT_INVITATION_SENT_COUNT_PER_OPERATOR]: 'proactiveChatsSent',
    [CHAT_INVITATION_ACCEPT_COUNT_PER_OPERATOR]: 'proactiveChatsAccepted',
    [CHAT_INVITATION_DECLINE_COUNT_PER_OPERATOR]: 'proactiveChatsDeclined',
    [CHAT_ONLINE_TIME_PER_OPERATOR]: 'onlineTime',
    [CHAT_AWAY_TIME_PER_OPERATOR]: 'awayTime',
    [CHAT_PCS_PROFICIENCY_PER_OPERATOR]: 'proficiency',
    [CHAT_PCS_POLITENESS_PER_OPERATOR]: 'politeness',
    [CHAT_PCS_CASE_SOLVED_COUNT_PER_OPERATOR]: 'casesSolved',
    [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_OPERATOR]: 'unsolvedCases',
    [CHAT_PCS_CONTENTED_COUNT_PER_OPERATOR]: 'contented',
    [CHAT_PCS_NOT_CONTENTED_COUNT_PER_OPERATOR]: 'notContented',
    [CHAT_OPERATOR_LOAD_RATE]: 'loadRate',
  }, {
    customParser: parseDPsOrOPsSummaryData,
    customMetrics: [
      {
        name: 'offlineTime',
        type: OFFLINE_TIME,
      }, {
        name: 'login',
        type: OP_LOGIN,
      }, {
        name: 'name',
        type: OP_NAME,
      },
    ],
  })

  getOperatorsTimeline = this._standardRequest({
    [CHAT_CHATS_PER_OPERATOR]: 'chatsSent',
    [CHAT_ACCEPTED_CHATS_PER_OPERATOR]: 'chatsAccepted',
    [CHAT_ACCEPTANCE_RATE_PER_OPERATOR]: 'acceptanceRate',
    [CHAT_MISSED_CALLS_PER_OPERATOR]: 'chatsMissed',
    [CHAT_ACCEPT_CHAT_DELAY_PER_OPERATOR]: 'chatAcceptTime',
    [CHAT_INVITATION_SENT_COUNT_PER_OPERATOR]: 'proactiveChatsSent',
    [CHAT_INVITATION_ACCEPT_COUNT_PER_OPERATOR]: 'proactiveChatsAccepted',
    [CHAT_INVITATION_DECLINE_COUNT_PER_OPERATOR]: 'proactiveChatsDeclined',
    [CHAT_ONLINE_TIME_PER_OPERATOR]: 'onlineTime',
    [CHAT_AWAY_TIME_PER_OPERATOR]: 'awayTime',
    [CHAT_PCS_PROFICIENCY_PER_OPERATOR]: 'proficiency',
    [CHAT_PCS_POLITENESS_PER_OPERATOR]: 'politeness',
    [CHAT_PCS_CASE_SOLVED_COUNT_PER_OPERATOR]: 'casesSolved',
    [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_OPERATOR]: 'unsolvedCases',
    [CHAT_PCS_CONTENTED_COUNT_PER_OPERATOR]: 'contented',
    [CHAT_PCS_NOT_CONTENTED_COUNT_PER_OPERATOR]: 'notContented',
    [CHAT_OPERATOR_LOAD_RATE]: 'loadRate',
  }, {
    customParser: parseDPsOrOPsTimelineData,
    customMetrics: [
      {
        name: 'offlineTime',
        type: OFFLINE_TIME_BY_PERIODS,
      }, {
        name: 'login',
        type: OP_LOGIN,
      }, {
        name: 'name',
        type: OP_NAME,
      },
    ],
    isShouldAddTotals: true,
  })

  getDepartmentsSummary = this._standardRequest({
    [CHAT_CHATS_PER_DEPARTMENT]: 'chatsSent',
    [CHAT_ACCEPTED_CHATS_PER_DEPARTMENT]: 'chatsAccepted',
    [CHAT_ACCEPTANCE_RATE_PER_DEPARTMENT]: 'acceptanceRate',
    [CHAT_MISSED_CALLS_PER_DEPARTMENT]: 'chatsMissed',
    [CHAT_ACCEPT_CHAT_DELAY_PER_DEPARTMENT]: 'chatAcceptTime',
    [CHAT_ONLINE_TIME_PER_DEPARTMENT]: 'onlineTime',
    [CHAT_PCS_PROFICIENCY_PER_DEPARTMENT]: 'proficiency',
    [CHAT_PCS_POLITENESS_PER_DEPARTMENT]: 'politeness',
    [CHAT_PCS_CASE_SOLVED_COUNT_PER_DEPARTMENT]: 'casesSolved',
    [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_DEPARTMENT]: 'unsolvedCases',
    [CHAT_PCS_CONTENTED_COUNT_PER_DEPARTMENT]: 'contented',
    [CHAT_PCS_NOT_CONTENTED_COUNT_PER_DEPARTMENT]: 'notContented',
    [CHAT_DEPARTMENT_LOAD_RATE]: 'loadRate',
  }, {
    customParser: parseDPsOrOPsSummaryData,
    customMetrics: [
      {
        name: 'offlineTime',
        type: OFFLINE_TIME,
      },
    ],
  })

  getDepartmentsTimeline = this._standardRequest({
    [CHAT_CHATS_PER_DEPARTMENT]: 'chatsSent',
    [CHAT_ACCEPTED_CHATS_PER_DEPARTMENT]: 'chatsAccepted',
    [CHAT_ACCEPTANCE_RATE_PER_DEPARTMENT]: 'acceptanceRate',
    [CHAT_MISSED_CALLS_PER_DEPARTMENT]: 'chatsMissed',
    [CHAT_ACCEPT_CHAT_DELAY_PER_DEPARTMENT]: 'chatAcceptTime',
    [CHAT_ONLINE_TIME_PER_DEPARTMENT]: 'onlineTime',
    [CHAT_PCS_PROFICIENCY_PER_DEPARTMENT]: 'proficiency',
    [CHAT_PCS_POLITENESS_PER_DEPARTMENT]: 'politeness',
    [CHAT_PCS_CASE_SOLVED_COUNT_PER_DEPARTMENT]: 'casesSolved',
    [CHAT_PCS_CASE_NOT_SOLVED_COUNT_PER_DEPARTMENT]: 'unsolvedCases',
    [CHAT_PCS_CONTENTED_COUNT_PER_DEPARTMENT]: 'contented',
    [CHAT_PCS_NOT_CONTENTED_COUNT_PER_DEPARTMENT]: 'notContented',
    [CHAT_DEPARTMENT_LOAD_RATE]: 'loadRate',
  }, {
    customParser: parseDPsOrOPsTimelineData,
    customMetrics: [
      {
        name: 'offlineTime',
        type: OFFLINE_TIME_BY_PERIODS,
      },
    ],
    isShouldAddTotals: true,
  })

  getChatReferrersSummary = this._standardRequest({
    [CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL]: 'preChatSurveyReferrers',
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL]: 'offlineFormReferrers',
  }, { customParser: parseSummaryData })

  getChatReferrersTimeline = this._standardRequest({
    [CHAT_START_CHAT_FORM_OPEN_COUNT_BY_URL]: 'preChatSurveyReferrers',
    [CHAT_LEAVE_MESSAGE_FORM_OPEN_COUNT_BY_URL]: 'offlineFormReferrers',
  }, { isShouldAddTotals: true, isShouldAddMetricTotals: true })

  getLimitedChatReferrersSummary = this._limitedRequest(
    CHAT_REFERRERS_COUNTER_METRICS,
    { customParser: parseSummaryData },
  )

  getLimitedChatReferrersTimeline = this._limitedRequest(
    CHAT_REFERRERS_COUNTER_METRICS,
    { isShouldAddTotals: true, isShouldAddMetricTotals: true },
  )

  /* isWebsitesStats */
  getWebsiteTrafficSummary = this._standardRequest({
    [WEBSITE_HITS_BY_URL]: 'visitsByURL',
    [WEBSITE_HITS_PER_VISITOR]: 'totalHits',
    [WEBSITE_VISITORS_BY_REFERRER_URL]: 'visitsByReferrer',
  }, { isWebsitesStats: true, customParser: parseWebsiteSummaryData })

  getLimitedWebsiteTrafficSummary = this._createLimitedRequestWithMerge(
    WEBSITE_COUNTER_METRICS,
    WEBSITE_VALUE_METRICS,
    { isWebsitesStats: true },
    this.getWebsiteTrafficSummary,
  )

  getWebsiteTrafficTimeline = this._standardRequest({
    [WEBSITE_HITS_BY_URL]: 'visitsByURL',
    [WEBSITE_HITS_PER_VISITOR]: 'totalHits',
    [WEBSITE_VISITORS_BY_REFERRER_URL]: 'visitsByReferrer',
  }, { isWebsitesStats: true, isShouldAddTotals: true })

  getLimitedWebsiteTrafficTimeline = this._createLimitedRequestWithMerge(
    WEBSITE_COUNTER_METRICS,
    WEBSITE_VALUE_METRICS,
    { isWebsitesStats: true, isShouldAddTotals: true },
    this.getWebsiteTrafficTimeline,
  )

  getVisitsByURL = this._standardRequest(WEBSITE_HITS_BY_URL, { isWebsitesStats: true })

  getLimitedVisitsByURL = this._limitedRequest(WEBSITE_HITS_BY_URL, { isWebsitesStats: true })

  getVisitsByReferrer = this._standardRequest(WEBSITE_VISITORS_BY_REFERRER_URL, { isWebsitesStats: true })

  getLimitedVisitorsByReferrer = this._limitedRequest(
    WEBSITE_VISITORS_BY_REFERRER_URL,
    { isWebsitesStats: true },
  )

  getTotalHits = this._standardRequest(WEBSITE_HITS_PER_VISITOR, { isWebsitesStats: true })

  /* custom ****** */
  getCustomMetrics = ({ metricsGroups, metrics, opts, callback }) => {
    if (metrics) metricsGroups = [{ metrics }]
    this._retrieveDataByMetrics({ metricsGroups, opts, callback })
  }
}
