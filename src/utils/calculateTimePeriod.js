import { extractDateSegment } from './extractDateSegment'

export const calculateTimePeriod = (startAt, endAt) => {
  if ((!startAt && !endAt) || (!!endAt && !startAt)) return

  endAt ||= new Date().toISOString().split('T')[0]

  const { month: startMonth, year: startYear } = extractDateSegment(startAt)
  const { month: endMonth, year: endYear } = extractDateSegment(endAt)
  let yearDiff = endYear - startYear

  if (startMonth > endMonth) {
    const monthDiff = 13 - startMonth + endMonth

    if (monthDiff < 12) yearDiff -= 1
    if (monthDiff === 12) return `${yearDiff} yrs`

    return !!yearDiff ? `${yearDiff} yrs ${monthDiff} mos` : `${monthDiff} mos`
  }

  if (startMonth === endMonth) {
    if (startYear === endYear) return `1 mos`

    return `${yearDiff} yrs 1 mos`
  }

  const monthDiff = endMonth - startMonth + 1

  if (yearDiff == 0) return `${monthDiff} mos`

  return `${yearDiff} yrs ${monthDiff} mos`
}
