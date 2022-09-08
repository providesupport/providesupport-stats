
import {
  asyncTest,
  NO_STATS_FOR_PAST_TIME_PERIOD,
  NO_STATS_FOR_FUTURE_TIME_PERIOD,
} from './_common'

const methodName = 'getChatReferrersTimeline'

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
  "preChatSurveyReferrers": {
    "https://www.providesupport.com/": {
      "timeline": [
        {
          "03-Jun-2019 04:00:00 - 04-Jun-2019 04:00:00": 0
        }
      ],
      "total": 0
    },
    "https://www.providesupport.com/integrations/shopify.html": {
      "timeline": [
        {
          "02-Jun-2019 04:00:00 - 03-Jun-2019 04:00:00": 1
        }
      ],
      "total": 1
    },
    "~total": 1,
  },
  "offlineFormReferrers": "No statistics for this metric!"
};
