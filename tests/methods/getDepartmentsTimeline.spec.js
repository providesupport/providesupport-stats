
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getDepartmentsTimeline'

asyncTest({
  methodName,
  timePeriod: 'SHORT_TIME_PERIOD',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE),
})
// asyncTest({
//   methodName,
//   timePeriod: 'PAST_TIME_PERIOD',
//   callback: res => expect(res).toEqual(NO_STATS_FOR_PAST_TIME_PERIOD),
// })
// asyncTest({
//   methodName,
//   timePeriod: 'FUTURE_TIME_PERIOD',
//   callback: res => expect(res).toEqual(NO_STATS_FOR_FUTURE_TIME_PERIOD),
// })


/* OUTPUT */
const PROCESSED_RESPONSE = {
  "Customer Support": {
    "chatsSent": {
      "total": 0,
      "timeline": [
        {
          "01-Jun-2019 04:00:00 - 02-Jun-2019 04:00:00": 0
        },
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "chatsMissed": {
      "total": 0,
      "timeline": [
        {
          "01-Jun-2019 04:00:00 - 02-Jun-2019 04:00:00": 0
        }
      ]
    },
    "loadRate": {
      "total": "0%",
      "timeline": [
        {
          "01-Jun-2019 04:00:00 - 02-Jun-2019 04:00:00": "0%"
        },
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": "0%"
        }
      ]
    },
    "chatsAccepted": "No statistics for this metric!",
    "acceptanceRate": "No statistics for this metric!",
    "chatAcceptTime": "No statistics for this metric!",
    "onlineTime": "No statistics for this metric!",
    "proficiency": "No statistics for this metric!",
    "politeness": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "offlineTime": "Not enough statistics to calculate this metric!"
  }
};
