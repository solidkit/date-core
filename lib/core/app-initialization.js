/**
 * App initialization for date-utils
 * Handles app startup configuration and initialization status
 */

import localeManager from '../locale-manager.js'
import { ERROR_CONFIG, getErrorConfig } from '../config/error-config.js'
import { logger } from '../config/logger.js'

// App initialization configuration
let isAppInitialized = false

// Initialize the app with locale and error handling configuration
export const initializeApp = (config = {}) => {
  const {
    // Locale configuration
    locale = 'en',

    // Error handling configuration (all optional)
    logErrors = true,
    fallbackDate = new Date(),
    fallbackString = 'Invalid Date',
    fallbackNumber = 0,
    messages = {},

    // Additional configuration options (for future use)
    autoRegisterLocales: _autoRegisterLocales = true,
    validateDates = true,
    strictMode = false,
  } = config

  // Initialize locale manager
  localeManager.initLocale(locale)

  // Configure error handling
  Object.assign(ERROR_CONFIG, {
    logErrors,
    fallbackDate,
    fallbackString,
    fallbackNumber,
    messages: {
      ...ERROR_CONFIG.messages,
      ...messages,
    },
  })

  // Mark app as initialized
  isAppInitialized = true

  logger.appInitialization.info('🌍 Date-Core App Initialized')
  logger.appInitialization.info(`Locale: ${locale}`)
  logger.appInitialization.info(
    `   Error Logging: ${logErrors ? 'Enabled' : 'Disabled'}`
  )
  logger.appInitialization.info(
    `   Strict Mode: ${strictMode ? 'Enabled' : 'Disabled'}`
  )
  logger.appInitialization.info(
    `   Date Validation: ${validateDates ? 'Enabled' : 'Disabled'}`
  )

  return {
    locale: localeManager.getCurrentLocale(),
    errorConfig: getErrorConfig(),
    isInitialized: true,
  }
}

// Check if app is initialized
export const getAppInitializationStatus = () => isAppInitialized

// Get initialization status
export const getInitializationStatus = () => ({
  isInitialized: isAppInitialized,
  locale: localeManager.getCurrentLocale(),
  errorConfig: getErrorConfig(),
})
