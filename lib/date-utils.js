/**
 * Optimized date utilities library
 * Provides lightweight date formatting and manipulation functions
 * Enhanced with comprehensive locale support and dynamic locale registration
 *
 * This is the main entry point that imports and re-exports all functionality
 * from the separated modules for better organization and maintainability.
 */

// Import all functionality from separated modules
import {
  configureErrorHandling,
  getErrorConfig,
} from './config/error-config.js'
import {
  logger,
  configureLogger,
  getLoggerConfig,
  isProduction,
} from './config/logger.js'
import {
  validateDate,
  isValidDate,
  getDateValidationInfo,
  parseDate,
} from './utils/date-validation.js'
import {
  initializeApp,
  getAppInitializationStatus,
  getInitializationStatus,
} from './core/app-initialization.js'
import {
  formatDate,
  formatDateDDMMYYYY,
  formatDateMMDDYYYY,
  formatDateLocalized,
  formatTime,
  formatTimeLocalized,
  formatDateTime,
  formatDateTimeLocalized,
  formatLongDate,
  formatDateSmart,
  formatCalendar,
} from './core/date-formatting.js'
import {
  isToday,
  isYesterday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  isThisYear,
} from './core/date-checking.js'
import { getDayName, getMonthName } from './core/date-names.js'
import {
  addDays,
  subtractDays,
  addMonths,
  subtractMonths,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from './core/date-manipulation.js'
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from './core/date-differences.js'
import {
  getRelativeTime,
  getRelativeTimeLocalized,
  getRelativeTimeEnhanced,
} from './core/relative-time.js'
import { now, unix } from './core/timestamp.js'

// Import locale manager functions
import localeManager from './locale-manager.js'
import {
  initLocale,
  setLocale,
  getCurrentLocale,
  isValidLocale,
  isArabic,
  isEnglish,
  getAvailableLocales,
  registerLocale,
  registerCustomLocale,
  getLocaleConfig,
  removeCustomLocale,
  getCustomLocales,
  getBuiltInLocales,
  resetToDefaults,
  getLocaleInfo,
} from './locale-manager.js'

// Re-export all functions for backward compatibility
export {
  // App initialization
  initializeApp,
  getAppInitializationStatus,
  getInitializationStatus,

  // Date formatting
  formatDate,
  formatDateDDMMYYYY,
  formatDateMMDDYYYY,
  formatDateLocalized,
  formatTime,
  formatTimeLocalized,
  formatDateTime,
  formatDateTimeLocalized,
  formatLongDate,
  formatDateSmart,
  formatCalendar,

  // Date checking
  isToday,
  isYesterday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  isThisYear,

  // Date names
  getDayName,
  getMonthName,

  // Date manipulation
  addDays,
  subtractDays,
  addMonths,
  subtractMonths,
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,

  // Date differences
  differenceInDays,
  differenceInHours,
  differenceInMinutes,

  // Relative time
  getRelativeTime,
  getRelativeTimeLocalized,
  getRelativeTimeEnhanced,

  // Parsing and validation
  parseDate,
  isValidDate,
  validateDate,
  getDateValidationInfo,
  now,
  unix,

  // Error handling
  configureErrorHandling,
  getErrorConfig,

  // Logging
  logger,
  configureLogger,
  getLoggerConfig,
  isProduction,

  // Locale management
  localeManager,
  initLocale,
  setLocale,
  getCurrentLocale,
  isValidLocale,
  isArabic,
  isEnglish,
  getAvailableLocales,
  registerLocale,
  registerCustomLocale,
  getLocaleConfig,
  removeCustomLocale,
  getCustomLocales,
  getBuiltInLocales,
  resetToDefaults,
  getLocaleInfo,
}
