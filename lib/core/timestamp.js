/**
 * Timestamp functions for date-utils
 * Provides functions to work with timestamps and Unix time
 */

import {createSafeDate} from '../utils/date-validation.js';

// Get current timestamp
export const now = () => Date.now();

// Get Unix timestamp
export const unix = date => {
  const d = createSafeDate(date, 'unix');
  return Math.floor(d.getTime() / 1000);
};
