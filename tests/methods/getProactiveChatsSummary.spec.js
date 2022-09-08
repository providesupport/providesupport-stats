
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getProactiveChatsSummary'

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
  "account": {
    "sent": 6,
    "declined": 3,
    "accepted": 2,
    "acceptanceRate": "33%"
  }
};
const PROCESSED_RESPONSE_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": {
      "sent": 3,
      "declined": 2,
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "Not enough statistics to calculate this metric!"
    },
    "Tanya Laskin\ntanya": {
      "sent": 1,
      "declined": 1,
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "Not enough statistics to calculate this metric!"
    },
    "Olga Bondar\nolkinsmile": {
      "sent": 1,
      "accepted": 1,
      "declined": "No statistics for this metric!",
      "acceptanceRate": "100%"
    },
    "Alexa Logman\nalexa": {
      "sent": 1,
      "accepted": 1,
      "declined": "No statistics for this metric!",
      "acceptanceRate": "100%"
    }
  }
};
const PROCESSED_RESPONSE_DEPARTMENTS = {
  "departments": {
    "Customer Support": {
      "sent": 6,
      "declined": 3,
      "accepted": 2,
      "acceptanceRate": "33%"
    },
    "Sales": {
      "sent": 6,
      "declined": 3,
      "accepted": 2,
      "acceptanceRate": "33%"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS = {
  "operators": {
    "Talia Bush\ntalia": {
      "sent": 3,
      "declined": 2,
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "Not enough statistics to calculate this metric!"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_DEPARTMENTS = {
  "departments": {
    "Sales": {
      "sent": 6,
      "declined": 3,
      "accepted": 2,
      "acceptanceRate": "33%"
    }
  }
};
const PROCESSED_RESPONSE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Olga Bondar\nolkinsmile": {
      "sent": 1,
      "accepted": 1,
      "declined": "No statistics for this metric!",
      "acceptanceRate": "100%"
    }
  },
  "departments": {
    "Customer Support": {
      "sent": 6,
      "declined": 3,
      "accepted": 2,
      "acceptanceRate": "33%"
    }
  }
};
const PROCESSED_RESPONSE_MULTIPLE_CUSTOM_OPERATORS_AND_DEPARTMENTS = {
  "operators": {
    "Tanya Laskin\ntanya": {
      "sent": 1,
      "declined": 1,
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "Not enough statistics to calculate this metric!"
    },
    "noSuchOperator": "No statistics for this operator/department!",
    "Olga Bondar\nolkinsmile": {
      "sent": 1,
      "accepted": 1,
      "declined": "No statistics for this metric!",
      "acceptanceRate": "100%"
    }
  },
  "departments": {
    "Sales": {
      "sent": 6,
      "declined": 3,
      "accepted": 2,
      "acceptanceRate": "33%"
    },
    "Customer Support": {
      "sent": 6,
      "declined": 3,
      "accepted": 2,
      "acceptanceRate": "33%"
    },
    "noSuchDepart": "No statistics for this operator/department!"
  }
};
