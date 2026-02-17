import {
  CHAT_AWAY_TIME_PER_OPERATOR,
  CHAT_ONLINE_TIME_PER_OPERATOR,
  getLevelNameByMetricName,
} from '../constants/metrics'
import {
  handleSummaryValue,
  handleSummaryValueByPeriods,
  setNoStatsMessages,
  addTimeStringsToResponse,
} from '../helpers'
import {
  filterThroughLevel,
  calculateReverseTime,
  transformResponseToConvenientFormat,
  groupMetrics,
  getStatsPeriodById,
} from './utils'
import {
  ACCOUNT,
  NO_STATS_METRIC_MSG,
  NOT_ENOUGH_STATS_MSG,
} from '../constants/constants'
import {
  METRIC_NAME,
  TAG_TITLE,
  COUNTER_OR_VALUE,
  METRIC_TAG,
  AVERAGE,
  MULTIPLE,
  TOTAL,
  METRICS,
  COUNTERS,
  COUNTER_COUNT,
  START_DATE,
  START_TIME,
  END_DATE,
  END_TIME,
  STATS_PERIOD_ID,
  VALUES,
  VALUES_SUM,
} from '../constants/answerKeys'
import calculateCustomMetrics from './calculateCustomMetrics'

export function parseRawResponse(serverResponse, metricsGroups, cummonOpts) {
  const { statsPeriods } = serverResponse.statisticsPool
  const responseToConvenientFormat = transformResponseToConvenientFormat(serverResponse)
  const groupedMetrics = groupMetrics(responseToConvenientFormat, metricsGroups, cummonOpts)
  let response = [];
  groupedMetrics.forEach(({ metrics, opts }) => {
    const { level, postParser, customParser, metricKeys } = opts

    if (customParser) {
      const parsedMetrics = customParser({ metrics, statsPeriods, opts })
      response.push(parsedMetrics)
      return
    }

    let parsedMetrics = parseWithOneOfBasicParsers({ metrics, statsPeriods, opts })

    if (postParser) {
      postParser(parsedMetrics, opts)
    }

    if (level) {
      for (let metricName in parsedMetrics) {
        const levelName = getLevelNameByMetricName(metricName)
        parsedMetrics[levelName] = parsedMetrics[metricName]
        delete parsedMetrics[metricName]
      }
    }
    parsedMetrics = filterThroughLevel(parsedMetrics, opts)

    setNoStatsMessages(parsedMetrics, metricKeys)

    response.push(parsedMetrics)
  })

  if (groupedMetrics.length === 1) response = response[0]
  return response
}

function parseWithOneOfBasicParsers({
  metrics,
  statsPeriods,
  opts,
}) {
  const { isShouldAddTotals, isShouldAddMetricTotals } = opts
  let parsedMetrics = {}
  for (const metricName in metrics) {
    const metric = metrics[metricName]
    const { metricNameInResponse } = metric

    if (metric[COUNTER_OR_VALUE] === 'counter') {
      if (metric[MULTIPLE]) {
        parsedMetrics[metricNameInResponse]
          = parseMultipleCountersMetric(metric, statsPeriods, isShouldAddTotals, isShouldAddMetricTotals);
      } else {
        parsedMetrics[metricNameInResponse] = parseCounterMetric(metric[METRICS][0], statsPeriods, isShouldAddTotals);
      }
    } else {
      if (metric[MULTIPLE]) {
        parsedMetrics[metricNameInResponse] =
          parseMultipleStructuresMetric(metric, statsPeriods, opts, isShouldAddTotals, isShouldAddMetricTotals);
      } else {
        parsedMetrics[metricNameInResponse] =
          parseStructureMetric(metric[METRICS][0], statsPeriods, opts, isShouldAddTotals);
      }
    }
  }
  return parsedMetrics
}

export function parseMultipleCountersMetric(metric, statsPeriods, isShouldAddTotals, isShouldAddMetricTotals) {
  let parsedMetric = {};
  let metricItems = metric[METRICS];
  metricItems.forEach(metricItem => {
    const metricItemName = metricItem[METRIC_TAG];
    parsedMetric[metricItemName] = parseCounterMetric(metricItem, statsPeriods, isShouldAddTotals)
    if (isShouldAddMetricTotals) {
      parsedMetric['~total'] = (parsedMetric['~total'] || 0) + parsedMetric[metricItemName].total
    }
  })
  return parsedMetric;
}

export function parseCounterMetric(metric, statsPeriods, isShouldAddTotals) {
  if (!metric) return undefined

  let parsedMetric = [];
  const counters = metric[COUNTERS];
  counters.forEach(counter => {
    const timePeriod = getStatsPeriodById(statsPeriods, counter[STATS_PERIOD_ID])
    parsedMetric.push({
      [`${timePeriod[START_DATE]} - ${timePeriod[END_DATE]}`]: counter[COUNTER_COUNT],
    });
  })

  if (isShouldAddTotals) {
    return {
      total: metric[TOTAL],
      timeline: parsedMetric,
    }
  }
  return parsedMetric;
}

export function parseMultipleStructuresMetric(metric, statsPeriods, opts, isShouldAddTotals, isShouldAddMetricTotals) {
  let parsedMetric = {};
  metric[METRICS].forEach(metricItem => {
    let metricItemName = metricItem[METRIC_TAG];
    parsedMetric[metricItemName] = parseStructureMetric(metricItem, statsPeriods, opts, isShouldAddTotals);
    if (isShouldAddMetricTotals) {
      if (!parsedMetric['~total']) {
        parsedMetric['~total'] = {
          average: metricItem.totals[AVERAGE],
          total: metricItem.totals[VALUES_SUM],
        }
      }
      if (parsedMetric[metricItemName].total) {
        parsedMetric['~total'].average += parsedMetric[metricItemName].total.average;
        parsedMetric['~total'].total += parsedMetric[metricItemName].total.total;
      }
    }
  })
  return parsedMetric;
}

function parseStructureMetric(metricItem, statsPeriods, opts, isShouldAddTotals) {
  if (!metricItem) return undefined
  let parsedMetric;
  if (isShouldAddTotals) {
    parsedMetric = {
      total: metricItem[TOTAL] !== undefined
        ? metricItem[TOTAL]
        : {
          average: metricItem.totals[AVERAGE],
          total: metricItem.totals[VALUES_SUM],
        },
      timeline: [],
    };
  } else {
    parsedMetric = [];
  }

  metricItem[VALUES].forEach(value => {
    let timePeriod = getStatsPeriodById(statsPeriods, value[STATS_PERIOD_ID])
    let statsItem = {};
    let statsItemDuration = `${timePeriod[START_DATE]} - ${timePeriod[END_DATE]}`;
    if (opts.reverse) {
      let reverseTime = calculateReverseTime(value[VALUES_SUM], timePeriod[START_TIME], timePeriod[END_TIME]);
      statsItem[statsItemDuration] = {
        average: reverseTime / (value[VALUES_SUM] / value[AVERAGE]),
        total: reverseTime,
      }
    } else {
      statsItem[statsItemDuration] = value[COUNTER_COUNT]
        || {
          average: value[AVERAGE],
          total: value[VALUES_SUM],
        };
    }
    if (isShouldAddTotals) {
      parsedMetric['timeline'].push(statsItem);
    } else {
      parsedMetric.push(statsItem);
    }
  })
  return parsedMetric;
}

export function parseSummaryDataWithLevel({ metrics, opts }) {
  let parsedData = {};
  parsedData = _parseSummaryDataWithLevel(metrics)
  if (opts.customMetrics) calculateCustomMetrics(parsedData, opts);

  parsedData = setNoStatsMessages(parsedData, opts.metricKeys, true);
  return filterThroughLevel(parsedData, opts)
}
function _parseSummaryDataWithLevel(metricsData) {
  if (!metricsData) return {}

  let parsedData = {}
  for (const key in metricsData) {
    const metric = metricsData[key];
    const { metricNameInResponse } = metric;
    const metricName = metric[METRIC_NAME];
    const levelName = getLevelNameByMetricName(metricName);
    if (!parsedData[levelName]) parsedData[levelName] = {};
    metric[METRICS].forEach(metricItem => {
      let metricItemName = metricItem[METRIC_TAG] || ACCOUNT;
      if (!parsedData[levelName][metricItemName]) parsedData[levelName][metricItemName] = {};
      parsedData[levelName][metricItemName][metricNameInResponse] = metricItem[TOTAL] !== undefined
        ? metricItem[TOTAL]
        : {
          average: metricItem.totals[AVERAGE],
          [TOTAL]: metricItem.totals[VALUES_SUM],
        }
    })
  }
  return parsedData
}

export function parseSummaryData({ metrics, opts }) {
  let parsedData = {};
  parsedData = _parseSummaryData(metrics)
  if (opts.customMetrics) {
    parsedData = calculateCustomMetrics(parsedData, opts);
  }

  parsedData = setNoStatsMessages(parsedData, opts.metricKeys);

  return parsedData;
}
function _parseSummaryData(metricsData) {
  if (!metricsData) return {}

  let parsedData = {}
  for (const key in metricsData) {
    const metric = metricsData[key];
    const { metricNameInResponse } = metric;
    metric[METRICS].forEach(metricItem => {
      if (metric[TAG_TITLE] === 'Page URL') { /* исключение */
        if (!parsedData[metricNameInResponse]) parsedData[metricNameInResponse] = {}
        parsedData[metricNameInResponse][metricItem[METRIC_TAG]] = metricItem[TOTAL]
      } else {
        if (!parsedData[metricNameInResponse]) parsedData[metricNameInResponse] = {}
        parsedData[metricNameInResponse] = metricItem[TOTAL] !== undefined
          ? metricItem[TOTAL]
          : {
            average: metricItem.totals[AVERAGE],
            [TOTAL]: metricItem.totals[VALUES_SUM],
          }
      }
    })
  }
  return parsedData
}

export function parseTimelineData({ metrics, statsPeriods, opts }) {
  let parsedMetrics = parseWithOneOfBasicParsers({ metrics, statsPeriods, opts });
  setNoStatsMessages(parsedMetrics, opts.metricKeys);
  return parsedMetrics;
}

export function parseWebsiteSummaryData({ metrics, statsPeriods, opts }) {
  let parsedData = parseSummaryData({ metrics, statsPeriods, opts });
  parsedData['visitsByReferrer'] = {};
  const visitsByReferrerMetric = metrics['website/visitors-by-referrer-url'];
  const metricItems = visitsByReferrerMetric[METRICS];
  for (let metricItemInd = 0; metricItemInd < metricItems.length; metricItemInd++) {
    let metricItemName = metricItems[metricItemInd][METRIC_TAG];
    parsedData['visitsByReferrer'][metricItemName] = metricItems[metricItemInd][TOTAL];
  }
  return parsedData;
}

export function parseAccountSummaryData({ metrics, statsPeriods, opts }) {
  let parsedData = parseSummaryData({ metrics, statsPeriods, opts });
  let UTCstartDate = `${opts.timePeriod.startDate.replace(/-/g, ' ')} GMT-4`;
  let UTCendDate = `${opts.timePeriod.endDate.replace(/-/g, ' ')} GMT-4`;
  let totalTimeInSeconds = (Date.parse(UTCendDate) - Date.parse(UTCstartDate)) / 1000;
  let totalTimeInDays = totalTimeInSeconds / 60 / 60 / 24;
  let totalTimeInHours = totalTimeInSeconds / 60 / 60;
  if (parsedData['onlinePresence-chatOnlineTime'] === NO_STATS_METRIC_MSG) {
    parsedData['onlinePresence-chatOfflineTime'] = NOT_ENOUGH_STATS_MSG;
  } else {
    let totalOfflineTime = Math.ceil(
      totalTimeInSeconds - parsedData['onlinePresence-chatOnlineTime'][TOTAL],
    );
    parsedData['onlinePresence-chatOfflineTime'] = { total: totalOfflineTime > 0 ? totalOfflineTime : 0 };
    handleSummaryValue(parsedData, 'onlinePresence-chatOfflineTime', TOTAL, true);
  }
  handleSummaryValue(parsedData, 'onlinePresence-chatOnlineTime', TOTAL, true);
  handleSummaryValue(parsedData, 'averages-chatAcceptTime', 'average', true);
  handleSummaryValue(parsedData, 'averages-preChatSurveyFilloutTime', 'average', true);
  handleSummaryValue(parsedData, 'averages-offlineFormFilloutTime', 'average', true);
  handleSummaryValue(parsedData, 'averages-operatorMessagesPerChat', 'average');
  handleSummaryValue(parsedData, 'averages-visitorMessagesPerChat', 'average');
  handleSummaryValue(parsedData, 'averages-operatorResponseTime', 'average', true);
  handleSummaryValue(parsedData, 'averages-visitorResponseTime', 'average', true);
  if (parsedData['chats-sent'] === NO_STATS_METRIC_MSG) {
    parsedData['averages-incomingChatsPerDay'] = NOT_ENOUGH_STATS_MSG;
  } else {
    parsedData['averages-incomingChatsPerDay'] = parsedData['chats-sent'] / totalTimeInDays;
  }
  if (parsedData['chats-sent'] === NO_STATS_METRIC_MSG) {
    parsedData['averages-incomingChatsPerHour'] = NOT_ENOUGH_STATS_MSG;
  } else {
    parsedData['averages-incomingChatsPerHour'] = parsedData['chats-sent'] / totalTimeInHours;
  }
  if (parsedData['chats-accepted'] === NO_STATS_METRIC_MSG) {
    parsedData['averages-acceptedChatsPerDay'] = NOT_ENOUGH_STATS_MSG;
  } else {
    parsedData['averages-acceptedChatsPerDay'] = parsedData['chats-accepted'] / totalTimeInDays;
  }
  if (parsedData['chats-accepted'] === NO_STATS_METRIC_MSG) {
    parsedData['averages-acceptedChatsPerHour'] = NOT_ENOUGH_STATS_MSG;
  } else {
    parsedData['averages-acceptedChatsPerHour'] = parsedData['chats-accepted'] / totalTimeInHours;
  }
  for (let prop in parsedData) {
    let sections = prop.split('-');
    if (!parsedData[sections[0]]) parsedData[sections[0]] = {};
    parsedData[sections[0]][sections[1]] = parsedData[prop];
    delete parsedData[prop];
  }
  return parsedData;
}

export function parseAccountTimelineData({ metrics, statsPeriods, opts }) {
  let currentPeriodStr;
  let currentPeriodObj;
  let currentPeriods;
  let UTCstartDate;
  let UTCendDate;
  let totalTimeInSeconds;
  let offlineTime;
  let result;
  let totalOfflineTime = 0;
  let parsedMetrics = parseWithOneOfBasicParsers({ metrics, statsPeriods, opts });
  setNoStatsMessages(parsedMetrics, opts.metricKeys);
  if (opts.customMetrics) {
    calculateCustomMetrics(parsedMetrics, opts);
  }

  if (parsedMetrics['onlinePresence-chatOnlineTime'] === NO_STATS_METRIC_MSG) {
    parsedMetrics['onlinePresence-chatOfflineTime'] = NOT_ENOUGH_STATS_MSG;
  } else {
    parsedMetrics['onlinePresence-chatOfflineTime'] = { total: 0, timeline: [] };
    for (let ii = 0; ii < parsedMetrics['onlinePresence-chatOnlineTime']['timeline'].length; ii++) {
      result = {};
      currentPeriodObj = parsedMetrics['onlinePresence-chatOnlineTime']['timeline'][ii];
      currentPeriodStr = Object.keys(currentPeriodObj)[0];
      currentPeriods = currentPeriodStr.split(' - ');
      UTCstartDate = `${currentPeriods[0].replace(/-/g, ' ')} GMT-4`;
      UTCendDate = `${currentPeriods[1].replace(/-/g, ' ')} GMT-4`;
      totalTimeInSeconds = (Date.parse(UTCendDate) - Date.parse(UTCstartDate)) / 1000;
      offlineTime = Math.ceil(totalTimeInSeconds - currentPeriodObj[currentPeriodStr][TOTAL]);
      totalOfflineTime += offlineTime > 0 ? offlineTime : 0;
      result[currentPeriodStr] = { total: offlineTime > 0 ? offlineTime : 0 };
      parsedMetrics['onlinePresence-chatOfflineTime']['timeline'].push(result);
    }
    parsedMetrics['onlinePresence-chatOfflineTime'][TOTAL] = totalOfflineTime;
    handleSummaryValueByPeriods(parsedMetrics['onlinePresence-chatOfflineTime'], TOTAL, true, true);
  }
  handleSummaryValueByPeriods(parsedMetrics['onlinePresence-chatOnlineTime'], TOTAL, true);
  handleSummaryValueByPeriods(parsedMetrics['averages-chatAcceptTime'], 'average', true);
  handleSummaryValueByPeriods(parsedMetrics['averages-preChatSurveyFilloutTime'], 'average', true);
  handleSummaryValueByPeriods(parsedMetrics['averages-offlineFormFilloutTime'], 'average', true);
  handleSummaryValueByPeriods(parsedMetrics['averages-operatorMessagesPerChat'], 'average');
  handleSummaryValueByPeriods(parsedMetrics['averages-visitorMessagesPerChat'], 'average');
  handleSummaryValueByPeriods(parsedMetrics['averages-operatorResponseTime'], 'average', true);
  handleSummaryValueByPeriods(parsedMetrics['averages-visitorResponseTime'], 'average', true);

  for (let prop in parsedMetrics) {
    let sections = prop.split('-');
    if (!parsedMetrics[sections[0]]) parsedMetrics[sections[0]] = {};
    parsedMetrics[sections[0]][sections[1]] = parsedMetrics[prop];
    delete parsedMetrics[prop];
  }
  return parsedMetrics;
}

export function parseDPsOrOPsSummaryData({ metrics, opts }) {
  let [parsedData, totalChatsAccepted] = _parseDPsOrOPsSummaryData(metrics);

  parsedData = { level: parsedData }
  setNoStatsMessages(parsedData, opts.metricKeys, true);
  /*
   * calculate rate on the frontend
   * TODO: delete when rate calculation moves to backend
   */
  calculateCustomMetrics(parsedData, {
    timePeriod: opts.timePeriod,
    totalChatsAccepted,
    customMetrics: opts.customMetrics,
  });
  parsedData = parsedData.level

  for (let opName in parsedData) {
    handleSummaryValue(parsedData[opName], 'onlineTime', TOTAL, true);
    handleSummaryValue(parsedData[opName], 'offlineTime', TOTAL, true);
    handleSummaryValue(parsedData[opName], 'awayTime', TOTAL, true);
    handleSummaryValue(parsedData[opName], 'chatAcceptTime', 'average', true);
  }
  return parsedData;
}
function _parseDPsOrOPsSummaryData(metricsData) {
  if (!metricsData) return {}

  let totalChatsAccepted = 0;
  let parsedData = {}
  for (const key in metricsData) {
    const metric = metricsData[key];
    const { metricNameInResponse, [METRICS]: metricItems } = metric;

    for (let metricItemInd = 0; metricItemInd < metricItems.length; metricItemInd++) {
      let metricItem = metricItems[metricItemInd];
      let metricItemName = metricItem[METRIC_TAG];
      if (!parsedData[metricItemName]) parsedData[metricItemName] = {};
      if (metricNameInResponse === 'chatsAccepted') totalChatsAccepted += metricItem[TOTAL];

      parsedData[metricItemName][metricNameInResponse] = metricItem[TOTAL] !== undefined
        ? metricItem[TOTAL]
        : {
          average: metricItem.totals[AVERAGE],
          [TOTAL]: metricItem.totals[VALUES_SUM],
        }
    }
  }

  return [parsedData, totalChatsAccepted]
}

export function parseDPsOrOPsTimelineData({ metrics, statsPeriods, opts }) {
  let totalChatsAccepted = Object.keys(metrics).reduce((res, key) => {
    const metric = metrics[key];
    let metricNameInResponse = opts.metricKeys[metric[METRIC_NAME]];
    if (metricNameInResponse !== 'chatsAccepted') return res;

    metric[METRICS].forEach(metricItem => {
      metricItem[COUNTERS].forEach(counter => {
        let timePeriod = getStatsPeriodById(statsPeriods, counter[STATS_PERIOD_ID])
        let statsItemDuration = `${timePeriod[START_DATE]} - ${timePeriod[END_DATE]}`;
        if (!res[statsItemDuration]) res[statsItemDuration] = 0;
        res[statsItemDuration] += counter[COUNTER_COUNT];
      })
    })
    return res
  }, {});

  let parsedData = _parseDPsOrOPsTimelineData(opts, metrics, statsPeriods);

  parsedData = { level: parsedData }
  setNoStatsMessages(parsedData, opts.metricKeys, true);
  calculateCustomMetrics({ level: parsedData.level }, {
    timePeriod: opts.timePeriod,
    totalChatsAccepted,
    customMetrics: opts.customMetrics,
  });
  parsedData = parsedData.level

  for (let opName in parsedData) {
    handleSummaryValueByPeriods(parsedData[opName]['onlineTime'], TOTAL, true);
    handleSummaryValueByPeriods(parsedData[opName]['offlineTime'], TOTAL, true, true);
    handleSummaryValueByPeriods(parsedData[opName]['awayTime'], TOTAL, true);
    handleSummaryValueByPeriods(parsedData[opName]['chatAcceptTime'], 'average', true);
  }
  return parsedData;
}
function _parseDPsOrOPsTimelineData(opts, metrics, statsPeriods) {
  if (!metrics) return {}
  let parsedMetrics = parseWithOneOfBasicParsers({ metrics, statsPeriods, opts })
  let parsedData = {}
  for (let key in parsedMetrics) {
    for (let opName in parsedMetrics[key]) {
      if (!parsedData[opName]) parsedData[opName] = {};
      parsedData[opName][key] = parsedMetrics[key][opName];
    }
  }
  return parsedData
}

export function parseOfflineTime({ metrics, statsPeriods, opts }) {
  let parsedMetric;
  let value;
  let timePeriod;
  let statsItem;
  let statsItemDuration;
  let values;
  let metricItems;
  let reverseTime;
  let periodAwayTime;
  let average;
  let parsedMetrics = {};
  let isAccountLevel = opts.level === ACCOUNT;
  for (const key in metrics) {
    const metric = metrics[key]
    let metricName = metric[METRIC_NAME];
    if (isAccountLevel) {
      parsedMetrics[metricName] = parseStructureMetric(metric[METRICS][0], statsPeriods, opts);
    } else {
      parsedMetric = {};
      metricItems = metric[METRICS];
      for (let metricItemInd = 0; metricItemInd < metricItems.length; metricItemInd++) {
        let metricItemName = metricItems[metricItemInd][METRIC_TAG];
        parsedMetric[metricItemName] = [];
        values = metricItems[metricItemInd]['values'];
        for (let ii = 0; ii < values.length; ii++) {
          value = values[ii];
          timePeriod = getStatsPeriodById(statsPeriods, value[STATS_PERIOD_ID])
          statsItem = {};
          statsItemDuration = `${timePeriod[START_DATE]} - ${timePeriod[END_DATE]}`;
          reverseTime = calculateReverseTime(value[VALUES_SUM], timePeriod[START_TIME], timePeriod[END_TIME]);
          if (metricName === CHAT_ONLINE_TIME_PER_OPERATOR) {
            statsItem[statsItemDuration] = {
              average: reverseTime / (value[VALUES_SUM] / value[AVERAGE]),
              total: reverseTime,
              [VALUES_SUM]: value[VALUES_SUM],
              [AVERAGE]: value[AVERAGE],
            }
          } else if (metricName === CHAT_AWAY_TIME_PER_OPERATOR) {
            statsItem[statsItemDuration] = {
              average: value[AVERAGE],
              total: value[VALUES_SUM],
            };
          } else {
            statsItem[statsItemDuration] = {
              average: reverseTime / (value[VALUES_SUM] / value[AVERAGE]),
              total: reverseTime,
            }
          }
          parsedMetric[metricItemName].push(statsItem);
        }
      }
      parsedMetrics[metricName] = parsedMetric;
    }
  }
  if (parsedMetrics[CHAT_ONLINE_TIME_PER_OPERATOR]) {
    parsedMetrics[CHAT_AWAY_TIME_PER_OPERATOR] = parsedMetrics[CHAT_AWAY_TIME_PER_OPERATOR] || {};
    for (let opName in parsedMetrics[CHAT_ONLINE_TIME_PER_OPERATOR]) {
      let opOnlineTime = parsedMetrics[CHAT_ONLINE_TIME_PER_OPERATOR][opName];
      let opAwayTime = parsedMetrics[CHAT_AWAY_TIME_PER_OPERATOR][opName] || [];
      for (let tpi = 0; tpi < opOnlineTime.length; tpi++) {
        statsItemDuration = Object.keys(opOnlineTime[tpi])[0];
        periodAwayTime = opAwayTime.find(elem => Object.keys(elem)[0] === statsItemDuration) || {};
        periodAwayTime[statsItemDuration] = periodAwayTime[statsItemDuration] || { total: 0 };
        reverseTime = opOnlineTime[tpi][statsItemDuration][TOTAL] - periodAwayTime[statsItemDuration][TOTAL];
        reverseTime = reverseTime > 0 ? reverseTime : 0;
        average = reverseTime /
          (opOnlineTime[tpi][statsItemDuration][VALUES_SUM] / opOnlineTime[tpi][statsItemDuration][AVERAGE]);
        opOnlineTime[tpi][statsItemDuration] = {
          average,
          total: reverseTime,
        }
      }
    }
    delete parsedMetrics[CHAT_AWAY_TIME_PER_OPERATOR];
  }
  addTimeStringsToResponse(parsedMetrics, opts);

  for (let metricName in parsedMetrics) {
    const levelName = getLevelNameByMetricName(metricName)
    parsedMetrics[levelName] = parsedMetrics[metricName];
    delete parsedMetrics[metricName];
  }
  return filterThroughLevel(parsedMetrics, opts);
}

export function parseSummaryAllItems({ metrics, statsPeriods, opts }) {
  const metricsAfterBaseParse =
    parseWithOneOfBasicParsers({ metrics, statsPeriods, opts: { ...opts, isShouldAddTotals: true } })
  let parsedData = {};
  for (const metricName in metricsAfterBaseParse) {
    const metric = metricsAfterBaseParse[metricName];
    let total = 0;
    if (metric.total) {
      total = metric.total
    } else {
      for (const metricItemKey in metric) {
        total += metric[metricItemKey][TOTAL]
      }
    }
    parsedData[metricName] = total
  }
  return parsedData
}
