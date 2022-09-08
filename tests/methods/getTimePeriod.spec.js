
import {
  stats,
  TIME_PERIODS,
} from './_common'

it('setTimePeriod getTimePeriod', async function() {
  stats.setTimePeriod(TIME_PERIODS.DEFAULT_TIME_PERIOD)

  expect(stats.getTimePeriod()).toEqual({
    duration: 'month',
    startDate: '01 Jun 2019 21:00:00',
    endDate: '30 Aug 2020 20:59:59'
  })
})
