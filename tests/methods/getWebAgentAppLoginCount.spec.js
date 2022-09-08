
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getWebAgentAppLoginCount'

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
const PROCESSED_RESPONSE = {
  "Talia Bush\ntalia": [
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 1
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 5
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 1
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 12
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 1
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 3
    }
  ],
  "Alexa Logman\nalexa": [
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 1
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 3
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 1
    }
  ],
  "Stacey Yang\nstacey": [
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 3
    }
  ],
  "Mary Babich\nshukshyna": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 4
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 64
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 42
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 3
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 1
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 5
    }
  ],
  "Irene Rogers\nirene": [
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 3
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 2
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 11
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 3
    }
  ],
  "Maria Lebed\nmarileb": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 2
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 1
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 73
    }
  ]
};
