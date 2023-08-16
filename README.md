
# Provide Support Live Chat Statistics Library

This library is a part of [Provide Support Live Chat service](https://www.providesupport.com/).

To use it you need to have an account in Provide Support Live Chat system or have an access to some account chat statistics 
(account name and statistics password are required for this).

The library allows to get the account chat statistics data for specified time period for future processing.
E.g. you may want to create your own chat statistics dashboard for your team or export specific statistics data to store it on your side.

# Demo

[Minimal demo](https://codepen.io/gamer0k93/pen/gOzrRQp?editors=1111)

![demo](https://github.com/providesupport/providesupport-stats/blob/master/docs/demo1.png)

[Provide Support Live Chat statistics application](https://stats.providesupport.com/) based on this library

(Account name and account statistics password are required to login to the application)

![demo](https://github.com/providesupport/providesupport-stats/blob/master/docs/provide-support-statistics-app.png)

# Get started
The library is built as a [UMD module](https://github.com/umdjs/umd) so you can load it in any way the UMD module provides. 
Here are examples of the most popular ones:  

Via script tag (handy for old browsers):
```
<html>
  <head>
    <script src='https://unpkg.com/providesupport-stats/dist/PSstatsAPI.js'></script>
  </head>
  <body>
    <script>
      var accountName = 'your_account_name';
      var statisticsPassword = 'your_statistics_password';
      var timePeriod = {
        duration: 'day',
        startDate: '12 Nov 2021',
        endDate: '1 Dec 2021'
      };
      var statsLibInstance = new PSstatsAPI(accountName, statisticsPassword, timePeriod);
    </script>
  </body>
</html>
```
**Note! you might need specify relevant package version**  

Via ES2015 module:
```
import PSstatsAPI from 'providesupport-stats';

const accountName = 'your_account_name';
const statisticsPassword = 'your_statistics_password';
const timePeriod = {
  duration: 'day',
  startDate: '12 Nov 2021',
  endDate: '1 Dec 2021'
};
const statsLibInstance = new PSstatsAPI(accountName, statisticsPassword, timePeriod);
```

# Methods


## Arguments:

* __callback__ (required in all methods) function with one parameter - response data. Since this library works via [JSONP](https://javascript.info/fetch-crossorigin#using-scripts) you can get access to response only through callback;
* __level__ (required in specific methods) defines if statistics data is requested for the whole account, for department(s), or for operator(s); 
    It can be:  
    * __string__ ( ```'operators'``` or ```'departments'``` or ```'account'``` ) to get data by operators, by departments or by account;
    * __object with 1 or 2 keys__ ( ```operators```, ```departments``` ) and array values ( ```['operator_or_department_name_1', 'operator_or_department_name_2', ...]``` )

__level__ parameter example:

```
{
    operators: ['JuliaForever', 'DirtyHarry', ...],
    departments: ['customer support', 'geeks', ...]
}
// request will return data for specified operators/departments only 
```
* **timePeriod** (optional) defines the time period for which statistics data is requested. 
If not specified, the default period from the moment when statistics saving for the account was enabled till current time will be used. 
Must be an object with 3 properties: 
    * __startDate__ - any type as long as it's a valid Date object (```'Wed Mar 10 2021 17:53:31'```, ```'10 Mar 2021'```, or even ```1615391611580```) 
    * __endDate__ - any type as long as it's a valid Date object (```'Wed Mar 10 2021 17:53:31'```, ```'10 Mar 2021'```, or even ```1615391611580```)
    * __duration__ - one of the values: ```'hour'```, ```'day'```, ```'week'```, ```'month'```, ```'year'``` - this propertie is only used in get...Timeline methods
    where the data breakdown by the specified time frames (__duration__) is requested. 
    
For example, if you need statistics for each day from September 1 till September 20, 2022, you specify timePeriod as 
```
{
    startDate: "01 Sep 2022",
    endDate: "20 Sep 2022",
    duration: 'day'
}
```  


## Methods:  

**getAccountSummary(callback, \[timePeriod\])** - account statistics overview  for the specified timePeriod
<details>
  <summary>Example of callback response data:</summary>

  ```
  {
  "offlineForm": {
    "loads": 335,
    "submits": 19,
    "referrers": {
      "https://domain.com/view/index.html": 2,
      "https://domain.com/signup/index.html": 1,
      ...
    },
    "clickThroughRate": "6%"
  },
  "chats": {
    "sent": 23970,
    "missed": 5334,
    "accepted": 14744,
    "acceptanceRate": "62%"
  },
  "averages": {
    "chatAcceptTime": [
      19.9,
      "19s"
    ],
    "operatorMessagesPerChat": 4.1,
    "preChatSurveyFilloutTime": [
      65.8,
      "1m 5s"
    ],
    "offlineFormFilloutTime": [
      43.1,
      "43s"
    ],
    "visitorMessagesPerChat": 4.9,
    "chatsPerDay": 52.6,
    "chatsPerHour": 2.2
  },
  "preChatSurvey": {
    "loads": 184808,
    "submits": 24068,
    "referrers": {
      "https://domain.com/view/index.html": 8,
      "https://domain.com/signup/index.html": 7,
      ...
    },
    "clickThroughRate": "13%"
  },
  "onlinePresence": {
    "chatOnlineTime": [
      32832126,
      "1y 15d 2m 6s"
    ],
    "chatOfflineTime": [
      6566273,
      "2m 15d 23h 57m 53s"
    ]
  },
  "proactiveChats": {
    "sent": 6,
    "declined": 3,
    "accepted": 2,
    "acceptanceRate": "33%"
  },
  "postChatSurvey": {
    "politeness": {
      "average": 4.6,
      "total": 9726
    },
    "proficiency": {
      "average": 4.6,
      "total": 9600
    },
    "caseSolved": "No statistics for this metric!",
    "caseNotSolved": "No statistics for this metric!",
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!"
  }
}
  ```
</details>

**getOperatorsSummary(callback, \[timePeriod\])** - operators' statistics overview    
<details>
  <summary>Example of callback response data:</summary>

```
{
  "Operator Name\noperator_login": {
    "chatsSent": 309,
    "chatsAccepted": 288,
    "acceptanceRate": "93%",
    "chatsMissed": 22,
    "chatAcceptTime": [
        4.8308578,
        "4s"
    ],
    "proactiveChatsSent": 45,
    "proactiveChatsAccepted": 28,
    "proactiveChatsDeclined": 17,
    "onlineTime": [
      8270624.5,
      "3m 4d 17h 23m 44s"
    ],
    "awayTime": [
      233312.3,
      "2d 16h 48m 32s"
    ],
    "politeness": {
      "average": 4.6865673,
      "total": 354
    },
    "proficiency": {
      "average": 4.6591477,
      "total": 338
    },
    "casesSolved": 15,
    "unsolvedCases": 1,
    "contented": "No statistics for this metric!",
    "notContented": "No statistics for this metric!",
    "loadRate": "18%",
    "offlineTime": [
      30894463,
      "11m 22d 13h 47m 43s"
    ],
    "login": "operator_login",
    "name": "Operator Name"
  },
  ...
}
```
</details>


**getDepartmentsSummary(callback, \[timePeriod\])** - departments' statistics overview    
<details>
  <summary>Example of callback response data:</summary>

  ```
{
     "~": {
        "chatsSent": 488,
        "chatsAccepted": 444,
        "acceptanceRate": "91%",
        "chatsMissed": 44,
        "chatAcceptTime": [
            12.808194,
            "12s"
        ],
        "proficiency": {
            "average": 4.653409,
            "total": 819
        },
        "politeness": {
            "average": 4.7218933,
            "total": 798
        },
        "contented": 4,
        "notContented": 3,
        "loadRate": "100%",
        "onlineTime": "No statistics for this metric!",
        "casesSolved": "No statistics for this metric!",
        "unsolvedCases": "No statistics for this metric!",
        "offlineTime": "Not enough statistics to calculate this metric!"
    },
    "Department_Name": {
        "chatsSent": 120,
        "chatsAccepted": 109,
        "acceptanceRate": "91%",
        "chatsMissed": 11,
        "chatAcceptTime": [
            5.0610094,
            "5s"
        ],
        "onlineTime": [
            32846346,
            "1y 15d 3h 59m 6s"
        ],
        "politeness": {
            "average": 4.679487,
            "total": 1095
        },
        "proficiency": {
            "average": 4.6738195,
            "total": 1089
        },
        "casesSolved": 8,
        "unsolvedCases": 3,
        "contented": "No statistics for this metric!",
        "notContented": "No statistics for this metric!",
        "loadRate": "10%",
        "offlineTime": [
            6552053,
            "2m 15d 20h 53s"
        ]
    },
    ...
}
  ```
</details>

__Note!__ Department named __"~"__ is used to collect data in case deprtment selection is not available on 
the pre-chat survey or department wasn't selected.


**getProactiveChatsSummary(level, callback, \[timePeriod\])** - proactive chats overview   
<details>
  <summary>Example of callback response data:</summary>

  ```
    {
        "account": {
            "sent": 14,
            "accepted": 8,
            "declined": 6,
            "acceptanceRate": "57%"
        }
    }
  ```
  ```
    {
        "operators": {
            "Denise Rogers\ndenise": {
               "sent": 9,
               "accepted": 5,
               "declined": 4,
               "acceptanceRate": "56%"
            },
            "Jane Andrews\njane": {
               "sent": 5,
               "accepted": 3,
               "declined": 2,
               "acceptanceRate": "60%"
            }
        }
    }
  ```
  ```
    {
        "departments": {
            "Billing": {
                "sent": 5,
                "accepted": 3,
                "declined": 2,
                "acceptanceRate": "60%"
            },
            "Technical Support": {
                "sent": 6,
                "accepted": 4,
                "declined": 2,
                "acceptanceRate": "67%"
            }
        }
    }
  ```

</details>

**getChatsSummary(level, callback, \[timePeriod\])** - incoming chat calls overview  
<details>
  <summary>Example of callback response data:</summary>

  ```
    {
        "account": {
            "sent": 490,
            "accepted": 446,
            "missed": 44,
            "acceptanceRate": "91%"
        }
    }
  ```
  ```
    {
        "operators": {
            "Denise Rogers\ndemo": {
                "sent": 45,
                "accepted": 40,
                "missed": 5,
                "acceptanceRate": "89%"
            },
            "Jane Andrews\njane": {
                "sent": 81,
                "accepted": 81,
                "acceptanceRate": "100%",
                "missed": "No statistics for this metric!"
            }
        }
    }
  ```
  ```
    {
        "departments": {
            "~": {
                "sent": 104,
                "accepted": 97,
                "missed": 7,
                "acceptanceRate": "93%"
            },
            "Customer Service": {
                "sent": 23,
                "accepted": 21,
                "missed": 2,
                "acceptanceRate": "91%",
            },
            "Billing": {
                "sent": "13",
                "accepted": "13",
                "missed": "No statistics for this metric!"
                "acceptanceRate": "100%",
            }
        }
    }
  ```
</details>

**getPreChatSurveySummary(callback, \[timePeriod\])** - pre-chat survey usage overview 
<details> 
  <summary>Example of callback response data:</summary>

  ```
{
    "loads": 25,
    "submits": 15,
    "referrers": {
        "https://www.mywebsite.com/": 20,
        "https://mywebsiste.com/": 5
    },
    "clickThroughRate": "60%"
}		
  ```
</details>

**getWebsiteTrafficSummary(callback, \[timePeriod\])** - website traffic overview
<details>
  <summary>Example of callback response data:</summary>

  ```
  {
    "totalHits": {
        "average": 4.8074045,
        "total": 11557
    },
    "visitsByReferrer": {
      "url_1": 457,
      "url_2": 436,
      ...
    },
    "visitsByURL": {
      "url_3": 394,
      "url_4": 375,
      ...
    }  
  }
  ```
</details>

**getChatReferrersSummary(callback, \[timePeriod\])** - chat referrers overview
<details>
  <summary>Example of callback response data:</summary>

  ```
{
    "preChatSurveyReferrers": {
      "url_1": 8,
      "url_2": 4,
      ...
    },
    "offlineFormReferrers": {
      "url_3": 7,
      "url_2": 5,
      ...
    }
}
 
  ```
</details>

**getOfflineFormSummary(callback, \[timePeriod\])** - offline form usage overview
<details>
  <summary>Example of callback response data:</summary>

  ```
{
    "loads": 18,
    "submits": 2,
    "referrers": {
        "https://www.mywebsite.com/": 15,
        "https://www.mywebsite.com/prices": 3
     },
    "clickThroughRate": "11%"
}
  ```
</details>

**getPostChatSurveySummary(level, callback, \[timePeriod\])** - post chat survey results overview
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": {
        "proficiency": {
            "average": 4.7909093,
            "total": 527
        },
        "politeness": {
            "average": 4.8,
            "total": 528
        },
        "caseSolved": "No statistics for this metric!",
        "caseNotSolved": "No statistics for this metric!",
        "contented": "No statistics for this metric!",
        "notContented": "No statistics for this metric!"
    }
}
```
```
{
    "operators": {
        "Denise Rogers\ndemo": {
            "proficiency": {
                "average": 4.6258993,
                "total": 643
            },
            "politeness": {
                "average": 4.6666665,
                "total": 630
            },
            "contented": 4,
            "notContented": 3,
            "caseSolved": "No statistics for this metric!",
            "caseNotSolved": "No statistics for this metric!"
        },
        "Jane\njane": {
            "proficiency": {
                "average": 4.852941,
                "total": 165
            },
            "politeness": {
                "average": 5,
                "total": 165
            },
            "caseSolved": "No statistics for this metric!",
            "caseNotSolved": "No statistics for this metric!",
            "contented": "No statistics for this metric!",
            "notContented": "No statistics for this metric!"
        },
        ...
    }
}
```
```
{
    "departments": {
        "~": {
            "proficiency": {
                "average": 4.653409,
                "total": 819
            },
            "politeness": {
                "average": 4.7218933,
                "total": 798
            },
            "contented": 4,
            "notContented": 3,
            "caseSolved": "No statistics for this metric!",
            "caseNotSolved": "No statistics for this metric!"
        },
        ...
    }
}
```
</details>

**getAccountTimeline(callback, \[timePeriod\])** - account statistics by specified timeperiods (handy for graphs)
<details>
  <summary>Example of callback response data:</summary>

```
{
     "onlinePresence": {
          "chatOnlineTime": {
               "total": {
                    "total": [
                         172688.98,
                         "1d 23h 58m 8s"
                    ],
                    "average": [
                         299.80725,
                         "4m 59s"
                    ]
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": [
                              86293.99,
                              "23h 58m 13s"
                         ]
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": [
                              86394.99,
                              "23h 59m 54s"
                         ]
                    }
               ]
          },
          "chatOfflineTime": {
               "total": [
                    113,
                    "1m 53s"
               ],
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": [
                              107,
                              "1m 47s"
                         ]
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": [
                              6,
                              "6s"
                         ]
                    }
               ]
          }
     },
     "averages": {
          "chatAcceptTime": {
               "total": {
                    "total": [
                         897.216,
                         "14m 57s"
                    ],
                    "average": [
                         16.928604,
                         "16s"
                    ]
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": [
                              18.909548,
                              "18s"
                         ]
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": [
                              14.137273,
                              "14s"
                         ]
                    }
               ]
          },
          "preChatSurveyFilloutTime": {
               "total": {
                    "total": [
                         3910.364,
                         "1h 5m 10s"
                    ],
                    "average": [
                         54.31061,
                         "54s"
                    ]
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": [
                              48.527763,
                              "48s"
                         ]
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": [
                              62.4066,
                              "1m 2s"
                         ]
                    }
               ]
          },
          "visitorMessagesPerChat": {
               "total": {
                    "average": 7.2112675,
                    "total": 512
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 7.6410255
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 6.6875
                    }
               ]
          },
          "operatorMessagesPerChat": {
               "total": {
                    "average": 5.7887325,
                    "total": 411
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 5.8974357
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 5.65625
                    }
               ]
          },
          "operatorResponseTime": {
               "total": {
                    "total": [
                         31461.62,
                         "8h 44m 21s"
                    ],
                    "average": [
                         73.85357,
                         "1m 13s"
                    ]
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": [
                              57.8949,
                              "57s"
                         ]
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": [
                              100.65208,
                              "1m 40s"
                         ]
                    }
               ]
          },
          "visitorResponseTime": {
               "total": {
                    "total": [
                         21733.281,
                         "6h 2m 13s"
                    ],
                    "average": [
                         48.62032,
                         "48s"
                    ]
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": [
                              50.25009,
                              "50s"
                         ]
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": [
                              45.519512,
                              "45s"
                         ]
                    }
               ]
          },
          "offlineFormFilloutTime": {
               "total": {
                    "total": [
                         225.838,
                         "3m 45s"
                    ],
                    "average": [
                         225.838,
                         "3m 45s"
                    ]
               },
               "timeline": [
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": [
                              225.838,
                              "3m 45s"
                         ]
                    }
               ]
          }
     },
     "preChatSurvey": {
          "loads": {
               "total": 182,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 91
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 91
                    }
               ]
          },
          "submits": {
               "total": 72,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 42
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 30
                    }
               ]
          },
          "clickThroughRate": {
               "total": "40%",
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": "46%"
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": "33%"
                    }
               ]
          },
          "referrers": {
               "https://www.mywebsite.com/": {
                    "total": 31,
                    "timeline": [
                         {
                              "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 15
                         },
                         {
                              "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 16
                         }
                    ]
               },
               "https://www.mywebsite.com/prices": {
                    "total": 6,
                    "timeline": [
                         {
                              "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 1
                         },
                         {
                              "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 5
                         }
                    ]
               },
			   ...
          }
     },
     "chats": {
          "sent": {
               "total": 72,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 42
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 30
                    }
               ]
          },
          "accepted": {
               "total": 53,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 31
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 22
                    }
               ]
          },
          "acceptanceRate": {
               "total": "74%",
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": "74%"
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": "73%"
                    }
               ]
          },
          "missed": {
               "total": 19,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 11
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 8
                    }
               ]
          }
     },
     "postChatSurvey": {
          "proficiency": {
               "total": {
                    "average": 5,
                    "total": 40
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": {
                              "average": 5,
                              "total": 15
                         }
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": {
                              "average": 5,
                              "total": 25
                         }
                    }
               ]
          },
          "politeness": {
               "total": {
                    "average": 5,
                    "total": 40
               },
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": {
                              "average": 5,
                              "total": 15
                         }
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": {
                              "average": 5,
                              "total": 25
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
          "loads": {
               "total": 3,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 1
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 2
                    }
               ]
          },
          "submits": {
               "total": 1,
               "timeline": [
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 1
                    }
               ]
          },
          "clickThroughRate": {
               "total": "33%",
               "timeline": [
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": "50%"
                    }
               ]
          },
          "referrers": {
               "https://www.mywebsite.com": {
                    "total": 3,
                    "timeline": [
                        {
                            "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 1
                        },
                        {
                            "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 2
                        }
                    ]
               }
          }
     },
     "proactiveChats": {
          "sent": {
               "total": 9,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 4
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 5
                    }
               ]
          },
          "accepted": {
               "total": 7,
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": 4
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 3
                    }
               ]
          },
          "acceptanceRate": {
               "total": "78%",
               "timeline": [
                    {
                         "01-Aug-2022 04:00:00 - 02-Aug-2022 04:00:00": "100%"
                    },
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": "60%"
                    }
               ]
          },
          "declined": {
               "total": 2,
               "timeline": [
                    {
                         "02-Aug-2022 04:00:00 - 03-Aug-2022 04:00:00": 2
                    }
               ]
          }
     }
}
```
</details>

**getOperatorsTimeline(callback, \[timePeriod\])** - operators statistics by timeperiods (handy for graphs)
<details>
  <summary>Example of callback response data:</summary>

```
{
    "Jane\njane": {
        "chatsSent": {
            "total": 13,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 6
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 7
                }
            ]
        },
        "chatsAccepted": {
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
        "acceptanceRate": {
            "total": "69%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": "50%"
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": "86%"
                }
            ]
        },
        "chatsMissed": {
            "total": 4,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 3
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
                }
            ]
        },
        "chatAcceptTime": {
            "total": {
                "total": [
                    236.468,
                    "3m 56s"
                ],
                "average": [
                    26.274221,
                    "26s"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
                        24.946333,
                        "24s"
                    ]
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
                        26.938168,
                        "26s"
                    ]
                }
            ]
        },
        "onlineTime": {
            "total": {
                "total": [
                    21297.809,
                    "5h 54m 57s"
                ],
                "average": [
                    295.8029,
                    "4m 55s"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
                        8560.35,
                        "2h 22m 40s"
                    ]
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
                        12737.458,
                        "3h 32m 17s"
                    ]
                }
            ]
        },
        "awayTime": {
            "total": {
                "total": [
                    1203.062,
                    "20m 3s"
                ],
                "average": [
                    300.7655,
                    "5m"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
                        594.86,
                        "9m 54s"
                    ]
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
                        608.202,
                        "10m 8s"
                    ]
                }
            ]
        },
        "offlineTime": {
            "total": [
                150299,
                "1d 17h 44m 59s"
            ],
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": [
                        77245,
                        "21h 27m 25s"
                    ]
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": [
                        73054,
                        "20h 17m 34s"
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
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
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
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                        "average": 5,
                        "total": 5
                    }
                }
            ]
        },
        "casesSolved": "No statistics for this metric!",
        "unsolvedCases": "No statistics for this metric!",
        "contented": "No statistics for this metric!",
        "notContented": "No statistics for this metric!",
        "loadRate": {
            "total": "25%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": "29%"
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": "23%"
                }
            ]
        },
        "proactiveChatsSent": {
            "total": 2,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
                }
            ]
        },
        "proactiveChatsAccepted": {
            "total": 1,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
                }
            ]
        },
        "proactiveChatsDeclined": {
            "total": 1,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
                }
            ]
        },
        "login": "jane",
        "name": "Jane"
    },
    ...
}
```
</details>

**getDepartmentsTimeline(callback, \[timePeriod\])** - departments statistics by timeperiods (handy for graphs)
<details>
  <summary>Example of callback response data:</summary>

```
{
    "Billing": {
        "chatsSent": {
            "total": 336,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 220
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 116
                }
            ]
        },
        "chatsAccepted": {
            "total": 242,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 165
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 77
                }
            ]
        },
        "acceptanceRate": {
            "total": "72%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": "75%"
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": "66%"
                }
            ]
        },
        "chatsMissed": {
            "total": 94,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 55
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 39
                }
            ]
        },
        "chatAcceptTime": {
            "total": {
                "total": [
                    4700.254,
                    "1h 18m 20s"
                ],
                "average": [
                    19.422537,
                    "19s"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": [
                        20.145357,
                        "20s"
                    ]
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": [
                        17.873636,
                        "17s"
                    ]
                }
            ]
        },
        "onlineTime": {
            "total": {
                "total": [
                    3870259.8,
                    "1m 14d 19h 4m 19s"
                ],
                "average": [
                    299.60208,
                    "4m 59s"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": [
                        2291603.2,
                        "26d 12h 33m 23s"
                    ]
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": [
                        1578656.4,
                        "18d 6h 30m 56s"
                    ]
                }
            ]
        },
        "proficiency": {
            "total": {
                "average": 4.707317,
                "total": 193
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": {
                        "average": 4.6896553,
                        "total": 136
                    }
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": {
                        "average": 4.75,
                        "total": 57
                    }
                }
            ]
        },
        "politeness": {
            "total": {
                "average": 4.634146,
                "total": 190
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": {
                        "average": 4.678571,
                        "total": 131
                    }
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": {
                        "average": 4.5384617,
                        "total": 59
                    }
                }
            ]
        },
        "loadRate": {
            "total": "27%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": "27%"
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": "27%"
                }
            ]
        },
        "casesSolved": "No statistics for this metric!",
        "unsolvedCases": "No statistics for this metric!",
        "contented": "No statistics for this metric!",
        "notContented": "No statistics for this metric!",
        "offlineTime": {
            "total": [
                1403741,
                "16d 5h 55m 41s"
            ],
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": [
                        303997,
                        "3d 12h 26m 37s"
                    ]
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": [
                        1099744,
                        "12d 17h 29m 4s"
                    ]
                }
            ]
        }
    },
    "Technical Support": {
        "chatsSent": {
            "total": 588,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 391
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 197
                }
            ]
        },
        "chatsAccepted": {
            "total": 412,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 270
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 142
                }
            ]
        },
        "acceptanceRate": {
            "total": "70%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": "69%"
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": "72%"
                }
            ]
        },
        "chatsMissed": {
            "total": 176,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 121
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 55
                }
            ]
        },
        "chatAcceptTime": {
            "total": {
                "total": [
                    8071.301,
                    "2h 14m 31s"
                ],
                "average": [
                    19.590536,
                    "19s"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": [
                        19.249304,
                        "19s"
                    ]
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": [
                        20.239359,
                        "20s"
                    ]
                }
            ]
        },
        "onlineTime": {
            "total": {
                "total": [
                    3870259.8,
                    "1m 14d 19h 4m 19s"
                ],
                "average": [
                    299.60208,
                    "4m 59s"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": [
                        2291603.2,
                        "26d 12h 33m 23s"
                    ]
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": [
                        1578656.4,
                        "18d 6h 30m 56s"
                    ]
                }
            ]
        },
        "proficiency": {
            "total": {
                "average": 4.5151515,
                "total": 447
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": {
                        "average": 4.3962264,
                        "total": 233
                    }
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": {
                        "average": 4.652174,
                        "total": 214
                    }
                }
            ]
        },
        "politeness": {
            "total": {
                "average": 4.509804,
                "total": 460
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": {
                        "average": 4.285714,
                        "total": 240
                    }
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": {
                        "average": 4.7826085,
                        "total": 220
                    }
                }
            ]
        },
        "loadRate": {
            "total": "48%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": "49%"
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": "47%"
                }
            ]
        },
        "casesSolved": "No statistics for this metric!",
        "unsolvedCases": "No statistics for this metric!",
        "contented": "No statistics for this metric!",
        "notContented": "No statistics for this metric!",
        "offlineTime": {
            "total": [
                1403741,
                "16d 5h 55m 41s"
            ],
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": [
                        303997,
                        "3d 12h 26m 37s"
                    ]
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": [
                        1099744,
                        "12d 17h 29m 4s"
                    ]
                }
            ]
        }
    },
    "~": {
        "chatsSent": {
            "total": 304,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 194
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 110
                }
            ]
        },
        "chatsAccepted": {
            "total": 212,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 132
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 80
                }
            ]
        },
        "acceptanceRate": {
            "total": "70%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": "68%"
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": "73%"
                }
            ]
        },
        "chatsMissed": {
            "total": 92,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": 62
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": 30
                }
            ]
        },
        "chatAcceptTime": {
            "total": {
                "total": [
                    4048.942,
                    "1h 7m 28s"
                ],
                "average": [
                    19.189299,
                    "19s"
                ]
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": [
                        18.324053,
                        "18s"
                    ]
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": [
                        20.635025,
                        "20s"
                    ]
                }
            ]
        },
        "proficiency": {
            "total": {
                "average": 4.5652175,
                "total": 105
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": {
                        "average": 4.5333333,
                        "total": 68
                    }
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": {
                        "average": 4.625,
                        "total": 37
                    }
                }
            ]
        },
        "politeness": {
            "total": {
                "average": 4.6,
                "total": 115
            },
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": {
                        "average": 4.470588,
                        "total": 76
                    }
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": {
                        "average": 4.875,
                        "total": 39
                    }
                }
            ]
        },
        "loadRate": {
            "total": "25%",
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 01-Oct-2022 05:00:00": "24%"
                },
                {
                    "01-Oct-2022 05:00:00 - 01-Nov-2022 05:00:00": "26%"
                }
            ]
        },
        "onlineTime": "No statistics for this metric!",
        "casesSolved": "No statistics for this metric!",
        "unsolvedCases": "No statistics for this metric!",
        "contented": "No statistics for this metric!",
        "notContented": "No statistics for this metric!",
        "offlineTime": "Not enough statistics to calculate this metric!"
    },
    ...
}
```
</details>

__Note!__ Department named __"~"__ is used to collect data in case deprtment selection is not available on 
the pre-chat survey or department wasn't selected.

**getChatReferrersTimeline(callback, \[timePeriod\])** - chat referrers statistics by timeperiods (handy for graphs)
<details>
  <summary>Example of callback response data:</summary>

```
{
    "preChatSurveyReferrers": {
        "~total": 138,
        "https://www.mywebsite.com/": {
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
        "https://www.mywebsite.com/prices": {
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
        "https://www.mywebsite.com.com/signup": {
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
		...
    },
    "offlineFormReferrers": {
        "~total": 12,
        "https://www.mywebsite.com/": {
            "total": 9,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 4
                },
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 5
                }
            ]
        },
        "https://www.mywebsite.com/prices": {
            "total": 2,
            "timeline": [
                {
                    "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
                }
            ]
        },
        "https://www.mywebsite.com.com/signup": {
            "total": 1,
            "timeline": [
                {
                    "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
                }
            ]
        },
		...
	}
}
```
</details>

**getWebsiteTrafficTimeline(callback, \[timePeriod\])** - website traffic statistics by timeperiods (handy for graphs)
<details>
  <summary>Example of callback response data:</summary>

```
{
    "visitsByURL": {
        "https://www.mywebsite.com/": {
            "total": 50,
            "timeline": [
                {
                    "31-May-2022 21:00:00 - 30-Jun-2022 21:00:00": 32
                },
                {
                    "30-Jun-2022 21:00:00 - 31-Jul-2022 21:00:00": 18
                }
            ]
        },
        "https://www.mywebsite.com/prices": {
            "total": 45,
            "timeline": [
                {
                    "31-May-2022 21:00:00 - 30-Jun-2022 21:00:00": 20
                },
                {
                    "30-Jun-2022 21:00:00 - 31-Jul-2022 21:00:00": 25
                }
            ]
        },
        "https://www.mywebsite.com/signup": {
            "total": 46,
            "timeline": [
                {
                    "31-May-2022 21:00:00 - 30-Jun-2022 21:00:00": 28
                },
                    "30-Jun-2022 21:00:00 - 31-Jul-2022 21:00:00": 18
                }
            ]
        },
		...
    },
    "totalHits": {
        "total": {
            "average": 8.615385,
            "total": 448
        },
        "timeline": [
            {
                "31-May-2022 21:00:00 - 30-Jun-2022 21:00:00": {
                    "average": 18.043478,
                    "total": 256
                }
            },
            {
                "30-Jun-2022 21:00:00 - 31-Jul-2022 21:00:00": {
                    "average": 1.137931,
                    "total": 192
                }
            }
        ]
    },
    "visitsByReferrer": {
        "Unknown": {
            "total": 16,
            "timeline": [
                {
                    "31-May-2022 21:00:00 - 30-Jun-2022 21:00:00": 9
                },
                {
                    "30-Jun-2022 21:00:00 - 31-Jul-2022 21:00:00": 7
                }
            ]
        },
        "https://www.google.com": {
            "total": 36,
            "timeline": [
                {
                    "31-May-2022 21:00:00 - 30-Jun-2022 21:00:00": 19
                },
                {
                    "30-Jun-2022 21:00:00 - 31-Jul-2022 21:00:00": 17
                }
            ]
        },
        "http://www.bing.com/": {
            "total": 28,
            "timeline": [
                {
                    "31-May-2022 21:00:00 - 30-Jun-2022 21:00:00": 17
                },
                {
                    "30-Jun-2022 21:00:00 - 31-Jul-2022 21:00:00": 11
                }				
            ]
        },
		...
    }
}
```
</details>

**getControlPanelLoginCount(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "31-Aug-2022 21:00:00 - 30-Sep-2022 21:00:00": 24
    },
    {
        "30-Sep-2022 21:00:00 - 31-Oct-2022 22:00:00": 11
    }
]
```  

</details>

**getWebAgentAppLoginCount(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "Jane\njane": [
		{
			"31-Aug-2022 21:00:00 - 30-Sep-2022 21:00:00": 24
		},
		{
			"30-Sep-2022 21:00:00 - 31-Oct-2022 22:00:00": 11
		}	
    ],
    "Denise Rogers\noperator1": [
		{
			"31-Aug-2022 21:00:00 - 30-Sep-2022 21:00:00": 44
		},
		{
			"30-Sep-2022 21:00:00 - 31-Oct-2022 22:00:00": 20
		}
    ],
	...
}
```  

</details>

**getPreChatSurveyLoadCount(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 2472
    },
    {
        "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 2767
    },
    ...
]
```  

</details>

**getOfflineFormLoadCount(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 10
    },
    {
        "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 18
    },
    ...
]
```  

</details>

**getPreChatSurveyReferrers(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "https://www.mywebsite.com/": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 491
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 471
        }
    ],
    "https://www.mywebsite.com/prices": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 77
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 93
        }
    ],
    "https://www.mywebsite.com/signup": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 96
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 91
        }
    ],
	...
}
```  

</details>   

**getOfflineFormReferrers(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "https://www.mywebsite.com/": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 5
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 4
        }
    ],
    "https://www.mywebsite.com/prices": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 2
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 3
        }
    ],
    "https://www.mywebsite.com/signup": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 3
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 1
        }
    ],
	...
}
```  

</details>  

**getPreChatSurveySubmitCount(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 835
    },
    {
        "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 794
    }
]
```  

</details>


**getOfflineMessageSubmitCount(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 12
    },
    {
        "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 9
    }
]
```  

</details>

**getPreChatSurveyFilloutTime(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": {
            "average": [
                66.98354,
                "1m 6s"
            ],
            "total": [
                55395.39,
                "15h 23m 15s"
            ]
        }
    },
    {
        "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": {
            "average": [
                73.62398,
                "1m 13s"
            ],
            "total": [
                57426.7,
                "15h 57m 6s"
            ]
        }
    },
    ...
]
```  

</details>

**getOfflineFormFilloutTime(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": {
            "average": [
                257.85,
                "4m 17s"
            ],
            "total": [
                515.7,
                "8m 35s"
            ]
        }
    },
    ...
]
```  

</details>

**getReceivedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 828
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 779
        }
    ]
}
```  
```
{
    "departments": {
        "~": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 428
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 370
            }
        ],
        "Technical Support": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 237
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 267
            }
        ],
        ...
    }
}
``` 
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 151
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 128
            }
        ],
        "Denise Rogers\noperator1": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 96
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 99
            }
        ],
        ...
    }
}
```

</details>  

**getAcceptedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 567
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 541
        }
    ]
}
```
```
{
    "departments": {
        "~": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 379
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 355
            }
        ],
        "Technical Support": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 205
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 247
            }
        ],
        ...
    }
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 128
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 105
            }
        ],
        "Denise Rogers\noperator1": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 31
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 42
            }
        ],
        ...
    }
}
```  

</details>  

**getAcceptedProactiveChatsCount(level, callback, \[timePeriod\])** - overview of proactive chats statistics
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 31
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 42
        }
        ...
    ]
}
```
```
{
    "departments": {
        "Sales": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 9
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 12
            }
        ],
        "Technical Support": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 4
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 7
            }
        ],
       ...
    }
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 7
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 6
            }
        ],
        "Denise Rogers\noperator1": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 8
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 11
            }
        ],
        ...
    }
}
```  
</details>

**getDeclinedProactiveChatsCount(level, callback, \[timePeriod\])** - overview of declined proactive chats statistics
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 17
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 19
        }
        ...
    ]
}
```
```
{
    "departments": {
        "Sales": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 5
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 8
            }
        ],
        "Technical Support": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 2
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 4
            }
        ],
       ...
    }
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 4
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 4
            }
        ],
        "Denise Rogers\noperator1": [
            {
                "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 6
            },
            {
                "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 4
            }
        ],
        ...
    }
}
```  
</details>

**getVisitsByURL(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "https://www.mywebsite.com/": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 491
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 471
        }
    ],
    "https://www.mywebsite.com/prices": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 77
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 93
        }
    ],
    "https://www.mywebsite.com/signup": [
        {
            "01-Sep-2022 04:00:00 - 01-Oct-2022 04:00:00": 96
        },
        {
            "01-Oct-2022 04:00:00 - 01-Nov-2022 04:00:00": 91
        }
    ],
	...
}

```  
</details>

**getVisitsByReferrer(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "https://www.google.com/": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 56
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 49
        }
    ],
    "https://googleads.g.doubleclick.net/": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 15
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 16
        }
    ],
    "https://www.bing.com/": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 88
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 42
        }
    ],
	...
}
```  
</details>

**getTotalHits(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
            "average": 4.8074045,
            "total": 11557
        }
    },
    {
        "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
            "average": 5.087971,
            "total": 11336
        }
    },
    ...
]
```  
</details>

**getMissedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 7
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 9
        },
        ...
    ]
}
```  
```
{
    "departments": {
        "~": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 7
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 9
            }
        ],
        "Technical Support": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 4
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 3
            }
        ],
        ...
    }
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 2
            }
        ],
        "Denise Jonson\noperator1": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 3
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
        ],
		...
    }
}
```

</details>  

**getVisitorMessagesCount(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
    {
        "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
            "average": 7.3333335,
            "total": 154
        }
    },
    {
        "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
            "average": 4.354839,
            "total": 135
        }
    },
    ...
]
```  

</details>

**getOperatorMessagesCount(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                "average": 6.3333335,
                "total": 133
            }
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                "average": 3.548387,
                "total": 110
            }
        },
        ...
    ]
}
```  
```
{
    "departments": {
        "~": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": 10.230769,
                    "total": 133
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": 4.5833335,
                    "total": 110
                }
            }
        ],
        ...
    }
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": 6,
                    "total": 24
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": 2.5714285,
                    "total": 18
                }
            }
        ],
        "Denise Jonson\noperator1": [
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": 3.3333333,
                    "total": 10
                }
            }
        ],
        "David\ndavid": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": 9,
                    "total": 27
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": 7.428571,
                    "total": 52
                }
            }
        ],
        ...
    }
}
```
</details>

**getChatAcceptDelay(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>
  
```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                "average": [
                    19.963846,
                    "19s"
                ],
                "total": [
                    259.53,
                    "4m 19s"
                ]
            }
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                "average": [
                    19.117182,
                    "19s"
                ],
                "total": [
                    420.578,
                    "7m"
                ]
            }
        }
    ]
}
```
```
{
    "departments": {
        "~": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": [
                        19.963846,
                        "19s"
                    ],
                    "total": [
                        259.53,
                        "4m 19s"
                    ]
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": [
                        19.117182,
                        "19s"
                    ],
                    "total": [
                        420.578,
                        "7m"
                    ]
                }
            }
        ],
        ...
    }
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": [
                        15.9765,
                        "15s"
                    ],
                    "total": [
                        63.906,
                        "1m 3s"
                    ]
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": [
                        10.709286,
                        "10s"
                    ],
                    "total": [
                        74.965,
                        "1m 14s"
                    ]
                }
            }
        ],
        "Denise Jonson\noperator1": [
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": [
                        26.118334,
                        "26s"
                    ],
                    "total": [
                        78.355,
                        "1m 18s"
                    ]
                }
            }
        ],
        ...
    }
}
```  
</details>

**getOperatorsAwayTime(callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
[
  {
    "08-May-2020 04:00:00 - 09-May-2020 04:00:00": {
      total: 2,
      average: 2
    }
  },
  {
    "09-May-2020 04:00:00 - 10-May-2020 04:00:00": {
      total: 2,
      average: 2
    }
  },
  ...
]
```  

</details>
 
**getOnlineTime(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                "average": [
                    299.7523,
                    "4m 59s"
                ],
                "total": [
                    86328.664,
                    "23h 58m 48s"
                ]
            }
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                "average": [
                    300.4342,
                    "5m"
                ],
                "total": [
                    86224.62,
                    "23h 57m 4s"
                ]
            }
        }
    ]
}
```  
```
{
    "departments": {
        "Customer Support": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": [
                        299.7523,
                        "4m 59s"
                    ],
                    "total": [
                        86328.664,
                        "23h 58m 48s"
                    ]
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": [
                        300.4342,
                        "5m"
                    ],
                    "total": [
                        86224.62,
                        "23h 57m 4s"
                    ]
                }
            }
        ],
        ...
    }
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": [
                        298.35004,
                        "4m 58s"
                    ],
                    "total": [
                        21779.553,
                        "6h 2m 59s"
                    ]
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": [
                        299.68668,
                        "4m 59s"
                    ],
                    "total": [
                        28769.922,
                        "7h 59m 29s"
                    ]
                }
            }
        ],
        ...
    }
}
```

</details>

**getOfflineTime(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                "average": [
                    0.24652777320867605,
                    "0s"
                ],
                "total": [
                    71,
                    "1m 11s"
                ]
            }
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                "average": [
                    0.6097560650310782,
                    "0s"
                ],
                "total": [
                    175,
                    "2m 55s"
                ]
            }
        }
    ]
}
```
```
{
    "departments": {
        "Customer Support": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": [
                        0.24652777320867605,
                        "0s"
                    ],
                    "total": [
                        71,
                        "1m 11s"
                    ]
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": [
                        0.6097560650310782,
                        "0s"
                    ],
                    "total": [
                        175,
                        "2m 55s"
                    ]
                }
            }
        ],
        ...
    }
}
```  
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": {
                    "average": [
                        885.2054762005445,
                        "14m 45s"
                    ],
                    "total": [
                        64620,
                        "17h 57m"
                    ]
                }
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": {
                    "average": [
                        600.3124849764974,
                        "10m"
                    ],
                    "total": [
                        57630,
                        "16h 30s"
                    ]
                }
            }
        ],
        ...
    }
}
```
</details> 

**getSentProactiveChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>Example of callback response data:</summary>

```
{
    "account": [
        {
            "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 4
        },
        {
            "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 9
        },
        ...
    ]
}
```
```
{
    "departments": {
        "Customer Service": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 4
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 9
            }
        ],
        "Billing": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 1
            }
        ],
		...
	}
}
```
```
{
    "operators": {
        "Jane\njane": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 1
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 4
            }
        ],
        "Denise\noperator1": [
            {
                "01-Sep-2022 04:00:00 - 02-Sep-2022 04:00:00": 2
            },
            {
                "02-Sep-2022 04:00:00 - 03-Sep-2022 04:00:00": 5
            }
        ],
		...
	}
}
```  
</details> 

## When something goes wrong:

### When no data is available

If no data is available for any of the metrics in your request, you'll get the following responce:

```
{
    "noStats": true,
    "message": "No statistics for this time period: 01 Sep 2022 00:00:00 - 01 Nov 2022 00:00:00",
    "startDate": "2022-08-31T22:00:00.000Z",
    "endDate": "2022-10-31T23:00:00.000Z"
}
```

If no data is available for a specific metric in your request, you'll get the following responce for this metric:

```
"proactiveChatsSent": "No statistics for this metric!"
```
</details>

### When account settings are wrong

If statistics gathering is not enabled in the account settings, you'll get the following responce:

```
{
    "error": "account-settings-error",
    "message": "Statistics is not enabled on account: \"account_name\" (Error ID: error_id)",
    "httpStatus": 403
}
```

If no statistics password specified in the account settings, you'll get the following responce:

```
{
    "error": "account-settings-error",
    "message": "Can't access statistics for account \"account_name\": Chat statistics password needs to be set in Account Settings / Chat Statistics Access (Error ID: error_id)",
    "httpStatus": 403
}
```

### When request parameters are wrong

If timings in your request are wrong, you'll get the following responce:

```
{
    "error": "invalid-request",
    "message": "startTime must be less than endTime: supplied startTime: 01-Jan-2021 05:00:00.000, endTime: 01-Jan-2020 05:00:00.000 (Error ID: error_id)",
    "httpStatus": 400
}
```

If wrong statistics password is entered, you'll get the following responce:

```
{
    "error": "auth-error",
    "message": "Can't access statistics for account \"account_name\": Incorrect access token (Error ID: error_id)",
    "httpStatus": 403
}
```

If nonexisting account name is entered, you'll get the following responce:

```
{
    "error": "auth-error",
    "message": "Can't access statistics for account \"account_name\": No such account (Error ID: error_id)",
    "httpStatus": 404
}
```

## Additional methods:

**setTimePeriod(\[timePeriod\])**
<details>
  <summary>Usage example:</summary>
```
setTimePeriod({
    duration: 'month',
    startDate: '01 Jun 2019 21:00:00',
    endDate: '30 Aug 2020 20:59:59'
})
```
</details> 

**getTimePeriod()**
<details>
  <summary>Example of callback response data:</summary>
```
{
    duration: 'month',
    startDate: '01 Jun 2019 21:00:00',
    endDate: '30 Aug 2020 20:59:59'
}
```
</details> 

**getParserByName(name)**
Returns parser (function)

**getCustomMetrics({ metricsGroups, metrics, opts, callback })** - method for creating custom queries
<details>
  <summary>Params:</summary>
    metricsGroups {Array}{metricsGroup} - is an array of objects, with parameters "metrics" and "opts" (the description is the same as the parameters below)

    metrics {Object} - object where key is the name of the metric and value is the key in the response

    opts {Object}

    opts.timePeriod {timePeriod}

    opts.customParserName {string} - parser name

    opts.isShouldAddTotals {boolean} - add the "total" parameter to the response

    callback {function}
</details> 

<details>
  <summary>Usage example:</summary>

```
getCustomMetrics({
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
        timePeriod: {
            duration: 'day',
            startDate: '28-Aug-2019 21:00:00',
            endDate: '30-Aug-2019 20:59:59'
        },
    },
    callback: console.log
  })
```  
</details> 

<details>
  <summary>Example of callback response data:</summary>

```
  [
    {
      "operator1": {
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
      ...
    },
    ,
    {
      "chatCallsTotals": 48
    }
  ]
```  
</details>
