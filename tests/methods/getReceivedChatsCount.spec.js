
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getReceivedChatsCount'

// жду фикси на беке
// asyncTest({
//   methodName,
//   level: 'account',
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE_ACCOUNT),
// })
// asyncTest({
//   methodName,
//   level: 'operators',
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE_OPERATORS),
// })
// asyncTest({
//   methodName,
//   level: 'departments',
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE_DEPARTMENTS),
// })
// asyncTest({
//   methodName,
//   level: {operators: 'Talia Bush\ntalia'},
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE_CUSTOM_OPERATORS),
// })
// asyncTest({
//   methodName,
//   level: {departments: 'Sales'},
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS),
// })
// asyncTest({
//   methodName,
//   level: {
//     operators: 'Olga Bondar\nolkinsmile',
//     departments: 'Customer Support'
//   },
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS),
// })
// asyncTest({
//   methodName,
//   level: {
//     operators: ['Tanya Laskin\ntanya', 'noSuchOperator','Olga Bondar\nolkinsmile'],
//     departments: ['Sales', 'Customer Support', 'noSuchDepart']
//   },
//   timePeriod: 'DEFAULT_TIME_PERIOD',
//   callback: res => expect(res).toEqual(PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS),
// })
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
      "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 836
    },
    {
      "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 1099
    },
    {
      "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 886
    },
    {
      "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 319
    },
    {
      "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 805
    },
    {
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 423
    },
    {
      "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 1100
    },
    {
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1085
    },
    {
      "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 1400
    },
    {
      "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 2567
    },
    {
      "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 5383
    },
    {
      "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 3199
    },
    {
      "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 2544
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2324
    }
  ]
};
const PROCESSED_RESPONSE_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 107
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 156
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 156
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 55
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 153
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 85
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 209
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 231
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 277
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 489
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 953
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 652
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 456
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 411
      }
    ],
    "Tanya Laskin\ntanya": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 3
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 8
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 23
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 3
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ],
    "Anna Ming\nanna": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 111
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 152
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 91
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 7
      }
    ],
    "Helen Yarkin\nhelen": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 44
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 82
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 35
      }
    ],
    "Alexa Logman\nalexa": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 114
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 165
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 161
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 60
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 122
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 68
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 218
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 191
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 284
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 326
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 780
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 598
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 476
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 364
      }
    ],
    "Olga Bondar\nolkinsmile": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 85
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 87
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 93
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 13
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 93
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 28
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 111
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 70
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 109
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 297
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 803
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 384
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 194
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 230
      }
    ],
    "Lili Wang\nliliwang": [
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 74
      }
    ],
    "Stacey Yang\nstacey": [
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 79
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 55
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 136
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 58
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 160
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 176
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 206
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 468
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 848
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 537
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 429
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 447
      }
    ],
    "Mary Babich\nshukshyna": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 63
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 82
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 66
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 20
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 13
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 10
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 33
      }
    ],
    "Caroline Canton\ncaroline": [
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 1
      }
    ],
    "Irene Rogers\nirene": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 196
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 209
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 124
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 66
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 196
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 114
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 264
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 251
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 351
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 710
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 1301
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 843
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 554
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 488
      }
    ],
    "Sergey Skugarev\nsergey": [
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 1
      }
    ],
    "Maria Lebed\nmarileb": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 115
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 166
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 81
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 43
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 92
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 70
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 128
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 132
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 170
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 268
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 674
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 182
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 361
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 383
      }
    ]
  }
};
const PROCESSED_RESPONSE_DEPARTMENTS = {
  "departments": {
    "Customer Support": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 356
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 540
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 438
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 173
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 391
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 197
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 515
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 510
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 634
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 194
      }
    ],
    "~": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 230
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 226
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 201
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 75
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 194
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 110
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 257
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 253
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 341
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 2229
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 5383
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 3199
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 2544
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2324
      }
    ],
    "Sales": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 250
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 333
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 247
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 71
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 220
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 116
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 328
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 322
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 425
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 144
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 107
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 156
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 156
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 55
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 153
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 85
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 209
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 231
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 277
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 489
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 953
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 652
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 456
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 411
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS = {
  "departments": {
    "Sales": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 250
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 333
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 247
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 71
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 220
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 116
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 328
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 322
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 425
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 144
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Olga Bondar\nolkinsmile": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 85
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 87
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 93
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 13
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 93
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 28
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 111
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 70
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 109
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 297
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 803
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 384
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 194
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 230
      }
    ]
  },
  "departments": {
    "Customer Support": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 356
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 540
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 438
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 173
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 391
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 197
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 515
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 510
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 634
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 194
      }
    ]
  }
};
const PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 3
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 8
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 23
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 3
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ],
    "noSuchOperator": "No statistics for this operator/department!",
    "Olga Bondar\nolkinsmile": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 85
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 87
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 93
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 13
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 93
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 28
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 111
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 70
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 109
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 297
      },
      {
        "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 803
      },
      {
        "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 384
      },
      {
        "01-Jul-2020 04:00:00 - 01-Aug-2020 04:00:00": 194
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 230
      }
    ]
  },
  "departments": {
    "Sales": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 250
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 333
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 247
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 71
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 220
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 116
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 328
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 322
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 425
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 144
      }
    ],
    "Customer Support": [
      {
        "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 356
      },
      {
        "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 540
      },
      {
        "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 438
      },
      {
        "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 173
      },
      {
        "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 391
      },
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 197
      },
      {
        "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 515
      },
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 510
      },
      {
        "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 634
      },
      {
        "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 194
      }
    ],
    "noSuchDepart": "No statistics for this operator/department!"
  }
};
