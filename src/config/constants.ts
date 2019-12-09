/* eslint-disable */

// url for list of German zip codes, including dialing code, name of city etc.
export const zipUrl = 'https://gist.githubusercontent.com/JannisRex/fdec2cb0623e0426b299bf0bb02c8d52/raw/7c98d2379a30e55e2e854429f5c46c1732046cd2/German-Zip-Codes.json'

// contains Width and Height
import Layout from '../lib/Layout'

// returns ISO-Week Number
import { getWeekNumber } from '../lib/date/getWeekNumber'

// German Calendar (Months and Days)
import monthArray from '../lib/date/monthArray'
import dayArray from '../lib/date/dayArray'

// Year, Month and Today (YYYY-MM-DD)
let date = new Date(); date.setHours(0, 0, 0, 0)
export const dateTomorrow = new Date(new Date().setDate(new Date().getDate() + 1))
export const dateOvermorrow = new Date(new Date().setDate(new Date().getDate() + 2))
export const dateOverovermorrow = new Date(new Date().setDate(new Date().getDate() + 3))

export const today: string = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) // YYYY-MM-DD
export const year: string = String(date.getFullYear()) // YYYY
export const month: string = ('0' + (date.getMonth() + 1)).slice(-2) // MM
export const monthName: string = monthArray[date.getMonth()] // Month name
export const thisMonth: string = year + '-' + month + '-00' // YYYY-MM-00
export const thisWeekNumber: number = getWeekNumber(date) // 1 - 52
export const day: string = String(date.getDate()) // DD
export const dayName: string = String(dayArray[date.getDay()]) // Day Name
export const tomorrowName: string = String(dayArray[dateTomorrow.getDay()]) // Day+1 Name
export const overmorrowName: string = String(dayArray[dateOvermorrow.getDay()]) // Day+2 Name
export const overovermorrowName: string = String(dayArray[dateOverovermorrow.getDay()]) // Day+3 Name
