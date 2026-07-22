import {
  transformMetricsGroupsToStr,
  processTimePeriodArg,
  formatDate,
} from '../helpers';

import {
  DEFAULT_TAKE_COUNT,
  DEFAULT_SKIP_COUNT,
  DEFAULT_SORT_DIRECTION,
} from '../constants/requestDefaults';

export default class StatsJsonpClient {
  constructor({ getAccountName, getMd5Password, getTimePeriod, rawResponses }) {
    this.getAccountName = getAccountName;
    this.getMd5Password = getMd5Password;
    this.getTimePeriod = getTimePeriod;
    this.rawResponses = rawResponses;
  }

  buildURL = (metricsGroups, hash, isWebsitesStats, optTimePeriod, limitedOpts) => {
    let processedTimePeriod;
    let startDate;
    let endDate;
    let period;
    let websiteHash = isWebsitesStats ? 'websites-' : '';
    const hasLimitedParams = limitedOpts != null;
    let endpoint = hasLimitedParams ? 'get-limited-statistics' : 'get-statistics';

    let baseURL =
      `https://stats-${websiteHash}api.providesupport.com/api/v1/${endpoint}/providesupport/${
        this.getAccountName()
      }?human-readable-json=false&access_token=${
        this.getMd5Password()}`;
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
      period = this.getTimePeriod();
      if (period === 'Time period is undefined!') {
        throw new Error(
          'You need to set time period via \'setTimePeriod\' method or by passing time period object on method call!',
        );
      }
      startDate = formatDate(period.startDate);
      endDate = formatDate(period.endDate);
      processedTimePeriod = `${period.duration}&start-date=${startDate.replace(/ /g, '%20')}&end-date=${
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
        durationParam = period.duration;
        startDateParam = startDate.replace(/ /g, '%20');
        endDateParam = endDate.replace(/ /g, '%20');
      }
      const {
        takeCount = DEFAULT_TAKE_COUNT,
        skipCount = DEFAULT_SKIP_COUNT,
        sortDirection = DEFAULT_SORT_DIRECTION,
      } = limitedOpts;
      queryParams = `${'&timezone=' + 'ACCOUNT' + '&metric-names='}${metricsInStr}` +
        `&duration-name=${durationParam}&start-date=${startDateParam}&end-date=${endDateParam}` +
        `&take-count=${takeCount}&skip-count=${skipCount}&sort-direction=${sortDirection}` +
        `&callback=_psHandleStatsResponse_${hash}`;
    } else {
      queryParams = `${'&timezone=' + 'ACCOUNT' + '&metric-names='}${metricsInStr}&duration-names=${
        processedTimePeriod}&callback=_psHandleStatsResponse_${hash}`;
    }
    return baseURL + queryParams;
  }

  createJSONPhandler = hash => {
    let uniqueHandler = `_psHandleStatsResponse_${hash}`;
    window[uniqueHandler] = (response => {
      this.rawResponses[hash] = response;
    });
  }

  makeJSONPrequest = (url, hash, onloadHandler) => {
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
}
