/**
 * Relative time functions for date-utils
 * Provides functions to format relative time with localization
 */

import {createSafeDate} from '../utils/date-validation.js';
import {getLocale, convertNumerals} from '../utils/locale-helpers.js';
import {isToday} from './date-checking.js';

// Get relative time (e.g., "2 hours ago", "3 days ago")
export const getRelativeTime = (date, {locale} = {}) => {
  const now = new Date();
  const target = createSafeDate(date, 'getRelativeTime');
  const diffInSeconds = Math.floor((now - target) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      const plural = interval === 1 ? unit : `${unit}s`;
      return `${interval} ${plural} ago`;
    }
  }

  return 'just now';
};

// Get relative time with localization (uses app locale if not specified)
export const getRelativeTimeLocalized = (date, {locale} = {}) => {
  const now = new Date();
  const target = createSafeDate(date, 'getRelativeTimeLocalized');
  const diffInSeconds = Math.floor((now - target) / 1000);
  const localeConfig = getLocale(locale);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      let key;
      if (interval === 1) {
        key = unit;
      } else if (interval === 2) {
        key = `${unit}s`;
      } else if (interval >= 3 && interval <= 10) {
        key = `${unit}s`; // Use plural form for 3-10
      } else {
        key = `${unit}s`; // Use plural form for 11+
      }

      const timeText =
        localeConfig.relativeTime[key] ?? localeConfig.relativeTime[unit];
      const result = `${interval} ${timeText} ${localeConfig.relativeTime.ago}`;

      // Convert numerals if locale supports it
      if (
        localeConfig.numberMap &&
        Object.keys(localeConfig.numberMap).length > 0
      ) {
        return convertNumerals(result, true, localeConfig);
      }

      return result;
    }
  }

  return localeConfig.relativeTime.justNow;
};

// Enhanced relative time with more context (uses app locale if not specified)
export const getRelativeTimeEnhanced = (date, {locale} = {}) => {
  const now = new Date();
  const target = createSafeDate(date, 'getRelativeTimeEnhanced');
  const diffInDays = Math.floor((now - target) / (1000 * 60 * 60 * 24));
  const localeConfig = getLocale(locale);

  // Check for special cases
  if (diffInDays === 0) {
    if (isToday(target)) {
      return localeConfig.relativeTime.today;
    }
  } else if (diffInDays === 1) {
    return localeConfig.relativeTime.yesterday;
  } else if (diffInDays === -1) {
    return localeConfig.relativeTime.tomorrow;
  }

  // Use regular relative time for other cases
  return getRelativeTimeLocalized(date, {locale});
};
