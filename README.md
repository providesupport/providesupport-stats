
# Provide Support Statistics Library

This library is designed for implementing accounts statistics in your apps.

# Demo

[Minimal demo](https://codepen.io/gamer0k93/pen/gOzrRQp?editors=1111)

![demo](https://github.com/providesupport/providesupport-stats/blob/master/docs/demo1.png)

[Site based on this library](https://stats.providesupport.com/login)

![demo](https://github.com/providesupport/providesupport-stats/blob/master/docs/demo2.png)

# Get started
The library is built as a [UMD module](https://github.com/umdjs/umd) so you can load it in any way the UMD module provides. Here are examples of the most popular ones:  

Via script tag (handy for old browsers):
```
<html>
  <head>
    <script src='https://unpkg.com/providesupport-stats@1.0.2/dist/PSstatsAPI.js'></script>
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
**NB: you might need specify relevant package version**  

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

## Methods
Arguments:
* **callback** (required) function with one parameter - response data. Since this library works via [JSONP](https://javascript.info/fetch-crossorigin#using-scripts) you can get access to response only through callback.
* **level** (required) defines 'level' of response. It can be:  
1. __string('operators' || 'departments' || 'account') to get data by operators, by departments or by account__
2. __object with 1 or 2 keys (operators, departments) and array values(['operator/departmentName', 'operator/departmentName'])__
```
{
  operators: ['JuliaForever', 'DirtyHarry', ...],
  departments: ['customer support', 'geeks', ...]
}
// return stats only for specified operators/departments
```
* **timePeriod** (optional) must be an object with 3 properties: *startDate*, *endDate*, and *duration*. First two might be any type as long as it's valid Date object ('Wed Mar 10 2021 17:53:31', '10 Mar 2021', or even 1615391611580). The last property *duration* must be one of these values: **'hour'**, **'day'**, **'week'**, **'month'**, **'year'**.




### Methods:  
**getAccountSummary(callback, \[timePeriod\])** - detailed overview of account statistics  
<details>
  <summary>return value from callback:</summary>

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

**getOperatorsSummary(callback, \[timePeriod\])** - detailed overview of operators statistics  
<details>
  <summary>return value from callback:</summary>

```
{
  operator1: {
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
  ...
}
```
</details>


**getDepartmentsSummary(callback, \[timePeriod\])** - detailed overview of departments statistics  
<details>
  <summary>return value from callback:</summary>

  ```
  [
    departmentName: {
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
    ...
  ]
  ```
</details>

**getProactiveChatsSummary(level, callback, \[timePeriod\])** - overview of proactive chats statistics  
<details>
  <summary>return value from callback:</summary>

  ```
  {
    sent: 2    
    accepted: 2  
    declined: 2  
    acceptanceRate: "33%"  
  }
  ```
</details>

**getChatsSummary(level, callback, \[timePeriod\])** - overview of chats statistics  
<details>
  <summary>return value from callback:</summary>

  ```
  {
    incoming: 2  
    accepted: 2  
    missed: 2  
    acceptanceRate: "33%"  
  }
  ```
</details>

**getPreChatSurveySummary(callback, \[timePeriod\])** - overview of pre-chat survey statistics
<details> 
  <summary>return value from callback:</summary>

  ```
  {
    loads: 2  
    submits: 2  
    referrers: {
      url: 2,
      url: 2,
      ...
    },  
    clickThroughRate: "33%"  
  }
  ```
</details>

**getWebsiteTrafficSummary(callback, \[timePeriod\])** - overview of website traffic statistics
<details>
  <summary>return value from callback:</summary>

  ```
  {
    totalHits: {
      average: 2,
      total: 2,
    }, 
    visitsByReferrer: {
      url: 2,
      url: 2,
      ...
    },
    visitsByURL: {
      url: 2,
      url: 2,
      ...
    }  
  }
  ```
</details>

**getChatReferrersSummary(callback, \[timePeriod\])** - overview of chat referrers statistics
<details>
  <summary>return value from callback:</summary>

  ```
  {
    offlineFormReferrers: {
      url: 2,
      url: 2,
      ...
    }, 
    preChatSurveyReferrers:: {
      url: 2,
      url: 2,
      ...
    }
  }
  ```
</details>

**getOfflineFormSummary(callback, \[timePeriod\])** - overview of offline form statistics
<details>
  <summary>return value from callback:</summary>

  ```
  {  
    loads: 2  
    submits: 2  
    referrers: {url: 2, url: 2, ...}  
    clickThroughRate: "33%"  
  }
  ```
</details>

**getPostChatSurveySummary(level, callback, \[timePeriod\])** - overview of post chat survey statistics
<details>
  <summary>return value from callback:</summary>

```
{
  proficiency: {  
    total: 2,  
    average: 2  
  },  
  politeness {  
    total: 2,  
    average: 2  
  },  
  caseSolved: 2,  
  caseNotSolved: 2,  
  contented: 2,  
  notContented: 2  
}
```
</details>

**getAccountTimeline(callback, \[timePeriod\])** - account statistics by timeperiods (handy for graphs)
<details>
  <summary>return value from callback:</summary>

```
{ 
  onlinePresence: {  
    chatOnlineTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"],
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    chatOfflineTime: {
      total: [32832126, "1y 15d 2m 6s"],
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
  }  
  averages: {  
    chatAcceptTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"],
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },  
    preChatSurveyFilloutTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"],
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    offlineFormFilloutTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"],
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },  
    visitorMessagesPerChat: {
      total: {
        average: 2,
        total: 2,
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },  
    operatorMessagesPerChat: {
      total: {
        average: 2,
        total: 2,
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
  }  
  preChatSurvey: {  
    loads: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },  
    submits: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    referrers: {
      url: {
        total: 2,
        timeline: [
          "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
          "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
          ...
        ],
      },
      url: {
        total: 2,
        timeline: [
          "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
          "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
          ...
        ],
      },
      ...
    },  
    clickThroughRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },  
  }  
  offlineForm: {  
    loads: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    }, 
    submits: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    referrers: {
      url: {
        total: 2,
        timeline: [
          "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
          "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
          ...
        ],
      },
      url: {
        total: 2,
        timeline: [
          "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
          "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
          ...
        ],
      },
      ...
    },
    clickThroughRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },
  }  
  chats: {  
    incoming: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    accepted: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    missed: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },  
    acceptanceRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },
  }  
  proactiveChats: {
    sent: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },    
    accepted: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },  
    declined: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },  
    acceptanceRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },
  }  
}
```
</details>

**getOperatorsTimeline(callback, \[timePeriod\])** - operators statistics by timeperiods (handy for graphs)
<details>
  <summary>return value from callback:</summary>

```
{
  operator1: {
    acceptanceRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },
    casesSolved: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    unsolvedCases: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    notContented: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    contented: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatsAccepted: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatsMissed: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatsSent: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatAcceptTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"],
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    loadRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },
    login: string,
    name: string,
    offlineTime: {
      total: [32832126, "1y 15d 2m 6s"],
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    onlineTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"],
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    awayTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"],
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    politeness: {
      total: {  
        total: 2,  
        average: 2  
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        ...
      ],
    },
    proficiency: {
      total: {  
        total: 2,  
        average: 2  
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        ...
      ],
    },
    proactiveChatsAccepted: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    proactiveChatsDeclined: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    proactiveChatsSent: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
  },
  ...
}
```
</details>

**getDepartmentsTimeline(callback, \[timePeriod\])** - departments statistics by timeperiods (handy for graphs)
<details>
  <summary>return value from callback:</summary>

```
{
  departmentName: {
    acceptanceRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },
    casesSolved: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    unsolvedCases: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    notContented: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    contented: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatsAccepted: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatsMissed: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatsSent: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    chatAcceptTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"]
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    loadRate: {
      total: "33%",
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": "33%",
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": "33%",
        ...
      ],
    },
    offlineTime: {
      total: [32832126, "1y 15d 2m 6s"],
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    onlineTime: {
      total: {
        average: [32832126, "1y 15d 2m 6s"],
        total: [32832126, "1y 15d 2m 6s"]
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": [32832126, "1y 15d 2m 6s"],
        ...
      ],
    },
    politeness: {
      total: {  
        total: 2,  
        average: 2  
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        ...
      ],
    },
    proficiency: {
      total: {  
        total: 2,  
        average: 2  
      },
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": {  
          total: 2,  
          average: 2  
        },
        ...
      ],
    },
  },
  ...
}
```
</details>

**getChatReferrersTimeline(callback, \[timePeriod\])** - chat referrers statistics by timeperiods (handy for graphs)
<details>
  <summary>return value from callback:</summary>

```
{
  offlineFormReferrers: {
    url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    ...
  },
  preChatSurveyReferrers: {
    url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    ...
  }
}
```
</details>

**getWebsiteTrafficTimeline(callback, \[timePeriod\])** - website traffic statistics by timeperiods (handy for graphs)
<details>
  <summary>return value from callback:</summary>

```
{
  totalHits: {
    total: {
      average: 2,
      total: 2,
    },
    timeline: {
      'timePeriod: {
        average: 2,
        total: 2,
      },
      ... 
    }
  },
  },
  visitsByReferrer: {
    url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    ...
  },
  visitsByURL: {
     url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
    url: {
      total: 2,
      timeline: [
        "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2,
        "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2,
        ...
      ],
    },
  } 
}
```
</details>

**getControlPanelLoginCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>

**getWebAgentAppLoginCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
{
  opName: [
    {"08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2},
    {"09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2},
    ...
  ],
  opName: [
    {"08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2},
    {"09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2},
    ...
  ]
}
```  

</details>

**getPreChatSurveyLoadCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>

**getOfflineFormLoadCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>

**getPreChatSurveyReferrers(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
{
  url: [
    {"08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2},
    {"09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2},
    ...
  ],
  url: [
    {"08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2},
    {"09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2},
    ...
  ],
  ...
}
```  

</details>   

**getOfflineFormReferrers(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
{
  url: [
    {"08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2},
    {"09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2},
    ...
  ],
  url: [
    {"08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2},
    {"09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2},
    ...
  ],
  ...
}
```  

</details>  

**getPreChatSurveySubmitCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>


**getOfflineMessageSubmitCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>

**getPreChatSurveyFilloutTime(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

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

**getOfflineFormFilloutTime(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

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

**getReceivedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>  

**getAcceptedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>  

**getAcceptedProactiveChatsCount(level, callback, \[timePeriod\])** - overview of proactive chats statistics
<details>
  <summary>return value from callback:</summary>

```
  {
    "operators": {
      "operator1": "No statistics for this operator/department!",
      "operator2": [
        { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
        { "timePeriod": 2 },
        ...
      ]
    },
    "departments": {
      "department1": [
        { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
        { "timePeriod": 2 },
        ...
      ]
    }
  }
```  
</details>

**getDeclinedProactiveChatsCount(level, callback, \[timePeriod\])** - overview of declined proactive chats statistics
<details>
  <summary>return value from callback:</summary>

```
  {
    "operators": {
      "operator1": "No statistics for this operator/department!",
      "operator2": [
        { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
        { "timePeriod": 2 },
        ...
      ]
    },
    "departments": {
      "department1": [
        { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
        { "timePeriod": 2 },
        ...
      ]
    }
  }
```  
</details>

**getVisitsByURL(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
  {
    "https://domain.com": [
      { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 }
    ],
    "https://domain.com/index.html": [
      { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
      { "timePeriod": 2 },
      ...
    ],
    ...
  }
```  
</details>

**getVisitsByReferrer(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
  {
    "https://domain.com": [
      { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 }
    ],
    "https://domain.com/index.html": [
      { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
      { "timePeriod": 2 },
      ...
    ],
    ...
  }
```  
</details>

**getTotalHits(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
  [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": {
        "average": 2.1265824,
        "total": 1008
      }
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": {
        "average": 2.5926456,
        "total": 12691
      }
    },
    ...
  ]
```  
</details>

**getMissedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details>  

**getVisitorMessagesCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

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

**getOperatorMessagesCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

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

**getChatAcceptDelay(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

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

**getAwayTime('operators'||'departments', callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

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
  <summary>return value from callback:</summary>

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

**getOfflineTime(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details> 

**getSentProactiveChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2 },
  { "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2 },
  ...
]
```  

</details> 




## Additional methods:

**setTimePeriod(\[timePeriod\])**

**getTimePeriod()**

**getParserByName(name)**

**getCustomMetrics({ metricsGroups, metrics, opts, callback })** - method for creating custom queries
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
    callback: console.log,
  })
```  
</details> 

<details>
  <summary>return value from callback:</summary>

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


# The working process

- Before the first run - `./bin/first-run.sh`

## Run locally

`npm run dev`

## Running tests

`npm run test`

## Deployment

`npm run build`

<!-- # Subtleties -->
