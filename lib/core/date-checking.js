/**
 * Date checking functions for date-utils
 * Provides functions to check date relationships and contexts
 */

import { createSafeDate } from '../utils/date-validation.js'
import { formatDate } from './date-formatting.js'

// Check if date is today
export const isToday = (date) => {
  const today = new Date()
  const target = createSafeDate(date, 'isToday')
  return formatDate(today) === formatDate(target)
}

// Check if date is yesterday
export const isYesterday = (date) => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const target = createSafeDate(date, 'isYesterday')
  return formatDate(yesterday) === formatDate(target)
}

// Check if date is tomorrow
export const isTomorrow = (date) => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const target = createSafeDate(date, 'isTomorrow')
  return formatDate(tomorrow) === formatDate(target)
}

// Check if date is this week
export const isThisWeek = (date) => {
  const now = new Date()
  const target = createSafeDate(date, 'isThisWeek')
  const weekStart = new Date(now)
  weekStart.setDate(now.getDate() - now.getDay())
  weekStart.setHours(0, 0, 0, 0)

  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekStart.getDate() + 6)
  weekEnd.setHours(23, 59, 59, 999)

  return target >= weekStart && target <= weekEnd
}

// Check if date is this month
export const isThisMonth = (date) => {
  const now = new Date()
  const target = createSafeDate(date, 'isThisMonth')
  return (
    now.getFullYear() === target.getFullYear() &&
    now.getMonth() === target.getMonth()
  )
}

// Check if date is this year
export const isThisYear = (date) => {
  const now = new Date()
  const target = createSafeDate(date, 'isThisYear')
  return now.getFullYear() === target.getFullYear()
}
