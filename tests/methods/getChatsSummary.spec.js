import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getChatsSummary'

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
  level: { departments: 'Sales' },
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
  "account": {
    "sent": 23977,
    "missed": 5339,
    "accepted": 14744,
    "acceptanceRate": "61%"
  }
};
const PROCESSED_RESPONSE_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": {
      "sent": 4390,
      "missed": 405,
      "accepted": 3178,
      "acceptanceRate": "72%"
    },
    "Tanya Laskin\ntanya": {
      "sent": 40,
      "missed": 1,
      "accepted": 39,
      "acceptanceRate": "98%"
    },
    "Anna Ming\nanna": {
      "sent": 361,
      "missed": 6,
      "accepted": 382,
      "acceptanceRate": "106%"
    },
    "Helen Yarkin\nhelen": {
      "sent": 161,
      "missed": 27,
      "accepted": 133,
      "acceptanceRate": "83%"
    },
    "Alexa Logman\nalexa": {
      "sent": 3932,
      "missed": 1642,
      "accepted": 1601,
      "acceptanceRate": "41%"
    },
    "Olga Bondar\nolkinsmile": {
      "sent": 2597,
      "missed": 449,
      "accepted": 1604,
      "acceptanceRate": "62%"
    },
    "Lili Wang\nliliwang": {
      "sent": 74,
      "missed": 9,
      "accepted": 49,
      "acceptanceRate": "66%"
    },
    "Stacey Yang\nstacey": {
      "sent": 3599,
      "missed": 535,
      "accepted": 2620,
      "acceptanceRate": "73%"
    },
    "Mary Babich\nshukshyna": {
      "sent": 287,
      "missed": 9,
      "accepted": 271,
      "acceptanceRate": "94%"
    },
    "Caroline Canton\ncaroline": {
      "sent": 1,
      "missed": 1,
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "No statistics for this metric!"
    },
    "Irene Rogers\nirene": {
      "sent": 5667,
      "missed": 1106,
      "accepted": 3705,
      "acceptanceRate": "65%"
    },
    "Sergey Skugarev\nsergey": {
      "sent": 1,
      "missed": 1,
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "No statistics for this metric!"
    },
    "Maria Lebed\nmarileb": {
      "sent": 2867,
      "missed": 1148,
      "accepted": 1162,
      "acceptanceRate": "41%"
    }
  }
};
const PROCESSED_RESPONSE_DEPARTMENTS = {
  "departments": {
    "Customer Support": {
      "sent": 3948,
      "missed": 1109,
      "accepted": 2695,
      "acceptanceRate": "68%"
    },
    "~": {
      "sent": 17573,
      "missed": 3596,
      "accepted": 10435,
      "acceptanceRate": "59%"
    },
    "Sales": {
      "sent": 2456,
      "missed": 634,
      "accepted": 1614,
      "acceptanceRate": "66%"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": {
      "sent": 4390,
      "missed": 405,
      "accepted": 3178,
      "acceptanceRate": "72%"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS = {
  "departments": {
    "Sales": {
      "sent": 2456,
      "missed": 634,
      "accepted": 1614,
      "acceptanceRate": "66%"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Olga Bondar\nolkinsmile": {
      "sent": 2597,
      "missed": 449,
      "accepted": 1604,
      "acceptanceRate": "62%"
    }
  },
  "departments": {
    "Customer Support": {
      "sent": 3948,
      "missed": 1109,
      "accepted": 2695,
      "acceptanceRate": "68%"
    }
  }
};
const PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": {
      "sent": 40,
      "missed": 1,
      "accepted": 39,
      "acceptanceRate": "98%"
    },
    "noSuchOperator": "No statistics for this operator/department!",
    "Olga Bondar\nolkinsmile": {
      "sent": 2597,
      "missed": 449,
      "accepted": 1604,
      "acceptanceRate": "62%"
    }
  },
  "departments": {
    "Sales": {
      "sent": 2456,
      "missed": 634,
      "accepted": 1614,
      "acceptanceRate": "66%"
    },
    "Customer Support": {
      "sent": 3948,
      "missed": 1109,
      "accepted": 2695,
      "acceptanceRate": "68%"
    },
    "noSuchDepart": "No statistics for this operator/department!"
  }
};
