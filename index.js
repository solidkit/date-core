/**
 * date-core - Main Entry Point
 *
 * A lightweight, performant date utilities library with comprehensive locale support
 * Features dynamic locale registration, custom locale files, and full Arabic locale support
 */

// App initialization
export {
  initializeApp,
  getAppInitializationStatus,
  getInitializationStatus,
} from './lib/date-utils.js';

// Core date utility functions
export {
  // Basic formatting
  formatDate,
  formatDateDDMMYYYY,
  formatDateMMDDYYYY,
  formatTime,
  formatDateTime,

  // Localized formatting
  formatDateLocalized,
  formatTimeLocalized,
  formatDateTimeLocalized,
  formatDateSmart,
  formatLongDate,
  formatCalendar,

  // Relative time
  getRelativeTime,
  getRelativeTimeLocalized,
  getRelativeTimeEnhanced,

  // Day and month names
  getDayName,
  getMonthName,

  // Date checking
  isToday,
  isYesterday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  isThisYear,

  // Date manipulation
  addDays,
  subtractDays,
  addMonths,
  subtractMonths,

  // Date ranges
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
} from './lib/date-utils.js';

// Locale management system
export {
  // Core locale management
  initLocale,
  setLocale,
  getCurrentLocale,
  isValidLocale,
  isArabic,
  isEnglish,

  // Dynamic locale registration
  getAvailableLocales,
  registerLocale,
  registerCustomLocale,
  getLocaleConfig,
  removeCustomLocale,
  getCustomLocales,
  getBuiltInLocales,
  resetToDefaults,
  getLocaleInfo,

  // Locale manager instance (for advanced usage)
  localeManager,
} from './lib/date-utils.js';

// Built-in locale configurations
export {
  en,
  ar,
  fr,
  es,
  de,
  LOCALE_CONFIG,
  AVAILABLE_LOCALES,
  LOCALE_INFO,
  getLocaleInfo as getLocaleMetadata,
  hasCustomNumerals,
  getLocaleDirection,
  getAllLocaleNames,
  getRTLocales,
  getLTRocales,
} from './lib/locales/index.js';

// Demo functions (for testing and learning)
export * from './demos/index.js';

// Default export for convenience
import * as dateUtils from './lib/date-utils.js';
export default dateUtils;
