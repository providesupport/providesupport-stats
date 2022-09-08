
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getDeclinedProactiveChatsCount'

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
    operators: 'Tanya Laskin\ntanya',
    departments: 'Customer Support'
  },
  timePeriod: 'DEFAULT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS),
})
asyncTest({
  methodName,
  level: {
    operators: ['Tanya Laskin\ntanya', 'noSuchOperator','Talia Bush\ntalia'],
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
      "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
    },
    {
      "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
    }
  ]
};
const PROCESSED_RESPONSE_OPERATORS = {
  "operators": {
    "Tanya Laskin\ntanya": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      }
    ],
    "Talia Bush\ntalia": [
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ]
  }
};
const PROCESSED_RESPONSE_DEPARTMENTS = {
  "departments": {
    "Customer Support": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ],
    "Sales": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": [
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS = {
  "departments": {
    "Sales": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ]
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      }
    ]
  },
  "departments": {
    "Customer Support": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ]
  }
};
const PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      }
    ],
    "noSuchOperator": "No statistics for this operator/department!",
    "Talia Bush\ntalia": [
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ]
  },
  "departments": {
    "Sales": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ],
    "Customer Support": [
      {
        "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 1
      },
      {
        "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 2
      }
    ],
    "noSuchDepart": "No statistics for this operator/department!"
  }
};
