
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getOfflineFormReferrers'

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
  "https://admin5.providesupport.com/view/index.html": [
   {
    "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 2
   }
  ],
  "https://www.providesupport.cn/signup/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.cn/": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 3
   },
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 20
   },
   {
    "01-Aug-2020 04:00:00 - 01-Sep-2020 04:00:00": 1
   }
  ],
  "https://admin6.providesupport.com/view/zh_CN/my-account/dashboard": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 108
   },
   {
    "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 1
   },
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 53
   },
   {
    "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 1
   },
   {
    "01-Nov-2019 04:00:00 - 01-Dec-2019 05:00:00": 1
   },
   {
    "01-Jan-2020 05:00:00 - 01-Feb-2020 05:00:00": 4
   },
   {
    "01-Feb-2020 05:00:00 - 01-Mar-2020 05:00:00": 8
   },
   {
    "01-Mar-2020 05:00:00 - 01-Apr-2020 04:00:00": 2
   },
   {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 1
   },
   {
    "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 4
   },
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 16
   }
  ],
  "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   },
   {
    "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 1
   }
  ],
  "https://admin8.providesupport.com/view/index": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 2
   }
  ],
  "https://www.providesupport.com/manual/other_possible_customizations.htm": [
   {
    "01-Jul-2019 04:00:00 - 01-Aug-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/live-chat-pricing/index.html": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 2
   },
   {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 1
   }
  ],
  "https://operator.providesupport.com/action/main/logout": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-features/index.html": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/blog/how-to-add-live-chat-to-your-facebook-page/": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://admin10.providesupport.com/view/index": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 3
   }
  ],
  "https://www.providesupport.ru/": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://admin12.providesupport.com/view/index": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/live-chat-pharmacy-site.html": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.cn/live-chat-screenshots/operator-console.html": [
   {
    "01-Aug-2019 04:00:00 - 01-Sep-2019 04:00:00": 1
   }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/index": [
   {
    "01-Sep-2019 04:00:00 - 01-Oct-2019 04:00:00": 1
   }
  ],
  "https://admin8.providesupport.com/view/my-account/company/update/images/update-company-images-form": [
   {
    "01-Dec-2019 05:00:00 - 01-Jan-2020 05:00:00": 2
   }
  ],
  "https://shopify.providesupport.com/": [
   {
    "01-Apr-2020 04:00:00 - 01-May-2020 04:00:00": 1
   }
  ],
  "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/index": [
   {
    "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/live-chat-features/customization.html": [
   {
    "01-May-2020 04:00:00 - 01-Jun-2020 04:00:00": 1
   }
  ],
  "https://admin12.providesupport.com/view/my-account/dashboard": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 2
   }
  ],
  "https://www.providesupport.cn/about-us/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 5
   }
  ],
  "http://operator.providesupport.com/": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 2
   }
  ],
  "https://admin12.providesupport.com/view/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 2
   }
  ],
  "https://www.providesupport.com/faq.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.cn/live-chat-apps/all-applications.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 2
   }
  ],
  "https://admin8.providesupport.com/view/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://admin10.providesupport.com/view/zh_CN/my-account/dashboard": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/signup/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://admin12.providesupport.com/zh_CN/about-us/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.cn/help/troubleshooting/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://admin10.providesupport.com/zh_CN/about-us/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 2
   }
  ],
  "https://www.providesupport.cn/live-chat-affiliate-partnership/index.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://admin8.providesupport.com/view/zh_CN/my-account/dashboard": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 2
   }
  ],
  "https://www.providesupport.cn/live-chat-apps/releases/live-chat-software-5.8.2.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/live-chat-apps/all-applications.html": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://admin6.providesupport.com/view/my-account/dashboard": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.cn/view/login": [
   {
    "01-Jun-2020 04:00:00 - 01-Jul-2020 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/about-us/live-chat-news-2019.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/affiliate/index.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.cn/view/index": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.fr/prices/index.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 2
   }
  ],
  "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/update-field": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://admin12.providesupport.com/zh_CN/view/my-account/dashboard": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 2
   }
  ],
  "https://admin12.providesupport.com/zh_CN/index.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 3
   }
  ],
  "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 3
   }
  ],
  "https://admin12.providesupport.com/ja/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://operator.providesupport.com/view/index.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/features/live-chat-for-iphone.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://admin6.providesupport.com/view/index": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/product/chat-invitation-bg-pictures.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "https://www.providesupport.com/features/customization.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ],
  "http://operator.providesupport.com/view/index.html": [
   {
    "01-Jun-2019 04:00:00 - 01-Jul-2019 04:00:00": 1
   }
  ]
 };
