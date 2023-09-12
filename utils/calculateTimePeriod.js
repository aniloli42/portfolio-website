import moment from 'moment'
import { extractDateSegment } from './extractDateSegment'
import timeDiff from 'timediff'

export const calculateTimePeriod = (startAt, endAt) => {
  if ((!startAt && !endAt) || (!!endAt && !startAt)) return

  endAt ||= new Date().toISOString().split('T')[0]

  const { years, months } = timeDiff(startAt, endAt, 'Y M')

  if (years === 0) return `${months} mos`

  return `${years} yrs ${months} mos`
}
