import { extractDateSegment } from './extractDateSegment'

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const dateHandler = (date) => {
  if (date == null) return
  const { year, month } = extractDateSegment(date)
  return `${MONTH_NAMES[month - 1]} ${year}`
}
