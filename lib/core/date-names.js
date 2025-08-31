/**
 * Date name functions for date-utils
 * Provides day and month name functions with locale support
 */

import {createSafeDate} from '../utils/date-validation.js';
import {getLocale, convertNumerals} from '../utils/locale-helpers.js';

// Get day name with locale support (uses app locale if not specified)
export const getDayName = (date, {locale, format = 'long'} = {}) => {
  const d = createSafeDate(date, 'getDayName');
  const localeConfig = getLocale(locale);
  const dayIndex = d.getDay();

  let result;
  if (format === 'short') {
    result = localeConfig.weekdaysShort[dayIndex];
  } else if (format === 'min') {
    result = localeConfig.weekdaysMin[dayIndex];
  } else {
    result = localeConfig.weekdays[dayIndex];
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

// Get month name with locale support (uses app locale if not specified)
export const getMonthName = (date, {locale, format = 'long'} = {}) => {
  const d = createSafeDate(date, 'getMonthName');
  const localeConfig = getLocale(locale);
  const monthIndex = d.getMonth();

  const result =
    format === 'short'
      ? localeConfig.monthsShort[monthIndex]
      : localeConfig.months[monthIndex];

  // Convert numerals if locale supports it
  if (
    localeConfig.numberMap &&
    Object.keys(localeConfig.numberMap).length > 0
  ) {
    return convertNumerals(result, true, localeConfig);
  }

  return result;
};
