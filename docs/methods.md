
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
    chatOnlineTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],  
    chatOfflineTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ] 
  }  
  averages: {  
    chatAcceptTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],  
    preChatSurveyFilloutTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],  
    offlineFormFilloutTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],  
    visitorMessagesPerChat: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    operatorMessagesPerChat: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ]  
  }  
  preChatSurvey: {  
    loads: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],  
    submits: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    referrers: {
      url: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
      url: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
      ...
    },  
    clickThroughRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ],  
  }  
  offlineForm: {  
    loads: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    submits: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    referrers: {
      url: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
      url: [
        'timePeriod': number,
        'timePeriod': number,
        ...
      ],
      ...
    },
    clickThroughRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ],   
  }  
  chats: {  
    incoming: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    accepted: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    missed: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    acceptanceRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ],  
  }  
  proactiveChats: {
    sent: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],    
    accepted: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    declined: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],  
    acceptanceRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ]  
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
    acceptanceRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ],
    casesSolved: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    unsolvedCases: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    notContented: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    contented: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatsAccepted: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatsMissed: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatsSent: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatAcceptTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],
    loadRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ],
    login: string,
    name: string,
    offlineTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],
    onlineTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],
    awayTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],
    politeness: [
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
    proficiency: [
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
    proactiveChatsAccepted: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    proactiveChatsDeclined: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    proactiveChatsSent: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
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
    acceptanceRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ],
    casesSolved: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    unsolvedCases: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    notContented: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    contented: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatsAccepted: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatsMissed: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatsSent: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    chatAcceptTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],
    loadRate: [
      'timePeriod': percentage,
      'timePeriod': percentage,
      ...
    ],
    offlineTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],
    onlineTime: [
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      'timePeriod': [seconds, date string (e.g. '6d 23h 34m 12s')],
      ...
    ],
    politeness: [
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
    proficiency: [
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
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    ...
  },
  preChatSurveyReferrers: {
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
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
  totalHits: [
    'timePeriod: {
      average: number,
      total: number,
    },
    'timePeriod: {
      average: number,
      total: number,
    },
    ...
  ], 
  visitsByReferrer: {
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    ...
  },
  visitsByURL: {
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    url: [
      'timePeriod': number,
      'timePeriod': number,
      ...
    ],
    ...
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

**getOperatorsAwayTime(callback, \[timePeriod\])**  
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

**getAcceptedProactiveChatsCount(level, callback, \[timePeriod\])**  
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

**getDeclinedProactiveChatsCount(level, callback, \[timePeriod\])**  
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

**getTotalHits(callback, \[timePeriod\])**  
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

**getVisitsByURL(callback, \[timePeriod\])**  
<details>
  <summary>return value from callback:</summary>

```
{
  url: [
    'timePeriod': number,
    'timePeriod': number,
    ...
  ],
  url: [
    'timePeriod': number,
    'timePeriod': number,
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
  url: [
    'timePeriod': number,
    'timePeriod': number,
    ...
  ],
  url: [
    'timePeriod': number,
    'timePeriod': number,
    ...
  ],
  ...
}
```
</details>

**setTimePeriod(timePeriod)**   
return value: undefined  

**getTimePeriod()**  
<details>
  <summary>return value from callback:</summary>

```
{
  startDate: dateString,
  endDate: dateString,
  duration: string,
}
```
</details>

## getCustomMetrics() method
Universal method to retrieve multiple metrics by one request.   
Method takes one argument - object.   
Properties:  
* **'metrics'** - array of metrics.  
* **'websiteCallback'** - callback for metrics which starts with 'website/...'.  
* **'callback'** - callback for other metrics.  


**getCustomMetrics({ metrics, \[callback\], \[websiteCallback\], \[timePeriod\] })**   


<details>
  <summary>return value from callback:</summary>

```
  {  
    metricName: return value,  
    anotherMetricName: return value  
  }
```
</details>

List of available metrics and their equivalent to regular methods:  
* _'admin/login-count'_ - equivalent to getControlPanelLoginCount
* _'wop/login-count'_ - equivalent to getWebAgentAppLoginCount
* _'chat/start-chat-form-open-count'_  - equivalent to getPreChatSurveyLoadCount
* _'chat/leave-message-form-open-count'_  - equivalent to getOfflineFormLoadCount
* _'chat/start-chat-form-open-count-by-url'_  - equivalent to getPreChatSurveyReferrers
* _'chat/leave-message-form-open-count-by-url'_  - equivalent to getOfflineFormReferrers
* _'chat/start-chat-form-submit-count'_  - equivalent to getPreChatSurveySubmitCount
* _'chat/offline-messages-count'_  - equivalent to getOfflineMessageSubmitCount
* _'chat/invitation-sent-count-per-account'_  - equivalent to getSentProactiveChatsCount('account')
* _'chat/invitation-sent-count-per-operator'_  - equivalent to getSentProactiveChatsCount('operators')
* _'chat/invitation-sent-count-per-department'_ - equivalent to getSentProactiveChatsCount('departments')
* _'chat/invitation-accept-count-per-account'_  - equivalent to getAcceptedProactiveChatsCount('account')
* _'chat/invitation-accept-count-per-operator'_  - equivalent to getAcceptedProactiveChatsCount('operators')
* _'chat/invitation-accept-count-per-department'_ - equivalent to getAcceptedProactiveChatsCount('departments')
* _'chat/invitation-decline-count-per-account'_  - equivalent to getDeclinedProactiveChatsCount('account')
* _'chat/invitation-decline-count-per-operator'_  - equivalent to getDeclinedProactiveChatsCount('operators')
* _'chat/invitation-decline-count-per-department'_ - equivalent to getDeclinedProactiveChatsCount('departments')
* _'chat/start-chat-form-fillout-time'_  - equivalent to getPreChatSurveyFilloutTime
* _'chat/leave-message-form-fillout-time'_  - equivalent to getOfflineFormFilloutTime
* _'chat/chats-per-account'_  - equivalent to getReceivedChatsCount('account')
* _'chat/chats-per-operator'_  - equivalent to getReceivedChatsCount('operators')
* _'chat/chats-per-department'_ - equivalent to getReceivedChatsCount('departments')
* _'chat/accepted-chats-per-account'_  - equivalent to getAcceptedChatsCount('account')
* _'chat/accepted-chats-per-operator'_  - equivalent to getAcceptedChatsCount('operators')
* _'chat/accepted-chats-per-department'_ - equivalent to getAcceptedChatsCount('departments')
* _'chat/missed-calls-per-account'_  - equivalent to getMissedChatsCount('account')
* _'chat/missed-calls-per-operator'_  - equivalent to getMissedChatsCount('operators')
* _'chat/missed-calls-per-department'_ - equivalent to getMissedChatsCount('departments')
* _'chat/visitor-messages-count-per-chat'_ - equivalent to getVisitorMessagesCount
* _'chat/all-operators-messages-count-per-chat'_ - equivalent to getOperatorMessagesCount('account')
* _'chat/operator-messages-count-per-chat-per-operator'_  - equivalent to getOperatorMessagesCount('operators')
* _'chat/operator-messages-count-per-chat-per-department'_ - equivalent to getOperatorMessagesCount('departments')
* _'chat/accept-chat-delay-per-account'_  - equivalent to getChatAcceptDelay('account')
* _'chat/accept-chat-delay-per-operator'_  - equivalent to getChatAcceptDelay('operators')
* _'chat/accept-chat-delay-per-department'_ - equivalent to getChatAcceptDelay('departments')
* _'chat/away-time-per-operator'_  - equivalent to getOperatorsAwayTime('operators')
* _'chat/away-time-per-department'_ - equivalent to getOperatorsAwayTime('departments')
* _'chat/online-time-per-account'_  - equivalent to getOnlineTime('account')
* _'chat/online-time-per-operator'_  - equivalent to getOnlineTime('operators')
* _'chat/online-time-per-department'_ - equivalent to getOnlineTime('departments')
* _'chat/pcs-proficiency-per-account'_  - equivalent to getPostChatSurveySummary('account')
* _'chat/pcs-politeness-per-account'_  - equivalent to getPostChatSurveySummary('account')
* _'chat/pcs-case-solved-count-per-account'_  - equivalent to getPostChatSurveySummary('account')
* _'chat/pcs-case-not-solved-count-per-account'_  - equivalent to getPostChatSurveySummary('account')
* _'chat/pcs-contented-count-per-account'_  - equivalent to getPostChatSurveySummary('account')
* _'chat/pcs-not-contented-count-per-account'_  - equivalent to getPostChatSurveySummary('account')
* _'chat/pcs-proficiency-per-operator'_  - equivalent to getPostChatSurveySummary('operators')
* _'chat/pcs-politeness-per-operator'_  - equivalent to getPostChatSurveySummary('operators')
* _'chat/pcs-case-solved-count-per-operator'_  - equivalent to getPostChatSurveySummary('operators')
* _'chat/pcs-case-not-solved-count-per-operator'_  - equivalent to getPostChatSurveySummary('operators')
* _'chat/pcs-contented-count-per-operator'_  - equivalent to getPostChatSurveySummary('operators')
* _'chat/pcs-not-contented-count-per-operator'_  - equivalent to getPostChatSurveySummary('operators')
* _'chat/pcs-proficiency-per-department'_ - equivalent to getPostChatSurveySummary('departments')
* _'chat/pcs-politeness-per-department'_ - equivalent to getPostChatSurveySummary('departments')
* _'chat/pcs-case-solved-count-per-department'_ - equivalent to getPostChatSurveySummary('departments')
* _'chat/pcs-case-not-solved-count-per-department'_ - equivalent to getPostChatSurveySummary('departments')
* _'chat/pcs-contented-count-per-department'_ - equivalent to getPostChatSurveySummary('departments')
* _'chat/pcs-not-contented-count-per-department'_ - equivalent to getPostChatSurveySummary('departments')  
* _'website/hits-per-visitor'_ - equivalent to getTotalHits
* _'website/hits-by-url'_ - equivalent to getVisitsByURL
* _'website/visitors-by-referrer-url'_ - equivalent to getVisitsByReferrer
  
**NB: For getOfflineTime() there is no equivalent because offline time is calculated from getOnlineTime()**

## Return value from method call
Most methods calls (except for setTimePeriod & getTimePeriod) return 'cancel' function.  
Calling this function will drop the callback so it won't be run.   

Example:   
```
const cancelFunc = stats.getVisitsByURL(callback);
// after a while we decided that we don't need the callback to be run so we want to cancel callback.
const resultOfCancelFunc = cancelFunc();
// resultOfCancelFunc contains boolean. If callback is succefully abandoned and callback hasn't been run it contains 'true'. Otherwise it's 'false'.
```

## Public properties
After initialization besides methods lib instance has some properties.  
Here are their descriptions:  
* _startDate_ - current starting date that is used for time frame when making request
* _endDate_ - current ending date that is used for time frame when making request
* _duration_ - current duration that is used for time frame when making request
* _timeZone_ - current account timezone. It's updated after every request
* _METRICS_ - object with all possible metrics
* _NO_STATS_MSG_ - object with messages that is used when there is not enough or no data at all
* _accountName_ - account name passed during initialization
* _md5Password_ - account statistics password passed during initialization encoded in MD5 algorithm
* _rawResponses_ - object in which raw stats is stored before it's processed by library parsers
* _callDistributionMode_ - current call distribution mode
