import { isStr } from './utils/utils.js';
import {
  NO_STATS_METRIC_MSG,
  NOT_ENOUGH_STATS_MSG,
  ACCOUNT,
  OPERATORS,
  DEPARTMENTS,
  FUNCTION,
  OBJECT,
  STRING,
} from './constants/constants.js';
import {
  CHAT_START_CHAT_FORM_FILLOUT_TIME,
  CHAT_LEAVE_MESSAGE_FORM_FILLOUT_TIME,
  CHAT_ACCEPT_CHAT_DELAY_PER_ACCOUNT,
  CHAT_ACCEPT_CHAT_DELAY_PER_OPERATOR,
  CHAT_ACCEPT_CHAT_DELAY_PER_DEPARTMENT,
  CHAT_AWAY_TIME_PER_OPERATOR,
  CHAT_ONLINE_TIME_PER_ACCOUNT,
  CHAT_ONLINE_TIME_PER_OPERATOR,
  CHAT_ONLINE_TIME_PER_DEPARTMENT,
} from './constants/metrics';
import {
  TOTAL,
} from './constants/answerKeys'

const SECONDS_IN_HOUR = 3600;
const SECS_IN_DAY = 86400;
const SECS_IN_MONTH = 2628000;
const SECS_IN_YEAR = 31536000;
function calculateStringTime(secs) {
  let seconds = Math.floor(secs % 60);
  let minutes = Math.floor(((secs % SECONDS_IN_HOUR) - seconds) / 60);
  let hours = Math.floor((secs % SECS_IN_DAY) / SECONDS_IN_HOUR);
  let days = Math.floor((secs % SECS_IN_MONTH) / SECS_IN_DAY);
  let monthes = Math.floor((secs % SECS_IN_YEAR) / SECS_IN_MONTH);
  let years = Math.floor((secs - (secs % SECS_IN_YEAR)) / SECS_IN_YEAR);
  let result =
    (years ? `${years}y ` : '') +
    (monthes ? `${monthes}m ` : '') +
    (days ? `${days}d ` : '') +
    (hours ? `${hours}h ` : '') +
    (minutes ? `${minutes}m ` : '') +
    (seconds ? `${seconds}s` : '');
  return result.trim() || '0s';
}

export function addTimeStringsToResponse(response, opts) {
  /* TODO: refactor func code - too much code duplication */
  let key;
  let TIME_METRICS = [
    CHAT_START_CHAT_FORM_FILLOUT_TIME,
    CHAT_LEAVE_MESSAGE_FORM_FILLOUT_TIME,
    CHAT_ACCEPT_CHAT_DELAY_PER_ACCOUNT,
    CHAT_ACCEPT_CHAT_DELAY_PER_OPERATOR,
    CHAT_ACCEPT_CHAT_DELAY_PER_DEPARTMENT,
    CHAT_AWAY_TIME_PER_OPERATOR,
    CHAT_ONLINE_TIME_PER_ACCOUNT,
    CHAT_ONLINE_TIME_PER_OPERATOR,
    CHAT_ONLINE_TIME_PER_DEPARTMENT,
  ];
  for (let metricName in response) {
    if (TIME_METRICS.indexOf(metricName) === -1) continue;
    let isCustomMetricWithLevel = opts.areCustomMetrics && !Array.isArray(response[metricName]);
    let isLevel = opts.level || isCustomMetricWithLevel;
    let items = isLevel ? Object.keys(response[metricName]) : response[metricName];
    for (let ind = 0; ind < items.length; ind++) {
      if (isLevel) {
        if (!opts.areCustomMetrics && Array.isArray(response[metricName])) {
          key = Object.keys(response[metricName][ind])[0];
          response[metricName][ind][key]['average'] = [
            response[metricName][ind][key]['average'],
            calculateStringTime(response[metricName][ind][key]['average']),
          ];
          response[metricName][ind][key][TOTAL] = [
            response[metricName][ind][key][TOTAL],
            calculateStringTime(response[metricName][ind][key][TOTAL]),
          ];
          continue;
        }
        let timePeriods = response[metricName][items[ind]];
        for (let tpInd = 0; tpInd < timePeriods.length; tpInd++) {
          key = Object.keys(timePeriods[tpInd])[0];
          timePeriods[tpInd][key]['average'] = [
            timePeriods[tpInd][key]['average'],
            calculateStringTime(timePeriods[tpInd][key]['average']),
          ];
          timePeriods[tpInd][key][TOTAL] = [
            timePeriods[tpInd][key][TOTAL],
            calculateStringTime(timePeriods[tpInd][key][TOTAL]),
          ];
        }
      } else {
        key = Object.keys(response[metricName][ind])[0];
        response[metricName][ind][key]['average'] = [
          response[metricName][ind][key]['average'],
          calculateStringTime(response[metricName][ind][key]['average']),
        ];
        response[metricName][ind][key][TOTAL] = [
          response[metricName][ind][key][TOTAL],
          calculateStringTime(response[metricName][ind][key][TOTAL]),
        ];
      }
    }
  }
}

export function transformLevelToStandartFormal(level) {
  validateArgument(level, 'LEVEL');

  if (isStr(level)) {
    if (level === ACCOUNT) return { [level]: [] };
    if (level === OPERATORS) return { [level]: [] };
    if (level === DEPARTMENTS) return { [level]: [] };
  }

  if (Array.isArray(level)) {
    let res = {};
    if (~level.indexOf(ACCOUNT)) res[ACCOUNT] = [];
    if (~level.indexOf(OPERATORS)) res[OPERATORS] = [];
    if (~level.indexOf(DEPARTMENTS)) res[DEPARTMENTS] = [];
    return res
  }

  /* isObject */
  if (level[ACCOUNT] && isStr(level[ACCOUNT])) level[ACCOUNT] = [level[ACCOUNT]]
  if (level[OPERATORS] && isStr(level[OPERATORS])) level[OPERATORS] = [level[OPERATORS]]
  if (level[DEPARTMENTS] && isStr(level[DEPARTMENTS])) level[DEPARTMENTS] = [level[DEPARTMENTS]]
  return level
}

export function handleLevel(level, metrics) {
  let res = [];
  Object.keys(level).forEach(key => {
    if (!level[key]) return;
    if (key === ACCOUNT) {
      res.push(metrics[0])
    } else if (key === OPERATORS) {
      res.push(metrics[1])
    } else if (key === DEPARTMENTS) {
      res.push(metrics[2])
    }
  })
  return res
}

export function setNoStatsMessages(data, metrics, isLevelPresent) {
  const metricsKeys = Object.keys(metrics);
  let metricNameInResponse;
  let isMetricPresent;
  if (!isLevelPresent) {
    for (let ii = 0; ii < metricsKeys.length; ii++) {
      metricNameInResponse = metrics[metricsKeys[ii]];
      if (!metricNameInResponse) continue
      isMetricPresent = data[metricNameInResponse];
      if (!isMetricPresent) data[metricNameInResponse] = NO_STATS_METRIC_MSG;
    }
    return data;
  }
  for (let level in data) {
    for (let levelItem in data[level]) {
      for (let jj = 0; jj < metricsKeys.length; jj++) {
        let isOneLevelDeepMetrics = typeof metricsKeys[0] === 'string';
        if (isOneLevelDeepMetrics) {
          metricNameInResponse = metrics[metricsKeys[jj]];
          isMetricPresent = data[level][levelItem][metricNameInResponse];
          if (!isMetricPresent) data[level][levelItem][metricNameInResponse] = NO_STATS_METRIC_MSG;
          continue;
        }
        for (let mi = 0; mi < metricsKeys[jj].length; mi++) {
          metricNameInResponse = metrics[metricsKeys[jj][mi]];
          isMetricPresent = data[level][levelItem][metricNameInResponse];
          if (!isMetricPresent) data[level][levelItem][metricNameInResponse] = NO_STATS_METRIC_MSG;
        }
      }
    }
  }
  return data
}

export function handleSummaryValue(parsedMetrics, metricName, type, doTransformToTimeString) {
  let isEmptyValue = !parsedMetrics[metricName]
    || parsedMetrics[metricName] === NO_STATS_METRIC_MSG
    || parsedMetrics[metricName] === NOT_ENOUGH_STATS_MSG;
  if (isEmptyValue) return;
  if (doTransformToTimeString) {
    parsedMetrics[metricName] = [
      parsedMetrics[metricName][type],
      calculateStringTime(parsedMetrics[metricName][type]),
    ];
    return;
  }
  parsedMetrics[metricName] = parsedMetrics[metricName][type];
}

export function handleSummaryValueByPeriods(parsedMetric, type, doTransformToTimeString, isCounter) {
  let key; let currentPeriod; let
    result;
  let isEmptyValue = parsedMetric === undefined
    || parsedMetric === NO_STATS_METRIC_MSG
    || parsedMetric === NOT_ENOUGH_STATS_MSG;
  if (isEmptyValue) return;
  if (doTransformToTimeString) {
    if (isCounter) {
      parsedMetric[TOTAL] = [parsedMetric[TOTAL], calculateStringTime(parsedMetric[TOTAL])];
    } else {
      parsedMetric[TOTAL] = {
        total: [
          parsedMetric[TOTAL][TOTAL],
          calculateStringTime(parsedMetric[TOTAL][TOTAL]),
        ],
        average: [
          parsedMetric[TOTAL]['average'],
          calculateStringTime(parsedMetric[TOTAL]['average']),
        ],
      }
    }
  }
  for (let ii = 0; ii < parsedMetric['timeline'].length; ii++) {
    result = {};
    currentPeriod = parsedMetric['timeline'][ii];
    key = Object.keys(currentPeriod)[0];
    if (doTransformToTimeString) {
      result[key] = [
        currentPeriod[key][type],
        calculateStringTime(currentPeriod[key][type]),
      ];
    } else {
      result[key] = currentPeriod[key][type];
    }
    parsedMetric['timeline'][ii] = result;
  }
}

function validateLevelObj(level) {
  let isValidLevelArg = true;
  for (const levelType in level) {
    if (!isLvlValid(level[levelType])) isValidLevelArg = false
  }
  if (!isValidLevelArg) {
    throw new TypeError(
      `${'Object \'level\' argument must contain keys.\n' +
      'Key must be \'account\', \'operators\' or \'departments\'!\n' +
      'Value of key must be an array of non-empty strings!' +
      '\nSpecified argument: '}${JSON.stringify(level)}`,
    );
  }
}
function throwTypeErr(arg, type) {
  throw new TypeError(`Supplied argument is not ${type}!\nSpecified argument: ${JSON.stringify(arg)}`)
}
const validators = {
  DATE(arg) {
    let isDateArgumentValid = new Date(arg);
    if (Number.isNaN(isDateArgumentValid)) {
      throw new TypeError(
        `Invalid Date argument: ${JSON.stringify(arg)}\n` +
      'You can pass date string or timestamp (number of milliseconds passed after the Jan 1st of 1970 UTC+0)\n' +
      'E.g. \'01-06-2019 21:31:48\', \'23-12-2000 01:23:07\', 997411990000\n' +
      'More about possible argument formats: ' +
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date',
      );
    }
  },
  OBJECT(arg) {
    let isArgObj = typeof arg === 'object';
    if (!isArgObj) throwTypeErr(arg, OBJECT);
  },
  ARRAY(arg) {
    if (!Array.isArray(arg)) throwTypeErr(arg, 'array');
  },
  FUNCTION(arg) {
    let isFunc = typeof arg === 'function';
    if (!isFunc) throwTypeErr(arg, FUNCTION);
    return isFunc;
  },
  STRING(arg) {
    if (!isStr(arg)) throwTypeErr(arg, STRING);
  },
  LEVEL(arg) {
    if (typeof arg === 'object') {
      validateLevelObj(arg);
    } else if (isStr(arg)) {
      let isValidLevelArg = arg === OPERATORS || arg === DEPARTMENTS || arg === ACCOUNT;
      if (!isValidLevelArg) {
        throw new TypeError(
          'String \'level\' argument must be one of these values: \'account\', \'operators\' or \'departments\'!\n' +
          `Specified argument: ${JSON.stringify(arg)}`,
        );
      }
    } else if (Array.isArray(arg)) {
      let isValidLevelArg = true;
      arg.forEach(key => {
        if (key !== OPERATORS && key !== DEPARTMENTS && key !== ACCOUNT) isValidLevelArg = false
      })
      if (!isValidLevelArg) {
        throw new TypeError(
          'Array "level" argument should only contain the strings: \'account\', \'operators\' or \'departments\'!\n' +
          `Specified argument: ${JSON.stringify(arg)}`,
        );
      }
    } else {
      throw new TypeError('Supplied argument is not an object, nor a string!\nSpecified argument: ' +
        `${JSON.stringify(arg)}`);
    }
  },
  SIMPLIFIED_LEVEL(arg) {
    if (typeof arg === 'object') validateLevelObj(arg);
    else if (isStr(arg)) {
      let isValidLevelArg = arg === OPERATORS;
      if (!isValidLevelArg) {
        throw new TypeError(
          'String \'simplified level\' argument must be one of these values: \'operators\'!\n' +
          `Specified argument: ${JSON.stringify(arg)}`,
        );
      }
    } else {
      throw new TypeError('Supplied argument is not an object, nor a string!\n' +
        `Specified argument: ${JSON.stringify(arg)}`);
    }
  },
}
function isLvlValid(level) {
  if (Array.isArray(level)) {
    return !level.some(name => !(isStr(name) && name));
  }
  return isStr(level) && level;
}
export function validateArgument(arg, type) {
  if (Array.isArray(type)) {
    let isValid = type.some(element => element === arg);
    if (!isValid) {
      throw new TypeError(
        `${'Supplied argument is not one of the allowed values!\n' +
      'Specified argument: '}${JSON.stringify(arg)}\n` +
      `Array of the allowed values: ${JSON.stringify(type, null, 2)}`,
      );
    }
    return;
  }
  if (typeof validators[type] !== 'function') throw new TypeError(`No validator for ${JSON.stringify(type)} type!`);
  return validators[type](arg);
}

export function processTimePeriodArg(timePeriod) {
  validateArgument(timePeriod, 'OBJECT');
  validateArgument(timePeriod.duration, ['hour', 'day', 'week', 'month', 'year']);
  validateArgument(timePeriod.startDate, 'DATE');
  validateArgument(timePeriod.endDate, 'DATE');
  let startDate = new Date(timePeriod.startDate);
  let endDate = new Date(timePeriod.endDate);
  let isEndEarlierThanStart = (endDate.getTime() - startDate.getTime()) < 0;
  if (isEndEarlierThanStart) {
    throw TypeError(
      `startDate must be less than endDate!\nSupplied startDate: ${startDate}\nSupplied endDate: ${endDate}`,
    );
  }
  timePeriod.startDate = formatDate(startDate, true);
  timePeriod.endDate = formatDate(endDate, true);
}

const PIECE_LENGTH_WITH_TIME = 8;
export function formatDate(rawDate, noHyphen) {
  let date = new Date(rawDate);
  let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let hyphen = noHyphen ? ' ' : '-';
  let day = date.getDate();
  if (day < 10) day = `0${day}`;
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();
  // console.warn('date', date);
  let time = date.toTimeString().slice(0, PIECE_LENGTH_WITH_TIME);
  return `${day + hyphen + month + hyphen + year} ${time}`;
}

export function transformMetricsToObj(metrics) {
  if (typeof metrics === 'string') {
    return { [metrics]: '' }
  }
  if (Array.isArray(metrics)) {
    return metrics.reduce((res, current) => Object.assign(res, transformMetricsToObj(current)), {});
  }
  return metrics
}

export function transformMetricsGroupsToStr(metricsGroups) {
  let allMetrics = {};
  metricsGroups.forEach(({ metrics }) => allMetrics = { ...allMetrics, ...metrics })
  return Object.keys(allMetrics).join();
}
