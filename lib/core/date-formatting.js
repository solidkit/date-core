/**
 * Date formatting functions for date-utils
 * Provides basic and localized date formatting capabilities
 */

import {createSafeDate} from '../utils/date-validation.js';
import {getLocale, convertNumerals} from '../utils/locale-helpers.js';
import localeManager from '../locale-manager.js';

// Format date to YYYY-MM-DD
export const formatDate = date => {
  const d = createSafeDate(date, 'formatDate');
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Format date to DD/MM/YYYY
export const formatDateDDMMYYYY = date => {
  const d = createSafeDate(date, 'formatDateDDMMYYYY');
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

// Format date to MM/DD/YYYY
export const formatDateMMDDYYYY = date => {
  const d = createSafeDate(date, 'formatDateMMDDYYYY');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};

// Format date with locale support (uses app locale if not specified)
export const formatDateLocalized = (date, {locale, format = 'long'} = {}) => {
  const d = createSafeDate(date, 'formatDateLocalized');
  const localeConfig = getLocale(locale);

  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const weekday = d.getDay();

  let result;
  if (format === 'short') {
    result = `${day} ${localeConfig.monthsShort[month]} ${year}`;
  } else if (format === 'weekday') {
    result = `${localeConfig.weekdays[weekday]}، ${day} ${localeConfig.months[month]} ${year}`;
  } else {
    result = `${day} ${localeConfig.months[month]} ${year}`;
  }

  // Convert numerals if locale supports it
  if (
    localeConfig.numberMap &&
    Object.keys(localeConfig.numberMap).length > 0
  ) {
    result = convertNumerals(result, true, localeConfig);
  }

  return result;
};

// Format time to HH:MM
export const formatTime = date => {
  const d = createSafeDate(date, 'formatTime');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Format time with locale support (uses app locale if not specified)
export const formatTimeLocalized = (date, {locale} = {}) => {
  const d = createSafeDate(date, 'formatTimeLocalized');
  const localeConfig = getLocale(locale);
  const isRTL = locale === 'ar' || (!locale && localeManager.isArabic());

  let timeStr;
  if (isRTL) {
    // 24-hour format for RTL languages
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    timeStr = `${hours}:${minutes}`;
  } else {
    // 12-hour format for LTR languages
    const hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    timeStr = `${displayHours}:${minutes} ${ampm}`;
  }

  // Convert numerals if locale supports it
  if (
    localeConfig.numberMap &&
    Object.keys(localeConfig.numberMap).length > 0
  ) {
    timeStr = convertNumerals(timeStr, true, localeConfig);
  }

  return timeStr;
};

// Format date and time
export const formatDateTime = date => `${formatDate(date)} ${formatTime(date)}`;

// Format date and time with locale support (uses app locale if not specified)
export const formatDateTimeLocalized = (date, {locale} = {}) =>
  `${formatDateLocalized(date, {locale})} ${formatTimeLocalized(date, {locale})}`;

// Format with long date format (uses app locale if not specified)
export const formatLongDate = (date, {locale, format = 'LL'} = {}) => {
  const d = createSafeDate(date, 'formatLongDate');
  const localeConfig = getLocale(locale);

  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const weekday = d.getDay();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  let result;
  switch (format) {
    case 'LT':
      result = `${hours}:${minutes}`;
      break;
    case 'LTS':
      result = `${hours}:${minutes}:${seconds}`;
      break;
    case 'L':
      result = `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`;
      break;
    case 'LL':
      result = `${day} ${localeConfig.months[month]} ${year}`;
      break;
    case 'LLL':
      result = `${day} ${localeConfig.months[month]} ${year} ${hours}:${minutes}`;
      break;
    case 'LLLL':
      result = `${localeConfig.weekdays[weekday]} ${day} ${localeConfig.months[month]} ${year} ${hours}:${minutes}`;
      break;
    default:
      result = `${day} ${localeConfig.months[month]} ${year}`;
  }

  // Convert numerals if locale supports it
  if (
    localeConfig.numberMap &&
    Object.keys(localeConfig.numberMap).length > 0
  ) {
    result = convertNumerals(result, true, localeConfig);
  }

  return result;
};

// Format date for display with smart formatting based on locale (uses app locale if not specified)
export const formatDateSmart = (date, {locale} = {}) => {
  const target = createSafeDate(date, 'formatDateSmart');
  const localeConfig = getLocale(locale);

  // Import these functions to avoid circular dependency
  const {
    isToday,
    isYesterday,
    isTomorrow,
    isThisWeek,
    isThisYear,
  } = require('./date-checking');
  const {getDayName} = require('./date-names');

  if (isToday(target)) {
    return localeConfig.relativeTime.today;
  } else if (isYesterday(target)) {
    return localeConfig.relativeTime.yesterday;
  } else if (isTomorrow(target)) {
    return localeConfig.relativeTime.tomorrow;
  } else if (isThisWeek(target)) {
    return getDayName(target, {locale, format: 'long'});
  } else if (isThisYear(target)) {
    return formatDateLocalized(target, {locale, format: 'short'});
  } else {
    return formatDateLocalized(target, {locale, format: 'long'});
  }
};

// Calendar formatting (uses app locale if not specified)
export const formatCalendar = (date, {locale} = {}) => {
  const target = createSafeDate(date, 'formatCalendar');
  const localeConfig = getLocale(locale);

  // Import these functions to avoid circular dependency
  const {
    isToday,
    isTomorrow,
    isYesterday,
    isThisWeek,
  } = require('./date-checking');
  const {getDayName} = require('./date-names');

  if (isToday(target)) {
    return localeConfig.calendar.sameDay.replace(
      'LT',
      formatTimeLocalized(target, {locale}),
    );
  } else if (isTomorrow(target)) {
    return localeConfig.calendar.nextDay.replace(
      'LT',
      formatTimeLocalized(target, {locale}),
    );
  } else if (isYesterday(target)) {
    return localeConfig.calendar.lastDay.replace(
      'LT',
      formatTimeLocalized(target, {locale}),
    );
  } else if (isThisWeek(target)) {
    return localeConfig.calendar.nextWeek
      .replace('dddd', getDayName(target, {locale}))
      .replace('LT', formatTimeLocalized(target, {locale}));
  } else {
    return formatLongDate(target, {locale, format: 'L'});
  }
};
