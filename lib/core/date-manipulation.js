/**
 * Date manipulation functions for date-utils
 * Provides functions to add, subtract, and manipulate dates
 */

import {createSafeDate} from '../utils/date-validation.js';

// Add days to date
export const addDays = (date, days) => {
  const d = createSafeDate(date, 'addDays');
  const result = new Date(d);
  result.setDate(result.getDate() + days);
  return result;
};

// Subtract days from date
export const subtractDays = (date, days) => {
  const d = createSafeDate(date, 'subtractDays');
  const result = new Date(d);
  result.setDate(result.getDate() - days);
  return result;
};

// Add months to date
export const addMonths = (date, months) => {
  const d = createSafeDate(date, 'addMonths');
  const result = new Date(d);
  result.setMonth(result.getMonth() + months);
  return result;
};

// Subtract months from date
export const subtractMonths = (date, months) => {
  const d = createSafeDate(date, 'subtractMonths');
  const result = new Date(d);
  result.setMonth(result.getMonth() - months);
  return result;
};

// Get start of day
export const startOfDay = date => {
  const d = createSafeDate(date, 'startOfDay');
  const result = new Date(d);
  result.setHours(0, 0, 0, 0);
  return result;
};

// Get end of day
export const endOfDay = date => {
  const d = createSafeDate(date, 'endOfDay');
  const result = new Date(d);
  result.setHours(23, 59, 59, 999);
  return result;
};

// Get start of week
export const startOfWeek = date => {
  const d = createSafeDate(date, 'startOfWeek');
  const result = new Date(d);
  const day = result.getDay();
  const diff = result.getDate() - day;
  result.setDate(diff);
  result.setHours(0, 0, 0, 0);
  return result;
};

// Get end of week
export const endOfWeek = date => {
  const d = createSafeDate(date, 'endOfWeek');
  const result = new Date(d);
  const day = result.getDay();
  const diff = result.getDate() - day + 6;
  result.setDate(diff);
  result.setHours(23, 59, 59, 999);
  return result;
};

// Get start of month
export const startOfMonth = date => {
  const d = createSafeDate(date, 'startOfMonth');
  const result = new Date(d);
  result.setDate(1);
  result.setHours(0, 0, 0, 0);
  return result;
};

// Get end of month
export const endOfMonth = date => {
  const d = createSafeDate(date, 'endOfMonth');
  const result = new Date(d);
  result.setMonth(result.getMonth() + 1, 0);
  result.setHours(23, 59, 59, 999);
  return result;
};
