
import {
  TIME_PERIODS,
  asyncTestWithCustomParams,
} from './_common'

import { PROCESSED_RESPONSE } from './getControlPanelLoginCount.spec'
import { PROCESSED_RESPONSE_ACCOUNT } from './getPostChatSurveySummary.spec'

asyncTestWithCustomParams({
  methodName: 'getCustomMetrics', testTitle: 'getCustomMetrics (mimic getControlPanelLoginCount)',
  params: {
    metrics: 'admin/login-count',
    opts: {
      timePeriod: TIME_PERIODS.DEFAULT_TIME_PERIOD,
    },
    callback: res => expect(res).toEqual(PROCESSED_RESPONSE),
  }
})

asyncTestWithCustomParams({
  methodName: 'getCustomMetrics', testTitle: 'getCustomMetrics test level (mimic getPostChatSurveySummary)',
  params: {
    metrics: [
        {
        'chat/pcs-proficiency-per-account': 'proficiency',
        'chat/pcs-politeness-per-account': 'politeness',
        'chat/pcs-case-solved-count-per-account': 'caseSolved',
        'chat/pcs-case-not-solved-count-per-account': 'caseNotSolved',
        'chat/pcs-contented-count-per-account': 'contented',
        'chat/pcs-not-contented-count-per-account': 'notContented',
      },
      {
        'chat/pcs-proficiency-per-operator': 'proficiency',
        'chat/pcs-politeness-per-operator': 'politeness',
        'chat/pcs-case-solved-count-per-operator': 'caseSolved',
        'chat/pcs-case-not-solved-count-per-operator': 'caseNotSolved',
        'chat/pcs-contented-count-per-operator': 'contented',
        'chat/pcs-not-contented-count-per-operator': 'notContented',
      }, {
        'chat/pcs-proficiency-per-department': 'proficiency',
        'chat/pcs-politeness-per-department': 'politeness',
        'chat/pcs-case-solved-count-per-department': 'caseSolved',
        'chat/pcs-case-not-solved-count-per-department': 'caseNotSolved',
        'chat/pcs-contented-count-per-department': 'contented',
        'chat/pcs-not-contented-count-per-department': 'notContented',
      },
    ],
    opts: {
      timePeriod: TIME_PERIODS.DEFAULT_TIME_PERIOD,
      level: 'account',
      customParserName: 'parseSummaryDataWithLevel',
    },
    callback: res => expect(res).toEqual(PROCESSED_RESPONSE_ACCOUNT),
  }
})

asyncTestWithCustomParams({
  methodName: 'getCustomMetrics', testTitle: 'getCustomMetrics (mimic getOperatorsTimeline + )',
  params: {
    metricsGroups: [
      {
        metrics: {
          'chat/chats-per-operator': 'chatsSent',
          'chat/accepted-chats-per-operator': 'chatsAccepted',
          'chat/acceptance-rate-per-operator': 'acceptanceRate',
          'chat/missed-calls-per-operator': 'chatsMissed',
          'chat/accept-chat-delay-per-operator': 'chatAcceptTime',
          'chat/invitation-sent-count-per-operator': 'proactiveChatsSent',
          'chat/invitation-accept-count-per-operator': 'proactiveChatsAccepted',
          'chat/invitation-decline-count-per-operator': 'proactiveChatsDeclined',
          'chat/online-time-per-operator': 'onlineTime',
          'chat/away-time-per-operator': 'awayTime',
          'chat/pcs-proficiency-per-operator': 'proficiency',
          'chat/pcs-politeness-per-operator': 'politeness',
          'chat/pcs-case-solved-count-per-operator': 'casesSolved',
          'chat/pcs-case-not-solved-count-per-operator': 'unsolvedCases',
          'chat/pcs-contented-count-per-operator': 'contented',
          'chat/pcs-not-contented-count-per-operator': 'notContented',
          'chat/operator-load-rate': 'loadRate',
        },
        opts: {
          customParserName: 'parseDPsOrOPsTimelineData',
          customMetrics: [
            {
              name: 'offlineTime',
              type: 'OFFLINE_TIME_BY_PERIODS',
            }, {
              name: 'login',
              type: 'OP_LOGIN',
            }, {
              name: 'name',
              type: 'OP_NAME',
            },
          ],
          isShouldAddTotals: true,
        },
      },
      {
        metrics: { 'chat/chats-per-account': 'chatCallsTotals' },
        opts: {
          customParserName: 'parseSummaryAllItems',
        }
      }
    ],
    opts: {
      timePeriod: TIME_PERIODS.SHORT_TIME_PERIOD2,
    },
    callback: res => expect(res).toEqual(PROCESSED_RESPONSE2),
  }
})

const PROCESSED_RESPONSE2 = [
  {
    "Irene Rogers\nirene": {
      "chatsSent": {
        "total": 8,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 5
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 3
          }
        ]
      },
      "chatsAccepted": {
        "total": 4,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 2
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 2
          }
        ]
      },
      "acceptanceRate": {
        "total": "50%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "40%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "67%"
          }
        ]
      },
      "chatsMissed": {
        "total": 3,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 2
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 1
          }
        ]
      },
      "chatAcceptTime": {
        "total": {
          "total": [
            111.468,
            "1m 51s"
          ],
          "average": [
            22.2936,
            "22s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              22.827333,
              "22s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              21.493,
              "21s"
            ]
          }
        ]
      },
      "onlineTime": {
        "total": {
          "total": [
            58356.402,
            "16h 12m 36s"
          ],
          "average": [
            299.2636,
            "4m 59s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              29650.34,
              "8h 14m 10s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              28706.062,
              "7h 58m 26s"
            ]
          }
        ]
      },
      "proficiency": {
        "total": {
          "average": 5,
          "total": 10
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": {
              "average": 5,
              "total": 10
            }
          }
        ]
      },
      "politeness": {
        "total": {
          "average": 5,
          "total": 10
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": {
              "average": 5,
              "total": 10
            }
          }
        ]
      },
      "loadRate": {
        "total": "17%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "21%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "13%"
          }
        ]
      },
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "awayTime": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          114444,
          "1d 7h 47m 24s"
        ],
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              56750,
              "15h 45m 50s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              57694,
              "16h 1m 34s"
            ]
          }
        ]
      },
      "login": "irene",
      "name": "Irene Rogers"
    },
    "Talia Bush\ntalia": {
      "chatsSent": {
        "total": 5,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 5
          }
        ]
      },
      "chatsAccepted": {
        "total": 5,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 5
          }
        ]
      },
      "acceptanceRate": {
        "total": "100%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "100%"
          }
        ]
      },
      "chatAcceptTime": {
        "total": {
          "total": [
            96.949,
            "1m 36s"
          ],
          "average": [
            19.3898,
            "19s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              19.3898,
              "19s"
            ]
          }
        ]
      },
      "onlineTime": {
        "total": {
          "total": [
            24444.482,
            "6h 47m 24s"
          ],
          "average": [
            298.10342,
            "4m 58s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              24444.482,
              "6h 47m 24s"
            ]
          }
        ]
      },
      "awayTime": {
        "total": {
          "total": [
            47739.23,
            "13h 15m 39s"
          ],
          "average": [
            300.24673,
            "5m"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              47739.23,
              "13h 15m 39s"
            ]
          }
        ]
      },
      "proficiency": {
        "total": {
          "average": 5,
          "total": 10
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": {
              "average": 5,
              "total": 10
            }
          }
        ]
      },
      "politeness": {
        "total": {
          "average": 5,
          "total": 10
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": {
              "average": 5,
              "total": 10
            }
          }
        ]
      },
      "loadRate": {
        "total": "10%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "21%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "0%"
          }
        ]
      },
      "chatsMissed": "No statistics for this metric!",
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          14216,
          "3h 56m 56s"
        ],
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              14216,
              "3h 56m 56s"
            ]
          }
        ]
      },
      "login": "talia",
      "name": "Talia Bush"
    },
    "Olga Bondar\nolkinsmile": {
      "chatsSent": {
        "total": 3,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 3
          }
        ]
      },
      "chatsAccepted": {
        "total": 2,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 2
          }
        ]
      },
      "acceptanceRate": {
        "total": "67%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "67%"
          }
        ]
      },
      "chatsMissed": {
        "total": 1,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 1
          }
        ]
      },
      "chatAcceptTime": {
        "total": {
          "total": [
            50.21,
            "50s"
          ],
          "average": [
            25.105,
            "25s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              25.105,
              "25s"
            ]
          }
        ]
      },
      "onlineTime": {
        "total": {
          "total": [
            8506.737,
            "2h 21m 46s"
          ],
          "average": [
            293.33575,
            "4m 53s"
          ]
        },
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              4159.401,
              "1h 9m 19s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              4347.336,
              "1h 12m 27s"
            ]
          }
        ]
      },
      "awayTime": {
        "total": {
          "total": [
            42734.453,
            "11h 52m 14s"
          ],
          "average": [
            298.84232,
            "4m 58s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              19948.178,
              "5h 32m 28s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              22786.273,
              "6h 19m 46s"
            ]
          }
        ]
      },
      "loadRate": {
        "total": "6%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "13%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "0%"
          }
        ]
      },
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "proficiency": "No statistics for this metric!",
      "politeness": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          144345,
          "1d 16h 5m 45s"
        ],
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              82241,
              "22h 50m 41s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              62104,
              "17h 15m 4s"
            ]
          }
        ]
      },
      "login": "olkinsmile",
      "name": "Olga Bondar"
    },
    "Alexa Logman\nalexa": {
      "chatsSent": {
        "total": 9,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 6
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 3
          }
        ]
      },
      "chatsAccepted": {
        "total": 5,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 4
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 1
          }
        ]
      },
      "acceptanceRate": {
        "total": "56%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "67%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "33%"
          }
        ]
      },
      "chatsMissed": {
        "total": 3,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 1
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 2
          }
        ]
      },
      "chatAcceptTime": {
        "total": {
          "total": [
            151.779,
            "2m 31s"
          ],
          "average": [
            30.3558,
            "30s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              27.769,
              "27s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              40.703,
              "40s"
            ]
          }
        ]
      },
      "onlineTime": {
        "total": {
          "total": [
            65283.254,
            "18h 8m 3s"
          ],
          "average": [
            299.46448,
            "4m 59s"
          ]
        },
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              7214.305,
              "2h 14s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              28795.045,
              "7h 59m 55s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              29273.904,
              "8h 7m 53s"
            ]
          }
        ]
      },
      "proficiency": {
        "total": {
          "average": 5,
          "total": 5
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": {
              "average": 5,
              "total": 5
            }
          }
        ]
      },
      "politeness": {
        "total": {
          "average": 5,
          "total": 5
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": {
              "average": 5,
              "total": 5
            }
          }
        ]
      },
      "loadRate": {
        "total": "19%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "25%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "13%"
          }
        ]
      },
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "awayTime": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          193917,
          "2d 5h 51m 57s"
        ],
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              79186,
              "21h 59m 46s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              57605,
              "16h 5s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              57126,
              "15h 52m 6s"
            ]
          }
        ]
      },
      "login": "alexa",
      "name": "Alexa Logman"
    },
    "Anna Ming\nanna": {
      "chatsSent": {
        "total": 8,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 1
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 7
          }
        ]
      },
      "chatsAccepted": {
        "total": 8,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 1
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 7
          }
        ]
      },
      "acceptanceRate": {
        "total": "100%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "100%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "100%"
          }
        ]
      },
      "chatAcceptTime": {
        "total": {
          "total": [
            146.342,
            "2m 26s"
          ],
          "average": [
            18.29275,
            "18s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              20.607,
              "20s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              17.962143,
              "17s"
            ]
          }
        ]
      },
      "onlineTime": {
        "total": {
          "total": [
            50867.254,
            "14h 7m 47s"
          ],
          "average": [
            299.21915,
            "4m 59s"
          ]
        },
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              200.694,
              "3m 20s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              25469.273,
              "7h 4m 29s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              25197.285,
              "6h 59m 57s"
            ]
          }
        ]
      },
      "awayTime": {
        "total": {
          "total": [
            604.521,
            "10m 4s"
          ],
          "average": [
            302.2605,
            "5m 2s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              604.521,
              "10m 4s"
            ]
          }
        ]
      },
      "loadRate": {
        "total": "17%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "4%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "29%"
          }
        ]
      },
      "chatsMissed": "No statistics for this metric!",
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "proficiency": "No statistics for this metric!",
      "politeness": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          207728,
          "2d 9h 42m 8s"
        ],
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              86199,
              "23h 56m 39s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              60326,
              "16h 45m 26s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              61203,
              "17h 3s"
            ]
          }
        ]
      },
      "login": "anna",
      "name": "Anna Ming"
    },
    "Stacey Yang\nstacey": {
      "chatsSent": {
        "total": 14,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 4
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 10
          }
        ]
      },
      "chatsAccepted": {
        "total": 12,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 3
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 9
          }
        ]
      },
      "acceptanceRate": {
        "total": "86%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "75%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "90%"
          }
        ]
      },
      "chatsMissed": {
        "total": 2,
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": 1
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 1
          }
        ]
      },
      "chatAcceptTime": {
        "total": {
          "total": [
            80.641,
            "1m 20s"
          ],
          "average": [
            6.720083,
            "6s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              6.865667,
              "6s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              6.6715555,
              "6s"
            ]
          }
        ]
      },
      "onlineTime": {
        "total": {
          "total": [
            61473.645,
            "17h 4m 33s"
          ],
          "average": [
            298.41574,
            "4m 58s"
          ]
        },
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              140.425,
              "2m 20s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              29538.059,
              "8h 12m 18s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              31795.16,
              "8h 49m 55s"
            ]
          }
        ]
      },
      "loadRate": {
        "total": "29%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "17%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "42%"
          }
        ]
      },
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "awayTime": "No statistics for this metric!",
      "proficiency": "No statistics for this metric!",
      "politeness": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          197727,
          "2d 6h 55m 27s"
        ],
        "timeline": [
          {
            "28-Aug-2019 04:00:00 - 29-Aug-2019 04:00:00": [
              86260,
              "23h 57m 40s"
            ]
          },
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              56862,
              "15h 47m 42s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              54605,
              "15h 10m 5s"
            ]
          }
        ]
      },
      "login": "stacey",
      "name": "Stacey Yang"
    },
    "Mary Babich\nshukshyna": {
      "chatsSent": {
        "total": 1,
        "timeline": [
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 1
          }
        ]
      },
      "chatsAccepted": {
        "total": 1,
        "timeline": [
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": 1
          }
        ]
      },
      "acceptanceRate": {
        "total": "100%",
        "timeline": [
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "100%"
          }
        ]
      },
      "chatAcceptTime": {
        "total": {
          "total": [
            12.791,
            "12s"
          ],
          "average": [
            12.791,
            "12s"
          ]
        },
        "timeline": [
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              12.791,
              "12s"
            ]
          }
        ]
      },
      "onlineTime": {
        "total": {
          "total": [
            10953.778,
            "3h 2m 33s"
          ],
          "average": [
            296.04807,
            "4m 56s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              4183.325,
              "1h 9m 43s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              6770.453,
              "1h 52m 50s"
            ]
          }
        ]
      },
      "awayTime": {
        "total": {
          "total": [
            593.97,
            "9m 53s"
          ],
          "average": [
            296.985,
            "4m 56s"
          ]
        },
        "timeline": [
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              593.97,
              "9m 53s"
            ]
          }
        ]
      },
      "loadRate": {
        "total": "2%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "0%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "4%"
          }
        ]
      },
      "chatsMissed": "No statistics for this metric!",
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "proficiency": "No statistics for this metric!",
      "politeness": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          161253,
          "1d 20h 47m 33s"
        ],
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              82217,
              "22h 50m 17s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              79036,
              "21h 57m 16s"
            ]
          }
        ]
      },
      "login": "shukshyna",
      "name": "Mary Babich"
    },
    "Maria Lebed\nmarileb": {
      "acceptanceRate": {
        "total": "0%",
        "timeline": []
      },
      "onlineTime": {
        "total": {
          "total": [
            2884.403,
            "48m 4s"
          ],
          "average": [
            288.4403,
            "4m 48s"
          ]
        },
        "timeline": [
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              2884.403,
              "48m 4s"
            ]
          }
        ]
      },
      "loadRate": {
        "total": "0%",
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": "0%"
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": "0%"
          }
        ]
      },
      "chatsSent": "No statistics for this metric!",
      "chatsAccepted": "No statistics for this metric!",
      "chatsMissed": "No statistics for this metric!",
      "chatAcceptTime": "No statistics for this metric!",
      "proactiveChatsSent": "No statistics for this metric!",
      "proactiveChatsAccepted": "No statistics for this metric!",
      "proactiveChatsDeclined": "No statistics for this metric!",
      "awayTime": "No statistics for this metric!",
      "proficiency": "No statistics for this metric!",
      "politeness": "No statistics for this metric!",
      "casesSolved": "No statistics for this metric!",
      "unsolvedCases": "No statistics for this metric!",
      "contented": "No statistics for this metric!",
      "notContented": "No statistics for this metric!",
      "offlineTime": {
        "total": [
          83516,
          "23h 11m 56s"
        ],
        "timeline": [
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              83516,
              "23h 11m 56s"
            ]
          }
        ]
      },
      "login": "marileb",
      "name": "Maria Lebed"
    },
    "Tanya Laskin\ntanya": {
      "awayTime": {
        "total": {
          "total": [
            30301.014,
            "8h 25m 1s"
          ],
          "average": [
            288.5811,
            "4m 48s"
          ]
        },
        "timeline": [
          {
            "29-Aug-2019 04:00:00 - 30-Aug-2019 04:00:00": [
              15111.223,
              "4h 11m 51s"
            ]
          },
          {
            "30-Aug-2019 04:00:00 - 31-Aug-2019 04:00:00": [
              15189.791,
              "4h 13m 9s"
            ]
          }
        ]
      },
      "chatsSent": "No statistics for this metric!",
      "chatsAccepted": "No statistics for this metric!",
      "acceptanceRate": "No statistics for this metric!",
      "chatsMissed": "No statistics for this metric!",
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
      "loadRate": "No statistics for this metric!",
      "offlineTime": "Not enough statistics to calculate this metric!",
      "login": "tanya",
      "name": "Tanya Laskin"
    }
  },
  {
    "chatCallsTotals": 48
  }
]
