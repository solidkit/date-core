/**
 * Date difference functions for date-utils
 * Provides functions to calculate differences between dates
 */

import {createSafeDate} from '../utils/date-validation.js';

// Get difference in days between two dates
export const differenceInDays = (date1, date2) => {
  const d1 = createSafeDate(date1, 'differenceInDays');
  const d2 = createSafeDate(date2, 'differenceInDays');
  const oneDay = 24 * 60 * 60 * 1000;
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / oneDay);
};

// Get difference in hours between two dates
export const differenceInHours = (date1, date2) => {
  const d1 = createSafeDate(date1, 'differenceInHours');
  const d2 = createSafeDate(date2, 'differenceInHours');
  const oneHour = 60 * 60 * 1000;
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / oneHour);
};

// Get difference in minutes between two dates
export const differenceInMinutes = (date1, date2) => {
  const d1 = createSafeDate(date1, 'differenceInMinutes');
  const d2 = createSafeDate(date2, 'differenceInMinutes');
  const oneMinute = 60 * 1000;
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / oneMinute);
};
