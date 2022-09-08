
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getPreChatSurveyLoadCount'

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
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 9856
  },
  {
    "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 12291
  },
  {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 10977
  },
  {
    "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 3860
  },
  {
    "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 8876
  },
  {
    "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 6325
  },
  {
    "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 16056
  },
  {
    "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 11538
  },
  {
    "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 9175
  },
  {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 14108
  },
  {
    "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 30776
  },
  {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 18865
  },
  {
    "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 15204
  },
  {
    "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 16961
  }
];
