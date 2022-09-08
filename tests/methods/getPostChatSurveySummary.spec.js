
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getPostChatSurveySummary'

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
export const PROCESSED_RESPONSE_ACCOUNT = {
  "account": {
    "politeness": {
      "average": 4.6358438,
      "total": 9726
    },
    "proficiency": {
      "average": 4.6043167,
      "total": 9600
    },
    "caseSolved": "No statistics for this metric!",
    "caseNotSolved": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!"
  }
};
const PROCESSED_RESPONSE_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": {
      "politeness": {
        "average": 4.6865673,
        "total": 1884
      },
      "proficiency": {
        "average": 4.6591477,
        "total": 1859
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Tanya Laskin\ntanya": {
      "politeness": {
        "average": 4.4444447,
        "total": 40
      },
      "proficiency": {
        "average": 4.375,
        "total": 35
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Anna Ming\nanna": {
      "politeness": {
        "average": 4.893617,
        "total": 230
      },
      "proficiency": {
        "average": 4.87234,
        "total": 229
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Helen Yarkin\nhelen": {
      "politeness": {
        "average": 4.2173915,
        "total": 97
      },
      "proficiency": {
        "average": 4.2608695,
        "total": 98
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Alexa Logman\nalexa": {
      "politeness": {
        "average": 4.884273,
        "total": 1646
      },
      "proficiency": {
        "average": 4.857143,
        "total": 1632
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Olga Bondar\nolkinsmile": {
      "politeness": {
        "average": 4.551913,
        "total": 833
      },
      "proficiency": {
        "average": 4.5409837,
        "total": 831
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Lili Wang\nliliwang": {
      "politeness": {
        "average": 5,
        "total": 35
      },
      "proficiency": {
        "average": 5,
        "total": 35
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Stacey Yang\nstacey": {
      "politeness": {
        "average": 4.793103,
        "total": 1529
      },
      "proficiency": {
        "average": 4.725,
        "total": 1512
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Mary Babich\nshukshyna": {
      "politeness": {
        "average": 4.794872,
        "total": 187
      },
      "proficiency": {
        "average": 4.769231,
        "total": 186
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Irene Rogers\nirene": {
      "politeness": {
        "average": 4.806794,
        "total": 2264
      },
      "proficiency": {
        "average": 4.787234,
        "total": 2250
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Maria Lebed\nmarileb": {
      "politeness": {
        "average": 4.8727274,
        "total": 804
      },
      "proficiency": {
        "average": 4.8679247,
        "total": 774
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    }
  }
};
const PROCESSED_RESPONSE_DEPARTMENTS = {
  "departments": {
    "~": {
      "politeness": {
        "average": 4.708298,
        "total": 5617
      },
      "proficiency": {
        "average": 4.6677938,
        "total": 5522
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Sales": {
      "politeness": {
        "average": 4.679487,
        "total": 1095
      },
      "proficiency": {
        "average": 4.6738195,
        "total": 1089
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Customer Support": {
      "politeness": {
        "average": 4.491803,
        "total": 3014
      },
      "proficiency": {
        "average": 4.4678626,
        "total": 2989
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": {
      "politeness": {
        "average": 4.6865673,
        "total": 1884
      },
      "proficiency": {
        "average": 4.6591477,
        "total": 1859
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS = {
  "departments": {
    "Sales": {
      "politeness": {
        "average": 4.679487,
        "total": 1095
      },
      "proficiency": {
        "average": 4.6738195,
        "total": 1089
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Olga Bondar\nolkinsmile": {
      "politeness": {
        "average": 4.551913,
        "total": 833
      },
      "proficiency": {
        "average": 4.5409837,
        "total": 831
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    }
  },
  "departments": {
    "Customer Support": {
      "politeness": {
        "average": 4.491803,
        "total": 3014
      },
      "proficiency": {
        "average": 4.4678626,
        "total": 2989
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    }
  }
};
const PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": {
      "politeness": {
        "average": 4.4444447,
        "total": 40
      },
      "proficiency": {
        "average": 4.375,
        "total": 35
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "noSuchOperator": "No statistics for this operator/department!",
    "Olga Bondar\nolkinsmile": {
      "politeness": {
        "average": 4.551913,
        "total": 833
      },
      "proficiency": {
        "average": 4.5409837,
        "total": 831
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    }
  },
  "departments": {
    "Sales": {
      "politeness": {
        "average": 4.679487,
        "total": 1095
      },
      "proficiency": {
        "average": 4.6738195,
        "total": 1089
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "Customer Support": {
      "politeness": {
        "average": 4.491803,
        "total": 3014
      },
      "proficiency": {
        "average": 4.4678626,
        "total": 2989
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "noSuchDepart": "No statistics for this operator/department!"
  }
};
