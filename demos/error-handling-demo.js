/**
 * Error Handling Demo
 *
 * Demonstrates comprehensive error handling for invalid dates
 * Shows what happens when users pass wrong/invalid dates to all methods
 */

import {
  validateDate,
  getDateValidationInfo,
  configureErrorHandling,
  getErrorConfig,
  formatDate,
  formatDateLocalized,
  getRelativeTimeLocalized,
  getDayName,
  isToday,
  addDays,
  differenceInDays,
  parseDate,
  isValidDate,
} from '../lib/date-utils.js'

/**
 * Demo: Test various invalid date scenarios
 */
export const demoInvalidDateScenarios = () => {
  console.log('=== Invalid Date Error Handling Demo ===\n')

  // Test different types of invalid dates
  const invalidDates = [
    null,
    undefined,
    '',
    'invalid-date',
    '2024-13-45', // Invalid month and day
    'not-a-date',
    '2024/99/99',
    '2024-02-30', // February 30th doesn't exist
    '2024-04-31', // April 31st doesn't exist
    '2024-00-00', // Month 0 doesn't exist
    '2024-12-32', // Day 32 doesn't exist
    '9999-99-99', // Extreme invalid date
    '0000-00-00', // Year 0
    '2024-02-29', // Valid leap year date
    '2023-02-29', // Invalid leap year date (2023 is not leap year)
    NaN,
    Infinity,
    -Infinity,
    {},
    [],
    [1, 2, 3],
    true,
    false,
    0,
    -1,
    999999999999999, // Very large number
    '2024-12-25T25:70:80.999Z', // Invalid time
    '2024-12-25T24:00:00.000Z', // Hour 24 doesn't exist
    '2024-12-25T23:60:00.000Z', // Minute 60 doesn't exist
    '2024-12-25T23:59:60.000Z', // Second 60 doesn't exist
  ]

  console.log('Testing invalid date scenarios:\n')

  invalidDates.forEach((invalidDate, index) => {
    console.log(`${index + 1}. Testing:`, JSON.stringify(invalidDate))

    // Test validation
    const validation = getDateValidationInfo(invalidDate)
    console.log(`   Valid: ${validation.isValid}`)
    console.log(`   Error: ${validation.error || 'None'}`)

    // Test basic functions
    console.log(`   formatDate: ${formatDate(invalidDate)}`)
    console.log(`   isValidDate: ${isValidDate(invalidDate)}`)
    console.log(`   parseDate: ${parseDate(invalidDate)}`)

    console.log('')
  })
}

/**
 * Demo: Error handling configuration
 */
export const demoErrorHandlingConfiguration = () => {
  console.log('=== Error Handling Configuration Demo ===\n')

  // Show current configuration
  console.log('Current error configuration:')
  console.log(getErrorConfig())
  console.log('')

  // Test with error logging enabled
  console.log('Testing with error logging enabled:')
  formatDate('invalid-date')
  console.log('')

  // Disable error logging
  configureErrorHandling({ logErrors: false })
  console.log('Testing with error logging disabled:')
  formatDate('invalid-date')
  console.log('')

  // Re-enable error logging
  configureErrorHandling({ logErrors: true })
  console.log('Error logging re-enabled')
  console.log('')
}

/**
 * Demo: Safe fallback behavior
 */
export const demoSafeFallbackBehavior = () => {
  console.log('=== Safe Fallback Behavior Demo ===\n')

  const invalidDate = 'invalid-date-string'

  console.log('Testing safe fallback behavior with invalid date:', invalidDate)
  console.log('')

  // Test all functions with invalid date
  console.log('formatDate:', formatDate(invalidDate))
  console.log('formatDateLocalized:', formatDateLocalized(invalidDate))
  console.log(
    'getRelativeTimeLocalized:',
    getRelativeTimeLocalized(invalidDate)
  )
  console.log('getDayName:', getDayName(invalidDate))
  console.log('isToday:', isToday(invalidDate))
  console.log('addDays:', addDays(invalidDate, 5))
  console.log('differenceInDays:', differenceInDays(invalidDate, new Date()))
  console.log('parseDate:', parseDate(invalidDate))
  console.log('isValidDate:', isValidDate(invalidDate))
  console.log('')
}

/**
 * Demo: Real-world error scenarios
 */
export const demoRealWorldErrorScenarios = () => {
  console.log('=== Real-World Error Scenarios Demo ===\n')

  // Scenario 1: API returns null date
  console.log('Scenario 1: API returns null date')
  const apiResponse = { createdAt: null, updatedAt: undefined }
  console.log('API Response:', apiResponse)
  console.log('Created:', formatDateLocalized(apiResponse.createdAt))
  console.log('Updated:', formatDateLocalized(apiResponse.updatedAt))
  console.log('')

  // Scenario 2: User input validation
  console.log('Scenario 2: User input validation')
  const userInputs = ['', 'invalid', '2024-13-01', '2024-02-30']
  userInputs.forEach((input) => {
    const isValid = isValidDate(input)
    const formatted = isValid ? formatDate(input) : 'Invalid input'
    console.log(
      `Input: "${input}" -> Valid: ${isValid}, Formatted: ${formatted}`
    )
  })
  console.log('')

  // Scenario 3: Database date handling
  console.log('Scenario 3: Database date handling')
  const dbDates = [null, '2024-12-25', 'invalid-date', '2024-02-29']
  dbDates.forEach((dbDate) => {
    const validation = getDateValidationInfo(dbDate)
    console.log(`DB Date: ${JSON.stringify(dbDate)}`)
    console.log(`  Valid: ${validation.isValid}`)
    console.log(`  Error: ${validation.error || 'None'}`)
    console.log(`  Safe Format: ${formatDate(dbDate)}`)
  })
  console.log('')
}

/**
 * Demo: Error handling with different locales
 */
export const demoErrorHandlingWithLocales = () => {
  console.log('=== Error Handling with Locales Demo ===\n')

  const invalidDate = 'not-a-valid-date'

  console.log('Testing invalid date with different locales:')
  console.log('Invalid date:', invalidDate)
  console.log('')

  const locales = ['en', 'ar', 'fr', 'es', 'de']
  locales.forEach((locale) => {
    console.log(`${locale.toUpperCase()}:`)
    console.log(`  Date: ${formatDateLocalized(invalidDate, { locale })}`)
    console.log(
      `  Time: ${formatDateLocalized(invalidDate, { locale, format: 'short' })}`
    )
    console.log(`  Day: ${getDayName(invalidDate, { locale })}`)
    console.log(
      `  Relative: ${getRelativeTimeLocalized(invalidDate, { locale })}`
    )
    console.log('')
  })
}

/**
 * Demo: Performance with error handling
 */
export const demoErrorHandlingPerformance = () => {
  console.log('=== Error Handling Performance Demo ===\n')

  const iterations = 1000
  const testDate = 'invalid-date-string'

  console.log(
    `Testing performance with ${iterations} iterations of invalid date processing:`
  )

  // Test with error handling
  const startTime = performance.now()
  for (let i = 0; i < iterations; i++) {
    formatDate(testDate)
    isValidDate(testDate)
    parseDate(testDate)
  }
  const endTime = performance.now()

  console.log(`Time with error handling: ${(endTime - startTime).toFixed(2)}ms`)
  console.log(
    `Average per operation: ${(
      (endTime - startTime) /
      (iterations * 3)
    ).toFixed(4)}ms`
  )
  console.log('')
}

/**
 * Demo: Custom error configuration
 */
export const demoCustomErrorConfiguration = () => {
  console.log('=== Custom Error Configuration Demo ===\n')

  // Configure custom error messages
  configureErrorHandling({
    logErrors: true,
    fallbackDate: new Date('2024-01-01'),
    fallbackString: 'Date Error',
    messages: {
      invalidDate: 'Custom: Invalid date provided',
      invalidDateNull: 'Custom: Date cannot be null',
      invalidDateEmpty: 'Custom: Date cannot be empty',
      invalidDateNaN: 'Custom: Date results in NaN',
    },
  })

  console.log('Custom error configuration applied')
  console.log('Current config:', getErrorConfig())
  console.log('')

  // Test with custom configuration
  console.log('Testing with custom error configuration:')
  formatDate(null)
  formatDate('')
  formatDate('invalid')
  console.log('')

  // Reset to defaults
  configureErrorHandling({
    logErrors: true,
    fallbackDate: new Date(),
    fallbackString: 'Invalid Date',
    messages: {
      invalidDate: 'Invalid date provided',
      invalidDateString: 'Invalid date string provided',
      invalidDateNumber: 'Invalid date number provided',
      invalidDateObject: 'Invalid date object provided',
      invalidDateArray: 'Invalid date array provided',
      invalidDateNull: 'Date cannot be null or undefined',
      invalidDateEmpty: 'Date cannot be empty string',
      invalidDateNaN: 'Date results in NaN',
      invalidDateRange: 'Date is out of valid range',
      invalidDateFuture: 'Date is too far in the future',
      invalidDatePast: 'Date is too far in the past',
    },
  })

  console.log('Configuration reset to defaults')
  console.log('')
}

/**
 * Run all error handling demos
 */
export const runErrorHandlingDemos = () => {
  console.log('🛡️ Error Handling Demos')
  console.log('========================\n')

  demoInvalidDateScenarios()
  demoErrorHandlingConfiguration()
  demoSafeFallbackBehavior()
  demoRealWorldErrorScenarios()
  demoErrorHandlingWithLocales()
  demoErrorHandlingPerformance()
  demoCustomErrorConfiguration()

  console.log('✅ All error handling demos completed!')
  console.log('')
  console.log('📋 Summary:')
  console.log('- All functions now handle invalid dates safely')
  console.log('- Detailed error messages for debugging')
  console.log('- Configurable error handling behavior')
  console.log('- Fallback to current date for invalid inputs')
  console.log('- Performance optimized error handling')
  console.log('- Works with all locales and functions')
}

/**
 * Quick test function for specific error scenarios
 */
export const testErrorScenario = (invalidDate, functionName = 'formatDate') => {
  console.log(
    `\n🧪 Testing error scenario: ${functionName}(${JSON.stringify(
      invalidDate
    )})`
  )

  const validation = getDateValidationInfo(invalidDate)
  console.log(`Validation: ${validation.isValid ? 'Valid' : 'Invalid'}`)
  console.log(`Error: ${validation.error || 'None'}`)

  // Test the specific function
  switch (functionName) {
    case 'formatDate':
      console.log(`Result: ${formatDate(invalidDate)}`)
      break
    case 'formatDateLocalized':
      console.log(`Result: ${formatDateLocalized(invalidDate)}`)
      break
    case 'getDayName':
      console.log(`Result: ${getDayName(invalidDate)}`)
      break
    case 'isToday':
      console.log(`Result: ${isToday(invalidDate)}`)
      break
    case 'addDays':
      console.log(`Result: ${addDays(invalidDate, 5)}`)
      break
    case 'isValidDate':
      console.log(`Result: ${isValidDate(invalidDate)}`)
      break
    case 'parseDate':
      console.log(`Result: ${parseDate(invalidDate)}`)
      break
    default:
      console.log(`Function ${functionName} not found in test`)
  }
}
