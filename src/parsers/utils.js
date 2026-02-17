import { NO_STATS_OPERATOR_OR_DEPARTMENT_MSG, ACCOUNT } from '../constants/constants'
import {
  METRIC_NAME,
  TOTAL,
  TOTAL_RATE,
  METRICS,
  METRIC_RATES_BY_TAGS,
  METRIC_TAG,
  TAG1,
  VALUES,
  RATES_BY_STATS_PERIOD,
  VALUE,
  MULTIPLE,
  METRIC_MULTIPLE,
  COUNTER_COUNT,
  ID,
} from '../constants/answerKeys'
import { isRatesByStatsPeriod } from '../constants/metrics'

export function filterThroughLevel(data, { level, metricKeys }) {
  let processedData = {}

  if (!level) processedData = data
  for (const levelType in level) {
    if (!level[levelType]) continue

    if (Array.isArray(level[levelType]) && level[levelType].length > 0) {
      level[levelType].forEach(name => {
        if (!processedData[levelType]) processedData[levelType] = {}
        processedData[levelType][name] = data[levelType][name] || NO_STATS_OPERATOR_OR_DEPARTMENT_MSG;
      })
      continue
    }

    processedData[levelType] = data[levelType] || NO_STATS_OPERATOR_OR_DEPARTMENT_MSG
  }

  if (processedData[ACCOUNT]) {
    if (processedData[ACCOUNT][ACCOUNT]) processedData[ACCOUNT] = processedData[ACCOUNT][ACCOUNT]
    if (processedData[ACCOUNT]['undefined']) processedData[ACCOUNT] = processedData[ACCOUNT]['undefined']
  }

  if (!level && Object.keys(metricKeys).length === 1) {
    processedData = processedData[Object.keys(processedData)[0]];
  }

  return processedData;
}

export function calculateReverseTime(seconds, startTimeInMs, endTimeInMs) {
  let secondsInTimePeriod = (endTimeInMs - startTimeInMs) / 1000;
  let result = secondsInTimePeriod - seconds;
  return result > 0 ? Math.round(result) : 0;
}

export function transformResponseToConvenientFormat(response) {
  const { metricRatesPool, metricTypes } = response.statisticsPool.accounts[0];
  let metricsAndRates = {};
  if (metricRatesPool) {
    metricRatesPool.forEach(rate => {
      rate = tryTransformRateByStatsPeriodToRateByTag(rate)
      metricsAndRates[rate[METRIC_NAME]] = secondLevelTransformationRateToMetric(rate)
    })
  }

  if (metricTypes) {
    metricTypes.forEach(metric => {
      if (metric[METRIC_MULTIPLE] !== undefined) {
        metric[MULTIPLE] = metric[METRIC_MULTIPLE] === 'multiple'
        delete metric[METRIC_MULTIPLE]
      }

      metricsAndRates[metric[METRIC_NAME]] = metric;
    })
  }

  return metricsAndRates
}

function tryTransformRateByStatsPeriodToRateByTag(rate) {
  if (!isRatesByStatsPeriod(rate[METRIC_NAME])) return rate

  rate[METRIC_RATES_BY_TAGS] = [{
    [TOTAL_RATE]: rate[TOTAL_RATE],
    [VALUES]: rate[RATES_BY_STATS_PERIOD],
  }]
  delete rate[TOTAL_RATE];
  delete rate[RATES_BY_STATS_PERIOD];
  return rate
}

function secondLevelTransformationRateToMetric(rate) {
  if (rate[TAG1] !== undefined) {
    rate[METRIC_TAG] = rate[TAG1];
    delete rate[TAG1];
  }

  if (rate[TOTAL_RATE] !== undefined) {
    rate[TOTAL] = transformNumToRate(rate[TOTAL_RATE]);
    delete rate[TOTAL_RATE]
  }

  if (rate[RATES_BY_STATS_PERIOD] !== undefined) {
    rate[VALUES] = rate[RATES_BY_STATS_PERIOD];
    delete rate[RATES_BY_STATS_PERIOD];
  }

  if (rate[VALUES] !== undefined) {
    rate[VALUES].forEach((value, ii) => {
      if (value[VALUE] !== undefined) {
        rate[VALUES][ii][COUNTER_COUNT] = transformNumToRate(value[VALUE]);
        delete rate[VALUES][ii][VALUE]
      }
    })
  }

  if (rate[METRIC_RATES_BY_TAGS] !== undefined) {
    rate[METRICS] = rate[METRIC_RATES_BY_TAGS];
    delete rate[METRIC_RATES_BY_TAGS];
    rate[METRICS].forEach((metricItem, ii) => {
      rate[METRICS][ii] = secondLevelTransformationRateToMetric(metricItem);
    })
  }

  return rate
}

export function groupMetrics(metricsFromResponse, metricsGroups, cummonOpts) {
  let groupedMetrics = [];
  metricsGroups.forEach(({ metrics: metricKeys, opts: groupOpts }) => {
    let metrics = {};
    for (const key in metricKeys) {
      if (!metricsFromResponse[key]) continue
      metrics[key] = { ...metricsFromResponse[key], metricNameInResponse: metricKeys[key] ? metricKeys[key] : key }
    }
    groupedMetrics.push({
      metrics,
      opts: { ...cummonOpts, ...groupOpts, metricKeys },
    })
  })

  return groupedMetrics
}

function transformNumToRate(num) {
  return `${Math.round(num * 100)}%`
}

export function getStatsPeriodById(statsPeriods, id) {
  return statsPeriods.find(elem => elem[ID] === id)
}
