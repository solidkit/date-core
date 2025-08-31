/**
 * Date validation utilities for date-utils
 * Provides comprehensive date validation and safe date creation
 */

import { ERROR_CONFIG, logError } from '../config/error-config.js'

// Enhanced date validation with detailed error information
export const validateDate = (date, functionName = 'unknown') => {
  // Handle null/undefined
  if (date === null || date === undefined) {
    logError(`[${functionName}] ${ERROR_CONFIG.messages.invalidDateNull}`, date)
    return {
      isValid: false,
      error: ERROR_CONFIG.messages.invalidDateNull,
      fallback: ERROR_CONFIG.fallbackDate,
    }
  }

  // Handle empty string
  if (date === '') {
    logError(
      `[${functionName}] ${ERROR_CONFIG.messages.invalidDateEmpty}`,
      date
    )
    return {
      isValid: false,
      error: ERROR_CONFIG.messages.invalidDateEmpty,
      fallback: ERROR_CONFIG.fallbackDate,
    }
  }

  // Handle invalid types
  if (typeof date === 'boolean' || (Array.isArray(date) && date.length === 0)) {
    logError(`[${functionName}] ${ERROR_CONFIG.messages.invalidDate}`, date)
    return {
      isValid: false,
      error: ERROR_CONFIG.messages.invalidDate,
      fallback: ERROR_CONFIG.fallbackDate,
    }
  }

  // Create Date object
  const dateObj = new Date(date)

  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    logError(`[${functionName}] ${ERROR_CONFIG.messages.invalidDateNaN}`, date)
    return {
      isValid: false,
      error: ERROR_CONFIG.messages.invalidDateNaN,
      fallback: ERROR_CONFIG.fallbackDate,
    }
  }

  // Check for extreme dates (optional validation)
  const currentYear = new Date().getFullYear()
  const dateYear = dateObj.getFullYear()

  // Reject dates more than 1000 years in the past or future
  if (dateYear < currentYear - 1000 || dateYear > currentYear + 1000) {
    logError(
      `[${functionName}] ${ERROR_CONFIG.messages.invalidDateRange}`,
      date
    )
    return {
      isValid: false,
      error: ERROR_CONFIG.messages.invalidDateRange,
      fallback: ERROR_CONFIG.fallbackDate,
    }
  }

  return { isValid: true, date: dateObj, error: null }
}

// Safe date creation with validation
export const createSafeDate = (date, functionName) => {
  const validation = validateDate(date, functionName)
  return validation.isValid ? validation.date : validation.fallback
}

// Check if date is valid (enhanced version)
export const isValidDate = (date) => {
  const validation = validateDate(date, 'isValidDate')
  return validation.isValid
}

// Get detailed validation information
export const getDateValidationInfo = (date) =>
  validateDate(date, 'getDateValidationInfo')

// Parse date string safely
export const parseDate = (dateString) => {
  const validation = validateDate(dateString, 'parseDate')
  return validation.isValid ? validation.date : null
}
