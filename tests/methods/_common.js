
import 'regenerator-runtime/runtime'
import JSONP from 'node-jsonp'
import PSstatsAPI from '../../src/PSstatsAPI.js'

export var stats = new PSstatsAPI(
  'providesupport',
  'wetesting_stats',
  {
    duration: 'month',
    startDate: '01-Jun-2019 21:00:00',
    endDate: '30-Aug-2020 20:59:59'
  },
);
stats.setMakeJSONPrequest(function(url, hash, onloadHandler) {
  function removeLastQueryParam(url) {
    var arr = url.split('&');
    arr.pop();
    return arr.join('&');
  }
  url = removeLastQueryParam(url);
  JSONP(url, json => {
    window[`_psHandleStatsResponse_${hash}`](json)
    onloadHandler()
  })
})

export function asyncTest({ methodName, level, timePeriod, callback }) {
  it(`${methodName} ${level || ''} ${timePeriod || ''}`, async function() {
    await new Promise((resolve, reject) => {
      function onCallback(res) {
        callback(res);
        resolve(res);
      }
      stats[methodName](
        level ? level : onCallback,
        level ? onCallback : TIME_PERIODS[timePeriod],
        TIME_PERIODS[timePeriod],
      )
    });
  }, 300000)
}

export function asyncTestWithCustomParams({ methodName, testTitle, params }) {
  it(testTitle, async function() {
    await new Promise((resolve) => {
      const oldCallback = params.callback
      function onCallback(res) {
        oldCallback(res);
        resolve(res);
      }
      params.callback = onCallback
      stats[methodName](params)
    });
  }, 300000)
}

/* CONSTANTS *********************************************************************************************************/
/* INPUT */
export const TIME_PERIODS = {
  PAST_TIME_PERIOD: {
    duration: 'month',
    startDate: '01-Jun-1980 21:00:00',
    endDate: '30-Aug-1982 20:59:59'
  },
  FUTURE_TIME_PERIOD: {
    duration: 'week',
    startDate: '01-Jun-2050 21:00:00',
    endDate: '30-Aug-2052 20:59:59'
  },
  DEFAULT_TIME_PERIOD: {
    duration: 'month',
    startDate: '01-Jun-2019 21:00:00',
    endDate: '30-Aug-2020 20:59:59'
  },
  SHORT_TIME_PERIOD: {
    duration: 'day',
    startDate: '01-Jun-2019 21:00:00',
    endDate: '05-Jun-2019 20:59:59'
  },
  SHORT_TIME_PERIOD2: {
    duration: 'day',
    startDate: '28-Aug-2019 21:00:00',
    endDate: '30-Aug-2019 20:59:59'
  },
  SHORT_TIME_PERIOD3: {
    duration: 'day',
    startDate: '08-May-2020 21:00:00',
    endDate: '10-May-2020 20:59:59'
  },
  SHORT_TIME_PERIOD4: {
    duration: 'day',
    startDate: '01-May-2020 21:00:00',
    endDate: '25-May-2020 20:59:59'
  },
  SHORT_TIME_PERIOD5: {
    duration: 'day',
    startDate: '10-May-2022 21:00:00',
    endDate: '25-May-2022 20:59:59'
  },
  SHORT_TIME_PERIOD6: {
    duration: 'day',
    startDate: 'Sep 01 2022',
    endDate: 'Sep 03 2022'
  },
  SHORT_TIME_PERIOD7: {
    duration: 'month',
    startDate: 'Jan 01 2019',
    endDate: 'Apr 30 2019'
  },
  INVALID_TIME_PERIODS: [
    {
      duration: 'day',
      startDate: '09.14.2020',
      endDate: '09.14.2000'
    },
    {
      duration: 'month',
      startDate: '2000',
    },
    {
      duration: 'month',
      endDate: '2000',
    },
    {
      startDate: '2000',
      endDate: '2020'
    },
    {
      duration: 'week',
      startDate: '30.30.2020',
      endDate: '10.12.2021'
    },
    {
      duration: 'day',
      startDate: '10.11.2018',
      endDate: '20.15.2020'
    }
  ],
};
export const INVALID_LEVELS = [
  'acc',
  {
    'departments': 'Sales',
    'OPs': 'Julie',
  },
  {
    'operators': 'Rob',
    'departs': ['Sales']
  },
];

/* output */
export const NO_STATS_FOR_PAST_TIME_PERIOD = {
  "noStats": true,
  "message": "No statistics for this time period: 01-Jun-1980 21:00:00 - 30-Aug-1982 20:59:59",
  "startDate": new Date('01-Jun-1980 21:00:00'),
  "endDate": new Date('30-Aug-1982 20:59:59'),
};
export const NO_STATS_FOR_FUTURE_TIME_PERIOD = {
  "noStats": true,
  "message": "No statistics for this time period: 01-Jun-2050 21:00:00 - 30-Aug-2052 20:59:59",
  "startDate": new Date('01-Jun-2050 21:00:00'),
  "endDate": new Date('30-Aug-2052 20:59:59'),
};

// callback: res => console.warn(JSON.stringify(res, undefined, 2)),
