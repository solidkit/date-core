/**
 * Centralized locale management for date-utils
 * Supports dynamic locale registration and custom locale files
 */

import { LOCALE_CONFIG } from './locales/index.js'
import { logger } from './config/logger.js'

// Singleton instance
class LocaleManager {
  constructor() {
    this.currentLocale = 'en'
    this.availableLocales = new Set(['en', 'ar'])
    this.customLocales = new Map()
    this.localeConfigs = new Map()

    // Initialize with default locales
    this.registerLocale('en', LOCALE_CONFIG.en)
    this.registerLocale('ar', LOCALE_CONFIG.ar)
  }

  /**
   * Initialize the locale manager with a default locale
   * @param {string} locale - The default locale to use
   */
  initLocale = (locale = 'en') => {
    if (this.isValidLocale(locale)) {
      this.currentLocale = locale
      return true
    }
    logger.localeManager.warn(`Invalid locale: ${locale}. Using default: en`)
    this.currentLocale = 'en'
    return false
  }

  /**
   * Set the current locale
   * @param {string} locale - The locale to set
   * @returns {boolean} - Whether the locale was set successfully
   */
  setLocale = (locale) => {
    if (this.isValidLocale(locale)) {
      this.currentLocale = locale
      return true
    }
    logger.localeManager.warn(
      `Invalid locale: ${locale}. Current locale unchanged.`
    )
    return false
  }

  /**
   * Get the current locale
   * @returns {string} - The current locale
   */
  getCurrentLocale = () => this.currentLocale

  /**
   * Check if a locale is valid (registered)
   * @param {string} locale - The locale to check
   * @returns {boolean} - Whether the locale is valid
   */
  isValidLocale = (locale) =>
    this.availableLocales.has(locale) || this.customLocales.has(locale)

  /**
   * Check if the current locale is Arabic
   * @returns {boolean} - Whether the current locale is Arabic
   */
  isArabic = () => this.currentLocale === 'ar'

  /**
   * Check if the current locale is English
   * @returns {boolean} - Whether the current locale is English
   */
  isEnglish = () => this.currentLocale === 'en'

  /**
   * Get all available locales
   * @returns {Array<string>} - Array of available locale codes
   */
  getAvailableLocales = () => [
    ...this.availableLocales,
    ...this.customLocales.keys(),
  ]

  /**
   * Register a new locale with its configuration
   * @param {string} localeCode - The locale code (e.g., 'fr', 'es', 'de')
   * @param {Object} config - The locale configuration object
   * @returns {boolean} - Whether the locale was registered successfully
   */
  registerLocale = (localeCode, config) => {
    if (!localeCode || typeof localeCode !== 'string') {
      logger.localeManager.error(
        'Invalid locale code. Must be a non-empty string.'
      )
      return false
    }

    if (!this.isValidLocaleConfig(config)) {
      logger.localeManager.error(
        `Invalid locale config for ${localeCode}. Missing required properties.`
      )
      return false
    }

    this.availableLocales.add(localeCode)
    this.localeConfigs.set(localeCode, config)
    logger.localeManager.info(
      `✅ Locale '${localeCode}' registered successfully`
    )
    return true
  }

  /**
   * Register a custom locale with its configuration
   * @param {string} localeCode - The locale code (e.g., 'custom', 'user-defined')
   * @param {Object} config - The custom locale configuration object
   * @returns {boolean} - Whether the custom locale was registered successfully
   */
  registerCustomLocale = (localeCode, config) => {
    if (!localeCode || typeof localeCode !== 'string') {
      logger.localeManager.error(
        'Invalid locale code. Must be a non-empty string.'
      )
      return false
    }

    if (!this.isValidLocaleConfig(config)) {
      logger.localeManager.error(
        `Invalid custom locale config for ${localeCode}. Missing required properties.`
      )
      return false
    }

    this.customLocales.set(localeCode, config)
    this.localeConfigs.set(localeCode, config)
    logger.localeManager.info(
      `✅ Custom locale '${localeCode}' registered successfully`
    )
    return true
  }

  /**
   * Remove a custom locale
   * @param {string} localeCode - The locale code to remove
   * @returns {boolean} - Whether the custom locale was removed successfully
   */
  removeCustomLocale = (localeCode) => {
    if (this.customLocales.has(localeCode)) {
      this.customLocales.delete(localeCode)
      this.localeConfigs.delete(localeCode)
      logger.localeManager.info(
        `✅ Custom locale '${localeCode}' removed successfully`
      )
      return true
    }
    logger.localeManager.warn(`Custom locale '${localeCode}' not found`)
    return false
  }

  /**
   * Get locale configuration
   * @param {string} localeCode - The locale code
   * @returns {Object|null} - The locale configuration or null if not found
   */
  getLocaleConfig = (localeCode) => {
    return this.localeConfigs.get(localeCode) || null
  }

  /**
   * Get all custom locales
   * @returns {Array<string>} - Array of custom locale codes
   */
  getCustomLocales = () => [...this.customLocales.keys()]

  /**
   * Get all built-in locales
   * @returns {Array<string>} - Array of built-in locale codes
   */
  getBuiltInLocales = () => [...this.availableLocales]

  /**
   * Reset locale manager to defaults
   */
  resetToDefaults = () => {
    this.currentLocale = 'en'
    this.customLocales.clear()
    this.localeConfigs.clear()

    // Re-initialize with default locales
    this.registerLocale('en', LOCALE_CONFIG.en)
    this.registerLocale('ar', LOCALE_CONFIG.ar)
    logger.localeManager.info('✅ Locale manager reset to defaults')
  }

  /**
   * Get information about a locale
   * @param {string} localeCode - The locale code
   * @returns {Object|null} - Locale information or null if not found
   */
  getLocaleInfo = (localeCode) => {
    const config = this.getLocaleConfig(localeCode)
    if (!config) return null

    return {
      code: localeCode,
      isBuiltIn: this.availableLocales.has(localeCode),
      isCustom: this.customLocales.has(localeCode),
      hasCustomNumerals: !!(
        config.numberMap && Object.keys(config.numberMap).length > 0
      ),
      direction: localeCode === 'ar' ? 'rtl' : 'ltr',
    }
  }

  /**
   * Validate locale configuration
   * @param {Object} config - The locale configuration to validate
   * @returns {boolean} - Whether the configuration is valid
   */
  isValidLocaleConfig = (config) => {
    if (!config || typeof config !== 'object') return false

    const requiredProps = [
      'months',
      'monthsShort',
      'weekdays',
      'weekdaysShort',
      'weekdaysMin',
      'relativeTime',
      'calendar',
    ]

    for (const prop of requiredProps) {
      if (
        !config[prop] ||
        (!Array.isArray(config[prop]) && typeof config[prop] !== 'object')
      ) {
        logger.localeManager.error(`Missing required property: ${prop}`)
        return false
      }
    }

    return true
  }
}

// Create and export singleton instance
const localeManager = new LocaleManager()

// Export individual functions for convenience
export const initLocale = (locale) => localeManager.initLocale(locale)
export const setLocale = (locale) => localeManager.setLocale(locale)
export const getCurrentLocale = () => localeManager.getCurrentLocale()
export const isValidLocale = (locale) => localeManager.isValidLocale(locale)
export const isArabic = () => localeManager.isArabic()
export const isEnglish = () => localeManager.isEnglish()
export const getAvailableLocales = () => localeManager.getAvailableLocales()
export const registerLocale = (localeCode, config) =>
  localeManager.registerLocale(localeCode, config)
export const registerCustomLocale = (localeCode, config) =>
  localeManager.registerCustomLocale(localeCode, config)
export const removeCustomLocale = (localeCode) =>
  localeManager.removeCustomLocale(localeCode)
export const getLocaleConfig = (localeCode) =>
  localeManager.getLocaleConfig(localeCode)
export const getCustomLocales = () => localeManager.getCustomLocales()
export const getBuiltInLocales = () => localeManager.getBuiltInLocales()
export const resetToDefaults = () => localeManager.resetToDefaults()
export const getLocaleInfo = (localeCode) =>
  localeManager.getLocaleInfo(localeCode)

export default localeManager
