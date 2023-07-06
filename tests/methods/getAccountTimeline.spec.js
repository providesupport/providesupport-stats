
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
