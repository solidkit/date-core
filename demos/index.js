/**
 * Demos Index
 *
 * Central export for all demo functions and examples
 * Provides comprehensive testing and learning resources
 */

// Basic usage demos
export {
  DateComponentExample,
  DateComponentWithOverride,
  switchLocale,
  AppDateDisplay,
  AppScenarios,
  AppInitializationExample,
  TestLocaleManager,
} from './basic-usage'

// Advanced usage demos
export {
  demonstrateArabicLocaleSupport,
  ArabicDateExample,
  DateDisplayComponent,
  legacyDateMigration,
  performanceComparison,
  advancedUsageExamples,
  testAdvancedFunctionality,
} from './advanced-usage'

// Multi-locale support demos
export {
  demoBuiltInLocales,
  demoCustomLocale,
  demoUserProvidedLocale,
  demoLocaleManagement,
  demoErrorHandling,
  demoCleanup,
  runMultiLocaleDemos,
  testSpecificLocale,
} from './multi-locale-demo'

// Error handling demos
export {
  demoInvalidDateScenarios,
  demoErrorHandlingConfiguration,
  demoSafeFallbackBehavior,
  demoRealWorldErrorScenarios,
  demoErrorHandlingWithLocales,
  demoErrorHandlingPerformance,
  demoCustomErrorConfiguration,
  runErrorHandlingDemos,
  testErrorScenario,
} from './error-handling-demo'

// App initialization demos
export {
  demoBasicInitialization,
  demoCompleteInitialization,
  demoMinimalInitialization,
  demoCustomErrorHandling,
  demoProductionInitialization,
  demoDevelopmentInitialization,
  demoMultiLocaleInitialization,
  demoRuntimeConfiguration,
  demoInitializationScenarios,
  demoErrorHandlingScenarios,
  demoRealWorldExamples,
  runAppInitializationDemos,
  testAppInitialization,
} from './app-initialization-demo'

// Re-export locale management functions for convenience
export {
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
  isValidLocale,
  isArabic,
  isEnglish,
} from '../lib/date-utils.js'

// Re-export error handling functions for convenience
export {
  validateDate,
  getDateValidationInfo,
  configureErrorHandling,
  getErrorConfig,
} from '../lib/date-utils.js'

// Re-export app initialization functions for convenience
export {
  initializeApp,
  getAppInitializationStatus,
  getInitializationStatus,
} from '../lib/date-utils.js'

// Re-export additional locales for testing
export { fr, es, de } from '../lib/date-utils.js'
