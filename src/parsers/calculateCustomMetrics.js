import {
  NO_STATS_METRIC_MSG,
  NOT_ENOUGH_STATS_MSG,
} from '../constants/constants.js';
import {
  OP_LOGIN,
  OP_NAME,
  OFFLINE_TIME,
  OFFLINE_TIME_BY_PERIODS,
  LOAD_RATE,
  LOAD_RATE_BY_PERIODS,
  TIMELINE,
  TIMELINE_BY_PERIODS,
} from '../constants/customMetricsTypes.js';
import {
  TOTAL,
} from '../constants/answerKeys'

/* TODO: переделать через return */
function calculateByType(custMetr, data, opts, level, levelItem) {
  let breakLineIndex;
  let notEnoughStats;
  let totalPeriod;
  let usefulPartPeriod;
  let loadRate;
  let stringPeriod;
  let totalOfflineTime;
  let period;
  let currentPeriods;
  let awayTime;
  let awayTimeline;
  let key;
  let UTCstartDate = `${opts.timePeriod.startDate.replace(/-/g, ' ')} GMT-4`;
  let UTCendDate = `${opts.timePeriod.endDate.replace(/-/g, ' ')} GMT-4`;
  let totalTimeInSeconds = (Date.parse(UTCendDate) - Date.parse(UTCstartDate)) / 1000;
  if (levelItem) breakLineIndex = levelItem.indexOf('\n');
  let totalArr;
  let usefulPartArr;
  let pseudoLevel;
  let modifiedData;
  let averLoadRate;

  switch (custMetr.type) {
    case OP_LOGIN:
      data[level][levelItem][custMetr.name] = levelItem.slice(breakLineIndex + 1);
      break;
    case OP_NAME:
      data[level][levelItem][custMetr.name] = levelItem.slice(0, breakLineIndex);
      break;
    case OFFLINE_TIME:
      if (data[level][levelItem]['onlineTime'] === NO_STATS_METRIC_MSG) {
        data[level][levelItem][custMetr.name] = NOT_ENOUGH_STATS_MSG;
      } else {
        awayTime = data[level][levelItem]['awayTime'];
        if (awayTime && awayTime !== NO_STATS_METRIC_MSG) awayTime = awayTime[TOTAL];
        else awayTime = 0;
        totalOfflineTime = Math.ceil(
          totalTimeInSeconds - data[level][levelItem]['onlineTime'][TOTAL] - awayTime,
        );
        data[level][levelItem][custMetr.name] = { total: totalOfflineTime > 0 ? totalOfflineTime : 0 };
      }
      break;
    case OFFLINE_TIME_BY_PERIODS:
      if (data[level][levelItem]['onlineTime'] === NO_STATS_METRIC_MSG) {
        data[level][levelItem][custMetr.name] = NOT_ENOUGH_STATS_MSG;
      } else {
        awayTime = data[level][levelItem]['awayTime'];
        awayTimeline = {};
        if (awayTime && awayTime !== NO_STATS_METRIC_MSG) {
          for (let ati = 0; ati < awayTime['timeline']['length']; ati++) {
            key = Object.keys(awayTime['timeline'][ati])[0];
            awayTimeline[key] = awayTime['timeline'][ati][key][TOTAL];
          }
        }
        data[level][levelItem][custMetr.name] = { total: 0, timeline: [] };
        for (period of data[level][levelItem]['onlineTime']['timeline']) {
          let result = {};
          stringPeriod = Object.keys(period)[0];
          awayTime = awayTimeline[stringPeriod] === undefined ? 0 : awayTimeline[stringPeriod];
          currentPeriods = stringPeriod.split(' - ');
          UTCstartDate = `${currentPeriods[0].replace(/-/g, ' ')} GMT-4`;
          UTCendDate = `${currentPeriods[1].replace(/-/g, ' ')} GMT-4`;
          totalTimeInSeconds = (Date.parse(UTCendDate) - Date.parse(UTCstartDate)) / 1000;
          totalOfflineTime = totalTimeInSeconds - period[stringPeriod][TOTAL] - awayTime;
          result[stringPeriod] = { total: totalOfflineTime > 0 ? Math.round(totalOfflineTime) : 0 };
          data[level][levelItem][custMetr.name][TOTAL] += result[stringPeriod][TOTAL];
          data[level][levelItem][custMetr.name]['timeline'].push(result);
        }
      }
      break;
    case LOAD_RATE:
      notEnoughStats = data[level][levelItem]['chatsAccepted'] === NO_STATS_METRIC_MSG;
      if (notEnoughStats) {
        data[level][levelItem][custMetr.name] = NOT_ENOUGH_STATS_MSG;
      } else {
        loadRate = (data[level][levelItem]['chatsAccepted'] / opts.totalChatsAccepted) * 100;
        data[level][levelItem][custMetr.name] = `${Math.round(loadRate)}%`;
      }
      break;
    case LOAD_RATE_BY_PERIODS:
      notEnoughStats = data[level][levelItem]['chatsAccepted'] === NO_STATS_METRIC_MSG;
      if (notEnoughStats) {
        data[level][levelItem][custMetr.name] = NOT_ENOUGH_STATS_MSG;
      } else {
        data[level][levelItem][custMetr.name] = { total: 0, timeline: [] };
        for (period of data[level][levelItem]['chatsAccepted']['timeline']) {
          let result = {};
          stringPeriod = Object.keys(period)[0];
          loadRate = (period[stringPeriod] / opts.totalChatsAccepted[stringPeriod]) * 100;
          result[stringPeriod] = `${Math.round(loadRate)}%`;
          data[level][levelItem][custMetr.name][TOTAL] += Math.round(loadRate);
          data[level][levelItem][custMetr.name]['timeline'].push(result);
        }
        averLoadRate = data[level][levelItem][custMetr.name][TOTAL] /
          data[level][levelItem][custMetr.name]['timeline']['length'];
        data[level][levelItem][custMetr.name][TOTAL] = `${Math.round(averLoadRate)}%`;
      }
      break;
    case TIMELINE:
      totalArr = data[custMetr.propsToCalculate[0]];
      usefulPartArr = data[custMetr.propsToCalculate[1]];
      if (totalArr === NO_STATS_METRIC_MSG || usefulPartArr === NO_STATS_METRIC_MSG) {
        data[custMetr.name] = NOT_ENOUGH_STATS_MSG;
        break;
      }
      data[custMetr.name] = {
        total: `${Math.round(usefulPartArr.total / (totalArr.total / 100))}%`,
        timeline: [],
      };
      for (let ii = 0; ii < totalArr['timeline'].length; ii++) {
        let result = {};
        const total = totalArr['timeline'][ii];
        totalPeriod = Object.keys(total)[0];
        const usefulPart = usefulPartArr['timeline'].find(usefulPart2 => Object.keys(usefulPart2)[0] === totalPeriod);
        usefulPartPeriod = usefulPart && Object.keys(usefulPart)[0];
        result[totalPeriod] = usefulPartPeriod
          ? `${Math.round(usefulPart[usefulPartPeriod] / (total[totalPeriod] / 100))}%`
          : '0%';
        data[custMetr.name]['timeline'].push(result);
      }
      break;
    case TIMELINE_BY_PERIODS:
      pseudoLevel = Object.keys(data)[0];
      modifiedData = Object.keys(data).length === 1 ? data[pseudoLevel] : data;
      /* TODO: keys are already iterated - what for this loop??? */
      for (key in modifiedData) {
        totalArr = modifiedData[key][custMetr.propsToCalculate[0]];
        usefulPartArr = modifiedData[key][custMetr.propsToCalculate[1]];
        if (totalArr === NO_STATS_METRIC_MSG || usefulPartArr === NO_STATS_METRIC_MSG) {
          modifiedData[key][custMetr.name] = NOT_ENOUGH_STATS_MSG;
          continue;
        }
        modifiedData[key][custMetr.name] = {
          total: `${Math.round(usefulPartArr.total / (totalArr.total / 100))}%`,
          timeline: [],
        };
        for (let ii = 0; ii < totalArr['timeline'].length; ii++) {
          let result = {};
          const total = totalArr['timeline'][ii];
          totalPeriod = Object.keys(total)[0];
          const usefulPart = usefulPartArr['timeline'].find(usefulPart2 => Object.keys(usefulPart2)[0] === totalPeriod);
          usefulPartPeriod = usefulPart && Object.keys(usefulPart)[0];
          result[totalPeriod] = usefulPartPeriod
            ? `${Math.round(usefulPart[usefulPartPeriod] / (total[totalPeriod] / 100))}%`
            : '0%';
          modifiedData[key][custMetr.name]['timeline'].push(result);
        }
      }
      break;
    default:
      throw new Error(`Failed to define handler for custom metric type! Type: ${custMetr.type}`);
  }
}

export default function calculateCustomMetrics(data, opts) {
  opts.customMetrics.forEach(customMetric => {
    for (let level in data) {
      for (let levelItem in data[level]) {
        if (customMetric.type) {
          calculateByType(customMetric, data, opts, level, levelItem);
          continue;
        }
        const total = data[level][levelItem][customMetric.propsToCalculate[0]];
        const usefulPart = data[level][levelItem][customMetric.propsToCalculate[1]];
        const areAllMetricsPresent =
          total !== undefined &&
          total !== NO_STATS_METRIC_MSG &&
          usefulPart !== undefined &&
          usefulPart !== NO_STATS_METRIC_MSG;
        if (areAllMetricsPresent) {
          data[level][levelItem][customMetric.name] = `${Math.round(usefulPart / (total / 100))}%`;
        } else {
          data[level][levelItem][customMetric.name] = NOT_ENOUGH_STATS_MSG;
        }
      }
    }
  })
  return data
}
