/**
 * App Initialization Demo
 *
 * Demonstrates how to configure the entire date-utils app during initialization
 * Shows how users can pass configuration objects for locale and error handling
 */

import {
  initializeApp,
  getAppInitializationStatus,
  getInitializationStatus,
  configureErrorHandling,
  getErrorConfig,
  formatDate,
  formatDateLocalized,
  getRelativeTimeLocalized,
  getDayName,
  registerLocale,
  setLocale,
} from '../lib/date-utils.js'

import { fr, es, de } from '../lib/locales/index.js'

/**
 * Demo: Basic app initialization
 */
export const demoBasicInitialization = () => {
  console.log('=== Basic App Initialization Demo ===\n')

  // Basic initialization with just locale
  const result = initializeApp({
    locale: 'ar',
  })

  console.log('Basic initialization result:', result)
  console.log('App initialized:', getAppInitializationStatus())
  console.log('Current status:', getInitializationStatus())
  console.log('')
}

/**
 * Demo: Complete app initialization with all options
 */
export const demoCompleteInitialization = () => {
  console.log('=== Complete App Initialization Demo ===\n')

  // Complete initialization with all configuration options
  const result = initializeApp({
    // Locale configuration
    locale: 'en',

    // Error handling configuration
    logErrors: true,
    fallbackDate: new Date('2024-01-01'),
    fallbackString: 'Date Error',
    fallbackNumber: 0,
    messages: {
      invalidDate: 'Custom: Invalid date provided',
      invalidDateNull: 'Custom: Date cannot be null',
      invalidDateEmpty: 'Custom: Date cannot be empty',
      invalidDateNaN: 'Custom: Date results in NaN',
    },

    // Additional configuration
    autoRegisterLocales: true,
    validateDates: true,
    strictMode: false,
  })

  console.log('Complete initialization result:', result)
  console.log('Current error config:', getErrorConfig())
  console.log('')
}

/**
 * Demo: Minimal initialization (using defaults)
 */
export const demoMinimalInitialization = () => {
  console.log('=== Minimal Initialization Demo ===\n')

  // Minimal initialization - uses all defaults
  const result = initializeApp()

  console.log('Minimal initialization result:', result)
  console.log('Uses default locale: en')
  console.log('Uses default error handling')
  console.log('')
}

/**
 * Demo: Custom error handling configuration
 */
export const demoCustomErrorHandling = () => {
  console.log('=== Custom Error Handling Demo ===\n')

  // Initialize with custom error handling
  initializeApp({
    locale: 'fr',
    logErrors: false, // Disable error logging
    fallbackDate: new Date('2024-06-15'),
    fallbackString: 'Date Invalide',
    messages: {
      invalidDate: 'Date invalide fournie',
      invalidDateNull: 'La date ne peut pas être nulle',
      invalidDateEmpty: 'La date ne peut pas être vide',
      invalidDateNaN: 'La date résulte en NaN',
    },
  })

  console.log('Custom error handling configured')
  console.log('Error config:', getErrorConfig())

  // Test with invalid dates (no console errors due to logErrors: false)
  console.log('Testing invalid dates (no console errors):')
  console.log('formatDate(null):', formatDate(null))
  console.log('formatDate("invalid"):', formatDate('invalid'))
  console.log('')
}

/**
 * Demo: Production-ready initialization
 */
export const demoProductionInitialization = () => {
  console.log('=== Production Initialization Demo ===\n')

  // Production-ready configuration
  initializeApp({
    locale: 'en',
    logErrors: false, // Disable error logging in production
    fallbackDate: new Date(), // Use current date as fallback
    fallbackString: 'Invalid Date',
    strictMode: false, // Allow flexible date handling
    validateDates: true, // Keep validation enabled
  })

  console.log('Production configuration applied')
  console.log('Error logging disabled for production')
  console.log('Date validation enabled')
  console.log('Strict mode disabled for flexibility')
  console.log('')
}

/**
 * Demo: Development initialization
 */
export const demoDevelopmentInitialization = () => {
  console.log('=== Development Initialization Demo ===\n')

  // Development configuration with detailed logging
  initializeApp({
    locale: 'ar',
    logErrors: true, // Enable error logging for debugging
    fallbackDate: new Date('2024-01-01'), // Use fixed date for consistency
    fallbackString: 'DEBUG: Invalid Date',
    strictMode: true, // Enable strict mode for catching issues
    validateDates: true,
    messages: {
      invalidDate: 'DEBUG: Invalid date provided',
      invalidDateNull: 'DEBUG: Date cannot be null',
      invalidDateEmpty: 'DEBUG: Date cannot be empty',
      invalidDateNaN: 'DEBUG: Date results in NaN',
    },
  })

  console.log('Development configuration applied')
  console.log('Error logging enabled for debugging')
  console.log('Strict mode enabled')
  console.log('Debug messages configured')
  console.log('')
}

/**
 * Demo: Multi-locale initialization
 */
export const demoMultiLocaleInitialization = () => {
  console.log('=== Multi-Locale Initialization Demo ===\n')

  // Initialize with one locale
  initializeApp({
    locale: 'en',
    logErrors: false,
  })

  // Register additional locales
  registerLocale('fr', fr)
  registerLocale('es', es)
  registerLocale('de', de)

  console.log('Multi-locale setup completed')
  console.log('Available locales: en, fr, es, de')

  // Test different locales
  const testDate = new Date('2024-01-15T14:30:00')

  ;['en', 'fr', 'es', 'de'].forEach((locale) => {
    setLocale(locale)
    console.log(`${locale}: ${formatDateLocalized(testDate)}`)
  })
  console.log('')
}

/**
 * Demo: Runtime configuration changes
 */
export const demoRuntimeConfiguration = () => {
  console.log('=== Runtime Configuration Demo ===\n')

  // Initialize app
  initializeApp({
    locale: 'en',
    logErrors: true,
  })

  console.log('Initial configuration:')
  console.log(getErrorConfig())
  console.log('')

  // Change error handling at runtime
  configureErrorHandling({
    logErrors: false,
    fallbackString: 'Runtime Changed',
    messages: {
      invalidDate: 'Runtime: Invalid date',
    },
  })

  console.log('Runtime configuration change applied:')
  console.log(getErrorConfig())
  console.log('')
}

/**
 * Demo: Different initialization scenarios
 */
export const demoInitializationScenarios = () => {
  console.log('=== Initialization Scenarios Demo ===\n')

  const scenarios = [
    {
      name: 'Arabic App',
      config: {
        locale: 'ar',
        logErrors: false,
        fallbackString: 'تاريخ غير صحيح',
      },
    },
    {
      name: 'French App',
      config: {
        locale: 'fr',
        logErrors: true,
        fallbackString: 'Date Invalide',
        messages: {
          invalidDate: 'Date invalide fournie',
        },
      },
    },
    {
      name: 'Spanish App',
      config: {
        locale: 'es',
        logErrors: false,
        fallbackString: 'Fecha Inválida',
        messages: {
          invalidDate: 'Fecha inválida proporcionada',
        },
      },
    },
    {
      name: 'German App',
      config: {
        locale: 'de',
        logErrors: true,
        fallbackString: 'Ungültiges Datum',
        messages: {
          invalidDate: 'Ungültiges Datum bereitgestellt',
        },
      },
    },
  ]

  scenarios.forEach((scenario) => {
    console.log(`--- ${scenario.name} ---`)
    const result = initializeApp(scenario.config)
    console.log('Locale:', result.locale)
    console.log('Error Logging:', result.errorConfig.logErrors)
    console.log('Fallback String:', result.errorConfig.fallbackString)
    console.log('')
  })
}

/**
 * Demo: Error handling with different configurations
 */
export const demoErrorHandlingScenarios = () => {
  console.log('=== Error Handling Scenarios Demo ===\n')

  const invalidDate = 'invalid-date-string'

  // Scenario 1: Silent error handling
  initializeApp({
    locale: 'en',
    logErrors: false,
    fallbackString: 'Silent Error',
  })
  console.log('Silent mode:', formatDate(invalidDate))

  // Scenario 2: Verbose error handling
  initializeApp({
    locale: 'en',
    logErrors: true,
    fallbackString: 'Verbose Error',
    messages: {
      invalidDate: 'VERBOSE: Invalid date provided',
    },
  })
  console.log('Verbose mode:', formatDate(invalidDate))

  // Scenario 3: Custom fallback date
  initializeApp({
    locale: 'en',
    logErrors: false,
    fallbackDate: new Date('2024-06-15'),
    fallbackString: 'Custom Fallback',
  })
  console.log('Custom fallback:', formatDate(invalidDate))
  console.log('')
}

/**
 * Demo: Real-world app initialization examples
 */
export const demoRealWorldExamples = () => {
  console.log('=== Real-World Examples Demo ===\n')

  // Example 1: E-commerce app
  console.log('E-commerce App:')
  initializeApp({
    locale: 'en',
    logErrors: false, // No errors in production
    fallbackDate: new Date(), // Use current date
    strictMode: false, // Flexible date handling
  })
  console.log('  - English locale')
  console.log('  - Silent error handling')
  console.log('  - Flexible date validation')
  console.log('')

  // Example 2: Banking app
  console.log('Banking App:')
  initializeApp({
    locale: 'ar',
    logErrors: true, // Log errors for security
    fallbackString: 'تاريخ غير صحيح',
    strictMode: true, // Strict validation
    messages: {
      invalidDate: 'تاريخ غير صحيح - يرجى التحقق',
    },
  })
  console.log('  - Arabic locale')
  console.log('  - Error logging enabled')
  console.log('  - Strict validation')
  console.log('')

  // Example 3: Social media app
  console.log('Social Media App:')
  initializeApp({
    locale: 'fr',
    logErrors: false,
    fallbackDate: new Date('2024-01-01'),
    fallbackString: 'Date Inconnue',
    messages: {
      invalidDate: 'Date inconnue',
      invalidDateNull: 'Date manquante',
    },
  })
  console.log('  - French locale')
  console.log('  - User-friendly error messages')
  console.log('  - Fixed fallback date')
  console.log('')
}

/**
 * Run all app initialization demos
 */
export const runAppInitializationDemos = () => {
  console.log('🚀 App Initialization Demos')
  console.log('===========================\n')

  demoBasicInitialization()
  demoCompleteInitialization()
  demoMinimalInitialization()
  demoCustomErrorHandling()
  demoProductionInitialization()
  demoDevelopmentInitialization()
  demoMultiLocaleInitialization()
  demoRuntimeConfiguration()
  demoInitializationScenarios()
  demoErrorHandlingScenarios()
  demoRealWorldExamples()

  console.log('✅ All app initialization demos completed!')
  console.log('')
  console.log('📋 Summary:')
  console.log('- Users can configure everything during app initialization')
  console.log('- All configuration options are optional with sensible defaults')
  console.log('- Error handling can be customized per app needs')
  console.log('- Runtime configuration changes are supported')
  console.log('- Multiple initialization scenarios supported')
  console.log('- Production and development configurations available')
}

/**
 * Quick initialization test
 */
export const testAppInitialization = (config = {}) => {
  console.log(`\n🧪 Testing app initialization with config:`, config)

  const result = initializeApp(config)

  console.log('Initialization result:', result)
  console.log('App initialized:', getAppInitializationStatus())
  console.log('Current status:', getInitializationStatus())

  return result
}
