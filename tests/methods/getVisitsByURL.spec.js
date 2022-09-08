
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getVisitsByURL'

asyncTest({
  methodName,
  timePeriod: 'SHORT_TIME_PERIOD3',
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
  "https://www.providesupport.cn/using-live-chat-for-website.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/15-ways-to-improve-customer-service-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/manual/weebly_integration.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/manual/direct_integration_wordpress.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/soft-skills/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/zh_CN/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operator/number-of-operators-exceeded": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/payment/card/thank-you": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/signup/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.drea567.com/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/manual/about_the_system.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 212
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 192
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/payment/card/stripe/unionpay-payment-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/zh_CN/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/canned-response/bulk-import-csv-canned-response-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 164
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/payment/card/stripe/unionpay-payment-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    }
  ],
  "https://www.providesupport.com/blog/top-benefits-of-using-embedded-chat-window-on-your-website/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/facebook-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/zh_CN/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin7.providesupport.com/zh_CN/zh_CN/view/my-account/billing/payment/alipay/thank-you": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.cn/manual/current_features.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://www.providesupport.cn/manual/system_requirements_general.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/manual/contacts.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/manual/about.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 212
    }
  ],
  "https://www.providesupport.cn/manual/getting_started.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/zh_CN/view/my-account/billing/payment/alipay/thank-you": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/manual/account_customization.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/manual/account_profile_settings.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.cn/manual/managing_canned_responses.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 407
    }
  ],
  "https://www.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/manual/managing_messages.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/zh_CN/my-account/setup-instructions/standard-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/manual/editing_the_chat_window.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/manual/other_possible_customizations.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/positive-attitude-in-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/analytics/update-company-analytics-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.cn/#": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/payment/paypal/thank-you": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/say-no-to-customers/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/payment/paypal/thank-you": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/8-best-ways-to-obtain-customer-feedback-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/help/live-chat-video-tutorials.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-pricing/enterprise-packages.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "mk:@MSITStore:C:\\Users\\Chika\\Documents\\!!!Providesupport\\PS_Help_Manual.chm::/about_the_system.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://stats.providesupport.com/login": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 19
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/manual/sharing_operator_profiles.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/chat-stats/update-chat-stats-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 21
    }
  ],
  "https://www.providesupport.com/live-chat-pricing/index.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 17
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 17
    }
  ],
  "https://www.providesupport.com/faq.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 19
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 18
    }
  ],
  "https://www.providesupport.com/live-chat-features/operator-console.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/info/privacy-policy.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.com/info/gdpr.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-download/native-operator-console.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 5
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 228
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 375
    }
  ],
  "https://www.providesupport.com/live-chat-features/customization.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 20
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 23
    }
  ],
  "https://www.providesupport.com/live-chat-features/index.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 124
    }
  ],
  "https://www.providesupport.com/live-chat-features/live-chat-for-iphone.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/info/terms-of-service.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 15
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/live-chat-affiliate-partnership/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/live-chat-download/native-operator-console.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 3
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 64
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 102
    }
  ],
  "https://www.providesupport.cn/live-chat-download/releases/live-chat-software-5.9.3.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/site-map.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-outlook.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-weebly.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/live-chat-download/native-operator-console.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/info/terms-of-service.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 125
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://www.providesupport.com/live-chat-screenshots/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/live-chat-screenshots/operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/live-chat-screenshots/live-chat-window.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/live-chat-gallery/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.fr/live-chat-integrations/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-download/native-operator-console/linux.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-features/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/live-chat-pricing/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-download/native-operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 14
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/faq.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/live-chat-download/native-operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-download/releases/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-affiliate-partnership/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-gallery/chat-icons-en.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.ru/live-chat-pricing/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-integrations/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.cn/faq.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    }
  ],
  "https://www.providesupport.cn/live-chat-features/operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 12
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-icons-en.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-screenshots/operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-features/customization.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-invitation-bg-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 22
    }
  ],
  "https://admin11.providesupport.com/zh_CN/live-chat-features/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/live-chat-gallery/chat-messenger-themes.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-gallery/chat-messenger-themes.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-prestashop.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-messenger-themes.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-features/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-integrations/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-download/releases/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.cn/live-chat-features/visitor-monitoring.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/live-chat-download/native-operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/live-chat-download/native-operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/live-chat-gallery/header-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-squarespace.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/live-chat-download/native-operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 175
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/live-chat-gallery/header-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-americommerce.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-gallery/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/direct-link-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-3dcart.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-integrations/live-chat-for-outlook.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-gallery/operator-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/live-chat-download/native-operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-gallery/header-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.ru/live-chat-features/live-chat.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/live-chat-download/native-operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/live-chat-gallery/chat-messenger-themes.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin.providesupport.com/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/setup-instructions/direct-link-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/direct-link-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/live-chat-features/enterprise-live-chat.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/faq.html#general-11": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-download/releases/live-chat-software-5.8.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-download/releases/live-chat-software-5.9.1.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/header-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 41
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/direct-link-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 10
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-download/releases/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/live-chat-screenshots/operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/live-chat-features/spell-checker.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.ru/live-chat-integrations/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/faq.html#features-10": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    }
  ],
  "https://admin11.providesupport.com/live-chat-features/operator-console.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-features/live-chat-window.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-gallery/chat-invitation-bg-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://stats.providesupport.com/chat-referrers": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/live-chat-features/customization.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/live-chat-features/customization.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/live-chat-gallery/header-pictures-cn.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://operator.providesupport.com/action/html-2/root/classic/en/whp9uj/main/logout": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-wordpress.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/faq.html#installation-3": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    }
  ],
  "https://www.providesupport.cn/manual/credit_card_details.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin.providesupport.com/p/0ly6ytpzu9fbx00ok1b9uynlos": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin.providesupport.com/p/0o05sr1b5goan1sx6oxb0vk183": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-features/chat-window-customization.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-download/releases/live-chat-software-5.4.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "itss://chm/managing_canned_responses.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/chat-stats/update-chat-stats-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.fr/live-chat-integrations/live-chat-for-wix.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://stats.providesupport.com/website-traffic": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://stats.providesupport.com/overview": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 74
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://stats.providesupport.com/operators": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 49
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 155
    }
  ],
  "https://stats.providesupport.com/departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 56
    }
  ],
  "https://www.providesupport.com/news/live-chat-news-2020.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/news/live-chat-news-2020.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://stats.providesupport.com/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 14
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/chat-stats/update-chat-stats-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://stats.providesupport.com/company": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 70
    }
  ],
  "https://www.providesupport.cn/about-us/articles/ten-reasons-to-use.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/chat-stats/update-chat-stats-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/chat-stats/update-chat-stats-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 129
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/chat-stats/update-chat-stats-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 131
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/chat-stats/update-chat-stats-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/chat-stats/update-chat-stats-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "http://operator.providesupport.com/action/html-2/root/classic/en/ddppkv/main/logout": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/news/live-chat-news-2020.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/live-chat-gallery/header-pictures.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/chat-stats/update-chat-stats-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/action/main/company/trial/create-trial-account": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://operator.providesupport.com/action/html-2/root/classic/en/r5hzqv/main/logout": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/faq.html#affiliate-3": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/how-to-measure-your-customer-service-team-performance/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 12
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.cn/faq.html#installation-5": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://operator.providesupport.com/action/html-2/root/classic/en/uogzgh/main/logout": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "mailto:support@providesupport.com": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://operator.providesupport.com/action/html-2/root/classic/en/vgxoyw/main/logout": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/browser-based-live-chat-operator-console-vs-native-live-chat-application/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://operator.providesupport.com/action/html-2/root/classic/en/hacysv/main/logout": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 19
    }
  ],
  "http://operator.providesupport.com/action/html-2/root/classic/en/hacysv/main/logout": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-features/web-agent-app.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 3
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 43
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://www.providesupport.com/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 75
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 24
    }
  ],
  "https://admin7.providesupport.com/zh_CN/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.fr/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "itss://chm/direct_integration_joomla_3.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 165
    }
  ],
  "https://admin11.providesupport.com/view/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://web.archive.org/web/20190723221414/https://www.providesupport.com/home/terms-of-service.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://web.archive.org/web/20190723221415/https://www.providesupport.com/home/privacy-policy.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-download/releases/live-chat-software-5.8.2.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-download/releases/live-chat-software-5.9.1.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/positive-attitude-in-customer-service/#tzwb-tabbed-content-2-tab-0": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/positive-attitude-in-customer-service/#": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/7-tips-for-maintaining-a-positive-attitude-in-customer-service/#comment-1278262": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/7-tips-for-maintaining-a-positive-attitude-in-customer-service/#comment-1288572": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://web.archive.org/web/20200405154603/https://www.providesupport.com/info/privacy-policy.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://web.archive.org/web/20200405154601/https://www.providesupport.com/info/terms-of-service.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-icons-tr.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-icons-hu.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/live-chat-features/chat-window-customization.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/customer-experience-really-matters/#": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/chat-stats/update-chat-stats-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 17
    }
  ],
  "https://admin9.providesupport.com/help/live-chat-video-tutorials.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/chat-stats/update-chat-stats-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "http://operator.providesupport.com/view/operator-password-recovery-form.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "http://operator.providesupport.com/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 4
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 38
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 23
    }
  ],
  "https://www.providesupport.com/blog/customer-service-cheat-sheet-for-live-chat-support-operators-with-examples-of-responses/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 14
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 261
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 208
    }
  ],
  "https://www.providesupport.com/blog/positive-phrases-and-empathy-statements-for-customer-service/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 48
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 33
    }
  ],
  "https://www.providesupport.com/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 314
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3591
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2977
    }
  ],
  "https://www.providesupport.com/blog/top-10-customer-service-kpis-evaluate-live-chat-team-performance/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/7-tips-for-more-effective-communication-with-customers-and-coworkers/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://operator.providesupport.com/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 8
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 59
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 32
    }
  ],
  "https://operator.providesupport.com/view/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/cost-poor-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 16
    }
  ],
  "https://www.providesupport.com/blog/7-tips-for-maintaining-a-positive-attitude-in-customer-service/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 12
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 19
    }
  ],
  "https://www.providesupport.com/blog/types-of-complaining-customers-and-how-to-handle-complaints/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/10-lessons-learned-working-in-customer-service/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "http://operator.providesupport.com/view/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/10-skills-for-being-awesome-at-customer-service/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 4
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 181
    }
  ],
  "https://www.providesupport.com/blog/10-signs-of-a-company-that-really-cares-about-customers/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/10-reasons-customers-complain/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 4
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 70
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 56
    }
  ],
  "https://www.providesupport.com/blog/customer-diversity/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 5
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 60
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 42
    }
  ],
  "https://admin5.providesupport.com/view/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 223
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 18
    }
  ],
  "https://operator.providesupport.com/action/main/login": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/multitasking-in-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin5.providesupport.com/view/my-account/setup-instructions/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/4-dimensions-of-customer-trust-how-to-get-the-most-of-it/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/8-efficiency-tips-for-customer-service-agents/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/building-a-successful-motivation-strategy/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/15-mistakes-of-customer-service-professionals/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.jp/help/troubleshooting/kaspersky.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/write-new-customer-welcome-letter/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 18
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/treat-leaving-customer-right/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.cn/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 241
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 573
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 368
    }
  ],
  "https://admin5.providesupport.com/view/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 18
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 163
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/invoice/invoice-details": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/how-to-tailor-customer-service-based-on-customer-personality-type/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/how-to-add-a-chat-button-to-microsoft-outlook/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/my-account/operator/update-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 15
    }
  ],
  "https://admin5.providesupport.com/view/my-account/operator/update-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 8
    }
  ],
  "https://www.providesupport.com/live-chat-pharmacy-site.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 4
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.com/blog/10-barriers-outstanding-customer-service/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 4
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 38
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 34
    }
  ],
  "https://www.providesupport.com/blog/8-ways-to-say-no-to-customers-with-examples/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 19
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 113
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 73
    }
  ],
  "https://www.providesupport.com/blog/7-customer-service-challenges/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 10
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 34
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 53
    }
  ],
  "https://www.providesupport.ru/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 15
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 12
    }
  ],
  "https://www.providesupport.com/blog/preventing-burnout-in-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/how-to-build-a-world-class-customer-service-team/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/index.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin7.providesupport.com/view/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/view/my-account/setup-instructions/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/history-of-customer-service-and-future-trends-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin8.providesupport.com/view/zh_CN/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 131
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.com/blog/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 15
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://www.providesupport.com/blog/dont-give-your-customers-a-reason-to-leave/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 19
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 19
    }
  ],
  "https://admin7.providesupport.com/view/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 20
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 18
    }
  ],
  "https://admin7.providesupport.com/view/my-account/operator/update-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 16
    }
  ],
  "https://admin7.providesupport.com/view/my-account/operator/update-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 15
    }
  ],
  "https://www.providesupport.cn/password-recovery-form.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/zh_CN/my-account/dashboard": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 24
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 22
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/operators-and-departments": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 22
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 161
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-confirmation": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/personality-traits-for-perfect-customer-service-representative/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 23
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 33
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/offline/update-company-offline-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/customer-service-etiquette-tips-infographic/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.jp/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://admin8.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.es/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/password-recovery-form.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 22
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 8
    }
  ],
  "https://www.providesupport.com/blog/5-reasons-why-you-are-losing-loyal-customers/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 17
    }
  ],
  "https://www.providesupport.com/blog/customer-service-tips-how-to-close-conversation/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 79
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 19
    }
  ],
  "https://www.providesupport.com/blog/adding-live-support-for-website-how-it-works/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/fun-operator-greetings/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 14
    }
  ],
  "https://www.providesupport.com/blog/live-chat-etiquette-10-tips-for-being-polite-on-live-chat/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/about-us/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/zh_CN/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 79
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 15
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/index": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 57
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 27
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 88
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/20-shocking-customer-service-facts-and-statistics/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 16
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 30
    }
  ],
  "https://www.providesupport.com/signup/index.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 20
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    }
  ],
  "https://www.providesupport.com/blog/the-impact-of-customer-service-on-purchase-decisions/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 103
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 28
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 69
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.com/blog/tips-for-effective-leadership-in-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin5.providesupport.com/zh_CN/about-us/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 27
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 12
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/offline/update-company-offline-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 23
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 30
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 156
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 21
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 20
    }
  ],
  "https://www.providesupport.com/blog/customer-service-dos-and-donts/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 5
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 31
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 136
    }
  ],
  "https://admin5.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 50
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/how-to-deal-with-customer-complaints/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 32
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin8.providesupport.com/zh_CN/view/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 95
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 15
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 26
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.fr/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://www.providesupport.com/blog/top-20-customer-service-soft-skills-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/how-to-add-a-chat-link-to-gmail/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/connection/update-company-connection-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/profile/update-company-profile-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.de/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin7.providesupport.com/view/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin8.providesupport.com/zh_CN/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin8.providesupport.com/view/zh_CN/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 23
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 26
    }
  ],
  "https://www.providesupport.com/blog/6-reasons-youd-like-career-customer-service/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 33
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 28
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 79
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 54
    }
  ],
  "https://admin5.providesupport.com/view/zh_CN/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 266
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 34
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/how-to-add-live-chat-to-your-facebook-page/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/5-tips-to-train-customer-service-reps-for-more-confidence/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/7-ideas-help-build-customer-loyalty/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/history": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 10
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/how-to-deal-with-employee-burnout-in-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 17
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://admin5.providesupport.com/zh_CN/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 16
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com.pt/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/manual/about_the_system.htm": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 37
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/author/marina/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin8.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 63
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin8.providesupport.com/zh_CN/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/about-us/index.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 3
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 48
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.cn/signup/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 134
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 16
    }
  ],
  "https://www.providesupport.com/blog/10-factors-negatively-affect-customer-service-quality/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 41
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 14
    }
  ],
  "https://www.providesupport.com/blog/social-media-role-customer-service-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 41
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-support-web-designers.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/6-ways-to-stay-connected-with-your-customers/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://www.providesupport.com/blog/3-factors-driving-customer-satisfaction-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 45
    }
  ],
  "https://www.providesupport.com/blog/8-simple-ways-to-reach-customers/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 33
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 17
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 14
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin8.providesupport.com/zh_CN/about-us/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/how-to-become-customer-service-expert/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/10-questions-ask-collecting-customer-data/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 18
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/how-to-start": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 15
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    }
  ],
  "https://www.providesupport.com/blog/critical-thinking-for-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/12-reasons-to-integrate-live-chat-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/will-ai-take-humans-out-of-customer-service-in-the-near-future/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 14
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/update-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/real-cost-of-losing-customers-due-to-poor-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/help/troubleshooting/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/handle-angry-customers-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 42
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/department/update-department-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/customer-experience-really-matters/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/how-to-increase-the-efficiency-of-live-chat-support/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/author/olga/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/google-analytics-and-live-chat-integration/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/customers-2020-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-help-insurance.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/prepare-customer-service-emergencies/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 171
    }
  ],
  "https://www.providesupport.com/blog/8-workspace-safety-tips-for-customer-service-team/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/category/tips-n-tricks/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 14
    }
  ],
  "https://www.providesupport.com/blog/category/news/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/images/update-company-images-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/category/best-practice/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/images/update-company-images-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/post-chat-survey/update-company-post-chat-survey-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/choosing-the-most-proper-dimensions-for-your-header-image/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    }
  ],
  "https://www.providesupport.com/blog/category/instructions/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/manual/managing_canned_responses.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 237
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/amazing-stats-customer-service-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/choosing-the-best-chat-button-code-for-your-website/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/10-advantages-of-real-time-website-monitoring/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/complete-guide-using-canned-responses-live-chat/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/5-ways-big-data-will-improve-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/the-future-of-customer-experience-top-10-trends-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 14
    }
  ],
  "https://www.providesupport.com/blog/introducing-new-floating-chat-button-code-feature/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/top-customer-service-challenges/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/view/permission-denied": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/7-reasons-customers-leave-you/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/author/julia/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/5-ways-create-magic-customer-service-moments/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/shopping-cart": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://www.providesupport.com/blog/7-methods-handling-conflicts-complex-clients/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 13
    }
  ],
  "https://www.providesupport.com/help/troubleshooting/symantec-endpoint-protection.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.cn/view/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/category/video/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 45
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/images/update-company-images-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/connection/update-company-connection-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/help/troubleshooting/norton-internet-security.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/help/live-chat-video-tutorials.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/using-live-chat-for-website.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "http://errorreport.providesupport.com/providesupport/windows-operator-console/confirmation.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/6-reasons-smart-employees-underperform-can-fixed/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/payment/paypal/paypal-update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/my-account/canned-response/update-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 24
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 183
    }
  ],
  "https://admin5.providesupport.com/view/my-account/canned-response/update-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/why-is-it-important-to-have-customer-service-knowledge-base-software-2/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/#": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin7.providesupport.com/view/password-recovery-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 18
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 14
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/canned-response/bulk-import-csv-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/how-to-add-a-chat-button-to-blogger/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 12
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/the-words-to-avoid-in-live-chat-communication/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/view/login": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/5-reasons-unhappy-customers-dont-complain/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 16
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 8
    }
  ],
  "https://admin5.providesupport.com/view/my-account/department/update-department-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/10-ways-to-make-your-website-more-engaging/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/proactive-communication-with-customers/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/index": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 29
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 5
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 4
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-confirmation": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 13
    }
  ],
  "https://www.providesupport.com/blog/20-ways-thank-loyal-customers-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/help/troubleshooting/symantec-endpoint-protection.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 8
    }
  ],
  "https://www.providesupport.com/blog/first-contact-resolution-in-live-chat-support/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/upgrade": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/category/infographics/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 33
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 4
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 12
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 14
    }
  ],
  "https://www.providesupport.com/blog/social-media-affecting-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/social-media-customer-service-stats-and-trends-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/dashboard": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 39
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 18
    }
  ],
  "https://www.providesupport.com/blog/10-commandments-of-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 119
    }
  ],
  "https://admin7.providesupport.com/zh_CN/about-us/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/canned-response/bulk-import-csv-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/analytics/update-company-analytics-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/update-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/keep-touch-past-clients/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/operator/delete-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://admin7.providesupport.com/view/my-account/operator/delete-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/offline/update-company-offline-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/index": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 23
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 12
    }
  ],
  "https://www.providesupport.cn/help/troubleshooting/trend-micro.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/apply-servant-leadership-approach-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com.pt/help/troubleshooting/symantec-endpoint-protection.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/4-tactics-to-keep-customer-satisfaction-high-in-the-busy-holiday-season/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/transcript/update-company-transcript-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/messenger/update-company-messenger-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/customer-service-dos-and-donts/#": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/zh_CN/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/payment/card/payment-info": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/how-to-start": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/delete-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 21
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 225
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/live-chat-pharmacy-site.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/tag/complaining-customers/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/manual/download_install_uninstall.htm": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin5.providesupport.com/view/signup/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/positive-emotions-keep-customers-coming-back/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/live-chat-console-getting-started-guide/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/spring-cleaning-your-customer-service-from-inefficiencies/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/delete-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/help/glossary/console/operator-login-dialog.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/operator/delete-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/operator/delete-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/how-to-build-and-maintain-digital-customer-relationships/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/live-chat-usage-for-customer-service-infographic/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/delete-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin12.providesupport.com/zh_CN/view/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/number-of-operators-exceeded": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 14
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/view/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 129
    }
  ],
  "https://admin9.providesupport.com/view/my-account/operator/update-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/operator/update-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 11
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 135
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/profile/update-company-profile-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/images/update-company-images-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 13
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/analytics/update-company-analytics-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/privacy/update-privacy-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/history": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/chat-support-etiquette/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.cn/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/cancel": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/setup-instructions/pass-variables-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/setup-instructions/pass-variables-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 176
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 19
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 8
    }
  ],
  "https://admin11.providesupport.com/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 117
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/cancel": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/personality-traits-for-perfect-customer-service-representative/#": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/tag/perfect-customer-service-representative/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/tag/examples-of-canned-responses/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/tag/customer-service-cheat-sheet/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://www.providesupport.com/blog/5-musts-of-social-media-customer-service/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/tag/positivity-tips/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.fr/password-recovery-form.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/view/my-account/operator/update-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 39
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 8
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/chat-invitation/update-chat-invitation-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/dashboard": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/history": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 17
    }
  ],
  "https://admin9.providesupport.com/view/my-account/dashboard": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 49
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin11.providesupport.com/view/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 33
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/view/zh_CN/my-account/dashboard": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 20
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 12
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 61
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/analytics/update-company-analytics-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin12.providesupport.com/view/zh_CN/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/operators-and-departments": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 227
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 20
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/offline/update-company-offline-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/dashboard": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 12
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/view/my-account/operator/update-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 23
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/connection/update-company-connection-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 13
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 15
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 12
    }
  ],
  "https://admin11.providesupport.com/view/index": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 176
    }
  ],
  "https://admin11.providesupport.com/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 165
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 96
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/payment/card/payment-info": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/offline/update-company-offline-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/view/zh_CN/my-account/dashboard": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 24
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 15
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/transcript/update-company-transcript-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/operators-and-departments": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 28
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 22
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 13
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-confirmation": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/standard-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/images/update-company-images-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 67
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/history": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/images/update-company-images-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin12.providesupport.com/zh_CN/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/billing/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 43
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 22
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 16
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 93
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 26
    }
  ],
  "https://admin9.providesupport.com/zh_CN/about-us/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://admin9.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/zh_CN/my-account/trial/create-trial-account-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/live-demo": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/password-sent-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 15
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/update-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 6
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/upgrade": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/invoice/invoice-details": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 184
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 8
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 11
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 15
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/regional/update-company-regional-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/connection/update-company-connection-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 13
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/analytics/update-company-analytics-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 18
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 10
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/shopping-cart": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/view/zh_CN/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/payment/paypal/paypal-update-billing-contact": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/how-to-start": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/password-recovery-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 9
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/zh_CN/my-account/company/update/index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/upgrade": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/canned-response/create-canned-response-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/view/zh_CN/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/privacy/update-privacy-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/connection/update-company-connection-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/custom-images-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/canned-response/canned-response-list": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/my-account/canned-response/update-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/tag/positive-attitude/": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/setup-instructions/email-code-aup": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/setup-instructions/email-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/create-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/operator/create-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 12
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/operator/create-operator-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/supporter/supporter-index": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 34
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/call-distribution/update-company-call-distribution-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/privacy/update-privacy-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 8
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/shopping-cart/number-of-operators-exceeded": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/billing/payment/card/payment-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/number-of-operators-exceeded": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/department/update-department-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/start-chat-form/create-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/start-chat-form/update-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 38
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/delete-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 3
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/about-us/index.html": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/7-tips-for-maintaining-a-positive-attitude-in-customer-service/#": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 5
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/regional/update-company-regional-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/how-to-start": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/start-chat-form/delete-field": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/canned-response/bulk-import-csv-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/analytics/update-company-analytics-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/view/my-account/canned-response/create-canned-response-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.cn/view/my-account/operators-and-departments": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/how-to-start": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 7
    }
  ],
  "https://admin11.providesupport.com/view/my-account/department/create-department-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/department/create-department-confirmation": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/operator/bulk-create-operator-form": [
    {
      "09-May-2020 04:00:00 - 10-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/payment/card/stripe/unionpay-payment-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 9
    }
  ],
  "https://www.providesupport.com/blog/tag/deliver-negative-news/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/billing/payment/paypal/thank-you": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-pricing/enterprise-packages.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-features/live-chat.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 116
    }
  ],
  "https://www.providesupport.com/live-chat-features/visitor-monitoring.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/live-chat-integrations/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.de/live-chat-integrations/live-chat-for-outlook.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/live-chat-gallery/chat-messenger-themes.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/live-chat-integrations/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/live-chat-pricing/index.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/live-chat-gallery/header-pictures.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-features/google-analytics-and-live-chat.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/direct-link-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/faq.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/live-chat-pricing/index.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/manual/trial_period.htm": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/pure-js-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/live-chat-integrations/live-chat-for-wordpress.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 13
    }
  ],
  "https://www.providesupport.cn/live-chat-features/desktop-chat-agent-app.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/payment/shopify/shopify-update-billing-contact": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/payment/shopify/thank-you": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/payment/shopify/wait-shopify-processing": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin.providesupport.com/p/1266d1lpp7buz0kjviys4njqkm": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    }
  ],
  "https://admin3.providesupport.com/view/my-account/operators-and-departments": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/the-goals-to-set-for-your-customer-service-team/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/8-tips-increase-productivity-customer-support-staff/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/shopping-cart/shopping-cart": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/product/testimonials.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/connection/update-company-connection-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/connection/update-company-connection-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/blog/11-customer-defusing-phrases/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/soft-skills-for-customer-service-reps/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/product/testimonials-page5.html": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/powerful-customer-service-phrases/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/category/articles/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/live-chat-car-rental.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/live-support-ecommerce-site.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/technologically-challenged-customers/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/happy-employees-mean-happy-customers/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/12-worst-things-to-say-to-angry-customers/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/view/my-account/company/update/index": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/choose-live-chat-provider/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/faq-page-customer-self-service-choose-questions-cover/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/fit-customer-service-job/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/10-phrases-you-should-not-use-on-live-chat/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/view/my-account/billing/invoice/invoice-details": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/author/maria/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/live-help-education-website.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/the-power-of-positive-thinking-in-customer-service/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/my-account/billing/payment/card/update-payment-info-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/live-chat-etiquette-basics-how-to-ask-questions-correctly/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/3-top-customer-service-fails/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/upgrade": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin5.providesupport.com/view/my-account/billing/product/cancel-product-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin.providesupport.com/view/my-account/dashboard": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/5-steps-to-making-your-customer-service-shine/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/billing/payment/paypal/paypal-update-billing-contact": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/number-of-operators-exceeded": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-confirmation": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 2
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/delete-field": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/know-customer-service-right-job/": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/company/update/call-distribution/update-company-call-distribution-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/call-distribution/update-company-call-distribution-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/operators-and-departments": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 24
    }
  ],
  "https://www.providesupport.com/blog/your-customers-dont-want-to-call-you-for-support/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/what-to-do-if-you-cant-run-your-live-chat-247-recommendations-for-small-business/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.com/manual/managing_images.htm": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 181
    }
  ],
  "https://admin9.providesupport.com/view/index": [
    {
      "08-May-2020 04:00:00 - 09-May-2020 04:00:00": 1
    },
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 12
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 148
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/invoice/invoice-details": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/payment/card/payment-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/chat-stats/update-chat-stats-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/my-account/setup-instructions/index": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/index": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/billing/upgrade": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/images/update-company-images-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/billing/update-billing-contact": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/customer-service-tips/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.cn/view/my-account/company/update/profile/update-company-profile-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/email-code-aup": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/email-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/textlink-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin10.providesupport.com/view/zh_CN/my-account/company/update/images/update-company-images-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/blog/joomla-tools-for-better-customer-engagement/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/pass-variables-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/monitor-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.fr/help/troubleshooting/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/leave-message-form/create-field": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.fr/#": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.dtm1usa.com/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/payment/card/stripe/unionpay-payment-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/code-test": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/zh_CN/my-account/billing/shopping-cart/add-standard-package": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/zh_CN/view/my-account/billing/payment/alipay/thank-you": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin.providesupport.com/view/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/monitor-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.cn/manual/managing_images.htm": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 443
    }
  ],
  "https://www.providesupport.com/blog/3-ways-provide-support-live-chat-boosts-your-web-design-business/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/payment/alipay/alipay-update-billing-contact": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/payment/card/thank-you": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/zh_CN/my-account/company/update/chat-messenger-style/update-company-chat-messenger-style-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin.providesupport.cn/view/my-account/billing/shopping-cart/add-standard-package": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/live-chat-download/native-operator-console.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.fr/live-chat-screenshots/operator-console.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/live-chat-gallery/chat-messenger-themes.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/live-chat-gallery/chat-icons-en.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/operator-pictures.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 23
    }
  ],
  "https://www.providesupport.com/live-chat-gallery/header-pictures.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/live-chat-gallery/header-pictures.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/direct-link-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.es/info/terms-of-service.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 22
    }
  ],
  "https://www.providesupport.cn/live-chat-download/releases/live-chat-software-5.8.1.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/direct-link-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/signup/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/10-ways-live-chat-can-help-you-grow-your-business-infographic/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-icons-winter-en.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-icons-spring-en.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-icons-halloween-en.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/live-chat-gallery/chat-icons-valentine-en.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://www.providesupport.com/live-chat-integrations/live-chat-for-bigcommerce.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/live-chat-integrations/live-chat-for-joomla.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.ru/live-chat-integrations/live-chat-for-joomla.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.jp/live-chat-integrations/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.jp/live-chat-pricing/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/live-chat-integrations/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/faq.html#general-7": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/how-live-chat-is-helping-web-hosting-companies-to-propel-their-business/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/info/terms-of-service.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.jp/live-chat-integrations/live-chat-for-joomla.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/pure-js-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/how-to-customize-start-chat-and-leave-a-message-forms/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.fr/info/terms-of-service.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/news/live-chat-news-2020.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/view/info/terms-of-service.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.jp/live-chat-affiliate-partnership/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/chat-stats/update-chat-stats-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/how-to-get-valuable-customer-feedback-via-email-6-ideas-to-follow/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.de/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.jp/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com.pt/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.es/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/live-help-education-website.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/live-chat-features/desktop-chat-agent-app.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin.providesupport.com/p/0dzl1td8kurfm0wbyzkg1fl8ey": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.drea567.com/admin12/blog/social-media-customer-service-cant-ignored-infographic/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin.providesupport.com/p/06ibjm1ix3i4l1n0cqpsyw87pj": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/online-presence/update-company-online-presence-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.ru/live-chat-download/releases/live-chat-software-6.0.2.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://web.archive.org/web/20190705164552/https://www.providesupport.com/view/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/about-us/press-releases/software-update-03-28-05.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/my-account/billing/payment/alipay/thank-you": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/zh_CN/view/my-account/company/update/index": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/help/troubleshooting/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/connection/update-company-connection-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/leave-message-form/leave-message-form-fields": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.es/password-recovery-form.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/shopping-cart": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin10.providesupport.com/zh_CN/view/my-account/operators-and-departments": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin10.providesupport.com/view/zh_CN/my-account/operators-and-departments": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/3-ways-to-collect-a-more-genuine-customer-feedback/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://www.providesupport.com/manual/prestashop_integration.htm": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/department/update-department-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/start-chat-form/start-chat-form-fields": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/live-chat-language-customization-how-to-install-and-use-it/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/messenger/update-company-messenger-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin7.providesupport.com/view/my-account/setup-instructions/standard-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/chat-invitation/update-chat-invitation-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://www.providesupport.com/blog/benefits-of-live-chat-for-webdesign-and-it-consulting/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/profile/update-company-profile-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/measure-improve-first-contact-resolution-fcr-live-chat/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/regional/update-company-regional-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/5-tips-making-great-sales-presentation-live-chat/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/zh_CN/view/my-account/billing/payment/card/payment-info": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 5
    }
  ],
  "https://www.providesupport.com/blog/should-everyone-do-customer-service/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/operator/delete-operator-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/operator/delete-operator-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/regional/update-company-regional-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/analytics/update-company-analytics-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/privacy/update-privacy-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/negative-feedback-whats-policy/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.jp/signup/index.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/monitoring-filtering/update-monitoring-filtering-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin12.providesupport.com/view/my-account/setup-instructions/index": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin7.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.cn/view/password-sent-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/images/update-company-images-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/shopping-cart/number-of-operators-exceeded": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/payment/card/payment-info": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/my-account/operator/number-of-operators-exceeded": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.ru/help/troubleshooting/symantec-endpoint-protection.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/blog/tag/live-chat-etiquette/": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 6
    }
  ],
  "https://www.providesupport.com/manual/editing_the_chat_window.htm": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/manual/shopify_integration.htm": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin12.providesupport.com/view/my-account/trial/create-trial-account-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 101
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin10.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/offline/update-company-offline-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin10.providesupport.com/zh_CN/view/my-account/dashboard": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin10.providesupport.com/zh_CN/view/my-account/setup-instructions/index": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/my-account/department/update-department-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 4
    }
  ],
  "https://admin9.providesupport.com/view/my-account/department/update-department-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/system-messages/update-company-messages-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin5.providesupport.com/zh_CN/view/zh_CN/error/internal-server-error": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 3
    }
  ],
  "https://admin9.providesupport.com/view/password-sent-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/setup-instructions/textlink-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/payment/payment-details": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/upgrade": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/view/my-account/company/update/start-chat-form/update-field": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 7
    }
  ],
  "https://admin9.providesupport.com/view/my-account/billing/payment/card/thank-you": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/leave-message-form/update-field": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/leave-message-form/delete-field": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin11.providesupport.com/view/my-account/setup-instructions/custom-images-code": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 2
    }
  ],
  "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/department/update-department-form": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin9.providesupport.com/view/my-account/how-to-start": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/help/troubleshooting/microsoft-security-essentials.html": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://www.providesupport.com/manual/modern-chat-window-editing.htm": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 241
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/call-distribution/update-company-call-distribution-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ],
  "https://admin11.providesupport.com/view/my-account/company/update/transcript/update-company-transcript-confirmation": [
    {
      "10-May-2020 04:00:00 - 11-May-2020 04:00:00": 1
    }
  ]
}
;
