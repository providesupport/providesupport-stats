
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getDepartmentsSummary'

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
  "Sales": {
    "chatsSent": 2456,
    "chatAcceptTime": [
      19.215744,
      "19s"
    ],
    "chatsMissed": 634,
    "onlineTime": [
      32846346,
      "1y 15d 3h 59m 6s"
    ],
    "chatsAccepted": 1614,
    "politeness": {
      "average": 4.679487,
      "total": 1095
    },
    "proficiency": {
      "average": 4.6738195,
      "total": 1089
    },
    "acceptanceRate": "66%",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "10%",
    "offlineTime": [
      6552053,
      "2m 15d 20h 53s"
    ]
  },
  "Customer Support": {
    "chatsSent": 3948,
    "chatAcceptTime": [
      21.162958,
      "21s"
    ],
    "chatsMissed": 1109,
    "onlineTime": [
      32846346,
      "1y 15d 3h 59m 6s"
    ],
    "chatsAccepted": 2695,
    "politeness": {
      "average": 4.491803,
      "total": 3014
    },
    "proficiency": {
      "average": 4.4678626,
      "total": 2989
    },
    "acceptanceRate": "68%",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "16%",
    "offlineTime": [
      6552053,
      "2m 15d 20h 53s"
    ]
  },
  "~": {
    "chatsSent": 17573,
    "chatAcceptTime": [
      19.651987,
      "19s"
    ],
    "chatsMissed": 3596,
    "chatsAccepted": 10435,
    "politeness": {
      "average": 4.708298,
      "total": 5617
    },
    "proficiency": {
      "average": 4.6677938,
      "total": 5522
    },
    "acceptanceRate": "59%",
    "onlineTime": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "73%",
    "offlineTime": "Not enough statistics to calculate this metric!"
  }
};
