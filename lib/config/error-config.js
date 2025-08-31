/**
 * Error handling configuration for date-utils
 * Centralizes all error handling settings and messages
 */

import { logger } from './logger.js'

// Error handling configuration with defaults
export const ERROR_CONFIG = {
  // Enable/disable error logging
  logErrors: true,
  // Default fallback values for invalid dates
  fallbackDate: new Date(),
  fallbackString: 'Invalid Date',
  fallbackNumber: 0,
  // Error message templates
  messages: {
    invalidDate: 'Invalid date provided',
    invalidDateString: 'Invalid date string provided',
    invalidDateNumber: 'Invalid date number provided',
    invalidDateObject: 'Invalid date object provided',
    invalidDateArray: 'Invalid date array provided',
    invalidDateNull: 'Date cannot be null or undefined',
    invalidDateEmpty: 'Date cannot be empty string',
    invalidDateNaN: 'Date results in NaN',
    invalidDateRange: 'Date is out of valid range',
    invalidDateFuture: 'Date is too far in the future',
    invalidDatePast: 'Date is too far in the past',
  },
}

// Configure error handling (for runtime changes)
export const configureErrorHandling = (config) => {
  Object.assign(ERROR_CONFIG, config)
}

// Get current error configuration
export const getErrorConfig = () => ({ ...ERROR_CONFIG })

// Log error with controlled logging
export const logError = (message, ...args) => {
  if (ERROR_CONFIG.logErrors) {
    logger.errorHandling.error(message, ...args)
  }
}
