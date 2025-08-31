/**
 * Basic Usage Examples
 *
 * Demonstrates basic usage of date utilities and locale manager
 * Shows how to use the package in simple scenarios
 */

import {
  initializeApp,
  formatDate,
  formatDateLocalized,
  getRelativeTimeLocalized,
  getDayName,
  getMonthName,
  isToday,
  addDays,
  differenceInDays,
  parseDate,
  isValidDate,
  now,
  unix,
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
} from '../lib/date-utils.js'

import { fr, es, de } from '../lib/locales/index.js'

/**
 * Basic date formatting examples
 */
export const basicDateExamples = () => {
  console.log('=== Basic Date Examples ===\n')

  const now = new Date()

  // Basic formatting
  console.log('Basic formatting:')
  console.log('formatDate:', formatDate(now))
  console.log('now():', now())
  console.log('unix():', unix(now))
  console.log('')

  // Localized formatting
  console.log('Localized formatting:')
  console.log('English:', formatDateLocalized(now, { locale: 'en' }))
  console.log('Arabic:', formatDateLocalized(now, { locale: 'ar' }))
  console.log('Forced Arabic:', formatDateLocalized(now, { locale: 'ar' }))
  console.log(
    'Arabic short day:',
    getDayName(now, { locale: 'ar', format: 'short' })
  )
  console.log('')

  // Relative time
  console.log('Relative time:')
  console.log('English:', getRelativeTimeLocalized(now, { locale: 'en' }))
  console.log('Arabic:', getRelativeTimeLocalized(now, { locale: 'ar' }))
  console.log('')

  // Day and month names
  console.log('Day and month names:')
  console.log('Day (EN):', getDayName(now, { locale: 'en' }))
  console.log('Day (AR):', getDayName(now, { locale: 'ar' }))
  console.log('Month (EN):', getMonthName(now, { locale: 'en' }))
  console.log('Month (AR):', getMonthName(now, { locale: 'ar' }))
  console.log('')
}

/**
 * Date checking examples
 */
export const dateCheckingExamples = () => {
  console.log('=== Date Checking Examples ===\n')

  const now = new Date()
  const yesterday = addDays(now, -1)
  const tomorrow = addDays(now, 1)

  console.log('Date checking:')
  console.log('Is today:', isToday(now))
  console.log('Is yesterday:', isToday(yesterday))
  console.log('Is tomorrow:', isToday(tomorrow))
  console.log('')

  // Date differences
  console.log('Date differences:')
  console.log(
    'Days between now and yesterday:',
    differenceInDays(now, yesterday)
  )
  console.log('Days between now and tomorrow:', differenceInDays(now, tomorrow))
  console.log('')
}

/**
 * Date parsing and validation examples
 */
export const dateParsingExamples = () => {
  console.log('=== Date Parsing Examples ===\n')

  const validDates = [
    '2024-01-15',
    '2024/01/15',
    '2024-01-15T10:30:00',
    new Date(),
    1705312800000, // Unix timestamp
  ]

  const invalidDates = [
    'invalid-date',
    '2024-13-45',
    null,
    undefined,
    '',
    'not-a-date',
  ]

  console.log('Valid dates:')
  validDates.forEach((date) => {
    const parsed = parseDate(date)
    const isValid = isValidDate(date)
    console.log(
      `Input: ${JSON.stringify(date)} -> Valid: ${isValid}, Parsed: ${parsed}`
    )
  })
  console.log('')

  console.log('Invalid dates:')
  invalidDates.forEach((date) => {
    const parsed = parseDate(date)
    const isValid = isValidDate(date)
    console.log(
      `Input: ${JSON.stringify(date)} -> Valid: ${isValid}, Parsed: ${parsed}`
    )
  })
  console.log('')
}

/**
 * Locale manager examples
 */
export const localeManagerExamples = () => {
  console.log('=== Locale Manager Examples ===\n')

  // Current locale
  console.log('Current locale:', getCurrentLocale())
  console.log('Is Arabic:', isArabic())
  console.log('Is English:', isEnglish())
  console.log('')

  // Available locales
  console.log('Available locales:', getAvailableLocales())
  console.log('Built-in locales:', getBuiltInLocales())
  console.log('Custom locales:', getCustomLocales())
  console.log('')

  // Locale validation
  console.log('Locale validation:')
  console.log('Is "en" valid:', isValidLocale('en'))
  console.log('Is "ar" valid:', isValidLocale('ar'))
  console.log('Is "fr" valid:', isValidLocale('fr'))
  console.log('Is "invalid" valid:', isValidLocale('invalid'))
  console.log('')

  // Locale info
  console.log('Locale info:')
  ;['en', 'ar', 'fr'].forEach((locale) => {
    const info = getLocaleInfo(locale)
    if (info) {
      console.log(`${locale}:`, {
        code: info.code,
        isCustom: info.isCustom,
        isBuiltIn: info.isBuiltIn,
        hasArabicNumerals: info.hasArabicNumerals,
        sampleDate: info.sampleDate,
        sampleDay: info.sampleDay,
      })
    }
  })
  console.log('')
}

/**
 * Dynamic locale registration examples
 */
export const dynamicLocaleExamples = () => {
  console.log('=== Dynamic Locale Examples ===\n')

  // Register built-in locales
  console.log('Registering built-in locales:')
  const frRegistered = registerLocale('fr', fr)
  const esRegistered = registerLocale('es', es)
  const deRegistered = registerLocale('de', de)
  console.log('French registered:', frRegistered)
  console.log('Spanish registered:', esRegistered)
  console.log('German registered:', deRegistered)
  console.log('')

  // Switch to different locales
  console.log('Switching locales:')
  ;['en', 'ar', 'fr', 'es', 'de'].forEach((locale) => {
    const success = setLocale(locale)
    console.log(`Switch to ${locale}: ${success ? 'Success' : 'Failed'}`)
    if (success) {
      console.log(`Current locale: ${getCurrentLocale()}`)
      console.log(`Sample date: ${formatDateLocalized(new Date())}`)
    }
  })
  console.log('')

  // Custom locale example
  console.log('Custom locale example:')
  const customLocale = {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthsShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    weekdays: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      w: 'a week',
      ww: '%d weeks',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
      today: 'today',
      yesterday: 'yesterday',
      tomorrow: 'tomorrow',
      ago: 'ago',
      justNow: 'just now',
    },
    calendar: {
      sameDay: 'today at LT',
      nextDay: 'tomorrow at LT',
      nextWeek: 'dddd at LT',
      lastDay: 'yesterday at LT',
      lastWeek: 'last dddd at LT',
      sameElse: 'L',
    },
    numberMap: {},
    symbolMap: {},
  }

  const customRegistered = registerCustomLocale('custom', customLocale)
  console.log('Custom locale registered:', customRegistered)
  console.log('')

  // Test custom locale
  if (customRegistered) {
    setLocale('custom')
    console.log('Custom locale test:')
    console.log('Current locale:', getCurrentLocale())
    console.log('Sample date:', formatDateLocalized(new Date()))
    console.log('')
  }

  // Cleanup
  console.log('Cleanup:')
  const removed = removeCustomLocale('custom')
  console.log('Custom locale removed:', removed)
  console.log('Available locales after cleanup:', getAvailableLocales())
  console.log('')
}

/**
 * React Native component example
 */
export const DateComponentExample = ({ date, locale = 'en' }) => {
  // This would be used in a React Native component
  const formattedDate = formatDateLocalized(date, { locale })
  const dayName = getDayName(date, { locale, format: 'short' })
  const relativeTime = getRelativeTimeLocalized(date, { locale })

  return {
    formattedDate,
    dayName,
    relativeTime,
    isToday: isToday(date),
  }
}

/**
 * React Native component with locale override
 */
export const DateComponentWithOverride = ({ date, locale }) => {
  // Force specific locale regardless of app setting
  const formattedDate = formatDateLocalized(date, { locale })
  const dayName = getDayName(date, { locale, format: 'long' })
  const monthName = getMonthName(date, { locale })

  return {
    formattedDate,
    dayName,
    monthName,
  }
}

/**
 * Switch locale function
 */
export const switchLocale = (locale) => {
  const success = setLocale(locale)
  if (success) {
    console.log(`✅ Switched to locale: ${locale}`)
    console.log(`Current locale: ${getCurrentLocale()}`)
    console.log(`Sample date: ${formatDateLocalized(new Date())}`)
  } else {
    console.log(`❌ Failed to switch to locale: ${locale}`)
  }
  return success
}

/**
 * App date display component
 */
export const AppDateDisplay = ({ date }) => {
  // Uses app's current locale
  const formattedDate = formatDateLocalized(date)
  const dayName = getDayName(date, { format: 'short' })
  const relativeTime = getRelativeTimeLocalized(date)

  return {
    formattedDate,
    dayName,
    relativeTime,
    isToday: isToday(date),
    currentLocale: getCurrentLocale(),
  }
}

/**
 * App scenarios
 */
export const AppScenarios = () => {
  console.log('=== App Scenarios ===\n')

  // Scenario 1: Property listing
  console.log('Scenario 1: Property listing')
  const property = {
    createdAt: new Date('2024-01-15T10:30:00'),
    updatedAt: new Date('2024-01-20T14:45:00'),
  }

  console.log('Property dates:')
  console.log('Created:', getRelativeTimeLocalized(property.createdAt))
  console.log('Updated:', formatDateSmart(property.updatedAt))
  console.log(
    'Created day:',
    getDayName(property.createdAt, { format: 'long' })
  )
  console.log('')

  // Scenario 2: User profile
  console.log('Scenario 2: User profile')
  const user = {
    joinDate: new Date('2023-06-15'),
    lastActive: new Date(),
  }

  console.log('User dates:')
  console.log('Joined:', formatDateLocalized(user.joinDate, { format: 'long' }))
  console.log('Last active:', getRelativeTimeLocalized(user.lastActive))
  console.log(
    'Member for:',
    differenceInDays(user.lastActive, user.joinDate),
    'days'
  )
  console.log('')

  // Scenario 3: Event listing
  console.log('Scenario 3: Event listing')
  const event = {
    startDate: new Date('2024-02-15T18:00:00'),
    endDate: new Date('2024-02-15T22:00:00'),
  }

  console.log('Event dates:')
  console.log('Start:', formatDateTimeLocalized(event.startDate))
  console.log('End:', formatTimeLocalized(event.endDate))
  console.log('Is today:', isToday(event.startDate))
  console.log('')
}

/**
 * App initialization example
 */
export const AppInitializationExample = () => {
  console.log('=== App Initialization Example ===\n')

  // Initialize app with configuration
  const result = initializeApp({
    locale: 'ar',
    logErrors: true,
    fallbackDate: new Date(),
    fallbackString: 'تاريخ غير صحيح',
    messages: {
      invalidDate: 'تاريخ غير صحيح',
      invalidDateNull: 'التاريخ لا يمكن أن يكون فارغاً',
    },
  })

  console.log('App initialization result:', result)
  console.log('Current locale:', getCurrentLocale())
  console.log('Sample date:', formatDateLocalized(new Date()))
  console.log('')
}

/**
 * Test locale manager
 */
export const TestLocaleManager = () => {
  console.log('=== Testing Locale Manager ===\n')

  // Test basic functionality
  console.log('1. Basic functionality:')
  console.log('Current locale:', getCurrentLocale())
  console.log('Available locales:', getAvailableLocales())
  console.log('Is Arabic:', isArabic())
  console.log('Is English:', isEnglish())
  console.log('')

  // Test locale switching
  console.log('2. Locale switching:')
  const locales = ['en', 'ar']
  locales.forEach((locale) => {
    const success = setLocale(locale)
    console.log(`Switch to ${locale}: ${success ? 'Success' : 'Failed'}`)
    if (success) {
      console.log(`Current locale: ${getCurrentLocale()}`)
      console.log(`Sample date: ${formatDateLocalized(new Date())}`)
    }
  })
  console.log('')

  // Test locale registration
  console.log('3. Locale registration:')
  const frRegistered = registerLocale('fr', fr)
  console.log('French registered:', frRegistered)
  console.log('Available locales after registration:', getAvailableLocales())
  console.log('')

  // Test custom locale
  console.log('4. Custom locale:')
  const customConfig = {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthsShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    weekdays: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      w: 'a week',
      ww: '%d weeks',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
      today: 'today',
      yesterday: 'yesterday',
      tomorrow: 'tomorrow',
      ago: 'ago',
      justNow: 'just now',
    },
    calendar: {
      sameDay: 'today at LT',
      nextDay: 'tomorrow at LT',
      nextWeek: 'dddd at LT',
      lastDay: 'yesterday at LT',
      lastWeek: 'last dddd at LT',
      sameElse: 'L',
    },
    numberMap: {},
    symbolMap: {},
  }

  const customRegistered = registerCustomLocale('custom', customConfig)
  console.log('Custom locale registered:', customRegistered)
  console.log('Custom locales:', getCustomLocales())
  console.log('')

  // Test locale info
  console.log('5. Locale info:')
  ;['en', 'ar', 'fr', 'custom'].forEach((locale) => {
    const info = getLocaleInfo(locale)
    if (info) {
      console.log(`${locale}:`, {
        isCustom: info.isCustom,
        isBuiltIn: info.isBuiltIn,
        hasArabicNumerals: info.hasArabicNumerals,
      })
    }
  })
  console.log('')

  // Cleanup
  console.log('6. Cleanup:')
  removeCustomLocale('custom')
  resetToDefaults()
  console.log('Reset to defaults completed')
  console.log('Available locales after cleanup:', getAvailableLocales())
  console.log('')

  console.log('✅ Locale manager testing completed!')
}
