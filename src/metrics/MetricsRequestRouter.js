/* eslint-disable implicit-arrow-linebreak */
import { validateArgument } from '../helpers';

export default class MetricsRequestRouter {
  constructor({ metrics, getTimePeriod }) {
    this.metrics = metrics;
    this.getTimePeriod = getTimePeriod;
  }

  routeMetricsRequest = ({ metrics, metricsGroups, opts, callback }) => {
    // TODO: переделать под работу через 1 метод
    if (opts.level != null) {
      return this.metrics.retrieveDataByMetrics({
        metricsGroups: metricsGroups ?? [{ metrics }],
        callback,
        opts,
      });
    }

    if (metricsGroups != null && metricsGroups.length > 0) {
      return this.metrics.retrieveDataByMetrics({
        metricsGroups,
        callback,
        opts,
      });
    }

    this.metrics.mergeLimitedAndStandardResults(
      metrics,
      opts,
      callback,
    );
  }

  standardRequest = (metrics, opts) => ({ callback, timePeriod, limitedOpts }) => {
    if (limitedOpts != null) {
      validateArgument(limitedOpts, 'LIMITED_OPTS');
    }
    this.routeMetricsRequest({ metrics, opts: { ...opts, timePeriod, limitedOpts }, callback });
  };

  requestWithLevel = (metrics, opts) => ({ level, callback, timePeriod }) =>
    this.routeMetricsRequest({
      metrics,
      opts: { ...opts, timePeriod, level },
      callback,
    })

  customMetricsRequest = ({ metricsGroups, metrics, opts = {}, callback }) => {
    if (metrics) metricsGroups = [{ metrics }];
    const optsWithTime = { ...opts, timePeriod: opts.timePeriod ?? this.getTimePeriod() };
    if (optsWithTime.limitedOpts != null) {
      validateArgument(optsWithTime.limitedOpts, 'LIMITED_OPTS');
    }

    this.routeMetricsRequest({
      metricsGroups,
      opts: optsWithTime,
      callback,
    });
  }
}
