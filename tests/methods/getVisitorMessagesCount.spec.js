
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getVisitorMessagesCount'

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
      "average": 5.825208,
      "total": 4899
    }
  },
  {
    "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
      "average": 6.5295186,
      "total": 7189
    }
  },
  {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
      "average": 6.208568,
      "total": 5507
    }
  },
  {
    "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
      "average": 5.5109034,
      "total": 1769
    }
  },
  {
    "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
      "average": 6.3077874,
      "total": 5103
    }
  },
  {
    "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
      "average": 6.4917645,
      "total": 2759
    }
  },
  {
    "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
      "average": 4.8373985,
      "total": 5355
    }
  },
  {
    "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
      "average": 5.0378227,
      "total": 5461
    }
  },
  {
    "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
      "average": 4.5174875,
      "total": 6329
    }
  },
  {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
      "average": 5.232087,
      "total": 13436
    }
  },
  {
    "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
      "average": 4.592215,
      "total": 24775
    }
  },
  {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
      "average": 4.342911,
      "total": 13906
    }
  },
  {
    "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
      "average": 4.3779435,
      "total": 11155
    }
  },
  {
    "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
      "average": 4.673356,
      "total": 10945
    }
  }
];
