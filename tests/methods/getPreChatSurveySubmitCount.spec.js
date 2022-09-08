
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getPreChatSurveySubmitCount'

// жду фикс бека
// asyncTest({
//   methodName,
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE),
// })
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
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 840
  },
  {
    "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 1106
  },
  {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 896
  },
  {
    "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 324
  },
  {
    "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 782
  },
  {
    "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 467
  },
  {
    "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 1100
  },
  {
    "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1090
  },
  {
    "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 1411
  },
  {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 2577
  },
  {
    "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 5399
  },
  {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 3207
  },
  {
    "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 2545
  },
  {
    "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2324
  }
];
