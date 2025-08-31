# date-core

A modern, compact date utilities library designed for React Native and web applications. Features comprehensive locale support with Arabic numerals, intelligent error handling, and production-ready logging. Efficient alternative to heavy date libraries.

[![npm version](https://img.shields.io/npm/v/date-core?style=for-the-badge&color=blue)](https://www.npmjs.com/package/date-core)
[![bundle size](https://img.shields.io/bundlephobia/min/date-core)](https://bundlephobia.com/result?p=date-core)
[![license](https://img.shields.io/npm/l/date-core.svg)](https://github.com/date-core/date-core/blob/main/LICENSE)
[![downloads](https://img.shields.io/npm/dm/date-core.svg)](https://www.npmjs.com/package/date-core)

## 📋 Table of Contents

- [Overview](#-overview)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Error Handling](#️-error-handling)
- [Multi-Locale Support](#-multi-locale-support)
- [API Reference](#-api-reference)
- [Advanced Features](#-advanced-features)
- [Performance Benefits](#-performance-benefits)
- [Testing](#-testing)
- [Additional Resources](#-additional-resources)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

A modern, performant date utilities library that replaces heavy date libraries with a compact, feature-rich alternative:

- **🚀 Compact bundle size** (Small library with tree-shaking)
- **🌍 Dynamic locale registration** - Add new locales at runtime
- **📝 Custom locale files** - Support for user-provided locale configurations
- **🔢 Full Arabic locale support** - Arabic numerals and RTL support
- **⚙️ Centralized locale management** - Single source of truth for app locale
- **📱 Optimized for React Native** - Built specifically for mobile performance
- **🎯 Clean options object API** - Modern destructuring syntax for better DX
- **🛡️ Comprehensive error handling** - Safe handling of invalid dates with fallbacks
- **🚀 App initialization configuration** - Configure everything during app startup

## 📦 Installation

```bash
# Using npm
npm install date-core

# Using yarn
yarn add date-core

# Using pnpm
pnpm add date-core
```

## 🚀 Quick Start

### 1. Initialize App with Configuration

```javascript
// In your App.js or index.js
import { initializeApp } from 'date-core'

// Initialize with complete configuration
const result = initializeApp({
  // Locale configuration
  locale: 'ar', // Arabic locale with RTL support

  // Error handling configuration (all optional)
  logErrors: true,
  fallbackDate: new Date(),
  fallbackString: 'Invalid Date',
  messages: {
    invalidDate: 'Custom: Invalid date provided',
    invalidDateNull: 'Custom: Date cannot be null',
  },

  // Additional configuration
  strictMode: false,
  validateDates: true,
})

console.log('App initialized:', result)
```

### 2. Use Throughout Your App

```javascript
import {
  formatDateLocalized,
  getRelativeTimeLocalized,
  getDayName,
  formatLongDate,
  isToday,
} from 'date-core'

// Basic formatting
const date = formatDateLocalized(new Date()) // "15 January 2024"
const dayName = getDayName(new Date(), { format: 'short' }) // "Mon"
const relativeTime = getRelativeTimeLocalized(someDate) // "2 hours ago"

// Advanced formatting
const longDate = formatLongDate(new Date(), { format: 'LLLL' }) // "Monday, 15 January 2024 14:30"
const isTodayCheck = isToday(someDate) // true/false

// Arabic locale example
const arabicDate = formatDateLocalized(new Date(), { locale: 'ar' }) // "١٥ يناير ٢٠٢٤"
```

## 🛡️ Error Handling

### **Comprehensive Invalid Date Protection**

All functions now safely handle invalid dates with:

- **Automatic validation** - Every date input is validated
- **Safe fallbacks** - Invalid dates fallback to current date
- **Detailed error messages** - Helpful debugging information
- **Configurable behavior** - Customize error handling during app initialization
- **Performance optimized** - Minimal overhead for valid dates

### **What Happens with Invalid Dates**

```javascript
import { formatDate, isValidDate, getDateValidationInfo } from 'date-core'

// Invalid dates are handled safely
formatDate('invalid-date') // Returns current date formatted
formatDate(null) // Returns current date formatted
formatDate('2024-13-45') // Returns current date formatted

// Check if date is valid
isValidDate('invalid-date') // false
isValidDate('2024-12-25') // true

// Get detailed validation info
const info = getDateValidationInfo('invalid-date')
// {
//   isValid: false,
//   error: 'Date results in NaN',
//   fallback: Date object
// }
```

### **Error Handling Configuration During App Initialization**

```javascript
import { initializeApp } from 'date-core'

// Configure error handling during app initialization
initializeApp({
  locale: 'en',

  // Error handling configuration
  logErrors: true, // Enable/disable console error logging
  fallbackDate: new Date('2024-01-01'), // Custom fallback date
  fallbackString: 'Date Error', // Custom fallback string
  fallbackNumber: 0, // Custom fallback number
  messages: {
    invalidDate: 'Custom: Invalid date provided',
    invalidDateNull: 'Custom: Date cannot be null',
    invalidDateEmpty: 'Custom: Date cannot be empty',
    invalidDateNaN: 'Custom: Date results in NaN',
    // ... more custom messages
  },
})
```

### **Real-World Error Scenarios**

```javascript
// Scenario 1: API returns null date
const apiResponse = { createdAt: null, updatedAt: undefined }
formatDateLocalized(apiResponse.createdAt) // Safe fallback
formatDateLocalized(apiResponse.updatedAt) // Safe fallback

// Scenario 2: User input validation
const userInputs = ['', 'invalid', '2024-13-01', '2024-02-30']
userInputs.forEach((input) => {
  const isValid = isValidDate(input)
  const formatted = isValid ? formatDate(input) : 'Invalid input'
  console.log(`Input: "${input}" -> Valid: ${isValid}, Formatted: ${formatted}`)
})
```

## 🔇 Production-Ready Logging

The package includes intelligent logging that automatically adapts to your environment:

### **Automatic Environment Detection**

```javascript
import { initializeApp } from 'date-core'

// Automatically detects environment
// Development: Helpful debugging information
// Production: Clean, no console spam
initializeApp({ locale: 'en' })
```

### **Custom Logging (Optional)**

```javascript
import { configureLogger, initializeApp } from 'date-core'

// Optional: Configure logging behavior
configureLogger({
  enabled: process.env.NODE_ENV !== 'production',
  level: 'warn',
})

initializeApp({ locale: 'en' })
```

### **Benefits**

- ✅ **Zero console spam** in production
- ✅ **Helpful debugging** in development
- ✅ **Automatic environment detection**
- ✅ **Performance optimized**
- ✅ **Fully configurable**

// Scenario 3: Database date handling
const dbDates = [null, '2024-12-25', 'invalid-date', '2024-02-29'];
dbDates.forEach(dbDate => {
const validation = getDateValidationInfo(dbDate);
console.log(`DB Date: ${JSON.stringify(dbDate)}`);
console.log(`  Valid: ${validation.isValid}`);
console.log(`  Error: ${validation.error || 'None'}`);
console.log(`  Safe Format: ${formatDate(dbDate)}`);
});

````

## 🌍 Multi-Locale Support

### Built-in Locales

The package comes with 5 built-in locales:

- **English (en)** - Default locale
- **Arabic (ar)** - Full RTL support with Arabic numerals
- **French (fr)** - French date and time formatting
- **Spanish (es)** - Spanish date and time formatting
- **German (de)** - German date and time formatting

### Dynamic Locale Registration

```javascript
import {registerLocale, setLocale} from 'date-core';
import {fr, es, de} from 'date-core';

// Register additional locales
registerLocale('fr', fr);
registerLocale('es', es);
registerLocale('de', de);

// Switch to any registered locale
setLocale('fr');
````

### Custom Locale Files

You can create and register your own locale files:

```javascript
import {registerCustomLocale} from 'date-core';

// Your custom locale configuration
const myCustomLocale = {
  months: ['January', 'February', 'March', ...],
  monthsShort: ['Jan', 'Feb', 'Mar', ...],
  weekdays: ['Sunday', 'Monday', 'Tuesday', ...],
  weekdaysShort: ['Sun', 'Mon', 'Tue', ...],
  weekdaysMin: ['Su', 'Mo', 'Tu', ...],
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    // ... more translations
  },
  calendar: {
    sameDay: 'today at LT',
    nextDay: 'tomorrow at LT',
    // ... more calendar formats
  },
  numberMap: {}, // For custom numeral systems
  symbolMap: {}, // For custom numeral systems
};

// Register your custom locale
registerCustomLocale('my-locale', myCustomLocale);

// Use your custom locale
setLocale('my-locale');
```

### Locale Management Functions

```javascript
import {
  getAvailableLocales,
  getCustomLocales,
  getBuiltInLocales,
  getLocaleInfo,
  removeCustomLocale,
  resetToDefaults,
} from 'date-core'

// Get all available locales
const allLocales = getAvailableLocales() // ['en', 'ar', 'fr', 'es', 'de', 'my-locale']

// Get custom locales only
const customLocales = getCustomLocales() // ['my-locale']

// Get built-in locales only
const builtInLocales = getBuiltInLocales() // ['en', 'ar', 'fr', 'es', 'de']

// Get locale information
const info = getLocaleInfo('ar')
// {
//   code: 'ar',
//   isCustom: false,
//   isBuiltIn: true,
//   hasArabicNumerals: true,
//   sampleDate: 'يناير',
//   sampleDay: 'الأحد'
// }

// Remove a custom locale
removeCustomLocale('my-locale')

// Reset to defaults
resetToDefaults()
```

## 📋 Available Functions

### Core Functions

- **Basic Formatting**: 5 functions
- **Localized Formatting**: 6 functions
- **Relative Time**: 3 functions
- **Day/Month Names**: 2 functions
- **Date Checking**: 6 functions
- **Date Manipulation**: 4 functions
- **Date Ranges**: 6 functions
- **Date Differences**: 3 functions
- **Parsing/Validation**: 4 functions
- **Locale Management**: 15+ functions
- **Error Handling**: 4 functions
- **App Initialization**: 3 functions

### Demo Functions (30+ total)

- **Basic Usage**: 8 functions
- **Advanced Usage**: 6 functions
- **Multi-Locale**: 8 functions
- **Error Handling**: 8 functions
- **App Initialization**: 13 functions

## 💡 Usage Examples

### Basic Usage (Uses App Locale)

```javascript
import {
  formatDateLocalized,
  getRelativeTimeLocalized,
  getDayName,
} from 'date-core'

const date = formatDateLocalized(new Date()) // Uses app locale
const relative = getRelativeTimeLocalized(someDate) // Uses app locale
const dayName = getDayName(new Date(), { format: 'short' }) // Uses app locale
```

### Force Specific Locale

```javascript
const arabicDate = formatDateLocalized(new Date(), { locale: 'ar' }) // Force Arabic
const englishDate = formatDateLocalized(new Date(), { locale: 'en' }) // Force English
const frenchDay = getDayName(new Date(), { locale: 'fr', format: 'short' }) // French short day
```

### React Native Component

```javascript
import React from 'react'
import { View, Text } from 'react-native'
import { formatDateSmart, formatTimeLocalized, getDayName } from 'date-core'

const DateDisplay = ({ date }) => (
  <View>
    <Text>Date: {formatDateSmart(date)}</Text>
    <Text>Time: {formatTimeLocalized(date)}</Text>
    <Text>Day: {getDayName(date, { format: 'short' })}</Text>
  </View>
)
```

### Multi-Locale Component

```javascript
import React from 'react'
import { View, Text } from 'react-native'
import { formatDateLocalized, setLocale } from 'date-core'

const MultiLocaleDisplay = ({ date, locale }) => {
  // Switch to specified locale
  setLocale(locale)

  return (
    <View>
      <Text>Date: {formatDateLocalized(date)}</Text>
      <Text>Locale: {locale}</Text>
    </View>
  )
}
```

### Property Listing with Error Handling

```javascript
const PropertyCard = ({ property }) => (
  <View>
    <Text>Added: {getRelativeTimeLocalized(property.createdAt)}</Text>
    <Text>Updated: {formatDateSmart(property.updatedAt)}</Text>
    <Text>
      Full Date: {formatLongDate(property.createdAt, { format: 'LLLL' })}
    </Text>
    <Text>Day: {getDayName(property.createdAt, { format: 'long' })}</Text>
  </View>
)
```

## 📖 API Reference

### Core Functions

| Function                             | Description                             | Parameters                                        | Returns   |
| ------------------------------------ | --------------------------------------- | ------------------------------------------------- | --------- |
| `formatDate(date)`                   | Format date as ISO string               | `date: Date\|string`                              | `string`  |
| `formatDateLocalized(date, options)` | Format date with locale support         | `date: Date\|string, options: {locale?, format?}` | `string`  |
| `formatLongDate(date, options)`      | Format date in long format              | `date: Date\|string, options: {locale?, format?}` | `string`  |
| `getRelativeTimeLocalized(date)`     | Get relative time (e.g., "2 hours ago") | `date: Date\|string`                              | `string`  |
| `getDayName(date, options)`          | Get day name                            | `date: Date\|string, options: {locale?, format?}` | `string`  |
| `getMonthName(date, options)`        | Get month name                          | `date: Date\|string, options: {locale?, format?}` | `string`  |
| `isToday(date)`                      | Check if date is today                  | `date: Date\|string`                              | `boolean` |
| `isYesterday(date)`                  | Check if date is yesterday              | `date: Date\|string`                              | `boolean` |
| `addDays(date, days)`                | Add days to date                        | `date: Date\|string, days: number`                | `Date`    |
| `subtractDays(date, days)`           | Subtract days from date                 | `date: Date\|string, days: number`                | `Date`    |
| `startOfDay(date)`                   | Get start of day                        | `date: Date\|string`                              | `Date`    |
| `endOfDay(date)`                     | Get end of day                          | `date: Date\|string`                              | `Date`    |
| `isValidDate(date)`                  | Validate date                           | `date: any`                                       | `boolean` |

### Locale Management

| Function                       | Description               | Parameters                     | Returns    |
| ------------------------------ | ------------------------- | ------------------------------ | ---------- |
| `setLocale(locale)`            | Set current locale        | `locale: string`               | `void`     |
| `getLocale()`                  | Get current locale        | -                              | `string`   |
| `registerLocale(code, config)` | Register new locale       | `code: string, config: object` | `void`     |
| `getAvailableLocales()`        | Get all available locales | -                              | `string[]` |

### App Configuration

| Function                         | Description                       | Parameters       | Returns  |
| -------------------------------- | --------------------------------- | ---------------- | -------- |
| `initializeApp(config)`          | Initialize app with configuration | `config: object` | `object` |
| `configureErrorHandling(config)` | Configure error handling          | `config: object` | `void`   |

## 🎨 Advanced Features

### Complete Function Reference

| Date-Core Function                       | Output Example                    | Description        |
| ---------------------------------------- | --------------------------------- | ------------------ |
| `formatDate(date)`                       | `"2024-01-15"`                    | ISO date format    |
| `formatDateDDMMYYYY(date)`               | `"15/01/2024"`                    | European format    |
| `formatTime(date)`                       | `"14:30"`                         | 24-hour time       |
| `formatLongDate(date, {format: 'LL'})`   | `"15 January 2024"`               | Long date          |
| `formatLongDate(date, {format: 'LLLL'})` | `"Monday, 15 January 2024 14:30"` | Full long date     |
| `getRelativeTimeLocalized(date)`         | `"2 hours ago"`                   | Relative time      |
| `formatCalendar(date)`                   | `"Today at 2:30 PM"`              | Calendar context   |
| `getDayName(date)`                       | `"Monday"`                        | Day name           |
| `getDayName(date, {format: 'short'})`    | `"Mon"`                           | Short day name     |
| `getMonthName(date)`                     | `"January"`                       | Month name         |
| `getMonthName(date, {format: 'short'})`  | `"Jan"`                           | Short month name   |
| `isToday(date)`                          | `true`                            | Check if today     |
| `isYesterday(date)`                      | `true`                            | Check if yesterday |
| `addDays(date, 1)`                       | `Date object`                     | Add days           |
| `subtractDays(date, 1)`                  | `Date object`                     | Subtract days      |
| `startOfDay(date)`                       | `Date object`                     | Start of day       |
| `endOfDay(date)`                         | `Date object`                     | End of day         |
| `getDaysDifference(date1, date2)`        | `5`                               | Days difference    |
| `isValidDate(date)`                      | `true`                            | Date validation    |

### Arabic Numeral Support

```javascript
// Automatic Arabic numeral conversion
formatDateLocalized(new Date(), { locale: 'ar' }) // "١٥ يناير ٢٠٢٤"
formatTimeLocalized(new Date(), { locale: 'ar' }) // "١٤:٣٠"
getDayName(new Date(), { locale: 'ar', format: 'short' }) // "إث"
```

### Smart Date Formatting

```javascript
formatDateSmart(date) // "اليوم" (if today)
formatDateSmart(yesterday) // "أمس" (if yesterday)
formatDateSmart(lastWeek) // "الإثنين" (if this week)
```

### Long Date Formats

```javascript
formatLongDate(date, { locale: 'ar', format: 'LL' }) // "١٥ يناير ٢٠٢٤"
formatLongDate(date, { locale: 'ar', format: 'LLLL' }) // "الإثنين ١٥ يناير ٢٠٢٤ ١٤:٣٠"
```

### Calendar Context

```javascript
formatCalendar(date, { locale: 'ar' }) // "اليوم على الساعة ١٤:٣٠"
```

### Multiple Format Options

```javascript
// Day name formats
getDayName(date, { format: 'long' }) // "الإثنين"
getDayName(date, { format: 'short' }) // "إث"
getDayName(date, { format: 'min' }) // "إ"

// Date formats
formatDateLocalized(date, { format: 'short' }) // "15 Jan 2024"
formatDateLocalized(date, { format: 'long' }) // "15 January 2024"
formatDateLocalized(date, { format: 'weekday' }) // "Monday, 15 January 2024"
```

## 📊 Performance Benefits

- **Bundle Size**: Compact library with tree-shaking support
- **Execution Speed**: Optimized for React Native and web performance
- **Memory Usage**: Efficient memory footprint
- **Tree Shaking**: Only import what you need
- **Error Handling**: Minimal overhead for valid dates

## 🧪 Testing

### Using Demos

```javascript
import {
  TestLocaleManager,
  runMultiLocaleDemos,
  runErrorHandlingDemos,
  runAppInitializationDemos,
} from 'date-core/demos'

// Run basic tests
TestLocaleManager()

// Run comprehensive multi-locale tests
runMultiLocaleDemos()

// Run error handling tests
runErrorHandlingDemos()

// Run app initialization tests
runAppInitializationDemos()
```

### Manual Testing

```javascript
import {
  initializeApp,
  setLocale,
  testSpecificLocale,
  testErrorScenario,
  testAppInitialization,
} from 'date-core/demos'

// Test app initialization
const result = testAppInitialization({
  locale: 'ar',
  logErrors: true,
})

// Test specific locale
testSpecificLocale('fr')

// Test error scenarios
testErrorScenario('invalid-date', 'formatDate')
testErrorScenario(null, 'formatDateLocalized')

// Test locale switching
setLocale('en')
console.log('Switched to English')
```

## 📚 Additional Resources

- **Demos**: See `demos/` folder for comprehensive usage examples
- **Multi-Locale Demo**: See `demos/multi-locale-demo.js` for dynamic locale registration
- **Error Handling Demo**: See `demos/error-handling-demo.js` for invalid date handling
- **App Initialization Demo**: See `demos/app-initialization-demo.js` for configuration examples
- **Locale Configs**: See `lib/locales/` folder for locale configurations
- **Custom Locales**: Create your own locale files following the same format

## 🤝 Contributing

We welcome contributions! Please visit our [GitHub repository](https://github.com/solidkit/date-core) for contribution guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE file](https://github.com/solidkit/date-core/blob/main/LICENSE) for details.

## 🙏 Acknowledgments

- Built with modern JavaScript (ES6+) best practices
- Inspired by the need for compact, performant date utilities
- Special thanks to the React Native community for feedback and testing
