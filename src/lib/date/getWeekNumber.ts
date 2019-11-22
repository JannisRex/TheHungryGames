/* eslint-disable */
// https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php

// eslint-disable-next-line
/*
Date.prototype.getWeekNumber = function () {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()))
  let dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
}
*/

// returns ISO-8601 week number like php-date ('W')
// export const getWeekNumber = (d: Date) => {
//   if (typeof d.getDay === 'function') {
//     let dayNum = d.getUTCDay() || 7
//     d.setUTCDate(d.getUTCDate() + 4 - dayNum)
//     let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
//     return Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
//   }
//   return -1
// }


// https://gist.github.com/dblock/1081513
export const getWeekNumber = (d: Date) => {
  if (typeof d.getDay === 'function') {
    // Copy date so don't modify original
    let xD = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())) // eslint-disable-line no-param-reassign
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    xD.setUTCDate(xD.getUTCDate() + 4 - (xD.getUTCDay() || 7))
    // Get first day of year
    let yearStart = new Date(Date.UTC(xD.getUTCFullYear(), 0, 1))
    // Calculate full weeks to nearest Thursday
    let weekNo = Math.ceil((((xD - yearStart) / 86400000) + 1) / 7)
    // Return array of year and week number
    return weekNo
  }
  return -1
}
