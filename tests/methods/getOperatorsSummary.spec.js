
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getOperatorsSummary'

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
  "Talia Bush\ntalia": {
    "chatsSent": 4390,
    "chatAcceptTime": [
      17.55092,
      "17s"
    ],
    "chatsMissed": 405,
    "onlineTime": [
      8270624.5,
      "3m 4d 17h 23m 44s"
    ],
    "chatsAccepted": 3178,
    "awayTime": [
      233312.3,
      "2d 16h 48m 32s"
    ],
    "proactiveChatsSent": 3,
    "proactiveChatsDeclined": 2,
    "politeness": {
      "average": 4.6865673,
      "total": 1884
    },
    "proficiency": {
      "average": 4.6591477,
      "total": 1859
    },
    "acceptanceRate": "72%",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "18%",
    "offlineTime": [
      30894463,
      "11m 22d 13h 47m 43s"
    ],
    "login": "talia",
    "name": "Talia Bush"
  },
  "Tanya Laskin\ntanya": {
    "chatsSent": 40,
    "chatAcceptTime": [
      15.798359,
      "15s"
    ],
    "chatsMissed": 1,
    "onlineTime": [
      4774.687,
      "1h 19m 34s"
    ],
    "chatsAccepted": 39,
    "awayTime": [
      6558573,
      "2m 15d 21h 49m 33s"
    ],
    "proactiveChatsSent": 1,
    "proactiveChatsDeclined": 1,
    "politeness": {
      "average": 4.4444447,
      "total": 40
    },
    "proficiency": {
      "average": 4.375,
      "total": 35
    },
    "acceptanceRate": "98%",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "0%",
    "offlineTime": [
      32835052,
      "1y 15d 50m 52s"
    ],
    "login": "tanya",
    "name": "Tanya Laskin"
  },
  "Anna Ming\nanna": {
    "chatsSent": 361,
    "chatAcceptTime": [
      13.888367,
      "13s"
    ],
    "chatsMissed": 6,
    "onlineTime": [
      1391662.4,
      "16d 2h 34m 22s"
    ],
    "chatsAccepted": 382,
    "awayTime": [
      19956.617,
      "5h 32m 36s"
    ],
    "politeness": {
      "average": 4.893617,
      "total": 230
    },
    "proficiency": {
      "average": 4.87234,
      "total": 229
    },
    "acceptanceRate": "106%",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "2%",
    "offlineTime": [
      37986780,
      "1y 2m 13d 15h 53m"
    ],
    "login": "anna",
    "name": "Anna Ming"
  },
  "Helen Yarkin\nhelen": {
    "chatsSent": 161,
    "chatAcceptTime": [
      17.572903,
      "17s"
    ],
    "chatsMissed": 27,
    "onlineTime": [
      509630.38,
      "5d 21h 33m 50s"
    ],
    "chatsAccepted": 133,
    "awayTime": [
      193490.5,
      "2d 5h 44m 50s"
    ],
    "politeness": {
      "average": 4.2173915,
      "total": 97
    },
    "proficiency": {
      "average": 4.2608695,
      "total": 98
    },
    "acceptanceRate": "83%",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "1%",
    "offlineTime": [
      38695279,
      "1y 2m 22d 20h 41m 19s"
    ],
    "login": "helen",
    "name": "Helen Yarkin"
  },
  "Alexa Logman\nalexa": {
    "chatsSent": 3932,
    "chatAcceptTime": [
      26.47034,
      "26s"
    ],
    "chatsMissed": 1642,
    "onlineTime": [
      7578667.5,
      "2m 26d 17h 11m 7s"
    ],
    "chatsAccepted": 1601,
    "awayTime": [
      46913.824,
      "13h 1m 53s"
    ],
    "proactiveChatsSent": 1,
    "proactiveChatsAccepted": 1,
    "politeness": {
      "average": 4.884273,
      "total": 1646
    },
    "proficiency": {
      "average": 4.857143,
      "total": 1632
    },
    "acceptanceRate": "41%",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "16%",
    "offlineTime": [
      31772818,
      "1y 2d 17h 46m 58s"
    ],
    "login": "alexa",
    "name": "Alexa Logman"
  },
  "Olga Bondar\nolkinsmile": {
    "chatsSent": 2597,
    "chatAcceptTime": [
      25.410128,
      "25s"
    ],
    "chatsMissed": 449,
    "onlineTime": [
      4065451.2,
      "1m 16d 1h 17m 31s"
    ],
    "chatsAccepted": 1604,
    "awayTime": [
      1590867.8,
      "18d 9h 54m 27s"
    ],
    "proactiveChatsSent": 1,
    "proactiveChatsAccepted": 1,
    "politeness": {
      "average": 4.551913,
      "total": 833
    },
    "proficiency": {
      "average": 4.5409837,
      "total": 831
    },
    "acceptanceRate": "62%",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "11%",
    "offlineTime": [
      33742080,
      "1y 25d 12h 48m"
    ],
    "login": "olkinsmile",
    "name": "Olga Bondar"
  },
  "Lili Wang\nliliwang": {
    "chatsSent": 74,
    "chatAcceptTime": [
      26.21596,
      "26s"
    ],
    "chatsMissed": 9,
    "onlineTime": [
      123510.305,
      "1d 10h 18m 30s"
    ],
    "chatsAccepted": 49,
    "awayTime": [
      45793.52,
      "12h 43m 13s"
    ],
    "politeness": {
      "average": 5,
      "total": 35
    },
    "proficiency": {
      "average": 5,
      "total": 35
    },
    "acceptanceRate": "66%",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "0%",
    "offlineTime": [
      39229096,
      "1y 2m 28d 58m 16s"
    ],
    "login": "liliwang",
    "name": "Lili Wang"
  },
  "Stacey Yang\nstacey": {
    "chatsSent": 3599,
    "chatAcceptTime": [
      14.328397,
      "14s"
    ],
    "chatsMissed": 535,
    "onlineTime": [
      6971057,
      "2m 19d 16h 24m 17s"
    ],
    "chatsAccepted": 2620,
    "awayTime": [
      136302.81,
      "1d 13h 51m 42s"
    ],
    "politeness": {
      "average": 4.793103,
      "total": 1529
    },
    "proficiency": {
      "average": 4.725,
      "total": 1512
    },
    "acceptanceRate": "73%",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "15%",
    "offlineTime": [
      32291040,
      "1y 8d 17h 44m"
    ],
    "login": "stacey",
    "name": "Stacey Yang"
  },
  "Mary Babich\nshukshyna": {
    "chatsSent": 287,
    "chatAcceptTime": [
      15.905815,
      "15s"
    ],
    "chatsMissed": 9,
    "onlineTime": [
      938206.44,
      "10d 20h 36m 46s"
    ],
    "chatsAccepted": 271,
    "awayTime": [
      218411.84,
      "2d 12h 40m 11s"
    ],
    "politeness": {
      "average": 4.794872,
      "total": 187
    },
    "proficiency": {
      "average": 4.769231,
      "total": 186
    },
    "acceptanceRate": "94%",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "1%",
    "offlineTime": [
      38241781,
      "1y 2m 16d 14h 43m 1s"
    ],
    "login": "shukshyna",
    "name": "Mary Babich"
  },
  "Caroline Canton\ncaroline": {
    "chatsSent": 1,
    "chatsMissed": 1,
    "awayTime": [
      5259528.5,
      "2m 20h 58m 48s"
    ],
    "chatsAccepted": "No statistics for this metric!",
    "acceptanceRate": "No statistics for this metric!",
    "chatAcceptTime": "No statistics for this metric!",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "onlineTime": "No statistics for this metric!",
    "proficiency": "No statistics for this metric!",
    "politeness": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "0%",
    "offlineTime": "Not enough statistics to calculate this metric!",
    "login": "caroline",
    "name": "Caroline Canton"
  },
  "Irene Rogers\nirene": {
    "chatsSent": 5667,
    "chatAcceptTime": [
      17.862097,
      "17s"
    ],
    "chatsMissed": 1106,
    "onlineTime": [
      9105591,
      "3m 14d 9h 19m 51s"
    ],
    "chatsAccepted": 3705,
    "awayTime": [
      448809.56,
      "5d 4h 40m 9s"
    ],
    "politeness": {
      "average": 4.806794,
      "total": 2264
    },
    "proficiency": {
      "average": 4.787234,
      "total": 2250
    },
    "acceptanceRate": "65%",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "24%",
    "offlineTime": [
      29843999,
      "11m 10d 9h 59m 59s"
    ],
    "login": "irene",
    "name": "Irene Rogers"
  },
  "Sergey Skugarev\nsergey": {
    "chatsSent": 1,
    "chatsMissed": 1,
    "onlineTime": [
      306.164,
      "5m 6s"
    ],
    "awayTime": [
      74335.945,
      "20h 38m 55s"
    ],
    "chatsAccepted": "No statistics for this metric!",
    "acceptanceRate": "No statistics for this metric!",
    "chatAcceptTime": "No statistics for this metric!",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "proficiency": "No statistics for this metric!",
    "politeness": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "0%",
    "offlineTime": [
      39323757,
      "1y 2m 29d 3h 15m 57s"
    ],
    "login": "sergey",
    "name": "Sergey Skugarev"
  },
  "Maria Lebed\nmarileb": {
    "chatsSent": 2867,
    "chatAcceptTime": [
      31.526863,
      "31s"
    ],
    "chatsMissed": 1148,
    "onlineTime": [
      6133837,
      "2m 10d 23h 50m 37s"
    ],
    "chatsAccepted": 1162,
    "awayTime": [
      21701.006,
      "6h 1m 41s"
    ],
    "politeness": {
      "average": 4.8727274,
      "total": 804
    },
    "proficiency": {
      "average": 4.8679247,
      "total": 774
    },
    "acceptanceRate": "41%",
    "proactiveChatsSent": "No statistics for this metric!",
    "proactiveChatsAccepted": "No statistics for this metric!",
    "proactiveChatsDeclined": "No statistics for this metric!",
    "casesSolved": "No statistics for this metric!",
    "unsolvedCases": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "12%",
    "offlineTime": [
      33242861,
      "1y 19d 18h 7m 41s"
    ],
    "login": "marileb",
    "name": "Maria Lebed"
  }
};
