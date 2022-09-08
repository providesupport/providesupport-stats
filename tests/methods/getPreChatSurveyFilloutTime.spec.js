
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getPreChatSurveyFilloutTime'

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
        81.31368,
        "1m 21s"
      ],
      "total": [
        68303.49,
        "18h 58m 23s"
      ]
    }
  },
  {
    "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
      "average": [
        70.286514,
        "1m 10s"
      ],
      "total": [
        77736.88,
        "21h 35m 36s"
      ]
    }
  },
  {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
      "average": [
        79.5647,
        "1m 19s"
      ],
      "total": [
        71289.97,
        "19h 48m 9s"
      ]
    }
  },
  {
    "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
      "average": [
        92.77696,
        "1m 32s"
      ],
      "total": [
        30059.736,
        "8h 20m 59s"
      ]
    }
  },
  {
    "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
      "average": [
        65.89715,
        "1m 5s"
      ],
      "total": [
        51531.57,
        "14h 18m 51s"
      ]
    }
  },
  {
    "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
      "average": [
        71.57889,
        "1m 11s"
      ],
      "total": [
        33427.34,
        "9h 17m 7s"
      ]
    }
  },
  {
    "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
      "average": [
        81.82741,
        "1m 21s"
      ],
      "total": [
        90010.15,
        "1d 1h 10s"
      ]
    }
  },
  {
    "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
      "average": [
        83.38333,
        "1m 23s"
      ],
      "total": [
        90887.83,
        "1d 1h 14m 47s"
      ]
    }
  },
  {
    "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
      "average": [
        85.2669,
        "1m 25s"
      ],
      "total": [
        120311.59,
        "1d 9h 25m 11s"
      ]
    }
  },
  {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
      "average": [
        63.048615,
        "1m 3s"
      ],
      "total": [
        162476.28,
        "1d 21h 7m 56s"
      ]
    }
  },
  {
    "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
      "average": [
        57.569073,
        "57s"
      ],
      "total": [
        310815.44,
        "3d 14h 20m 15s"
      ]
    }
  },
  {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
      "average": [
        58.54804,
        "58s"
      ],
      "total": [
        187646.45,
        "2d 4h 7m 26s"
      ]
    }
  },
  {
    "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
      "average": [
        63.00827,
        "1m 3s"
      ],
      "total": [
        160356.05,
        "1d 20h 32m 36s"
      ]
    }
  },
  {
    "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
      "average": [
        55.382484,
        "55s"
      ],
      "total": [
        129096.57,
        "1d 11h 51m 36s"
      ]
    }
  }
]
