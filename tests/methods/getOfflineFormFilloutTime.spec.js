
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getOfflineFormFilloutTime'

asyncTest({
  methodName,
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE),
})
asyncTest({
  methodName,
  timePeriod: 'PAST_TIME_PERIOD',
  callback: res => expect(res).toEqual(NO_STATS_FOR_PAST_TIME_PERIOD),
})
asyncTest({
  methodName,
  timePeriod: 'FUTURE_TIME_PERIOD',
  callback: res => expect(res).toEqual(NO_STATS_FOR_FUTURE_TIME_PERIOD),
})


/* OUTPUT */
const PROCESSED_RESPONSE = [
  {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
      "average": [
        37.7214,
        "37s"
      ],
      "total": [
        188.607,
        "3m 8s"
      ]
    }
  },
  {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
      "average": [
        111.812,
        "1m 51s"
      ],
      "total": [
        111.812,
        "1m 51s"
      ]
    }
  },
  {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
      "average": [
        39.87823,
        "39s"
      ],
      "total": [
        518.417,
        "8m 38s"
      ]
    }
  }
];
