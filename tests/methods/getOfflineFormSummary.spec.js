
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getOfflineFormSummary'

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
  "loads": 335,
  "submits": 19,
  "referrers": {
    "https://admin5.providesupport.com/view/index.html": 2,
    "https://www.providesupport.cn/signup/index.html": 1,
    "https://www.providesupport.cn/": 24,
    "https://admin6.providesupport.com/view/zh_CN/my-account/dashboard": 1,
    "https://www.providesupport.com/": 199,
    "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/": 2,
    "https://admin8.providesupport.com/view/index": 2,
    "https://www.providesupport.com/manual/other_possible_customizations.htm": 1,
    "https://www.providesupport.com/live-chat-pricing/index.html": 3,
    "https://operator.providesupport.com/action/main/logout": 1,
    "https://admin5.providesupport.com/zh_CN/live-chat-features/index.html": 1,
    "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": 1,
    "https://www.providesupport.com/blog/how-to-add-live-chat-to-your-facebook-page/": 1,
    "https://admin10.providesupport.com/view/index": 3,
    "https://www.providesupport.ru/": 1,
    "https://admin12.providesupport.com/view/index": 1,
    "https://www.providesupport.com/live-chat-pharmacy-site.html": 1,
    "https://www.providesupport.cn/live-chat-screenshots/operator-console.html": 1,
    "https://admin5.providesupport.com/zh_CN/view/my-account/billing/index": 1,
    "https://admin8.providesupport.com/view/my-account/company/update/images/update-company-images-form": 2,
    "https://shopify.providesupport.com/": 1,
    "https://admin6.providesupport.com/zh_CN/view/my-account/company/update/index": 1,
    "https://www.providesupport.com/live-chat-features/customization.html": 1,
    "https://admin12.providesupport.com/view/my-account/dashboard": 2,
    "https://www.providesupport.cn/about-us/index.html": 5,
    "http://operator.providesupport.com/": 2,
    "https://admin12.providesupport.com/view/index.html": 2,
    "https://www.providesupport.com/faq.html": 1,
    "https://www.providesupport.cn/live-chat-apps/all-applications.html": 2,
    "https://admin8.providesupport.com/view/index.html": 1,
    "https://admin10.providesupport.com/view/zh_CN/my-account/dashboard": 1,
    "https://www.providesupport.com/signup/index.html": 1,
    "https://admin12.providesupport.com/zh_CN/about-us/index.html": 1,
    "https://www.providesupport.cn/help/troubleshooting/index.html": 1,
    "https://admin10.providesupport.com/zh_CN/about-us/index.html": 2,
    "https://www.providesupport.cn/live-chat-affiliate-partnership/index.html": 1,
    "https://admin8.providesupport.com/view/zh_CN/my-account/dashboard": 2,
    "https://www.providesupport.cn/live-chat-apps/releases/live-chat-software-5.8.2.html": 1,
    "https://www.providesupport.com/live-chat-apps/all-applications.html": 1,
    "https://admin6.providesupport.com/view/my-account/dashboard": 1,
    "https://www.providesupport.cn/view/login": 1,
    "https://www.providesupport.com/about-us/live-chat-news-2019.html": 1,
    "https://www.providesupport.com/affiliate/index.html": 1,
    "https://www.providesupport.cn/view/index": 1,
    "https://www.providesupport.fr/prices/index.html": 2,
    "https://admin12.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/update-field": 1,
    "https://admin12.providesupport.com/zh_CN/view/my-account/dashboard": 2,
    "https://admin12.providesupport.com/zh_CN/index.html": 3,
    "https://admin12.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": 3,
    "https://admin12.providesupport.com/ja/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": 1,
    "https://operator.providesupport.com/view/index.html": 1,
    "https://www.providesupport.com/features/live-chat-for-iphone.html": 1,
    "https://admin6.providesupport.com/view/index": 1,
    "https://www.providesupport.com/product/chat-invitation-bg-pictures.html": 1,
    "https://www.providesupport.com/features/customization.html": 1,
    "http://operator.providesupport.com/view/index.html": 1
  },
  "clickThroughRate": "6%"
};
