/**
 * Locale helper utilities for date-utils
 * Provides locale configuration and numeral conversion functions
 */

import localeManager from '../locale-manager.js';
import {logger} from '../config/logger.js';

// Get locale configuration with fallback to app locale
export const getLocale = locale => {
  // If no locale specified or locale is falsy, use app's current locale
  if (!locale) {
    locale = localeManager.getCurrentLocale();
  }

  // Get locale configuration from the dynamic locale manager
  const localeConfig = localeManager.getLocaleConfig(locale);

  // Fallback to English if locale not found
  if (!localeConfig) {
    logger.localeManager.warn(
      `Locale '${locale}' not found. Falling back to English.`,
    );
    return localeManager.getLocaleConfig('en');
  }

  return localeConfig;
};

// Convert Arabic numerals to English (or other numeral systems)
export const convertNumerals = (str, toLocal = false, localeConfig) => {
  if (!str || !localeConfig) return str;

  if (toLocal && localeConfig.symbolMap) {
    return str.replace(/\d/g, match => localeConfig.symbolMap[match] ?? match);
  } else if (!toLocal && localeConfig.numberMap) {
    return str.replace(
      new RegExp(`[${Object.keys(localeConfig.numberMap).join('')}]`, 'g'),
      match => localeConfig.numberMap[match] ?? match,
    );
  }

  return str;
};
