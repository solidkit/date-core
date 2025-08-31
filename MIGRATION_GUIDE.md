# 🔄 Migration Guide

Complete guide for migrating from legacy date libraries (like Moment.js) to Date-Core.

## 📋 Complete Function Mapping

| Legacy Date Library                                   | Date-Core                                | Output Example                    | Description        |
| ----------------------------------------------------- | ---------------------------------------- | --------------------------------- | ------------------ |
| `moment().format('YYYY-MM-DD')`                       | `formatDate(date)`                       | `"2024-01-15"`                    | ISO date format    |
| `moment().format('DD/MM/YYYY')`                       | `formatDateDDMMYYYY(date)`               | `"15/01/2024"`                    | European format    |
| `moment().format('HH:mm')`                            | `formatTime(date)`                       | `"14:30"`                         | 24-hour time       |
| `moment().format('LL')`                               | `formatLongDate(date, {format: 'LL'})`   | `"15 January 2024"`               | Long date          |
| `moment().format('LLLL')`                             | `formatLongDate(date, {format: 'LLLL'})` | `"Monday, 15 January 2024 14:30"` | Full long date     |
| `moment().fromNow()`                                  | `getRelativeTimeLocalized(date)`         | `"2 hours ago"`                   | Relative time      |
| `moment().calendar()`                                 | `formatCalendar(date)`                   | `"Today at 2:30 PM"`              | Calendar context   |
| `moment().format('dddd')`                             | `getDayName(date)`                       | `"Monday"`                        | Day name           |
| `moment().format('ddd')`                              | `getDayName(date, {format: 'short'})`    | `"Mon"`                           | Short day name     |
| `moment().format('MMMM')`                             | `getMonthName(date)`                     | `"January"`                       | Month name         |
| `moment().format('MMM')`                              | `getMonthName(date, {format: 'short'})`  | `"Jan"`                           | Short month name   |
| `moment().isSame(moment(), 'day')`                    | `isToday(date)`                          | `true`                            | Check if today     |
| `moment().isSame(moment().subtract(1, 'day'), 'day')` | `isYesterday(date)`                      | `true`                            | Check if yesterday |
| `moment().add(1, 'day')`                              | `addDays(date, 1)`                       | `Date object`                     | Add days           |
| `moment().subtract(1, 'day')`                         | `subtractDays(date, 1)`                  | `Date object`                     | Subtract days      |
| `moment().startOf('day')`                             | `startOfDay(date)`                       | `Date object`                     | Start of day       |
| `moment().endOf('day')`                               | `endOfDay(date)`                         | `Date object`                     | End of day         |
| `moment().diff(moment(), 'days')`                     | `getDaysDifference(date1, date2)`        | `5`                               | Days difference    |
| `moment().isValid()`                                  | `isValidDate(date)`                      | `true`                            | Date validation    |

## 🚀 Migration Steps

### 1. Initialize App with Configuration

```javascript
// In your App.js or index.js
import {initializeApp} from 'date-core';

// Initialize with your preferred configuration
const result = initializeApp({
  locale: 'en', // or 'ar' for Arabic
  logErrors: __DEV__, // Enable in development, disable in production
  fallbackDate: new Date(),
  validateDates: true,
});

console.log('App initialized:', result);
```

### 2. Replace Imports

```javascript
// ❌ Remove these imports
import moment from 'moment';
import moment from 'dayjs';
import moment from 'date-fns';

// ✅ Add these imports
import {
  formatDate,
  formatDateLocalized,
  getRelativeTimeLocalized,
  formatLongDate,
  getDayName,
  getMonthName,
  isToday,
  addDays,
  startOfDay,
  isValidDate,
} from 'date-core';
```

### 3. Update Function Calls

#### Basic Date Formatting

```javascript
// ❌ Before (Moment.js)
const date = moment('2024-01-15').format('YYYY-MM-DD');
const time = moment('2024-01-15 14:30').format('HH:mm');
const longDate = moment('2024-01-15').format('LL');

// ✅ After (Date-Core)
const date = formatDate('2024-01-15');
const time = formatTime('2024-01-15 14:30');
const longDate = formatLongDate('2024-01-15', {format: 'LL'});
```

#### Localized Formatting

```javascript
// ❌ Before (Moment.js)
moment.locale('ar');
const arabicDate = moment('2024-01-15').format('LL');

// ✅ After (Date-Core)
const arabicDate = formatLongDate('2024-01-15', {locale: 'ar', format: 'LL'});
// Output: "١٥ يناير ٢٠٢٤"
```

#### Relative Time

```javascript
// ❌ Before (Moment.js)
const relative = moment('2024-01-15').fromNow();

// ✅ After (Date-Core)
const relative = getRelativeTimeLocalized('2024-01-15');
// Output: "2 days ago" or "منذ يومين" (if Arabic locale)
```

#### Date Manipulation

```javascript
// ❌ Before (Moment.js)
const tomorrow = moment().add(1, 'day');
const startOfDay = moment().startOf('day');

// ✅ After (Date-Core)
const tomorrow = addDays(new Date(), 1);
const startOfDay = startOfDay(new Date());
```

### 4. Remove Legacy Date Library

```bash
# Remove the old library
yarn remove moment
# or
npm uninstall moment

# Verify Date-Core is installed
yarn list date-core
```

### 5. Test Your Migration

```javascript
import {
  setLocale,
  formatDateLocalized,
  getRelativeTimeLocalized,
  formatLongDate,
} from 'date-core';

// Test English locale
console.log(formatDateLocalized(new Date())); // "15 January 2024"

// Test Arabic locale
setLocale('ar');
console.log(formatDateLocalized(new Date())); // "١٥ يناير ٢٠٢٤"

// Test relative time
console.log(getRelativeTimeLocalized(new Date(Date.now() - 3600000))); // "1 hour ago"
```

## 🌍 Locale-Specific Examples

### English Locale

```javascript
import {formatLongDate, getDayName, getRelativeTimeLocalized} from 'date-core';

const date = new Date('2024-01-15 14:30:00');

formatLongDate(date, {locale: 'en', format: 'LL'}); // "15 January 2024"
formatLongDate(date, {locale: 'en', format: 'LLLL'}); // "Monday, 15 January 2024 14:30"
getDayName(date, {locale: 'en', format: 'long'}); // "Monday"
getDayName(date, {locale: 'en', format: 'short'}); // "Mon"
getRelativeTimeLocalized(date); // "2 hours ago"
```

### Arabic Locale

```javascript
import {formatLongDate, getDayName, getRelativeTimeLocalized} from 'date-core';

const date = new Date('2024-01-15 14:30:00');

formatLongDate(date, {locale: 'ar', format: 'LL'}); // "١٥ يناير ٢٠٢٤"
formatLongDate(date, {locale: 'ar', format: 'LLLL'}); // "الإثنين ١٥ يناير ٢٠٢٤ ١٤:٣٠"
getDayName(date, {locale: 'ar', format: 'long'}); // "الإثنين"
getDayName(date, {locale: 'ar', format: 'short'}); // "إث"
getRelativeTimeLocalized(date); // "منذ ساعتين"
```

## 🛠️ Advanced Migration Patterns

### Conditional Formatting

```javascript
// ❌ Before (Moment.js)
const formatDate = (date, locale) => {
  moment.locale(locale);
  return moment(date).format('LL');
};

// ✅ After (Date-Core)
const formatDate = (date, locale) => {
  return formatLongDate(date, {locale, format: 'LL'});
};
```

### Date Validation

```javascript
// ❌ Before (Moment.js)
const isValid = moment(date).isValid();

// ✅ After (Date-Core)
const isValid = isValidDate(date);
```

### Date Comparison

```javascript
// ❌ Before (Moment.js)
const isToday = moment(date).isSame(moment(), 'day');

// ✅ After (Date-Core)
const isToday = isToday(date);
```

## 🔧 Troubleshooting

### Common Issues

1. **Import Errors**

   ```javascript
   // Make sure you're importing from the correct path
   import {formatDate} from 'date-core'; // ✅ Correct
   import {formatDate} from './date-core'; // ❌ Wrong
   ```

2. **Locale Not Working**

   ```javascript
   // Make sure you've initialized the app
   initializeApp({locale: 'ar'});

   // Or set locale explicitly
   setLocale('ar');
   ```

3. **Invalid Date Handling**
   ```javascript
   // Date-Core handles invalid dates gracefully
   formatDate('invalid-date'); // Returns current date
   formatDate(null); // Returns current date
   ```

### Performance Tips

1. **Initialize Once**: Call `initializeApp()` only once at app startup
2. **Use Options Object**: Pass locale and format options for better performance
3. **Avoid Repeated Validation**: Date-Core validates dates automatically

## 📚 Additional Resources

- [Main Documentation](./README.md)
- [API Reference](./API.md)
- [Demo Examples](./demos/)
- [Locale Configurations](./lib/locales/)

## 🤝 Need Help?

If you encounter any issues during migration:

1. Check the [troubleshooting section](#troubleshooting)
2. Review the [demo examples](./demos/)
3. Test with the [migration helper](./demos/advanced-usage.js)
4. Open an issue on GitHub with your specific use case
