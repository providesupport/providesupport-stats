
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getOperatorMessagesCount'

asyncTest({
  methodName,
  level: 'account',
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_ACCOUNT),
})
asyncTest({
  methodName,
  level: 'operators',
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_OPERATORS),
})
asyncTest({
  methodName,
  level: 'departments',
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_DEPARTMENTS),
})
asyncTest({
  methodName,
  level: {operators: 'Talia Bush\ntalia'},
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_CUSTOM_OPERATORS),
})
asyncTest({
  methodName,
  level: {departments: 'Sales'},
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS),
})
asyncTest({
  methodName,
  level: {
    operators: 'Olga Bondar\nolkinsmile',
    departments: 'Customer Support'
  },
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS),
})
asyncTest({
  methodName,
  level: {
    operators: ['Tanya Laskin\ntanya', 'noSuchOperator','Olga Bondar\nolkinsmile'],
    departments: ['Sales', 'Customer Support', 'noSuchDepart']
  },
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS),
})
asyncTest({
  methodName,
  level: 'account',
  timePeriod: 'PAST_TIME_PERIOD',
  callback: res => expect(res).toEqual(NO_STATS_FOR_PAST_TIME_PERIOD),
})
asyncTest({
  methodName,
  level: 'account',
  timePeriod: 'FUTURE_TIME_PERIOD',
  callback: res => expect(res).toEqual(NO_STATS_FOR_FUTURE_TIME_PERIOD),
})

/* OUTPUT */
const PROCESSED_RESPONSE_ACCOUNT = {
  "account": [
    {
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
        "average": 4.6753864,
        "total": 3932
      }
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
        "average": 5.3478656,
        "total": 5888
      }
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
        "average": 4.986471,
        "total": 4423
      }
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
        "average": 4.803738,
        "total": 1542
      }
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
        "average": 5.2150803,
        "total": 4219
      }
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
        "average": 5.4870586,
        "total": 2332
      }
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
        "average": 3.8482385,
        "total": 4260
      }
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
        "average": 3.9160516,
        "total": 4245
      }
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
        "average": 3.9257674,
        "total": 5500
      }
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
        "average": 4.569704,
        "total": 11735
      }
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
        "average": 3.9484708,
        "total": 21302
      }
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
        "average": 3.4169269,
        "total": 10941
      }
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
        "average": 3.4544742,
        "total": 8802
      }
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
        "average": 3.704526,
        "total": 8676
      }
    }
  ]
};
const PROCESSED_RESPONSE_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 7.047619,
          "total": 740
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 7.3943663,
          "total": 1050
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 6.3071427,
          "total": 883
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 5.7708335,
          "total": 277
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.114286,
          "total": 996
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 6.7972975,
          "total": 503
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 5.870968,
          "total": 1092
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 5.858586,
          "total": 1160
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 5.977612,
          "total": 1602
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 5.8722467,
          "total": 2666
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4.9367504,
          "total": 4527
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 4.7803164,
          "total": 2720
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 5.3614774,
          "total": 2032
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 5.674603,
          "total": 2145
        }
      }
    ],
    "Tanya Laskin\ntanya": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 1,
          "total": 1
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 0.5,
          "total": 1
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 0.6666667,
          "total": 2
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 2.25,
          "total": 18
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4,
          "total": 92
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 9,
          "total": 18
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 1,
          "total": 1
        }
      }
    ],
    "Anna Ming\nanna": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 6.151515,
          "total": 812
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 8.597826,
          "total": 1582
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 7.548077,
          "total": 785
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 9.571428,
          "total": 67
        }
      }
    ],
    "Helen Yarkin\nhelen": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 3.825,
          "total": 153
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 3.890411,
          "total": 284
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 2.625,
          "total": 63
        }
      }
    ],
    "Alexa Logman\nalexa": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 12.14,
          "total": 607
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 9.059524,
          "total": 761
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 8.575,
          "total": 686
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 6.1578946,
          "total": 117
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 8.796296,
          "total": 475
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 12.083333,
          "total": 435
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 7.7738094,
          "total": 653
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 7.3448277,
          "total": 639
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 6.3142858,
          "total": 884
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 8.231788,
          "total": 1243
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 5.68623,
          "total": 2519
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 5.0782313,
          "total": 1493
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 5.304167,
          "total": 1273
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 7.4233127,
          "total": 1210
        }
      }
    ],
    "Olga Bondar\nolkinsmile": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 6.0757575,
          "total": 401
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.25,
          "total": 350
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 5.641791,
          "total": 378
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 4.6666665,
          "total": 42
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 5.5384617,
          "total": 288
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 8.055555,
          "total": 145
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.0163937,
          "total": 367
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 6.68,
          "total": 334
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 4.3448277,
          "total": 252
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 5.834821,
          "total": 1307
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4.7349043,
          "total": 3215
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 6.018182,
          "total": 1324
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 4.945652,
          "total": 455
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 4.9041095,
          "total": 716
        }
      }
    ],
    "Lili Wang\nliliwang": [
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 6.696429,
          "total": 375
        }
      }
    ],
    "Stacey Yang\nstacey": [
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 7.45679,
          "total": 604
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 11.4262295,
          "total": 697
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 10.007299,
          "total": 1371
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 8.553846,
          "total": 556
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.825301,
          "total": 1133
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 6.2380953,
          "total": 1048
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 6.0673075,
          "total": 1262
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 7.1267896,
          "total": 3485
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 6.766119,
          "total": 5352
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 6.5678735,
          "total": 2903
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 6.698061,
          "total": 2418
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 6.3228345,
          "total": 2409
        }
      }
    ],
    "Mary Babich\nshukshyna": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 4.292308,
          "total": 279
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 4.638554,
          "total": 385
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 4.870968,
          "total": 302
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 4.7894735,
          "total": 91
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 4.6923075,
          "total": 61
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 4.8,
          "total": 48
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 3.2121212,
          "total": 106
        }
      }
    ],
    "Irene Rogers\nirene": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 4.1791043,
          "total": 560
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 5.557823,
          "total": 817
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 5.6989245,
          "total": 530
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 3.840909,
          "total": 169
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 4.3925924,
          "total": 593
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 4.769231,
          "total": 434
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 4.0591717,
          "total": 686
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 3.6067417,
          "total": 642
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 3.8854167,
          "total": 1119
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 3.7263682,
          "total": 2247
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 3.2185154,
          "total": 3859
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 3.1266186,
          "total": 2173
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 3.7440634,
          "total": 1419
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 3.8038673,
          "total": 1377
        }
      }
    ],
    "Maria Lebed\nmarileb": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 5.921875,
          "total": 379
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.59,
          "total": 659
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 6.193548,
          "total": 192
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 5.857143,
          "total": 82
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.25,
          "total": 435
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 6.3170733,
          "total": 259
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 5.4038463,
          "total": 281
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 5.625,
          "total": 315
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 6.3166666,
          "total": 379
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 6.4827585,
          "total": 752
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 5.788779,
          "total": 1754
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 5.382353,
          "total": 366
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 5.1552796,
          "total": 830
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 5.8014183,
          "total": 818
        }
      }
    ]
  }
};
const PROCESSED_RESPONSE_DEPARTMENTS = {
  "departments": {
    "Sales": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 5.122549,
          "total": 1045
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.935484,
          "total": 1935
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 6.2474227,
          "total": 1212
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 7.2777777,
          "total": 393
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.3294797,
          "total": 1268
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 5.9058824,
          "total": 502
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.242574,
          "total": 1261
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 4.9698277,
          "total": 1153
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 4.933544,
          "total": 1559
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 4.8333335,
          "total": 435
        }
      }
    ],
    "Customer Support": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 5.876,
          "total": 1469
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.650367,
          "total": 2720
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 7.0868263,
          "total": 2367
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 6.5607476,
          "total": 702
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.0431657,
          "total": 1958
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 8.060811,
          "total": 1193
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.3121386,
          "total": 2184
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 6.2411923,
          "total": 2303
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 6.2521186,
          "total": 2951
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 6.15873,
          "total": 776
        }
      }
    ],
    "~": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 6.985222,
          "total": 1418
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.812155,
          "total": 1233
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 5.4805193,
          "total": 844
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 7.45,
          "total": 447
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.0928574,
          "total": 993
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 6.923913,
          "total": 637
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 4.5277777,
          "total": 815
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 4.614035,
          "total": 789
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 4.177215,
          "total": 990
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 5.7446694,
          "total": 10507
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4.895063,
          "total": 21318
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 4.8021836,
          "total": 10997
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 5.2769785,
          "total": 8802
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 5.519084,
          "total": 8676
        }
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 7.047619,
          "total": 740
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 7.3943663,
          "total": 1050
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 6.3071427,
          "total": 883
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 5.7708335,
          "total": 277
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.114286,
          "total": 996
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 6.7972975,
          "total": 503
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 5.870968,
          "total": 1092
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 5.858586,
          "total": 1160
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 5.977612,
          "total": 1602
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 5.8722467,
          "total": 2666
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4.9367504,
          "total": 4527
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 4.7803164,
          "total": 2720
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 5.3614774,
          "total": 2032
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 5.674603,
          "total": 2145
        }
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS = {
  "departments": {
    "Sales": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 5.122549,
          "total": 1045
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.935484,
          "total": 1935
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 6.2474227,
          "total": 1212
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 7.2777777,
          "total": 393
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.3294797,
          "total": 1268
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 5.9058824,
          "total": 502
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.242574,
          "total": 1261
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 4.9698277,
          "total": 1153
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 4.933544,
          "total": 1559
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 4.8333335,
          "total": 435
        }
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Olga Bondar\nolkinsmile": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 6.0757575,
          "total": 401
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.25,
          "total": 350
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 5.641791,
          "total": 378
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 4.6666665,
          "total": 42
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 5.5384617,
          "total": 288
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 8.055555,
          "total": 145
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.0163937,
          "total": 367
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 6.68,
          "total": 334
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 4.3448277,
          "total": 252
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 5.834821,
          "total": 1307
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4.7349043,
          "total": 3215
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 6.018182,
          "total": 1324
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 4.945652,
          "total": 455
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 4.9041095,
          "total": 716
        }
      }
    ]
  },
  "departments": {
    "Customer Support": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 5.876,
          "total": 1469
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.650367,
          "total": 2720
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 7.0868263,
          "total": 2367
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 6.5607476,
          "total": 702
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.0431657,
          "total": 1958
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 8.060811,
          "total": 1193
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.3121386,
          "total": 2184
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 6.2411923,
          "total": 2303
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 6.2521186,
          "total": 2951
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 6.15873,
          "total": 776
        }
      }
    ]
  }
};
const PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 1,
          "total": 1
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 0.5,
          "total": 1
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 0.6666667,
          "total": 2
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 2.25,
          "total": 18
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4,
          "total": 92
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 9,
          "total": 18
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 1,
          "total": 1
        }
      }
    ],
    "noSuchOperator": "No statistics for this operator/department!",
    "Olga Bondar\nolkinsmile": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 6.0757575,
          "total": 401
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.25,
          "total": 350
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 5.641791,
          "total": 378
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 4.6666665,
          "total": 42
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 5.5384617,
          "total": 288
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 8.055555,
          "total": 145
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.0163937,
          "total": 367
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 6.68,
          "total": 334
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 4.3448277,
          "total": 252
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 5.834821,
          "total": 1307
        }
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": {
          "average": 4.7349043,
          "total": 3215
        }
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": {
          "average": 6.018182,
          "total": 1324
        }
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": {
          "average": 4.945652,
          "total": 455
        }
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": {
          "average": 4.9041095,
          "total": 716
        }
      }
    ]
  },
  "departments": {
    "Sales": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 5.122549,
          "total": 1045
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.935484,
          "total": 1935
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 6.2474227,
          "total": 1212
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 7.2777777,
          "total": 393
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.3294797,
          "total": 1268
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 5.9058824,
          "total": 502
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.242574,
          "total": 1261
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 4.9698277,
          "total": 1153
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 4.933544,
          "total": 1559
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 4.8333335,
          "total": 435
        }
      }
    ],
    "Customer Support": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": {
          "average": 5.876,
          "total": 1469
        }
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": {
          "average": 6.650367,
          "total": 2720
        }
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": {
          "average": 7.0868263,
          "total": 2367
        }
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": {
          "average": 6.5607476,
          "total": 702
        }
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": {
          "average": 7.0431657,
          "total": 1958
        }
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": {
          "average": 8.060811,
          "total": 1193
        }
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": {
          "average": 6.3121386,
          "total": 2184
        }
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": {
          "average": 6.2411923,
          "total": 2303
        }
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": {
          "average": 6.2521186,
          "total": 2951
        }
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": {
          "average": 6.15873,
          "total": 776
        }
      }
    ],
    "noSuchDepart": "No statistics for this operator/department!"
  }
};
