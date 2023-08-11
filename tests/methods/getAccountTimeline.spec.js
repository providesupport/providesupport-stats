
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getAccountTimeline'

asyncTest({
    methodName,
    timePeriod: 'SHORT_TIME_PERIOD',
    callback: res => expect(res).toEqual(PROCESSED_RESPONSE),
})
asyncTest({
    methodName,
    timePeriod: 'SHORT_TIME_PERIOD5',
    callback: res => expect(res).toEqual(PROCESSED_RESPONSE2),
})
asyncTest({
    methodName,
    timePeriod: 'SHORT_TIME_PERIOD6',
    callback: res => expect(res).toEqual(PROCESSED_RESPONSE3),
})
asyncTest({
  methodName,
  timePeriod: 'SHORT_TIME_PERIOD7',
  callback: res => expect(res).toEqual(PROCESSED_RESPONSE4),
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
  "preChatSurvey": {
      "loads": {
          "total": 1,
          "timeline": [
              {
                  "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 1
              },
              {
                  "03-Jun-2019 04:00:00 - 04-Jun-2019 04:00:00": 0
              }
          ]
      },
      "clickThroughRate": {
          "total": "0%",
          "timeline": [
              {
                  "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": "0%"
              },
              {
                  "03-Jun-2019 04:00:00 - 04-Jun-2019 04:00:00": "0%"
              }
          ]
      },
      "referrers": {
          "https://www.providesupport.com/": {
              "total": 0,
              "timeline": [
                  {
                      "03-Jun-2019 04:00:00 - 04-Jun-2019 04:00:00": 0
                  }
              ]
          },
          "https://www.providesupport.com/integrations/shopify.html": {
              "total": 1,
              "timeline": [
                  {
                      "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 1
                  }
              ]
          }
      },
      "submits": "No statistics for this metric!"
  },
  "chats": {
      "sent": {
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
      "acceptanceRate": {
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
      "missed": {
          "total": 0,
          "timeline": [
              {
                  "01-Jun-2019 04:00:00 - 02-Jun-2019 04:00:00": 0
              }
          ]
      },
      "accepted": "No statistics for this metric!"
  },
  "onlinePresence": {
      "chatOnlineTime": "No statistics for this metric!",
      "chatOfflineTime": "Not enough statistics to calculate this metric!"
  },
  "averages": {
      "chatAcceptTime": "No statistics for this metric!",
      "preChatSurveyFilloutTime": "No statistics for this metric!",
      "offlineFormFilloutTime": "No statistics for this metric!",
      "visitorMessagesPerChat": "No statistics for this metric!",
      "operatorMessagesPerChat": "No statistics for this metric!",
      "operatorResponseTime": "No statistics for this metric!",
      "visitorResponseTime": "No statistics for this metric!"
  },
  "offlineForm": {
      "loads": "No statistics for this metric!",
      "submits": "No statistics for this metric!",
      "clickThroughRate": "No statistics for this metric!",
      "referrers": "No statistics for this metric!"
  },
  "proactiveChats": {
      "sent": "No statistics for this metric!",
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "No statistics for this metric!",
      "declined": "No statistics for this metric!"
  },
  "postChatSurvey": {
      "proficiency": "No statistics for this metric!",
      "politeness": "No statistics for this metric!",
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
  }
}

const PROCESSED_RESPONSE2 = {
    "onlinePresence": {
      "chatOnlineTime": {
        "total": {
          "total": [
            1293202.6,
            "14d 23h 13m 22s"
          ],
          "average": [
            299.35245,
            "4m 59s"
          ]
        },
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": [
              10694.876,
              "2h 58m 14s"
            ]
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": [
              86118.19,
              "23h 55m 18s"
            ]
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": [
              86334.24,
              "23h 58m 54s"
            ]
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": [
              86351.63,
              "23h 59m 11s"
            ]
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": [
              85700.73,
              "23h 48m 20s"
            ]
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": [
              86041.92,
              "23h 54m 1s"
            ]
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": [
              86195.78,
              "23h 56m 35s"
            ]
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": [
              86316.51,
              "23h 58m 36s"
            ]
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": [
              86407.79,
              "1d 7s"
            ]
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": [
              86090.55,
              "23h 54m 50s"
            ]
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": [
              86306.06,
              "23h 58m 26s"
            ]
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": [
              86210.34,
              "23h 56m 50s"
            ]
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": [
              86062.38,
              "23h 54m 22s"
            ]
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": [
              86474.57,
              "1d 1m 14s"
            ]
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": [
              86385.18,
              "23h 59m 45s"
            ]
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": [
              75511.84,
              "20h 58m 31s"
            ]
          }
        ]
      },
      "chatOfflineTime": {
        "total": [
          89287,
          "1d 48m 7s"
        ],
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": [
              75706,
              "21h 1m 46s"
            ]
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": [
              282,
              "4m 42s"
            ]
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": [
              66,
              "1m 6s"
            ]
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": [
              49,
              "49s"
            ]
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": [
              700,
              "11m 40s"
            ]
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": [
              359,
              "5m 59s"
            ]
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": [
              205,
              "3m 25s"
            ]
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": [
              84,
              "1m 24s"
            ]
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": [
              0,
              "0s"
            ]
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": [
              310,
              "5m 10s"
            ]
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": [
              94,
              "1m 34s"
            ]
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": [
              190,
              "3m 10s"
            ]
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": [
              338,
              "5m 38s"
            ]
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": [
              0,
              "0s"
            ]
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": [
              15,
              "15s"
            ]
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": [
              10889,
              "3h 1m 29s"
            ]
          }
        ]
      }
    },
    "averages": {
      "chatAcceptTime": {
        "total": {
          "total": [
            9512.105,
            "2h 38m 32s"
          ],
          "average": [
            33.73087,
            "33s"
          ]
        },
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": [
              15.677,
              "15s"
            ]
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": [
              20.506882,
              "20s"
            ]
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": [
              37.67663,
              "37s"
            ]
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": [
              12.9432,
              "12s"
            ]
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": [
              16.9756,
              "16s"
            ]
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": [
              15.181077,
              "15s"
            ]
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": [
              17.044565,
              "17s"
            ]
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": [
              15.104222,
              "15s"
            ]
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": [
              20.573523,
              "20s"
            ]
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": [
              14.184,
              "14s"
            ]
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": [
              205.99805,
              "3m 25s"
            ]
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": [
              26.367111,
              "26s"
            ]
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": [
              15.9565,
              "15s"
            ]
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": [
              19.520428,
              "19s"
            ]
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": [
              15.446529,
              "15s"
            ]
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": [
              21.330772,
              "21s"
            ]
          }
        ]
      },
      "preChatSurveyFilloutTime": {
        "total": {
          "total": [
            25774.924,
            "7h 9m 34s"
          ],
          "average": [
            59.80261,
            "59s"
          ]
        },
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": [
              21.288,
              "21s"
            ]
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": [
              33.05809,
              "33s"
            ]
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": [
              125.809456,
              "2m 5s"
            ]
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": [
              32.34792,
              "32s"
            ]
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": [
              49.676117,
              "49s"
            ]
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": [
              55.048286,
              "55s"
            ]
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": [
              45.320553,
              "45s"
            ]
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": [
              53.169174,
              "53s"
            ]
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": [
              134.637,
              "2m 14s"
            ]
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": [
              42.12077,
              "42s"
            ]
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": [
              42.697407,
              "42s"
            ]
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": [
              51.592052,
              "51s"
            ]
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": [
              55.969,
              "55s"
            ]
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": [
              40.51825,
              "40s"
            ]
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": [
              44.42944,
              "44s"
            ]
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": [
              46.261463,
              "46s"
            ]
          }
        ]
      },
      "visitorMessagesPerChat": {
        "total": {
          "average": 4.8406467,
          "total": 2096
        },
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 6.6666665
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 6.818182
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 4.714286
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 6.25
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 7.125
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 4.695652
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 5.137931
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 4.1034484
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 4.6410255
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 3.609756
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 3.65625
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 4
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 3.64
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 6.4166665
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 4.16
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 6.296296
          }
        ]
      },
      "operatorMessagesPerChat": {
        "total": {
          "average": 3.9792147,
          "total": 1723
        },
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 6
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 6.590909
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 4.885714
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 5.9166665
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 5.0625
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 3.9130435
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 4.137931
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 3.689655
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 3.5897436
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 2.804878
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 3.03125
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1.9230769
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 2.72
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 4.0416665
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 3.48
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 6.296296
          }
        ]
      },
      "operatorResponseTime": {
        "total": {
          "total": [
            120432.36,
            "1d 9h 27m 12s"
          ],
          "average": [
            73.56894,
            "1m 13s"
          ]
        },
        "timeline": [
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": [
              34.158142,
              "34s"
            ]
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": [
              89.471565,
              "1m 29s"
            ]
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": [
              73.181854,
              "1m 13s"
            ]
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": [
              81.888504,
              "1m 21s"
            ]
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": [
              42.344303,
              "42s"
            ]
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": [
              81.50309,
              "1m 21s"
            ]
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": [
              80.66574,
              "1m 20s"
            ]
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": [
              39.807083,
              "39s"
            ]
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": [
              27.842754,
              "27s"
            ]
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": [
              94.184845,
              "1m 34s"
            ]
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": [
              240.75339,
              "4m"
            ]
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": [
              24.814604,
              "24s"
            ]
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": [
              58.77132,
              "58s"
            ]
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": [
              41.28953,
              "41s"
            ]
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": [
              77.73465,
              "1m 17s"
            ]
          }
        ]
      },
      "visitorResponseTime": {
        "total": {
          "total": [
            74309.805,
            "20h 38m 29s"
          ],
          "average": [
            54.201168,
            "54s"
          ]
        },
        "timeline": [
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": [
              49.949528,
              "49s"
            ]
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": [
              55.947613,
              "55s"
            ]
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": [
              72.594,
              "1m 12s"
            ]
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": [
              53.349285,
              "53s"
            ]
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": [
              107.03446,
              "1m 47s"
            ]
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": [
              82.930176,
              "1m 22s"
            ]
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": [
              69.60845,
              "1m 9s"
            ]
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": [
              45.80504,
              "45s"
            ]
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": [
              49.325268,
              "49s"
            ]
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": [
              31.90192,
              "31s"
            ]
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": [
              41.108242,
              "41s"
            ]
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": [
              35.965225,
              "35s"
            ]
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": [
              29.558529,
              "29s"
            ]
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": [
              25.480688,
              "25s"
            ]
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": [
              43.52512,
              "43s"
            ]
          }
        ]
      },
      "offlineFormFilloutTime": "No statistics for this metric!"
    },
    "preChatSurvey": {
      "loads": {
        "total": 1162,
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 6
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 77
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 85
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 78
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 52
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 61
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 84
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 72
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 79
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 106
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 56
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 74
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 80
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 69
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 87
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 96
          }
        ]
      },
      "submits": {
        "total": 431,
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 3
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 22
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 35
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 25
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 17
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 21
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 29
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 29
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 38
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 39
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 32
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 39
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 25
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 24
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 25
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 28
          }
        ]
      },
      "clickThroughRate": {
        "total": "37%",
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": "50%"
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": "29%"
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": "41%"
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": "32%"
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": "33%"
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": "34%"
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": "35%"
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": "40%"
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": "48%"
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": "37%"
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": "57%"
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": "53%"
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": "31%"
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": "35%"
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": "29%"
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": "29%"
          }
        ]
      },
      "referrers": {
        "https://www.providesupport.com/blog/real-time-visitor-monitoring-in-chat-support/": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/": {
          "total": 218,
          "timeline": [
            {
              "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 1
            },
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 12
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 16
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 16
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 13
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 10
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 24
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 13
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 18
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 14
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 8
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 14
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 16
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 15
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 12
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 16
            }
          ]
        },
        "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/": {
          "total": 42,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 5
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 3
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 3
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 4
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 2
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 5
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 4
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 2
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 5
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 2
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 5
            }
          ]
        },
        "https://www.providesupport.cn/": {
          "total": 43,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 4
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 2
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 4
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 3
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 5
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 3
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 5
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 4
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 3
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 2
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 4
            }
          ]
        },
        "https://www.providesupport.ru/": {
          "total": 2,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/customer-service-dos-and-donts/": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/": {
          "total": 2,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 2
            }
          ]
        },
        "https://www.providesupport.com/blog/7-customer-service-challenges/": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/live-chat-etiquette-basics-how-to-ask-questions-correctly/": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "http://operator.providesupport.com/": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://operator.providesupport.com/action/main/login": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/#": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/10-reasons-customers-complain/": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/positive-phrases-and-empathy-statements-for-customer-service/": {
          "total": 3,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 2
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/8-ways-to-say-no-to-customers-with-examples/": {
          "total": 6,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 2
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/7-tips-for-maintaining-a-positive-attitude-in-customer-service/": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/how-to-add-a-chat-button-to-blogger/": {
          "total": 6,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/8-simple-ways-to-reach-customers/": {
          "total": 3,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/live-chat-etiquette-10-tips-for-being-polite-on-live-chat/": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/manual/about.htm": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/7-tips-for-more-effective-communication-with-customers-and-coworkers/": {
          "total": 2,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/10-barriers-outstanding-customer-service/": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/history-of-customer-service-and-future-trends-infographic/": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/manual/current_features.htm": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/how-to-choose-the-right-live-chat-plugin-for-your-wordpress-website/": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://stats.providesupport.com/login": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/manual/chats-reporting.htm": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/manual/chat_button_codes_overview.htm": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/password-sent-confirmation": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/tag/live-chat-etiquette/": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/billing/shopping-cart/shopping-cart": {
          "total": 1,
          "timeline": [
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/password-sent-confirmation": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code-updated": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/billing/shopping-cart/shopping-cart": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.ru/live-chat-for-iphone": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/billing/payment/bitcoin/thank-you": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com.pt/live-chat-integrations/live-chat-for-outlook": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/billing/payment/bitcoin/payment-form": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://op.providesupport.com/": {
          "total": 151,
          "timeline": [
            {
              "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 1
            },
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 7
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 10
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 11
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 6
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 16
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 17
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 10
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 10
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 23
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 3
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 6
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 3
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 9
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 8
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 11
            }
          ]
        },
        "https://op.providesupport.com/login": {
          "total": 4,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/admin/login": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://op.providesupport.com/password-recovery": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/permission-denied": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/signup": {
          "total": 36,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 5
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 3
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 3
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 3
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 4
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 3
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 3
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 3
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 2
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 2
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/about-us": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-pharmacy-site": {
          "total": 17,
          "timeline": [
            {
              "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 1
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 2
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 2
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 2
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 3
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 2
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/login": {
          "total": 11,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 2
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 3
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 2
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/my-account/setup-instructions/noscript-code": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/company/update/profile/update-company-profile-form": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/login": {
          "total": 4,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.es/live-chat-pharmacy-site": {
          "total": 4,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-support-web-designers": {
          "total": 1,
          "timeline": [
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.ru/live-chat-canned-responses": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/password-recovery-form": {
          "total": 2,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-pricing": {
          "total": 7,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 2
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 2,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 3,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/password-recovery-form": {
          "total": 2,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 7,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 2
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 3
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/about-us": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-bank-customer-service": {
          "total": 4,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/my-account/billing/payment/card/update-payment-info-form": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/dashboard": {
          "total": 2,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/index": {
          "total": 2,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/dashboard": {
          "total": 3,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 2
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/live-chat-apps": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-help-insurance": {
          "total": 8,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 3
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 2
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/company/update/index": {
          "total": 4,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/setup-instructions/noscript-code": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/signup": {
          "total": 10,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 2
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 2
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/web-chat-agent-app": {
          "total": 2,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/my-account/dashboard": {
          "total": 2,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-window": {
          "total": 10,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 4
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 1,
          "timeline": [
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/dashboard": {
          "total": 4,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/my-account/company/update/index": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-apps": {
          "total": 3,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-for-iphone": {
          "total": 6,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/index": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/live-chat-gallery/post-chat-surveys": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/company/update/index": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/operators-and-departments": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/my-account/trial/create-trial-account-confirmation": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 7,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 2
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 4,
          "timeline": [
            {
              "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 1
            },
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/spell-checker-in-live-chat": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/setup-instructions/index": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/my-account/live-demo": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-help-education-website": {
          "total": 1,
          "timeline": [
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-integrations/live-chat-for-outlook": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code": {
          "total": 3,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 2,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/live-chat-pricing": {
          "total": 8,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 2
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 3
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 3,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/desktop-chat-agent-app": {
          "total": 2,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/my-account/dashboard": {
          "total": 4,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/canned-response/update-canned-response-form": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-video-tutorials": {
          "total": 2,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.jp/case-studies/ma4salebyowner": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/my-account/dashboard": {
          "total": 3,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/my-account/live-demo": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.fr/live-chat-pharmacy-site": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-visitor-monitoring": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-help-real-estate-website": {
          "total": 10,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 2
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/index": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/live-demo": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/operators-and-departments": {
          "total": 6,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin7.providesupport.com/my-account/trial/create-trial-account-confirmation": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/company/update/index": {
          "total": 3,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 3
            }
          ]
        },
        "https://www.providesupport.cn/desktop-chat-agent-app": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-integrations": {
          "total": 2,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/live-demo": {
          "total": 2,
          "timeline": [
            {
              "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/chat-agent-app-for-linux": {
          "total": 4,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/setup-instructions/index": {
          "total": 2,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/trial/create-trial-account-confirmation": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/trial/create-trial-account-confirmation": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/live-chat-apps/releases": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/index": {
          "total": 3,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/company/update/index": {
          "total": 2,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/trial/create-trial-account-confirmation": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/faq": {
          "total": 5,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 2
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/billing/shopping-cart/add-standard-package": {
          "total": 2,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/web-chat-agent-app": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/trial/create-trial-account-confirmation": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/about-us": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/live-support-hosting": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 2,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/operators-and-departments": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/setup-instructions/custom-images-code": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-for-android": {
          "total": 9,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 2
            },
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 2
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 3
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/about-us": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/faq": {
          "total": 2,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/my-account/setup-instructions/index": {
          "total": 2,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/canned-response/canned-response-list": {
          "total": 2,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-car-rental": {
          "total": 3,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/company/update/transcript/update-company-transcript-form": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/company/update/index": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/billing/upgrade": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-government-helpdesk": {
          "total": 2,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/canned-response/canned-response-list": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/billing/payment/alipay/alipay-update-billing-contact": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/company/update/system-messages/update-company-messages-form": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www-providesupport-com.translate.goog/blog/10-barriers-outstanding-customer-service/": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.fr/live-chat-integrations/live-chat-for-outlook": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.de/live-chat-pharmacy-site": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/live-demo": {
          "total": 2,
          "timeline": [
            {
              "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/permission-denied": {
          "total": 2,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 2
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/billing/shopping-cart/add-standard-package": {
          "total": 2,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/about-us": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/live-chat-integrations": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-auto-sales": {
          "total": 3,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            },
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/billing/upgrade": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/company/update/chat-invitation/update-chat-invitation-form": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/my-account/operators-and-departments": {
          "total": 2,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/my-account/setup-instructions/noscript-code": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code": {
          "total": 2,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-features": {
          "total": 5,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            },
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-support-consulting": {
          "total": 3,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/my-account/billing/shopping-cart/add-standard-package": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/company/update/system-messages/update-company-messages-form": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 2,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
          "total": 2,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/company/update/call-distribution/update-company-call-distribution-form": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/live-chat-affiliate-partnership/referrals": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/index": {
          "total": 2,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            },
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/canned-response/canned-response-list": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/billing/index": {
          "total": 2,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/company/update/connection/update-company-connection-form": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/desktop-chat-agent-app": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/company/update/connection/update-company-connection-form": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/news/live-chat-news-2022": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/operator/number-of-operators-exceeded": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/live-chat-gallery/header-pictures": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/de/my-account/live-demo": {
          "total": 1,
          "timeline": [
            {
              "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/manual/data-overview.htm": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/company/update/analytics/update-company-analytics-form": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/index": {
          "total": 2,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            },
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/how-to-start": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/articles": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/company/update/chat-stats/update-chat-stats-form": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/company/update/chat-stats/update-chat-stats-form": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/setup-instructions/standard-code": {
          "total": 1,
          "timeline": [
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/my-account/billing/shopping-cart/add-standard-package": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/billing/index": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/#lg=1&slide=0": {
          "total": 3,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            },
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/trial/create-trial-account-confirmation": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/company/update/system-messages/update-company-messages-form": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/billing/shopping-cart/add-standard-package": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/signup": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/managing-chat-agent-profiles": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/web-chat-agent-app": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/operator/update-operator-form": {
          "total": 1,
          "timeline": [
            {
              "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/about-us": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/company/update/call-distribution/update-company-call-distribution-form": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/billing/invoice/invoice-details": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code-updated": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/billing/invoice/invoice-details": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-canned-responses": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.fr/live-chat-integrations/live-chat-for-joomla": {
          "total": 2,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 2
            }
          ]
        },
        "https://www.providesupport.com/blog/10-shopify-apps-for-better-customer-experience/": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/billing/invoice/invoice-details": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/company/update/chat-invitation/update-chat-invitation-form": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/company/update/analytics/update-company-analytics-form": {
          "total": 1,
          "timeline": [
            {
              "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/chat-online-presence-monitoring": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/billing/invoice/invoice-details": {
          "total": 1,
          "timeline": [
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/billing/upgrade": {
          "total": 1,
          "timeline": [
            {
              "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/help/troubleshooting": {
          "total": 1,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/handle-angry-customers-infographic/": {
          "total": 1,
          "timeline": [
            {
              "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/login": {
          "total": 1,
          "timeline": [
            {
              "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/billing/payment/card/payment-form": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/live-chat-affiliate-partnership": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.ru/live-chat-window": {
          "total": 1,
          "timeline": [
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/billing/invoice/invoice-details": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/my-account/company/update/start-chat-form/start-chat-form-fields": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/my-account/company/update/leave-message-form/leave-message-form-fields": {
          "total": 1,
          "timeline": [
            {
              "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.fr/login": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com.pt/live-chat-integrations/live-chat-for-pinnaclecart": {
          "total": 1,
          "timeline": [
            {
              "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/zh_CN/my-account/setup-instructions/textlink-code": {
          "total": 2,
          "timeline": [
            {
              "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 1
            },
            {
              "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/my-account/billing/shopping-cart/number-of-operators-exceeded": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/canned-response/create-canned-response-form": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/articles/live-chat-cheat-sheet-for-customer-service-agents-with-examples": {
          "total": 1,
          "timeline": [
            {
              "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/live-chat-pricing": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/billing/invoice/invoice-details": {
          "total": 1,
          "timeline": [
            {
              "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/billing/invoice/invoice-details": {
          "total": 1,
          "timeline": [
            {
              "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/my-account/billing/payment/card/payment-info": {
          "total": 1,
          "timeline": [
            {
              "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/best-practice-for-using-operator-picture-for-chats/": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/billing/index": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/setup-instructions/index": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/company/update/index": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.de/live-chat-integrations/live-chat-for-outlook": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/my-account/company/update/index": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/zh_CN/my-account/billing/payment/alipay/thank-you": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/live-demo": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/live-chat-apps": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/my-account/billing/index": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/zh_CN/desktop-chat-agent-app": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "http://vm.providesupport.com/": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/live-support-consulting": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/live-chat-features": {
          "total": 1,
          "timeline": [
            {
              "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 1
            }
          ]
        }
      }
    },
    "chats": {
      "sent": {
        "total": 432,
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 3
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 21
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 35
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 25
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 17
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 21
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 29
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 29
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 38
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 41
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 32
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 39
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 25
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 24
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 25
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 28
          }
        ]
      },
      "accepted": {
        "total": 282,
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 2
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 17
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 27
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 20
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 10
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 13
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 23
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 18
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 23
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 25
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 21
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 18
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 12
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 14
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 17
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 22
          }
        ]
      },
      "acceptanceRate": {
        "total": "65%",
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": "67%"
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": "81%"
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": "77%"
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": "80%"
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": "59%"
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": "62%"
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": "79%"
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": "62%"
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": "61%"
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": "61%"
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": "66%"
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": "46%"
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": "48%"
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": "58%"
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": "68%"
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": "79%"
          }
        ]
      },
      "missed": {
        "total": 150,
        "timeline": [
          {
            "10-May-2022 04:00:00 - 11-May-2022 04:00:00": 1
          },
          {
            "11-May-2022 04:00:00 - 12-May-2022 04:00:00": 4
          },
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": 8
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": 5
          },
          {
            "14-May-2022 04:00:00 - 15-May-2022 04:00:00": 7
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": 8
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": 6
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": 11
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": 15
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": 16
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": 11
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": 21
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": 13
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": 10
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": 8
          },
          {
            "25-May-2022 04:00:00 - 26-May-2022 04:00:00": 6
          }
        ]
      }
    },
    "postChatSurvey": {
      "proficiency": {
        "total": {
          "average": 4.714286,
          "total": 165
        },
        "timeline": [
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": {
              "average": 5,
              "total": 20
            }
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": {
              "average": 5,
              "total": 10
            }
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": {
              "average": 5,
              "total": 15
            }
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": {
              "average": 5,
              "total": 25
            }
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": {
              "average": 5,
              "total": 20
            }
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": {
              "average": 4,
              "total": 16
            }
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": {
              "average": 3.3333333,
              "total": 10
            }
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": {
              "average": 4.6666665,
              "total": 14
            }
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": {
              "average": 5,
              "total": 20
            }
          }
        ]
      },
      "politeness": {
        "total": {
          "average": 4.742857,
          "total": 166
        },
        "timeline": [
          {
            "12-May-2022 04:00:00 - 13-May-2022 04:00:00": {
              "average": 5,
              "total": 20
            }
          },
          {
            "13-May-2022 04:00:00 - 14-May-2022 04:00:00": {
              "average": 5,
              "total": 10
            }
          },
          {
            "15-May-2022 04:00:00 - 16-May-2022 04:00:00": {
              "average": 5,
              "total": 15
            }
          },
          {
            "16-May-2022 04:00:00 - 17-May-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "17-May-2022 04:00:00 - 18-May-2022 04:00:00": {
              "average": 5,
              "total": 25
            }
          },
          {
            "18-May-2022 04:00:00 - 19-May-2022 04:00:00": {
              "average": 5,
              "total": 20
            }
          },
          {
            "19-May-2022 04:00:00 - 20-May-2022 04:00:00": {
              "average": 4,
              "total": 16
            }
          },
          {
            "20-May-2022 04:00:00 - 21-May-2022 04:00:00": {
              "average": 3.6666667,
              "total": 11
            }
          },
          {
            "21-May-2022 04:00:00 - 22-May-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "22-May-2022 04:00:00 - 23-May-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "23-May-2022 04:00:00 - 24-May-2022 04:00:00": {
              "average": 4.6666665,
              "total": 14
            }
          },
          {
            "24-May-2022 04:00:00 - 25-May-2022 04:00:00": {
              "average": 5,
              "total": 20
            }
          }
        ]
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "offlineForm": {
      "loads": "No statistics for this metric!",
      "submits": "No statistics for this metric!",
      "clickThroughRate": "No statistics for this metric!",
      "referrers": "No statistics for this metric!"
    },
    "proactiveChats": {
      "sent": "No statistics for this metric!",
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "No statistics for this metric!",
      "declined": "No statistics for this metric!"
    }
  }

const PROCESSED_RESPONSE3 = {
    "onlinePresence": {
      "chatOnlineTime": {
        "total": {
          "total": [
            172553.28,
            "1d 23h 55m 53s"
          ],
          "average": [
            300.09265,
            "5m"
          ]
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
              86328.664,
              "23h 58m 48s"
            ]
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
              86224.62,
              "23h 57m 4s"
            ]
          }
        ]
      },
      "chatOfflineTime": {
        "total": [
          248,
          "4m 8s"
        ],
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
              72,
              "1m 12s"
            ]
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
              176,
              "2m 56s"
            ]
          }
        ]
      }
    },
    "averages": {
      "chatAcceptTime": {
        "total": {
          "total": [
            680.108,
            "11m 20s"
          ],
          "average": [
            19.431658,
            "19s"
          ]
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
              19.963846,
              "19s"
            ]
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
              19.117182,
              "19s"
            ]
          }
        ]
      },
      "preChatSurveyFilloutTime": {
        "total": {
          "total": [
            4697.532,
            "1h 18m 17s"
          ],
          "average": [
            92.10847,
            "1m 32s"
          ]
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
              53.506,
              "53s"
            ]
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
              117.01329,
              "1m 57s"
            ]
          }
        ]
      },
      "visitorMessagesPerChat": {
        "total": {
          "average": 5.5576925,
          "total": 289
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 7.3333335
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 4.354839
          }
        ]
      },
      "operatorMessagesPerChat": {
        "total": {
          "average": 4.673077,
          "total": 243
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 6.3333335
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 3.548387
          }
        ]
      },
      "operatorResponseTime": {
        "total": {
          "total": [
            18571.537,
            "5h 9m 31s"
          ],
          "average": [
            73.69658,
            "1m 13s"
          ]
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
              82.13797,
              "1m 22s"
            ]
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
              63.640312,
              "1m 3s"
            ]
          }
        ]
      },
      "visitorResponseTime": {
        "total": {
          "total": [
            11283.92,
            "3h 8m 3s"
          ],
          "average": [
            50.37464,
            "50s"
          ]
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
              59.76618,
              "59s"
            ]
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
              37.621925,
              "37s"
            ]
          }
        ]
      },
      "offlineFormFilloutTime": "No statistics for this metric!"
    },
    "preChatSurvey": {
      "loads": {
        "total": 171,
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 72
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 99
          }
        ]
      },
      "submits": {
        "total": 51,
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 20
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 31
          }
        ]
      },
      "clickThroughRate": {
        "total": "30%",
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": "28%"
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": "31%"
          }
        ]
      },
      "referrers": {
        "https://www.providesupport.com/": {
          "total": 31,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 16
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 15
            }
          ]
        },
        "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/": {
          "total": 5,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 4
            }
          ]
        },
        "https://www.providesupport.cn/": {
          "total": 9,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 3
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 6
            }
          ]
        },
        "https://www.providesupport.ru/": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/fun-operator-greetings/": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/manual/current_features.htm": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://op.providesupport.com/": {
          "total": 23,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 5
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 18
            }
          ]
        },
        "https://admin5.providesupport.com/": {
          "total": 2,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 2
            }
          ]
        },
        "https://www.providesupport.com/signup": {
          "total": 9,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 8
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-pharmacy-site": {
          "total": 7,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 5
            }
          ]
        },
        "https://www.providesupport.com/login": {
          "total": 3,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 2
            }
          ]
        },
        "https://www.providesupport.com/privacy-policy": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-bank-customer-service": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin10.providesupport.com/my-account/dashboard": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/signup": {
          "total": 2,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-window": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/company/update/index": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/setup-instructions/index": {
          "total": 2,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 2
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/my-account/operators-and-departments": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin9.providesupport.com/zh_CN/my-account/setup-instructions/direct-link-code": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/live-chat-pricing": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 2,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-help-real-estate-website": {
          "total": 4,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
            },
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 2
            }
          ]
        },
        "https://admin5.providesupport.com/zh_CN/my-account/operators-and-departments": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/faq": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/index": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.cn/index": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/company/update/messenger/update-company-old-messenger-form": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin7.providesupport.com/zh_CN/live-chat-for-iphone": {
          "total": 1,
          "timeline": [
            {
              "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/how-to-add-a-chat-button-to-blogger/": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/blog/social-media-role-customer-service-infographic/": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/manual/modern-chat-window-editing.htm": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://op.providesupport.com/login": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/live-chat-pricing": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://www.providesupport.com/password-recovery-form": {
          "total": 2,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
            }
          ]
        },
        "https://www.providesupport.com/live-help-insurance": {
          "total": 2,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
            }
          ]
        },
        "https://admin5.providesupport.com/my-account/dashboard": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/my-account/dashboard": {
          "total": 2,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/index": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/my-account/dashboard": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/zh_CN/my-account/dashboard": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin11.providesupport.com/zh_CN/my-account/company/update/system-messages/update-company-messages-form": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/my-account/company/update/images/update-company-images-form": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin12.providesupport.com/my-account/live-demo": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin5.providesupport.com/my-account/company/update/index": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        },
        "https://admin6.providesupport.com/my-account/setup-instructions/noscript-code": {
          "total": 1,
          "timeline": [
            {
              "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            }
          ]
        }
      }
    },
    "chats": {
      "sent": {
        "total": 52,
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 21
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 31
          }
        ]
      },
      "accepted": {
        "total": 35,
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 13
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 22
          }
        ]
      },
      "acceptanceRate": {
        "total": "67%",
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": "62%"
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": "71%"
          }
        ]
      },
      "missed": {
        "total": 16,
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 7
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 9
          }
        ]
      }
    },
    "postChatSurvey": {
      "proficiency": {
        "total": {
          "average": 5,
          "total": 15
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
              "average": 5,
              "total": 10
            }
          }
        ]
      },
      "politeness": {
        "total": {
          "average": 5,
          "total": 15
        },
        "timeline": [
          {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
              "average": 5,
              "total": 5
            }
          },
          {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
              "average": 5,
              "total": 10
            }
          }
        ]
      },
      "caseSolved": "No statistics for this metric!",
      "caseNotSolved": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!"
    },
    "offlineForm": {
      "loads": "No statistics for this metric!",
      "submits": "No statistics for this metric!",
      "clickThroughRate": "No statistics for this metric!",
      "referrers": "No statistics for this metric!"
    },
    "proactiveChats": {
      "sent": "No statistics for this metric!",
      "accepted": "No statistics for this metric!",
      "acceptanceRate": "No statistics for this metric!",
      "declined": "No statistics for this metric!"
    }
  }

const PROCESSED_RESPONSE4 = {
  "onlinePresence": {
    "chatOnlineTime": {
      "total": {
        "total": [
          7505735,
          "2m 26d 20h 55m 35s"
        ],
        "average": [
          299.66602,
          "4m 59s"
        ]
      },
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": [
            227294.36,
            "2d 15h 8m 14s"
          ]
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": [
            2224429.2,
            "25d 17h 53m 49s"
          ]
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": [
            2569501.8,
            "29d 17h 45m 1s"
          ]
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": [
            2484509.5,
            "28d 18h 8m 29s"
          ]
        }
      ]
    },
    "chatOfflineTime": {
      "total": [
        2858667,
        "1m 2d 2h 4m 27s"
      ],
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": [
            2451106,
            "28d 8h 51m 46s"
          ]
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": [
            194771,
            "2d 6h 6m 11s"
          ]
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": [
            105299,
            "1d 5h 14m 59s"
          ]
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": [
            107491,
            "1d 5h 51m 31s"
          ]
        }
      ]
    }
  },
  "averages": {
    "chatAcceptTime": {
      "total": {
        "total": [
          53221.043,
          "14h 47m 1s"
        ],
        "average": [
          17.943708,
          "17s"
        ]
      },
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": [
            17.43186,
            "17s"
          ]
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": [
            18.454144,
            "18s"
          ]
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": [
            17.526709,
            "17s"
          ]
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": [
            17.979992,
            "17s"
          ]
        }
      ]
    },
    "preChatSurveyFilloutTime": {
      "total": {
        "total": [
          382501.7,
          "4d 10h 15m 1s"
        ],
        "average": [
          75.177216,
          "1m 15s"
        ]
      },
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": [
            74.39649,
            "1m 14s"
          ]
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": [
            74.91615,
            "1m 14s"
          ]
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": [
            77.33574,
            "1m 17s"
          ]
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": [
            73.47321,
            "1m 13s"
          ]
        }
      ]
    },
    "visitorMessagesPerChat": {
      "total": {
        "average": 5.7424493,
        "total": 24147
      },
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5.714286
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4.9643965
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6.0713353
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6.1284404
        }
      ]
    },
    "operatorMessagesPerChat": {
      "total": {
        "average": 4.3916764,
        "total": 18467
      },
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4.6493506
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3.5247679
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4.6505237
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4.930428
        }
      ]
    },
    "offlineFormFilloutTime": "No statistics for this metric!",
    "operatorResponseTime": "No statistics for this metric!",
    "visitorResponseTime": "No statistics for this metric!"
  },
  "preChatSurvey": {
    "loads": {
      "total": 45616,
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7624
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 13482
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 13646
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10864
        }
      ]
    },
    "submits": {
      "total": 5088,
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 882
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1362
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1525
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1319
        }
      ]
    },
    "clickThroughRate": {
      "total": "11%",
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": "12%"
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": "10%"
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": "11%"
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": "12%"
        }
      ]
    },
    "referrers": {
      "https://admin11.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/view/login": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/features/google-analytics-and-live-chat.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/operators-and-departments": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/setup-instructions/custom-images-code": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 21,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/social-media-role-customer-service-infographic/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/index.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/index.html": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/help/troubleshooting/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/screenshots/visitor-messenger.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin3.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/about-us/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin3.providesupport.com/product/chat-icons-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/my-account/billing/index": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 15,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/my-account/billing/shopping-cart/add-standard-package": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/features/operator-console.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/measure-improve-first-contact-resolution-fcr-live-chat/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/integrations/live-chat-for-outlook.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/view/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-help-insurance.html": {
        "total": 42,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 19
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/product/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/dashboard": {
        "total": 33,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 11
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin5.providesupport.com/view/zh_CN/my-account/operators-and-departments": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-etiquette-tips-infographic/": {
        "total": 9,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/10-skills-for-being-awesome-at-customer-service/": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.dtm1usa.com/admin10/manual/visitors.htm": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/manual/creating_new_account.htm": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/product/header-pictures.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/downloads/release-history/release-5.9.3.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/": {
        "total": 818,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 217
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 322
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 278
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/live-demo": {
        "total": 15,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/index.html": {
        "total": 41,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 10
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 16
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/canned-response/update-canned-response-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/wp-admin/admin.php": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/view/integrations/live-chat-for-mailchimp.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/password-recovery-form": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/signup/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/help/live-chat-video-tutorials.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/password-recovery-form.html": {
        "total": 60,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 12
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 22
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 14
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://www.providesupport.cn/prices/index.html": {
        "total": 119,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 15
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 24
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 33
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 47
          }
        ]
      },
      "https://www.providesupport.com/blog/multitasking-in-customer-service/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 49,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 18
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 19
          }
        ]
      },
      "https://admin1.providesupport.com/features/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/5-tips-making-great-sales-presentation-live-chat/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "http://operator.providesupport.com/": {
        "total": 24,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 11
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.cn/integrations/shopify.html": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/update-billing-contact-confirmation": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.cn/home/terms-of-service.html": {
        "total": 20,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://www.providesupport.es/integrations/shopify.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/prepare-customer-service-emergencies/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/history": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/integrations/shopify.html": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/manual/getting_started.htm": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/10-advantages-of-real-time-website-monitoring/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/live-chat-for-outlook.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/features/other-features.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/index.html": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/product/chat-icons-sl.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-help-travel-website.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/canned-response/update-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/es/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/view/index": {
        "total": 28,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 11
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/features/visitor-monitoring.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-opencart.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/screenshots/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.ru/signup/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/using-live-chat-for-website.html": {
        "total": 6,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 9,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/home/terms-of-service.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/index": {
        "total": 33,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://www.providesupport.com/features/operator-console.html": {
        "total": 176,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 14
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 52
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 45
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 65
          }
        ]
      },
      "https://admin6.providesupport.com/es/view/my-account/setup-instructions/standard-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 7,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/home/faq.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/help/troubleshooting/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-help-education-website.html": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 9,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/blog/google-analytics-and-live-chat-integration/": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-consumers-are-changing-the-face-of-customer-service/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.jp/about-us/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/features/live-chat.html": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/the-power-of-positive-thinking-in-customer-service/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/affiliate/banners.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/downloads/release-history/release-5.9.3.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/top-customer-service-challenges/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 8,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 9,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/blog/10-ways-to-make-your-website-more-engaging/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-deal-with-customer-complaints/": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/help/glossary/console/geo-location-map.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/downloads/index.html": {
        "total": 71,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 15
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 17
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 31
          }
        ]
      },
      "https://www.providesupport.com/live-support-web-designers.html": {
        "total": 43,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 16
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 10
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://www.providesupport.com/view/my-account/how-to-start": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/manual/canceling_the_account.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/dashboard": {
        "total": 45,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 13
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 16
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/downloads/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/live-chat-etiquette-basics-how-to-ask-questions-correctly/": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/blog/": {
        "total": 37,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 23
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/index.html": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin1.providesupport.com/view/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 13,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/blog/ai-chatbots-vs-human-powered-live-chat/": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/index.html": {
        "total": 40,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 14
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 16
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://www.providesupport.com/blog/live-chat-etiquette-in-customer-service/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#billing-13": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/integrations/live-chat-for-americommerce.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/offline/update-company-offline-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/password-sent-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/billing/history": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/cancel": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/#chapter-2-movie": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/using-live-chat-for-website.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/operator/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/index.html": {
        "total": 8,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin6.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 29,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 11
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/signup/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/category/instructions/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.fr/product/testimonials-page2.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/real-cost-of-losing-customers-due-to-poor-customer-service/": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/what-to-do-if-you-cant-run-your-live-chat-247-recommendations-for-small-business/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/integrations/live-chat-for-outlook.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/valentines-day-inspired-chat-icons/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "http://www.providesupport.com.pt/features/live-chat.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-mailchimp.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/operators-and-departments": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/the-goals-to-set-for-your-customer-service-team/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/index": {
        "total": 40,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 17
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 16
          }
        ]
      },
      "https://admin12.providesupport.com/view/index": {
        "total": 38,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 12
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 14
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/blog/live-chat-module-for-magento/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/custom-images-code": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://operator.providesupport.com/view/index.html": {
        "total": 25,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/index": {
        "total": 35,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 19
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin8.providesupport.com/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/view/features/customization.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/product/chat-messenger-themes.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/help/troubleshooting/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-volusion.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/manual/operators_control_panel.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/images/update-company-images-confirmation": {
        "total": 8,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/choosing-the-best-chat-button-code-for-your-website/": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/fr/view/fr/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.cn/integrations/joomla.html": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/account_customization.htm": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin7.providesupport.com/help/troubleshooting/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/product/chat-icons-en.html": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#features-10": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/live-chat-visibility-or-do-your-visitors-know-how-to-contact-you/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/canned-response/canned-response-list": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://operator.providesupport.com/view/operator-password-sent-confirmation.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/testimonials.html": {
        "total": 64,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 28
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 11
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 15
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/setup-instructions/noscript-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/es/features/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "file:///Z:/git/ps_video_tutorial/website/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/dashboard": {
        "total": 34,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/index.html": {
        "total": 16,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.com/product/post-chat-surveys.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/home/faq.html#features-10": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.com/blog/top-benefits-of-using-embedded-chat-window-on-your-website/": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-hire-right-people-for-customer-service/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-tips-how-to-close-conversation/": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/testimonials.html": {
        "total": 151,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 23
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 38
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 38
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 52
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/screenshots/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://chat-software.providesupport.com/": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/setup-instructions/custom-images-code": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/screenshots/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/login": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/integrations/live-chat-for-outlook.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/features/other-features.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.ru/password-recovery-form.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/features/spell-checker.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/live-demo": {
        "total": 8,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/manual/managing_chat_transcripts.htm": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.es/live-help-real-estate-website.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/live-chat-car-rental.html": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.ru/screenshots/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/features/visitor-monitoring.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 48,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 13
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 18
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/screenshots/operator-console.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-dos-and-donts/#": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 14,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/zh_CN/view/my-account/billing/payment/alipay/thank-you": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/5-tips-to-train-customer-service-reps-for-more-confidence/": {
        "total": 8,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/billing/history": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.ru/using-live-chat-for-website.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/chat-invitation-bg-pictures.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/prices/index.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.cn/manual/account_profile_settings.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/index": {
        "total": 25,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/index.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/downloads/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/help/troubleshooting/symantec-endpoint-protection.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/custom-images-code": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/product/chat-icons-en.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/ru/view/my-account/billing/index": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-outlook.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/#": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/billing/payment/card/stripe/unionpay-payment-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/operators-and-departments": {
        "total": 12,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/home/terms-of-service.html": {
        "total": 69,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 9
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 34
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 12
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 14
          }
        ]
      },
      "https://www.providesupport.de/live-support-hosting.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/features/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/password-recovery-form": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/live-support-auctions.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com.pt/product/header-pictures-ru.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/features/other-features.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/index": {
        "total": 22,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 22,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/payment/card/update-payment-info-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 7,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-become-customer-service-expert/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/customers-2020-infographic/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/downloads/release-history/release-5.7.3.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/about-us/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/features/customization.html": {
        "total": 137,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 11
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 32
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 25
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 69
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/view/product/testimonials.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 36,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 34
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 6,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/how-to-start": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/index.html": {
        "total": 35,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 10
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/setup-instructions/noscript-code": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/downloads/linux.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/index": {
        "total": 24,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 11
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://www.providesupport.com/home/faq.html#general-5": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 15,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 5,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/product/chat-icons-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/data-security-and-protection-at-provide-support/": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/7-customer-service-challenges/": {
        "total": 16,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/live-demo": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://operator.providesupport.com/html/server-unavailable/server-unavailable.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/password-recovery-form": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/about-us/index.html": {
        "total": 75,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 29
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 19
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 20
          }
        ]
      },
      "https://www.providesupport.com/manual/current_features.htm": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-pinnaclecart.html": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/wordpress.html": {
        "total": 25,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 10
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/about-us/index.html": {
        "total": 45,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 12
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 14
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://admin7.providesupport.com/view/password-sent-confirmation": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/professional-but-human-communication-in-live-chat/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-add-a-chat-button-to-blogger/": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/index": {
        "total": 28,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://www.providesupport.cn/features/operator-console.html": {
        "total": 71,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 14
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 16
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 27
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 14
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          }
        ]
      },
      "https://admin12.providesupport.com/product/chat-messenger-themes.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-can-live-chat-facilitate-your-travel-agency-workflow/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/live-chat-auto-sales.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/view/login": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 22,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.de/product/chat-invitation-bg-pictures.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/de/view/de/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-chat-auto-sales.html": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.es/product/chat-icons-bg.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/10-reasons-customers-complain/": {
        "total": 83,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 23
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 33
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 27
          }
        ]
      },
      "https://www.providesupport.de/integrations/joomla.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/how-to-start": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.de/integrations/live-chat-for-outlook.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/how-to-start": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/fr/view/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/payment/paypal/paypal-update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-support-hosting.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/operator-pictures.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 10,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/product/chat-icons-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 11,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/chat-link-on-linkedin/": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/using-live-chat-for-website.html": {
        "total": 29,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 16
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/zh_CN/view/my-account/billing/payment/alipay/thank-you": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/12-reasons-to-integrate-live-chat-infographic/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/features/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/signup/index.html": {
        "total": 82,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 15
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 27
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 14
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 26
          }
        ]
      },
      "https://www.providesupport.fr/features/customization.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/setup-instructions/custom-images-code": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/help/troubleshooting/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/view/features/operator-console.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 9,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/view/password-recovery-form": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 6,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/downloads/release-history/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 17,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 10
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/code-test": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/de/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/fr/view/my-account/company/update/index": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/best-practice-for-proactive-chat-to-engage-or-not-engage/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/about_the_system.htm": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.cn/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/operator/create-operator-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/zh_CN/my-account/company/update/index": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/manual/managing_canned_responses.htm": {
        "total": 6,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 10
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-live-chat-software-can-benefit-your-insurance-business/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/operators_control_panel.htm#bulk_create_operator_profiles": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/canned-response/bulk-import-csv-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/home/faq.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/index.html": {
        "total": 26,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/live-demo": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/zh_CN/view/my-account/billing/payment/alipay/thank-you": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/fr/view/my-account/company/update/index": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.de/view/login": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.fr/integrations/live-chat-for-prestashop.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-good-content-lets-your-customers-know-you-care/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/#mobile-navigation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/setup-instructions/email-code": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/fr/view/my-account/setup-instructions/standard-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/payment/card/payment-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/payment/card/payment-info": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/5-ways-create-magic-customer-service-moments/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/index": {
        "total": 40,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 9
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 17
          }
        ]
      },
      "https://admin11.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 25,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 14
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/blog/category/tutorial/page/2/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 17,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 10
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          }
        ]
      },
      "https://www.providesupport.cn/features/visitor-monitoring.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-squarespace.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "http://www.providesupport.com/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/zh_CN/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/operators-and-departments": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/index": {
        "total": 16,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/fr/view/my-account/setup-instructions/standard-code": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/is-live-chat-any-better-than-phone-or-email-support/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/is-your-website-ready-for-this-busy-back-to-school-season/": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/operators-and-departments": {
        "total": 15,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/about-us/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/will-ai-take-humans-out-of-customer-service-in-the-near-future/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/offline/update-company-offline-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/zh_CN/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/integrations/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin2.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/best-practices-for-utilizing-live-chat-on-your-website/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin1-local.providesupport.com/view/my-account/live-demo": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/features/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/introducing-new-floating-chat-button-code-feature/": {
        "total": 23,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          }
        ]
      },
      "https://www.providesupport.com/blog/complete-guide-using-canned-responses-live-chat/": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-add-a-chat-button-to-microsoft-outlook/": {
        "total": 15,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/live-chat-for-mailchimp.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#troubleshooting-11": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 8,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/manual/download_install_uninstall.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin1.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/post-chat-surveys.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/canned-response/update-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/how-to-start": {
        "total": 5,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin12.providesupport.com/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/help/troubleshooting/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/live-chat-language-customization-how-to-install-and-use-it/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/index": {
        "total": 35,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 19
          }
        ]
      },
      "https://www.providesupport.com/blog/types-of-complaining-customers-and-how-to-handle-complaints/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/integrations/index.html": {
        "total": 70,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 20
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 23
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 17
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operations-with-examples-of-responses/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com.pt/live-chat-pharmacy-site.html": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 17,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 13,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://www.providesupport.cn/view/my-account/operators-and-departments": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/home/privacy-policy.html": {
        "total": 71,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 28
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 12
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 26
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/#": {
        "total": 114,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 17
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 11
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 83
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 6,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/downloads/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin3.providesupport.com/help/troubleshooting/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/permission-denied": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/testimonials-page2.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/about-us/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com.pt/integrations/live-chat-for-pinnaclecart.html": {
        "total": 5,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.de/affiliate/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/history": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/setup-instructions/noscript-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/dashboard": {
        "total": 30,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 11
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://www.providesupport.cn/live-help-insurance.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/testimonials-page3.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/elements-matter-customers-service-journey/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/7-methods-handling-conflicts-complex-clients/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/product/chat-messenger-themes.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/index.html": {
        "total": 28,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://www.providesupport.com/blog/page/2/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/page/5/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/testimonials-page4.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/blog/category/tips-n-tricks/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/integrations/wordpress.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-dos-and-donts/": {
        "total": 30,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 19
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.com.pt/product/header-pictures-ja.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/home/terms-of-service.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/payment/card/stripe/unionpay-payment-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/downloads/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/category/tutorial/": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/index": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/live-demo": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-3dcart.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/product/chat-messenger-themes.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/password-sent-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/setup-instructions/email-code": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 8,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/operator/create-operator-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/5-ways-improve-customer-service-small-business/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/testimonials-page7.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-add-live-chat-to-your-facebook-page/": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 17,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/product/header-pictures.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/home/faq.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/help/troubleshooting/kaspersky.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/features/live-chat.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/5-reasons-companies-fail-to-meet-social-media-expectations/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 10,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/billing/history": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 9,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/product/testimonials.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/three-questions-every-customer-service-manager-should-be-asking-everyday/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/de/my-account/trial/create-trial-account-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/home/faq.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/home/faq.html#troubleshooting-2": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/tips-for-effective-leadership-in-customer-service/": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/es/view/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/10-barriers-outstanding-customer-service/": {
        "total": 20,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 10
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/view/zh_CN/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/billing/payment/payment-details": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/prices/index.html": {
        "total": 252,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 25
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 76
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 57
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 94
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/billing/shopping-cart/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/about-us/case-studies/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/regional/update-company-regional-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/home/site-map.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/building-a-successful-motivation-strategy/": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 10,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin6.providesupport.com/fr/view/fr/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/offline/update-company-offline-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.fr/integrations/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-prestashop.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/password-recovery-form": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 22,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 10
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/fr/view/fr/my-account/billing/invoice/invoice-details": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/first-contact-resolution-in-live-chat-support/": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/help/troubleshooting/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/product/chat-icons-valentine-en.html": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/features/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.fr/integrations/live-chat-for-outlook.html": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.cn/using-live-chat-for-website.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/proactive-communication-with-customers/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/product/operator-pictures.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/features/other-features.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.ru/about-us/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/history.htm": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/ru/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/index": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-xcart.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/10-lessons-learned-working-in-customer-service/": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.de/signup/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.es/product/chat-icons-spring-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/upgrade": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.cn/help/troubleshooting/index.html": {
        "total": 26,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/about-us/index.html": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/home/faq.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/chat-icons-cn.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/index": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/dashboard": {
        "total": 48,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 30
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 12,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#general": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-bank-customer-service.html": {
        "total": 25,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/setup-instructions/custom-images-code": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/features/operator-console.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 8,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/screenshots/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/the-reasons-you-dont-have-live-chat-on-your-website-yet-and-why-you-should/": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/operators-and-departments": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/canned-response/update-canned-response-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/downloads/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/fr/view/fr/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/screenshots/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/password-sent-confirmation": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/view/index.html": {
        "total": 39,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 12
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/critical-thinking-for-customer-service/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/live-demo": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 0
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 13
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/view/my-account/billing/payment/paypal/thank-you": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-chat-pharmacy-site.html": {
        "total": 320,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 45
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 112
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 41
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 122
          }
        ]
      },
      "https://admin12.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 30,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 18
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "http://operator.providesupport.com/view/operator-password-recovery-form.html": {
        "total": 24,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin8.providesupport.com/product/operator-pictures.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/integrations/joomla.html": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 13
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/password-recovery-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/fr/my-account/company/update/index": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/view/zh_CN/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/3-factors-driving-customer-satisfaction-customer-service/": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/features/live-chat.html": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 59,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 42
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/index": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/how-to-start": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/screenshots/index.html": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/live-chat-advantages-and-benefits-for-education-websites/": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin12.providesupport.com/view/integrations/live-chat-for-xcart.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/cost-poor-customer-service/": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/es/view/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/permission-denied": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/features/spell-checker.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/integrations/live-chat-for-cubecart.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/fun-operator-greetings/": {
        "total": 66,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 21
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 30
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 15
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "http://errorreport.providesupport.com/providesupport/windows-operator-console/confirmation.html": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/payment/card/thank-you": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 14,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/password-recovery-form.html": {
        "total": 69,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 25
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 14
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 22
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/downloads/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/payment/card/payment-info": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/prices/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/home/site-map.html": {
        "total": 22,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://www.providesupport.com/blog/personality-traits-for-perfect-customer-service-representative/": {
        "total": 24,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 11
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 9,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/features/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/home/gdpr.html": {
        "total": 16,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/setup-instructions/email-code": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/product/chat-messenger-themes.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/about-us/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/affiliate/referrals": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/product/post-chat-surveys.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/integrations/joomla.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/live-chat-pharmacy-site.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/history": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.cn/integrations/magento.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-magento-go.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 16,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 12
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/live-support-auctions.html": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/integrations/magento.html": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/downloads/index.html": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#top": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-americommerce.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/home/faq.html#billing-9": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://operator.providesupport.com/action/main/login": {
        "total": 42,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 13
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 13
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/integrations/wordpress.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/features/index.html": {
        "total": 49,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 9
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 13
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 11
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 16
          }
        ]
      },
      "https://www.providesupport.com/manual/cs-cart_integration.htm": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/joomla.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/live-demo": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/ja/view/my-account/dashboard": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.cn/features/index.html": {
        "total": 18,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/operator/update-operator-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/why-is-it-important-to-have-customer-service-knowledge-base-software-2/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/8-ways-to-say-no-to-customers-with-examples/": {
        "total": 25,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 9
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/features/spell-checker.html": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-prestashop.html": {
        "total": 14,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.dtm1usa.com/admin10/manual/visitors_list_stand-alone-console.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/password-sent-confirmation": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-getresponse.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/live-help-real-estate-website.html": {
        "total": 32,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 18
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-tailor-customer-service-based-on-customer-personality-type/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/category/best-practice/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 27,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/operator/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-not-to-lose-customers-in-the-busy-holiday-season/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/billing/index": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/history": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.fr/product/header-pictures-cn.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/password-sent-confirmation": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/15-mistakes-of-customer-service-professionals/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 19,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 8,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/update-field": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/update-billing-contact": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 32,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 28
          }
        ]
      },
      "https://www.providesupport.cn/product/chat-icons-valentine-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.de/live-chat-pharmacy-site.html": {
        "total": 18,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/downloads/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/features/customization.html": {
        "total": 62,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 13
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 20
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 19
          }
        ]
      },
      "https://admin6.providesupport.com/downloads/index.html": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/fr/view/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 12,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/index": {
        "total": 18,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/setup-instructions/textlink-code": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-diversity/": {
        "total": 18,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/features/operator-console.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 27,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/department/create-department-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.de/prices/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/7-tips-for-more-effective-communication-with-customers-and-coworkers/": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 17,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://www.providesupport.com/product/chat-invitation-bg-pictures-pt.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/home/faq.html": {
        "total": 31,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/setup-instructions/textlink-code": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/choosing-the-best-chat-button-code-for-your-site-part-2/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/billing/index": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/help/live-chat-video-tutorials.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          }
        ]
      },
      "https://operator.providesupport.com/": {
        "total": 31,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 13
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 5,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/joomla.html": {
        "total": 20,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.cn/view/index": {
        "total": 103,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 16
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 25
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 22
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 40
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/operators-and-departments": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/view/login": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/manual/current_features.htm": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/screenshots/visitor-messenger.html": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/features/live-chat.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/delete-field": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/home/faq.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 21,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 7
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.com/live-government-helpdesk.html": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/add-standard-package": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/messenger/update-company-messenger-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/choose-live-chat-provider/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/canned-response/canned-response-list": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/dashboard": {
        "total": 31,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 15
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/affiliate/referrals": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 7,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/ru/view/my-account/live-demo": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/site-map.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/zh_CN/my-account/operators-and-departments": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/help/troubleshooting/microsoft-security-essentials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 6,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.jp/integrations/joomla.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/analytics/update-company-analytics-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/product/chat-icons-en.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/password-recovery-form": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-add-a-chat-button-to-windows-live-mail/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/10-questions-ask-collecting-customer-data/": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/downloads/release-history/release-5.9.3.html": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com.pt/product/header-pictures-fr.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/history-of-customer-service-and-future-trends-infographic/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/manual/system_requirements_general.htm": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/affiliate/index.html": {
        "total": 37,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 10
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 8
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 15
          }
        ]
      },
      "https://www.providesupport.com/product/chat-icons-cn.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/features/google-analytics-and-live-chat.html": {
        "total": 16,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/blog/12-worst-things-to-say-to-angry-customers/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 10,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/billing/index": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/ru/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.jp/help/troubleshooting/mcafee.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/downloads/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://wwvv.providesupport.com/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/provide-support-live-chat-achievements-in-2018/": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/setup-instructions/custom-images-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/manual/about_the_system.htm": {
        "total": 14,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 10,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 50,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 11
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 21
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 16
          }
        ]
      },
      "https://www.providesupport.com/view/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/features/live-chat.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/analytics/update-company-analytics-form": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/blog/customer-service-tips-the-secret-of-the-right-greeting/": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/product/chat-icons-en.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com.pt/live-support-consulting.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-hotel-and-travel-companies-can-benefit-from-adding-live-chat-support/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/7-live-chat-features-to-fall-in-love/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#general-6": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#general-8": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/screenshots/visitor-messenger.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/8-workspace-safety-tips-for-customer-service-team/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/home/faq.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#connections-3": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/blog/soft-skills-for-customer-service-reps/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/password-recovery-form": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/8-simple-ways-to-reach-customers/": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/features/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/simple-tactics-for-mastering-live-chat/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/billing/shopping-cart/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/live-chat-pharmacy-site.html": {
        "total": 23,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://admin5.providesupport.com/help/troubleshooting/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/trial/create-trial-account-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-add-a-chat-link-to-gmail/": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/history": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin12.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/home/site-map.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/cancel": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/es/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/signup/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/billing/index": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/dashboard": {
        "total": 46,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 19
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 14
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/operator/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/index.html": {
        "total": 32,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 14
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 10
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/operators-and-departments": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html": {
        "total": 40,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 8
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 14
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 13
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 21,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 15
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/#": {
        "total": 14,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://www.providesupport.com/": {
        "total": 30849,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5056
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9227
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9536
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7030
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/payment/card/payment-info": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/manual/getting_started.htm": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 5,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/add-live-chat-support-website-4-simple-steps/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/pass-variables-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/screenshots/operator-console.html": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/zh_CN/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/screenshots/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/my-account/setup-instructions/index": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/index": {
        "total": 32,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 12
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/7-tips-for-maintaining-a-positive-attitude-in-customer-service/": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/images/update-company-images-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/about-us/presentations.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/product/testimonials.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/product/index.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/write-new-customer-welcome-letter/": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          }
        ]
      },
      "https://www.providesupport.es/prices/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/cancel": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.ru/features/customization.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.fr/integrations/joomla.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/testimonials-page2.html": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/signup/index.html": {
        "total": 55,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 11
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 17
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 20
          }
        ]
      },
      "http://chatapi-local.providesupport.com/api-test-forms/visitor/sids/sids-generate.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/downloads/release-history/release-5.4.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/canned-response/canned-response-list": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/testimonials-page3.html": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
        "total": 18,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/index.html": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin3.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 12
          }
        ]
      },
      "https://www.providesupport.com/live-support-ecommerce-site.html": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.ru/live-chat-pharmacy-site.html": {
        "total": 6,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/integrations/wordpress.html": {
        "total": 16,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.ru/features/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/testimonials-page4.html": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/billing/index": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 29,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 13
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://www.providesupport.com/product/chat-messenger-themes.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/testimonials-page5.html": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/category/video/": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/top-20-customer-service-soft-skills-infographic/": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/live-chat-etiquette-10-tips-for-being-polite-on-live-chat/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/home/faq.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/11-customer-defusing-phrases/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.fr/live-chat-pharmacy-site.html": {
        "total": 21,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://www.providesupport.com/blog/adding-live-support-for-website-how-it-works/": {
        "total": 33,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 16
          }
        ]
      },
      "https://www.providesupport.es/features/spell-checker.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/affiliate/referrals": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/home/privacy-policy.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.de/product/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/author/maria/": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/product/testimonials-page6.html": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#installation-1": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/affiliate/index.html": {
        "total": 18,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/features/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/5-ways-big-data-will-improve-customer-service/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/top-10-customer-service-kpis-evaluate-live-chat-team-performance/": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.fr/product/testimonials.html": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/trial/create-trial-account-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/contacts.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 10,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin11.providesupport.com/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.cn/home/privacy-policy.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://operator.providesupport.com//index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/testimonials-page7.html": {
        "total": 8,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "http://operator.providesupport.com/view/index.html": {
        "total": 14,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/about-us/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/manual/contacts.htm": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/view/index": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/password-recovery-form": {
        "total": 22,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 10
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.cn/manual/managing_operators_and_departments.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 6,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 7,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/dashboard": {
        "total": 27,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 8
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 10
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.cn/": {
        "total": 2663,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 414
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 772
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 801
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 676
          }
        ]
      },
      "https://www.providesupport.de/": {
        "total": 13,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.es/": {
        "total": 69,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 17
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 15
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 30
          }
        ]
      },
      "https://www.providesupport.fr/": {
        "total": 30,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 10
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
          }
        ]
      },
      "https://www.providesupport.jp/": {
        "total": 10,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.ru/": {
        "total": 63,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 19
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 22
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/about-us/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/blog/10-factors-negatively-affect-customer-service-quality/": {
        "total": 9,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 6
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.fr/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/how-to-start": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/live-support-consulting.html": {
        "total": 12,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.com.pt/": {
        "total": 9,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://operator.providesupport.com/view/operator-password-recovery-form.html": {
        "total": 17,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 11
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin6.providesupport.com/view/index.html": {
        "total": 38,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 24
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/#chapter-1-movie": {
        "total": 8,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-corecommerce.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/downloads/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/offline/update-company-offline-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/live-demo": {
        "total": 7,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/setup-instructions/index": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/billing/cancel": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/analytics/update-company-analytics-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 44,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 21
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 13
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/billing/index": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/integrations/index.html": {
        "total": 121,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 10
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 55
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 19
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 37
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 5,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/tag/soft-skills/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/features/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "mk:@MSITStore:C:\\Users\\shuks\\Desktop\\PS_Help_Manual.chm::/history.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/my-account/company/update/index": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.es/live-help-insurance.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/help/troubleshooting/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/password-sent-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/billing/shopping-cart/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/how-to-start": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/manual/modern-chat-window-editing.htm": {
        "total": 4,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/product/chat-messenger-themes.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/chat-icons-winter-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/features/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/zh_CN/my-account/dashboard": {
        "total": 24,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 5
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 5
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 7
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/how-to-start": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.de/product/header-pictures.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/affiliate/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/how-to-start": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/integrations/magento.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/index.html": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.es/features/operator-console.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/5-reasons-unhappy-customers-dont-complain/": {
        "total": 8,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 5
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/setup-instructions/email-code-aup": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/downloads/index.html": {
        "total": 72,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 17
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 16
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 26
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 13
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/how-to-start": {
        "total": 4,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/live-chat-for-weebly.html": {
        "total": 3,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://wwvv.providesupport.com/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/help/troubleshooting/index.html": {
        "total": 37,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 6
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 14
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 6
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 11
          }
        ]
      },
      "https://www.providesupport.fr/prices/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 5,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/es/view/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 3,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 3
          }
        ]
      },
      "https://admin6.providesupport.com/view/unknown-email-address": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/chat-icons-en.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/company/update/index": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/operator/update-operator-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/ru/view/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 10,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/home/faq.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin1.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/home/terms-of-service.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://www.providesupport.ru/product/chat-icons-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/setup-instructions/email-code": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/about-us/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-outlook.html": {
        "total": 23,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 10
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/update-billing-contact": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/selection-best-articles-managing-live-chat-support/": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin1.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 2,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/fr/integrations/wordpress.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/analytics/update-company-analytics-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/positive-phrases-and-empathy-statements-for-customer-service/": {
        "total": 27,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 15
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/index.html": {
        "total": 11,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/features/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/dashboard": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 9
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "https://admin10.providesupport.com/view/index": {
        "total": 46,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 24
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 12
          }
        ]
      },
      "https://www.providesupport.com/blog/know-customer-service-right-job/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "http://www.providesupport.com.pt/live-support-web-designers.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/the-words-to-avoid-in-live-chat-communication/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/4-dimensions-of-customer-trust-how-to-get-the-most-of-it/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/screenshots/operator-console.html": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/integrations/bigcommerce.html": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-drupal.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/b2b-customer-experience-get-right/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/about-us/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/best-practices-live-chat-support-infographic/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#installation-5": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/four-generations-of-customers/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/best-practice-for-using-operator-picture-for-chats/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/analytics/update-company-analytics-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://translate.googleusercontent.com/translate_c": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/de/view/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 6,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin10.providesupport.com/view/password-sent-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/treat-leaving-customer-right/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/help/troubleshooting/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/chat_button_codes_overview.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/the-future-of-customer-experience-top-10-trends-infographic/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/zh_CN/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/start-chat-form/create-field": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/emotions-drive-customer-loyalty-infographic/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/using-live-chat-for-website.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-weebly.html": {
        "total": 6,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
        "total": 5,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/10-phrases-you-should-not-use-on-live-chat/": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/preventing-burnout-in-customer-service/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/setup-instructions/email-code": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/ru/view/my-account/how-to-start": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/operators-and-departments": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/value-keeping-right-customers/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/6-tips-to-improve-customer-service-in-digital-age/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/chat-invitation-bg-pictures-cn.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/signup/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/affiliate/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/connection/update-company-connection-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-choose-the-best-customer-support-options-for-your-ecommerce-website/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/billing/payment/card/payment-info": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/start-chat-form/create-field": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/setup-instructions/textlink-code": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/affiliate/referrals": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/faq-page-customer-self-service-choose-questions-cover/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/testimonials-page5.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/prestashop_integration.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/using-live-chat-for-website.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-get-your-customer-service-employees-to-care-about-customers/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/features/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/integrations/index.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/category/articles/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/setup-instructions/email-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/ru/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/billing/cancel": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/operator/create-operator-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/manual/about.htm": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/post-chat-survey/update-company-post-chat-survey-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/department/update-department-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/canned-response/create-canned-response-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/20-shocking-customer-service-facts-and-statistics/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          }
        ]
      },
      "https://admin8.providesupport.com/view/ru/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/manual/system_requirements_general.htm": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/es/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/es/view/my-account/billing/index": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/help/troubleshooting/avast.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-increase-the-efficiency-of-live-chat-support/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.de/product/testimonials-page2.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/billing/payment/alipay/thank-you": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://operator.providesupport.com/https://operator.providesupport.com/action/main/login/login": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/blog/adding-a-greeting-to-the-chat-invitation-from-the-web-console-now-possible/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/new-easter-chat-icons-now-available/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-weebly.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/integrations/wordpress.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/features/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog//": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/bring-innovation-to-your-pharmacy-business-with-live-chat-solution/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/company/update/start-chat-form/create-field": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/company/update/start-chat-form/delete-field": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operator/create-operator-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "http://operator2.providesupport.com/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com.pt/prices/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/view/password-recovery-form.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/integrations/joomla.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/downloads/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/integrations/joomla.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.ru/product/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/product/chat-icons-cn.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/product/testimonials-page6.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/first-contact-resolution-on-live-chat/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/billing/update-billing-contact-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com.pt/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/header-pictures.html": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/de/view/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/header-pictures-de.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/canned-response/bulk-import-csv-canned-response-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 4
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/setup-instructions/noscript-code": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/magentogo_integration.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://operator.providesupport.com/admin/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/view/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/de/view/my-account/setup-instructions/index": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/joomla-tools-for-better-customer-engagement/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin2.providesupport.com/view/my-account/operators-and-departments": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 4,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/profile/update-company-profile-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/es/view/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/es/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.jp/live-help-education-website.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/what-it-takes-to-have-a-best-performing-customer-service-team/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/6-study-backed-tips-best-class-customer-service/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/downloads/release-history/release-5.7.2.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/downloads/release-history/release-5.9.1.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/using-live-chat-for-website.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/view/index": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/ru/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/live-chat-for-prestashop.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/setup-instructions/monitor-code": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/help/troubleshooting/mcafee.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/unknown-email-address": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/ru/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/billing/history": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/home/terms-of-service.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/view/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "file:///D:/WebsiteDownload/ChatSupport/ChatSupport1/www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/integrations/live-chat-for-outlook.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/connection/update-company-connection-confirmation": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/home/terms-of-service.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/features/customization.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/features/customization.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/create-field": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "http://operator.providesupport.com/view/operator-password-recovery-form": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin2.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/canned-response/create-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/features/live-chat.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/fr/view/my-account/billing/product/cancel-product-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/operator/update-operator-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/ru/view/my-account/live-demo": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/ru/view/my-account/setup-instructions/index": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/live-bank-customer-service.html": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/view/ru/my-account/trial/create-trial-account-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin2.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/prices/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/start-chat-form/create-field": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/connection/update-company-connection-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/screenshots/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#troubleshooting-12": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/downloads/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/help/troubleshooting/microsoft-security-essentials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/zh_CN/view/my-account/live-demo": {
        "total": 2,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/business-leaders-listen-customers/": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/email-code-aup": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/es/view/es/my-account/billing/invoice/invoice-details": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/es/view/es/my-account/billing/shopping-cart/shopping-cart": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/es/my-account/trial/create-trial-account-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/canned-response/bulk-import-csv-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/product/header-pictures.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/ru/view/my-account/setup-instructions/index": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/ru/features/visitor-monitoring.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#features-13": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/zh_CN/my-account/company/update/index": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/manual/managing_canned_responses.htm#bulk_create_responses": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/operator/create-operator-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin2.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin3.providesupport.com/view/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/es/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/setup-instructions/email-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/fr/view/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/product/chat-icons-cn.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/screenshots/live-chat-window.html": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin11.providesupport.com/view/live-support-web-designers.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/zh_CN/view/my-account/billing/payment/alipay/thank-you": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.jp/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/billing/payment/bitcoin/thank-you": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin1.providesupport.com/view/my-account/setup-instructions/monitor-code": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin8.providesupport.com/view/live-chat-pharmacy-site.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/live-chat-pharmacy-site.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/view/zh_CN/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-prestashop.html#get_code": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/signup/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/es/help/troubleshooting/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/es/view/my-account/billing/upgrade": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.es/integrations/live-chat-for-oscommerce.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/zh_CN/my-account/operators-and-departments": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/analytics/update-company-analytics-form": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 5,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/post-chat-survey/update-company-post-chat-survey-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/prices/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/home/faq.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/help/troubleshooting/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": {
        "total": 7,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 7
          }
        ]
      },
      "file:///C:/Users/Administrator/Downloads/%E4%B8%8B%E8%BD%BD%20(4).htm": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/magento.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/zh_CN/my-account/setup-instructions/index": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 5,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin9.providesupport.com/features/spell-checker.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/screenshots/live-chat-window.html": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin6.providesupport.com/view/fr/my-account/trial/create-trial-account-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/billing/cancel": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/about-us/press-releases/auction-chat-03-01-05.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/chat-invitation-bg-pictures-cn.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/delete-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin2.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#general-11": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/billing/payment/payment-details": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/screenshots/live-chat-window.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/view/zh_CN/my-account/live-demo": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/view/my-account/how-to-start": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://operator3.providesupport.com/action/main/login": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-opencart.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/screenshots/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/canned-response/create-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin1-office.providesupport.com/": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/live-support-consulting.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/live-support-ecommerce-site.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 5,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/product/cancel-product-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/about-us/live-chat-news-2019.html": {
        "total": 13,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 13
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/overview_billing.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www1-office.providesupport.com/": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/live-support-web-designers.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operators-and-departments": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/ru/view/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/integrations/joomla.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/zh_CN/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/manual/visitors_list_stand-alone-console.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/about-us/live-chat-news-2019.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin12.providesupport.com/view/integrations/live-chat-for-outlook.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/header-pictures-winter-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/setup-instructions/email-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/chat-icons-fr.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/features/live-chat.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://wwvv-office.providesupport.com/": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/signup/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/es/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-corecommerce.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/zh_CN/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/billing/shopping-cart/shopping-cart": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/fr/view/my-account/live-demo": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/integrations/live-chat-for-getresponse.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/downloads/index.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/my-account/company/update/connection/update-company-connection-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/pass-variables-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/pass-variables-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/zh_CN/my-account/billing/update-billing-contact": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/home/faq.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin2.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "file:///E:/tmp/popup.html": {
        "total": 5,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 5
          }
        ]
      },
      "https://www.providesupport.com/manual/editing_the_pre-chat_window.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/zh_CN/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.de/home/gdpr.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/create-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/integrations/live-chat-for-squarespace.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/about-us/live-chat-news-2019.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/help/glossary/console/options-dialog.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/help/glossary/console/update-is-ready-to-install-dialog.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/product/chat-icons-spring-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/zh_CN/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/messenger/update-company-messenger-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/home/faq.html#troubleshooting-8": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/create-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/regional/update-company-regional-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/screenshots/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/operator/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/downloads/release-history/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/analytics/update-company-analytics-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/product/chat-icons-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/product/chat-icons-spring-en.html": {
        "total": 6,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://www.providesupport.cn/live-support-auctions.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/how-to-start": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/start-chat-form/update-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/downloads/linux.html": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin4.providesupport.com/view/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/open_cart_integration.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
        "total": 6,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 6
          }
        ]
      },
      "https://www.providesupport.ru/downloads/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/manual/editing_the_chat_window.htm": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/setup-instructions/email-code": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/start-chat-form/create-field": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/how-to-start": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-zencart.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": {
        "total": 8,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 8
          }
        ]
      },
      "https://www.providesupport.com/integrations/live-chat-for-squarespace.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/product/chat-messenger-themes.html": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/features/live-chat.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/signup/index.html": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://webcache.googleusercontent.com/search": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/downloads/release-history/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/view/my-account/affiliate/referrals#commission-request": {
        "total": 3,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "http://fanyi.myyoudao.com/translate_url": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.es/live-help-travel-website.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin6.providesupport.com/view/integrations/index.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/product/chat-messenger-themes.html": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/product/chat-icons-en.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/home/faq.html#general-10": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/my-account/company/update/images/update-company-images-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.es/features/live-chat.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/view/my-account/setup-instructions/standard-code": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin12.providesupport.com/view/my-account/billing/invoice/invoice-details": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/billing/payment/card/update-payment-info-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/features/customization.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/custom-images-code": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/#chapter-3-movie": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/billing/upgrade": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/number-of-operators-exceeded": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/zh_CN/features/customization.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
        "total": 4,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 4
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/product/testimonials.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin7.providesupport.com/view/de/my-account/dashboard": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin6.providesupport.com/view/my-account/billing/payment/card/payment-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      }
    }
  },
  "offlineForm": {
    "loads": {
      "total": 42,
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 7
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 9
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 17
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 9
        }
      ]
    },
    "clickThroughRate": {
      "total": "0%",
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": "0%"
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": "0%"
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": "0%"
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": "0%"
        }
      ]
    },
    "referrers": {
      "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/": {
        "total": 3,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/features/operator-console.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin10.providesupport.com/view/my-account/canned-response/update-canned-response-form": {
        "total": 1,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/home/gdpr.html": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": {
        "total": 1,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          }
        ]
      },
      "https://admin11.providesupport.com/view/my-account/dashboard": {
        "total": 2,
        "timeline": [
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 2
          }
        ]
      },
      "https://www.providesupport.com/": {
        "total": 19,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 2
          },
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 4
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 13
          }
        ]
      },
      "https://www.providesupport.cn/": {
        "total": 5,
        "timeline": [
          {
            "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1
          },
          {
            "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1
          },
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 3
          }
        ]
      },
      "https://www.providesupport.com/blog/best-practice-for-using-operator-picture-for-chats/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://admin5.providesupport.com/view/my-account/live-demo": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.com/blog/how-to-choose-the-best-customer-support-options-for-your-ecommerce-website/": {
        "total": 1,
        "timeline": [
          {
            "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 1
          }
        ]
      },
      "https://www.providesupport.cn/screenshots/live-chat-window.html": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
        "total": 2,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 2
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/index": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      },
      "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
        "total": 1,
        "timeline": [
          {
            "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1
          }
        ]
      }
    },
    "submits": "No statistics for this metric!"
  },
  "chats": {
    "sent": {
      "total": 4185,
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 74
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 1286
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1518
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 1307
        }
      ]
    },
    "accepted": {
      "total": 2966,
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 57
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 880
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 1089
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 940
        }
      ]
    },
    "acceptanceRate": {
      "total": "71%",
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": "77%"
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": "68%"
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": "72%"
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": "72%"
        }
      ]
    },
    "missed": {
      "total": 1157,
      "timeline": [
        {
          "01-Jan-2019 05:00:00 - 01-Feb-2019 05:00:00": 17
        },
        {
          "01-Feb-2019 05:00:00 - 01-Mar-2019 05:00:00": 376
        },
        {
          "01-Mar-2019 05:00:00 - 01-Apr-2019 04:00:00": 414
        },
        {
          "01-Apr-2019 04:00:00 - 01-May-2019 04:00:00": 350
        }
      ]
    }
  },
  "proactiveChats": {
    "sent": "No statistics for this metric!",
    "acceptanceRate": {
      "total": "0%",
      "timeline": []
    },
    "accepted": "No statistics for this metric!",
    "declined": "No statistics for this metric!"
  },
  "postChatSurvey": {
    "proficiency": "No statistics for this metric!",
    "politeness": "No statistics for this metric!",
    "caseSolved": "No statistics for this metric!",
    "caseNotSolved": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!"
  }
}