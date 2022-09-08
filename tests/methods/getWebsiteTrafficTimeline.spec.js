
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getWebsiteTrafficTimeline'

asyncTest({
  methodName,
  timePeriod: 'SHORT_TIME_PERIOD',
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
  "visitsByURL": {
    "https://admin9.providesupport.com/view/zh_CN/my-account/company/update/start-chat-form/start-chat-form-fields": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/product/operator-pictures.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/operator/number-of-operators-exceeded": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/billing/update-billing-contact-confirmation": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/post-chat-survey/update-company-post-chat-survey-confirmation": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.cn/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/billing/payment/alipay/alipay-update-billing-contact": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "http://operator.providesupport.com/view/operator-password-recovery-form.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.com/": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "http://operator.providesupport.com/view/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.com/blog/10-reasons-customers-complain/": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.cn/": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.cn/downloads/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.com/features/customization.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.cn/prices/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.cn/home/faq.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.cn/signup/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.com/blog/10-factors-negatively-affect-customer-service-quality/": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/index": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/images/update-company-images-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/view/my-account/dashboard": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/index": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/dashboard": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/invoice/invoice-details": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/view/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/view/zh_CN/my-account/dashboard": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/start-chat-form/start-chat-form-fields": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/company/update/access-restrictions/update-messenger-access-restrictions-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/dashboard": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/system-messages/update-company-messages-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/view/my-account/trial/create-trial-account-confirmation": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/messenger/update-company-messenger-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/start-chat-form/update-field": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/leave-message-form/leave-message-form-fields": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/leave-message-form-fields": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/leave-message-form/delete-field": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/chat-invitation/update-chat-invitation-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/post-chat-survey/update-company-post-chat-survey-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/company/update/regional/update-company-regional-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/system-messages/update-company-messages-confirmation": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/company/update/regional/update-company-regional-confirmation": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/operators-and-departments": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/zh_CN/my-account/operator/update-operator-confirmation": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/billing/index": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/billing/update-billing-contact": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/index": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/standard-code": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/billing/shopping-cart/add-standard-package": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/zh_CN/my-account/billing/shopping-cart/shopping-cart": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/setup-instructions/noscript-code": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/features/index.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/setup-instructions/textlink-code": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin11.providesupport.com/zh_CN/view/my-account/trial/create-trial-account-confirmation": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/department/create-department-form": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    }
  },
  "visitsByReferrer": {
    "https://vm.providesupport.com/0xteixgx2ba2x07h8ijpprrbu0": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://vm.providesupport.com/1aovfimy7yrxu1mebn614q4vza": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://messenger.providesupport.net/view/html-3/root/classic/zh_TW/19fhb7v5enbcg1bpuzaqd131hj/o1w16w/start-chat-form.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://messengers.providesupport.net/view/html-2/root/classic/zh_CN/kxkxrz/module/room/input.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://messenger.providesupport.net/view/html-3/root/classic/zh_CN/1ow9u03iereuz1ophcu7s217x8/hsyaxr/start-chat-form.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://messenger.providesupport.net/view/html-3/root/classic/zh_CN/11r7tou7r3erq0h3ws9c1amn25/hooqho/start-chat-form.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://vm.providesupport.com/1wfmlooydec7b0hmlcyablh937": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://messenger.providesupport.net/view/html-2/root/classic/zh_CN/ad2rhs/module/room/input.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://messenger1.providesupport.com/view/html-2/root/classic/zh_CN/54c40k/module/room/input.html": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "Unknown": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://www.providesupport.com/": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    },
    "https://admin9.providesupport.com/zh_CN/view/my-account/canned-response/canned-response-list": {
      "total": 0,
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 0
        }
      ]
    }
  },
  "totalHits": "No statistics for this metric!"
};
