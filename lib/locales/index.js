/**
 * Locale configurations for date-utils
 * Provides comprehensive locale support with Arabic numerals and RTL support
 */

import {en} from './en.js';
import {ar} from './ar.js';
import {fr} from './fr.js';
import {es} from './es.js';
import {de} from './de.js';

// Export individual locales
export {en, ar, fr, es, de};

// Export combined configuration
export const LOCALE_CONFIG = {en, ar, fr, es, de};

// Export available locales array
export const AVAILABLE_LOCALES = ['en', 'ar', 'fr', 'es', 'de'];

// Export locale metadata
export const LOCALE_INFO = {
  en: {
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    hasCustomNumerals: false,
    sampleDate: 'January',
    sampleDay: 'Sunday',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    hasCustomNumerals: true,
    sampleDate: 'يناير',
    sampleDay: 'الأحد',
  },
  fr: {
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    hasCustomNumerals: false,
    sampleDate: 'janvier',
    sampleDay: 'dimanche',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    hasCustomNumerals: false,
    sampleDate: 'enero',
    sampleDay: 'domingo',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
    direction: 'ltr',
    hasCustomNumerals: false,
    sampleDate: 'Januar',
    sampleDay: 'Sonntag',
  },
};

// Helper function to get locale info
export const getLocaleInfo = localeCode => LOCALE_INFO[localeCode] ?? null;

// Helper function to check if locale has custom numerals
export const hasCustomNumerals = localeCode =>
  LOCALE_INFO[localeCode]?.hasCustomNumerals ?? false;

// Helper function to get locale direction
export const getLocaleDirection = localeCode =>
  LOCALE_INFO[localeCode]?.direction ?? 'ltr';

// Helper function to get all locale names
export const getAllLocaleNames = () =>
  Object.entries(LOCALE_INFO).map(([code, info]) => ({
    code,
    name: info.name,
    nativeName: info.nativeName,
  }));

// Helper function to get RTL locales
export const getRTLocales = () =>
  Object.entries(LOCALE_INFO)
    .filter(([, info]) => info.direction === 'rtl')
    .map(([code]) => code);

// Helper function to get LTR locales
export const getLTRocales = () =>
  Object.entries(LOCALE_INFO)
    .filter(([, info]) => info.direction === 'ltr')
    .map(([code]) => code);
