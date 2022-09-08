# Provide Support Statistics Library

This library is designed for implementing accounts statistics in your apps.

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
1. __string('account' || 'operators' || 'departments') to get data by account, by operators or by departments__
2. __object with 1 - 3 keys (account, operators, departments) and string value('operator/departmentName') or array values(['operator/departmentName', 'operator/departmentName'])__
3. __array with 1 - 3 string values ('account', 'operators', 'departments')__
```
{
  operators: ['JuliaForever', 'DirtyHarry', ...],
  departments: ['customer support', 'geeks', ...]
}
// return stats only for specified operators/departments
```
* **timePeriod** (optional) must be an object with 3 properties: *startDate*, *endDate*, and *duration*. First two might be any type as long as it's valid Date object ('Wed Mar 10 2021 17:53:31', '10 Mar 2021', or even 1615391611580). The last property *duration* must be one of these values: **'hour'**, **'day'**, **'week'**, **'month'**, **'year'**.




Methods:  
**getAccountSummary(callback, \[timePeriod\])** - detailed overview of account statistics  
<details>
  <summary>return value from callback:</summary>

  ```
  { 
    onlinePresence: {  
      chatOnlineTime: [seconds, date string (e.g. '6d 23h 34m 12s')]  
      chatOfflineTime: [seconds, date string (e.g. '6d 23h 34m 12s')]  
    }  
    averages: {  
      incomingChatsPerDay: number  
      incomingChatsPerHour: number 
      acceptedChatsPerDay: number  
      acceptedChatsPerHour: number   
      chatAcceptTime: [seconds, date string (e.g. '6d 23h 34m 12s')]  
      preChatSurveyFilloutTime: [seconds, date string (e.g. '6d 23h 34m 12s')]  
      offlineFormFilloutTime: [seconds, date string (e.g. '6d 23h 34m 12s')]  
      visitorMessagesPerChat: number  
      operatorMessagesPerChat: number  
    }  
    preChatSurvey: {  
      loads: number  
      submits: number  
      referrers: {url: number, url: number, ...}  
      clickThroughRate: percentage  
    }  
    offlineForm: {  
      loads: number  
      submits: number  
      referrers: {url: number, url: number, ...}  
      clickThroughRate: percentage  
    }  
    chats: {  
      incoming: number  
      accepted: number  
      missed: number  
      acceptanceRate: percentage  
    }  
    proactiveChats: {
      sent: number    
      accepted: number  
      declined: number  
      acceptanceRate: percentage  
    }  
  }
  ```
</details>

**getOperatorsSummary(callback, \[timePeriod\])** - detailed overview of operators statistics  
<details>
  <summary>return value from callback:</summary>

```
{
  operatorName: {
    acceptanceRate: percentage,
    casesSolved: number,
    unsolvedCases: number,
    notContented: number,
    contented: number,
    chatsAccepted: number,
    chatsMissed: number,
    chatsSent: number,
    chatAcceptTime: [seconds, date string (e.g. '6d 23h 34m 12s')],
    loadRate: percentage,
    login: string,
    name: string,
    offlineTime: [seconds, date string (e.g. '6d 23h 34m 12s')],
    onlineTime: [seconds, date string (e.g. '6d 23h 34m 12s')],
    awayTime: [seconds, date string (e.g. '6d 23h 34m 12s')],
    politeness: {  
      total: number,  
      average: number  
    },
    proficiency: {  
      total: number,  
      average: number  
    },
    proactiveChatsAccepted: number,
    proactiveChatsDeclined: number,
    proactiveChatsSent: number,
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
      acceptanceRate: percentage,
      casesSolved: number,
      unsolvedCases: number,
      notContented: number,
      contented: number,
      chatsAccepted: number,
      chatsMissed: number,
      chatsSent: number,
      chatAcceptTime: [seconds, date string (e.g. '6d 23h 34m 12s')],
      loadRate: percentage,
      offlineTime: [seconds, date string (e.g. '6d 23h 34m 12s')],
      onlineTime: [seconds, date string (e.g. '6d 23h 34m 12s')],
      politeness: {  
        total: number,  
        average: number  
      },
      proficiency: {  
        total: number,  
        average: number  
      },
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
    sent: number    
    accepted: number  
    declined: number  
    acceptanceRate: percentage  
  }
  ```
</details>

**getChatsSummary(level, callback, \[timePeriod\])** - overview of chats statistics  
<details>
  <summary>return value from callback:</summary>

  ```
  {
    incoming: number  
    accepted: number  
    missed: number  
    acceptanceRate: percentage  
  }
  ```
</details>

**getPreChatSurveySummary(callback, \[timePeriod\])** - overview of pre-chat survey statistics
<details> 
  <summary>return value from callback:</summary>

  ```
  {
    loads: number  
    submits: number  
    referrers: {
      url: number,
      url: number,
      ...
    },  
    clickThroughRate: percentage  
  }
  ```
</details>

**getWebsiteTrafficSummary(callback, \[timePeriod\])** - overview of website traffic statistics
<details>
  <summary>return value from callback:</summary>

  ```
  {
    totalHits: {
      average: number,
      total: number,
    }, 
    visitsByReferrer: {
      url: number,
      url: number,
      ...
    },
    visitsByURL: {
      url: number,
      url: number,
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
      url: number,
      url: number,
      ...
    }, 
    preChatSurveyReferrers:: {
      url: number,
      url: number,
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
    loads: number  
    submits: number  
    referrers: {url: number, url: number, ...}  
    clickThroughRate: percentage  
  }
  ```
</details>

**getPostChatSurveySummary(level, callback, \[timePeriod\])** - overview of post chat survey statistics
<details>
  <summary>return value from callback:</summary>

```
{
  proficiency: {  
    total: number,  
    average: number  
  },  
  politeness {  
    total: number,  
    average: number  
  },  
  caseSolved: number,  
  caseNotSolved: number,  
  contented: number,  
  notContented: number  
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
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    chatOfflineTime: {
      total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
  }  
  averages: {  
    chatAcceptTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },  
    preChatSurveyFilloutTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    offlineFormFilloutTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },  
    visitorMessagesPerChat: {
      total: {
        average: number,
        total: number,
      },
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },  
    operatorMessagesPerChat: {
      total: {
        average: number,
        total: number,
      },
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
  }  
  preChatSurvey: {  
    loads: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },  
    submits: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    referrers: {
      url: {
        total: number,
        timeline: [
          'timePeriod': number,
          'timePeriod': number,
          ...
        ],
      },
      url: {
        total: number,
        timeline: [
          'timePeriod': number,
          'timePeriod': number,
          ...
        ],
      },
      ...
    },  
    clickThroughRate: {
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
        ...
      ],
    },  
  }  
  offlineForm: {  
    loads: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    }, 
    submits: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    referrers: {
      url: {
        total: number,
        timeline: [
          'timePeriod': number,
          'timePeriod': number,
          ...
        ],
      },
      url: {
        total: number,
        timeline: [
          'timePeriod': number,
          'timePeriod': number,
          ...
        ],
      },
      ...
    },
    clickThroughRate: {
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
        ...
      ],
    },
  }  
  chats: {  
    incoming: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    accepted: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    missed: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },  
    acceptanceRate: {
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
        ...
      ],
    },
  }  
  proactiveChats: {
    sent: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },    
    accepted: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },  
    declined: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },  
    acceptanceRate: {
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
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
  operatorName: {
    acceptanceRate: {
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
        ...
      ],
    },
    casesSolved: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    unsolvedCases: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    notContented: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    contented: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatsAccepted: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatsMissed: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatsSent: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatAcceptTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    loadRate: {
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
        ...
      ],
    },
    login: string,
    name: string,
    offlineTime: {
      total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    onlineTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    awayTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    politeness: {
      total: {  
        total: number,  
        average: number  
      },
      timeline: [
        'timePeriod': {  
          total: number,  
          average: number  
        },
        'timePeriod': {  
          total: number,  
          average: number  
        },
        ...
      ],
    },
    proficiency: {
      total: {  
        total: number,  
        average: number  
      },
      timeline: [
        'timePeriod': {  
          total: number,  
          average: number  
        },
        'timePeriod': {  
          total: number,  
          average: number  
        },
        ...
      ],
    },
    proactiveChatsAccepted: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    proactiveChatsDeclined: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    proactiveChatsSent: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
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
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
        ...
      ],
    },
    casesSolved: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    unsolvedCases: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    notContented: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    contented: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatsAccepted: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatsMissed: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatsSent: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    chatAcceptTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')]
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    loadRate: {
      total: percentage,
      timeline: [
        'timePeriod': percentage,
        'timePeriod': percentage,
        ...
      ],
    },
    offlineTime: {
      total: [seconds, date string (e.g. '6d 23h 34m 12s')],
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    onlineTime: {
      total: {
        average: [seconds, date string (e.g. '6d 23h 34m 12s')],
        total: [seconds, date string (e.g. '6d 23h 34m 12s')]
      },
      timeline: [
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
        ...
      ],
    },
    politeness: {
      total: {  
        total: number,  
        average: number  
      },
      timeline: [
        'timePeriod': {  
          total: number,  
          average: number  
        },
        'timePeriod': {  
          total: number,  
          average: number  
        },
        ...
      ],
    },
    proficiency: {
      total: {  
        total: number,  
        average: number  
      },
      timeline: [
        'timePeriod': {  
          total: number,  
          average: number  
        },
        'timePeriod': {  
          total: number,  
          average: number  
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
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    url: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    ...
  },
  preChatSurveyReferrers: {
    url: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    url: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
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
      average: number,
      total: number,
    },
    timeline: {
      'timePeriod: {
        average: number,
        total: number,
      },
      ... 
    }
  },
  },
  visitsByReferrer: {
    url: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    url: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    ...
  },
  visitsByURL: {
     url: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
    },
    url: {
      total: number,
      timeline: [
        'timePeriod': number,
        'timePeriod': number,
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
  { 'timePeriod': number },
  { 'timePeriod': number },
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
    {'timePeriod': number},
    {'timePeriod': number},
    ...
  ],
  opName: [
    {'timePeriod': number},
    {'timePeriod': number},
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
  { 'timePeriod': number },
  { 'timePeriod': number },
  ...
]
```  

</details>

**getOfflineFormLoadCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { 'timePeriod': number },
  { 'timePeriod': number },
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
    {'timePeriod': number},
    {'timePeriod': number},
    ...
  ],
  url: [
    {'timePeriod': number},
    {'timePeriod': number},
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
    {'timePeriod': number},
    {'timePeriod': number},
    ...
  ],
  url: [
    {'timePeriod': number},
    {'timePeriod': number},
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
  { 'timePeriod': number },
  { 'timePeriod': number },
  ...
]
```  

</details>


**getOfflineMessageSubmitCount(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { 'timePeriod': number },
  { 'timePeriod': number },
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
    'timePeriod': {
      total: number,
      average: number
    }
  },
  {
    'timePeriod': {
      total: number,
      average: number
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
    'timePeriod': {
      total: number,
      average: number
    }
  },
  {
    'timePeriod': {
      total: number,
      average: number
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
  { 'timePeriod': number },
  { 'timePeriod': number },
  ...
]
```  

</details>  

**getAcceptedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { 'timePeriod': number },
  { 'timePeriod': number },
  ...
]
```  

</details>  

**getMissedChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { 'timePeriod': number },
  { 'timePeriod': number },
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
    'timePeriod': {
      total: number,
      average: number
    }
  },
  {
    'timePeriod': {
      total: number,
      average: number
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
    'timePeriod': {
      total: number,
      average: number
    }
  },
  {
    'timePeriod': {
      total: number,
      average: number
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
    'timePeriod': {
      total: number,
      average: number
    }
  },
  {
    'timePeriod': {
      total: number,
      average: number
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
    'timePeriod': {
      total: number,
      average: number
    }
  },
  {
    'timePeriod': {
      total: number,
      average: number
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
    'timePeriod': {
      total: number,
      average: number
    }
  },
  {
    'timePeriod': {
      total: number,
      average: number
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
  { 'timePeriod': number },
  { 'timePeriod': number },
  ...
]
```  

</details> 

**getSentProactiveChatsCount(level, callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
[
  { 'timePeriod': number },
  { 'timePeriod': number },
  ...
]
```  

</details> 