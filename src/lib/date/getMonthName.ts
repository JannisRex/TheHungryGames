// @flow strict
import monthArray from './monthArray'

// returns Month Name
export const getMonthName = (d: Date) => {
  if (typeof d.getMonth === 'function') {
    const monthName = monthArray[d.getMonth()]
    return monthName
  }
  return null
}
