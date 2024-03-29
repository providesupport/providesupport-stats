import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getOperatorsAwayTime'

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
  "Tanya Laskin\ntanya": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 293.0669,
        "total": 166462
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 294.5537,
        "total": 153167.92
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 293.43274,
        "total": 258514.25
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 291.88586,
        "total": 84938.79
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 293.9541,
        "total": 225462.8
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 295.09274,
        "total": 197417.05
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 295.61777,
        "total": 357401.88
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 295.8916,
        "total": 481711.53
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 296.37732,
        "total": 669220
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 296.51276,
        "total": 975230.5
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 296.0232,
        "total": 1007662.94
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 296.66452,
        "total": 670461.8
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 296.8774,
        "total": 762084.3
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 297.15063,
        "total": 548837.25
      }
    }
  ],
  "Olga Bondar\nolkinsmile": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 290.46246,
        "total": 15394.51
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 300.00644,
        "total": 65101.4
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 298.93762,
        "total": 181455.14
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 299.259,
        "total": 124192.484
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 297.1184,
        "total": 40705.223
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 299.11554,
        "total": 31706.246
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 292.18808,
        "total": 29803.184
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 296.55783,
        "total": 39145.637
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 297.1068,
        "total": 65660.61
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 292.1276,
        "total": 163007.19
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 295.2459,
        "total": 236491.97
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 297.90732,
        "total": 183510.9
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 298.09445,
        "total": 278718.3
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 297.53815,
        "total": 135974.94
      }
    }
  ],
  "Irene Rogers\nirene": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 300.56494,
        "total": 21340.111
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 300.55765,
        "total": 3306.134
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 300.0892,
        "total": 4501.338
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 300.22113,
        "total": 48635.824
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 291.53293,
        "total": 8454.455
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 300.95593,
        "total": 26785.078
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 299.45615,
        "total": 23058.123
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 299.93433,
        "total": 22495.074
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 299.15707,
        "total": 100217.62
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 299.9369,
        "total": 41391.293
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 299.92007,
        "total": 48287.133
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 300.37003,
        "total": 76594.36
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 300.5447,
        "total": 23743.031
      }
    }
  ],
  "Talia Bush\ntalia": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 298.1959,
        "total": 28328.61
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 299.33655,
        "total": 3891.375
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 298.79672,
        "total": 54381.008
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 305.787,
        "total": 305.787
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 284.86383,
        "total": 9115.643
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 300.3603,
        "total": 23127.742
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 294.0826,
        "total": 13233.718
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 289.20624,
        "total": 6073.331
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 299.941,
        "total": 8998.23
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 297.64047,
        "total": 18156.068
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 299.14462,
        "total": 35299.062
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 289.20212,
        "total": 6651.649
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 300.24588,
        "total": 6905.655
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 299.11783,
        "total": 18844.424
      }
    }
  ],
  "Alexa Logman\nalexa": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 300.962,
        "total": 601.924
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 299.16428,
        "total": 3290.807
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 297.35733,
        "total": 892.072
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 299.754,
        "total": 1199.016
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 302.955,
        "total": 605.91
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 300.921,
        "total": 6018.42
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 298.5765,
        "total": 1194.306
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 302.59775,
        "total": 1210.391
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 299.64655,
        "total": 22473.49
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 297.78815,
        "total": 4466.822
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 300.7165,
        "total": 2405.732
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 276.4195,
        "total": 1658.517
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 298.80533,
        "total": 896.416
      }
    }
  ],
  "Mary Babich\nshukshyna": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 297.32657,
        "total": 52924.133
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 295.28073,
        "total": 48426.043
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 301.65067,
        "total": 1809.904
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 298.232,
        "total": 31612.594
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 297.8207,
        "total": 83091.98
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 273.6025,
        "total": 547.205
      }
    }
  ],
  "Maria Lebed\nmarileb": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 299.468,
        "total": 299.468
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 301.08282,
        "total": 1806.497
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 295.6135,
        "total": 591.227
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 297.7465,
        "total": 2381.972
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 276.58633,
        "total": 1659.518
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 239.66066,
        "total": 718.982
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 264.7915,
        "total": 2118.332
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 291.63495,
        "total": 6415.969
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 299.3645,
        "total": 598.729
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 269.68423,
        "total": 2427.158
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 298.12823,
        "total": 2683.154
      }
    }
  ],
  "Helen Yarkin\nhelen": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 300.03006,
        "total": 35103.52
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 298.50192,
        "total": 77610.5
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 299.17215,
        "total": 80776.484
      }
    }
  ],
  "Caroline Canton\ncaroline": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 24.117,
        "total": 24.117
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 297.96237,
        "total": 321799.38
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 298.09308,
        "total": 342508.97
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 299.19482,
        "total": 164856.36
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 297.82388,
        "total": 220091.84
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 298.97473,
        "total": 80125.23
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 299.55725,
        "total": 219875.03
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 298.69565,
        "total": 508977.38
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 297.97137,
        "total": 552736.9
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 298.4419,
        "total": 625534.25
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 297.9678,
        "total": 560775.4
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 298.0545,
        "total": 634260
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 297.8939,
        "total": 509100.66
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 298.026,
        "total": 518863.28
      }
    }
  ],
  "Anna Ming\nanna": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 298.66162,
        "total": 2389.293
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 296.75195,
        "total": 12166.83
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 281.45706,
        "total": 4503.313
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 299.06067,
        "total": 897.182
      }
    }
  ],
  "Stacey Yang\nstacey": [
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 294.12854,
        "total": 34707.168
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 299.4226,
        "total": 1497.113
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 300.915,
        "total": 300.915
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 300.35834,
        "total": 901.075
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 299.47287,
        "total": 49113.555
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 272.86246,
        "total": 4638.662
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 296.69354,
        "total": 16318.144
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 294.66278,
        "total": 11197.186
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 300.36456,
        "total": 9912.031
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 294.36383,
        "total": 5298.549
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 302.30176,
        "total": 2418.414
      }
    }
  ],
  "Sergey Skugarev\nsergey": [
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 298.53793,
        "total": 74335.945
      }
    }
  ],
  "Lili Wang\nliliwang": [
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 299.30405,
        "total": 45793.52
      }
    }
  ]
}
