
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getTotalHits'

asyncTest({
  methodName,
  timePeriod: 'SHORT_TIME_PERIOD3',
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
    "08-May-2020 04:00:00 - 09-May-2020 04:00:00": {
      "average": 2.1265824,
      "total": 1008
    }
  },
  {
    "09-May-2020 04:00:00 - 10-May-2020 04:00:00": {
      "average": 2.5926456,
      "total": 12691
    }
  },
  {
    "10-May-2020 04:00:00 - 11-May-2020 04:00:00": {
      "average": 2.9555905,
      "total": 11314
    }
  }
];
