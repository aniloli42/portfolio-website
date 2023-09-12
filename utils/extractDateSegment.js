export const extractDateSegment = (date) => {
  const dateSegments = date.split('-')
  const year = dateSegments[0]
  const month = dateSegments[1]

  return { year, month }
}
