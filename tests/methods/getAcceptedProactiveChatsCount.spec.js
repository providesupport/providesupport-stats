

import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getAcceptedProactiveChatsCount'

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
  level: {operators: 'Alexa Logman\nalexa'},
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
      "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
    }
  ]
};
const PROCESSED_RESPONSE_OPERATORS = {
  "operators": {
    "Olga Bondar\nolkinsmile": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      }
    ],
    "Alexa Logman\nalexa": [
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ]
  }
};
const PROCESSED_RESPONSE_DEPARTMENTS = {
  "departments": {
    "Customer Support": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ],
    "Sales": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS = {
  "operators": {
    "Alexa Logman\nalexa": [
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ]
  }
}
const PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS = {
  "departments": {
    "Sales": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ]
  }
}
const PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Olga Bondar\nolkinsmile": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      }
    ]
  },
  "departments": {
    "Customer Support": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ]
  }
};
const PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": "No statistics for this operator/department!",
    "noSuchOperator": "No statistics for this operator/department!",
    "Olga Bondar\nolkinsmile": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      }
    ]
  },
  "departments": {
    "Sales": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ],
    "Customer Support": [
      {
        "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
      }
    ],
    "noSuchDepart": "No statistics for this operator/department!"
  }
};
