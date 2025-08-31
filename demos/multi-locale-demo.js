/**
 * Multi-Locale Support Demo
 *
 * Demonstrates the dynamic locale registration system and custom locale support
 * Shows how to register new locales and use custom locale files
 */

import {
  initLocale,
  setLocale,
  getCurrentLocale,
  getAvailableLocales,
  registerLocale,
  registerCustomLocale,
  getLocaleConfig,
  removeCustomLocale,
  getCustomLocales,
  getBuiltInLocales,
  resetToDefaults,
  getLocaleInfo,
  formatDateLocalized,
  formatTimeLocalized,
  getRelativeTimeLocalized,
  getDayName,
  getMonthName,
  formatLongDate,
  formatCalendar,
} from '../lib/date-utils.js'

import { fr, es, de } from '../lib/locales/index.js'

/**
 * Demo: Register built-in locales dynamically
 */
export const demoBuiltInLocales = () => {
  console.log('=== Built-in Locales Demo ===')

  // Register additional built-in locales
  console.log('Registering French locale...')
  registerLocale('fr', fr)

  console.log('Registering Spanish locale...')
  registerLocale('es', es)

  console.log('Registering German locale...')
  registerLocale('de', de)

  // Show all available locales
  console.log('Available locales:', getAvailableLocales())
  console.log('Built-in locales:', getBuiltInLocales())

  // Test each locale
  const testDate = new Date('2024-01-15T14:30:00')

  console.log('\nTesting all locales:')
  ;['en', 'ar', 'fr', 'es', 'de'].forEach((locale) => {
    console.log(`${locale.toUpperCase()}:`)
    console.log(`  Date: ${formatDateLocalized(testDate, { locale })}`)
    console.log(`  Time: ${formatTimeLocalized(testDate, { locale })}`)
    console.log(`  Day: ${getDayName(testDate, { locale, format: 'long' })}`)
    console.log(
      `  Month: ${getMonthName(testDate, { locale, format: 'long' })}`
    )
  })
}

/**
 * Demo: Custom locale registration
 */
export const demoCustomLocale = () => {
  console.log('\n=== Custom Locale Demo ===')

  // Example: Custom Hindi locale
  const hindiLocale = {
    months: [
      'जनवरी',
      'फरवरी',
      'मार्च',
      'अप्रैल',
      'मई',
      'जून',
      'जुलाई',
      'अगस्त',
      'सितंबर',
      'अक्टूबर',
      'नवंबर',
      'दिसंबर',
    ],
    monthsShort: [
      'जन',
      'फर',
      'मार्च',
      'अप्रैल',
      'मई',
      'जून',
      'जुलाई',
      'अगस्त',
      'सितंबर',
      'अक्टूबर',
      'नवंबर',
      'दिसंबर',
    ],
    weekdays: [
      'रविवार',
      'सोमवार',
      'मंगलवार',
      'बुधवार',
      'गुरुवार',
      'शुक्रवार',
      'शनिवार',
    ],
    weekdaysShort: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'],
    weekdaysMin: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
    relativeTime: {
      future: '%s में',
      past: '%s पहले',
      s: 'कुछ सेकंड',
      ss: '%d सेकंड',
      m: 'एक मिनट',
      mm: '%d मिनट',
      h: 'एक घंटा',
      hh: '%d घंटे',
      d: 'एक दिन',
      dd: '%d दिन',
      w: 'एक सप्ताह',
      ww: '%d सप्ताह',
      M: 'एक महीना',
      MM: '%d महीने',
      y: 'एक साल',
      yy: '%d साल',
      ago: '',
      justNow: 'अभी अभी',
      today: 'आज',
      yesterday: 'कल',
      tomorrow: 'कल',
    },
    calendar: {
      sameDay: 'आज LT बजे',
      nextDay: 'कल LT बजे',
      nextWeek: 'dddd LT बजे',
      lastDay: 'कल LT बजे',
      lastWeek: 'पिछले dddd LT बजे',
      sameElse: 'L',
    },
    numberMap: {
      '०': '0',
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
    },
    symbolMap: {
      0: '०',
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९',
    },
  }

  // Register custom Hindi locale
  console.log('Registering custom Hindi locale...')
  const success = registerCustomLocale('hi', hindiLocale)

  if (success) {
    console.log('✅ Hindi locale registered successfully!')

    // Test the custom locale
    const testDate = new Date('2024-01-15T14:30:00')
    setLocale('hi')

    console.log('\nTesting Hindi locale:')
    console.log(`Date: ${formatDateLocalized(testDate)}`)
    console.log(`Time: ${formatTimeLocalized(testDate)}`)
    console.log(`Day: ${getDayName(testDate, { format: 'long' })}`)
    console.log(`Month: ${getMonthName(testDate, { format: 'long' })}`)
    console.log(`Full: ${formatLongDate(testDate, { format: 'LLLL' })}`)

    // Show custom locales
    console.log('\nCustom locales:', getCustomLocales())
  }
}

/**
 * Demo: User-provided locale file
 */
export const demoUserProvidedLocale = () => {
  console.log('\n=== User-Provided Locale Demo ===')

  // Simulate user providing their own locale file
  const userLocaleFile = {
    // User's custom locale configuration
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
      ago: '',
      justNow: 'just now',
      today: 'today',
      yesterday: 'yesterday',
      tomorrow: 'tomorrow',
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

  // Register user's custom locale
  console.log('Registering user-provided locale...')
  const success = registerCustomLocale('custom', userLocaleFile)

  if (success) {
    console.log('✅ User locale registered successfully!')

    // Test the user locale
    const testDate = new Date('2024-01-15T14:30:00')
    setLocale('custom')

    console.log('\nTesting user locale:')
    console.log(`Date: ${formatDateLocalized(testDate)}`)
    console.log(`Time: ${formatTimeLocalized(testDate)}`)
    console.log(`Day: ${getDayName(testDate, { format: 'long' })}`)
    console.log(`Month: ${getMonthName(testDate, { format: 'long' })}`)

    // Show locale info
    const info = getLocaleInfo('custom')
    console.log('\nLocale info:', info)
  }
}

/**
 * Demo: Locale management functions
 */
export const demoLocaleManagement = () => {
  console.log('\n=== Locale Management Demo ===')

  // Show current state
  console.log('Current locale:', getCurrentLocale())
  console.log('Available locales:', getAvailableLocales())
  console.log('Built-in locales:', getBuiltInLocales())
  console.log('Custom locales:', getCustomLocales())

  // Test locale switching
  console.log('\nTesting locale switching:')
  const testDate = new Date('2024-01-15T14:30:00')

  ;['en', 'ar', 'fr', 'es', 'de'].forEach((locale) => {
    setLocale(locale)
    console.log(`${locale}: ${formatDateLocalized(testDate)}`)
  })

  // Test locale validation
  console.log('\nTesting locale validation:')
  console.log('Is "en" valid?', isValidLocale('en'))
  console.log('Is "invalid" valid?', isValidLocale('invalid'))

  // Test locale info
  console.log('\nLocale information:')
  ;['en', 'ar', 'fr'].forEach((locale) => {
    const info = getLocaleInfo(locale)
    console.log(`${locale}:`, info)
  })
}

/**
 * Demo: Error handling and edge cases
 */
export const demoErrorHandling = () => {
  console.log('\n=== Error Handling Demo ===')

  // Test invalid locale registration
  console.log('Testing invalid locale registration:')

  // Invalid locale code
  registerLocale('', { months: [] })

  // Invalid config (missing properties)
  registerLocale('invalid', { months: [] })

  // Valid registration
  const validConfig = {
    months: ['January'],
    monthsShort: ['Jan'],
    weekdays: ['Sunday'],
    weekdaysShort: ['Sun'],
    weekdaysMin: ['Su'],
    relativeTime: { s: 'second' },
    calendar: { sameDay: 'today' },
    numberMap: {},
    symbolMap: {},
  }

  registerLocale('test', validConfig)
  console.log('✅ Valid locale registered')
}

/**
 * Demo: Cleanup and reset
 */
export const demoCleanup = () => {
  console.log('\n=== Cleanup Demo ===')

  // Remove custom locales
  console.log('Removing custom locales...')
  removeCustomLocale('hi')
  removeCustomLocale('custom')
  removeCustomLocale('test')

  // Show final state
  console.log('Available locales after cleanup:', getAvailableLocales())
  console.log('Custom locales after cleanup:', getCustomLocales())

  // Reset to defaults
  console.log('\nResetting to defaults...')
  resetToDefaults()

  console.log('Final available locales:', getAvailableLocales())
  console.log('Current locale:', getCurrentLocale())
}

/**
 * Run all multi-locale demos
 */
export const runMultiLocaleDemos = () => {
  console.log('🌍 Multi-Locale Support Demos')
  console.log('=============================\n')

  // Initialize with English
  initLocale('en')

  // Run all demos
  demoBuiltInLocales()
  demoCustomLocale()
  demoUserProvidedLocale()
  demoLocaleManagement()
  demoErrorHandling()
  demoCleanup()

  console.log('\n✅ All multi-locale demos completed!')
}

/**
 * Quick test function for specific locale
 */
export const testSpecificLocale = (localeCode) => {
  console.log(`\n🧪 Testing locale: ${localeCode}`)

  if (!isValidLocale(localeCode)) {
    console.log(`❌ Locale '${localeCode}' is not available`)
    return
  }

  setLocale(localeCode)
  const testDate = new Date('2024-01-15T14:30:00')

  console.log(`Date: ${formatDateLocalized(testDate)}`)
  console.log(`Time: ${formatTimeLocalized(testDate)}`)
  console.log(`Day: ${getDayName(testDate, { format: 'long' })}`)
  console.log(`Month: ${getMonthName(testDate, { format: 'long' })}`)
  console.log(`Full: ${formatLongDate(testDate, { format: 'LLLL' })}`)
  console.log(`Calendar: ${formatCalendar(testDate)}`)

  const info = getLocaleInfo(localeCode)
  console.log('Info:', info)
}
