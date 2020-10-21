'use strict'

const dateToMonths = date => {
  const year = date.substring(0 ,3)
  const month = date.substring(5, 6)
  return year * 12 + month
}

export const monthsDiff = (start, end) => {
  const startMonths = dateToMonths(start)
  const endMonths = dateToMonths(end)
  return endMonths - startMonths
}
