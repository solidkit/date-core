/**
 * Centralized logger for date-utils
 * Provides controlled logging based on environment and configuration
 */

// Logger configuration
const LOGGER_CONFIG = {
  // Enable/disable all logging
  enabled: true,

  // Log levels: 'none', 'error', 'warn', 'info', 'debug'
  level: 'warn',

  // Environment-specific settings
  production: {
    enabled: false,
    level: 'error',
  },

  development: {
    enabled: true,
    level: 'info',
  },

  // Specific loggers
  errorHandling: {
    enabled: true,
    level: 'error',
  },

  localeManager: {
    enabled: true,
    level: 'warn',
  },

  appInitialization: {
    enabled: true,
    level: 'info',
  },

  dateValidation: {
    enabled: true,
    level: 'error',
  },
};

// Log levels hierarchy
const LOG_LEVELS = {
  none: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
};

// Get current log level
const getCurrentLevel = () => {
  // Check if we're in production (you can customize this detection)
  const isProduction =
    typeof process !== 'undefined' &&
    (process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'prod' ||
      typeof window === 'undefined'); // SSR environments

  if (isProduction) {
    return LOGGER_CONFIG.production.level;
  }

  return LOGGER_CONFIG.level;
};

// Check if logging is enabled
const isLoggingEnabled = () => {
  const isProduction =
    typeof process !== 'undefined' &&
    (process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'prod' ||
      typeof window === 'undefined');

  if (isProduction) {
    return LOGGER_CONFIG.production.enabled;
  }

  return LOGGER_CONFIG.enabled;
};

// Check if specific level should be logged
const shouldLog = (level, loggerName = 'default') => {
  if (!isLoggingEnabled()) return false;

  const currentLevel = getCurrentLevel();
  const loggerConfig = LOGGER_CONFIG[loggerName] || LOGGER_CONFIG;

  // Check global level first
  if (LOG_LEVELS[level] > LOG_LEVELS[currentLevel]) {
    return false;
  }

  // Check logger-specific level
  if (
    loggerConfig.level &&
    LOG_LEVELS[level] > LOG_LEVELS[loggerConfig.level]
  ) {
    return false;
  }

  return true;
};

// Logger functions
export const logger = {
  error: (message, ...args) => {
    if (shouldLog('error')) {
      console.error(`[Date-Core] ${message}`, ...args);
    }
  },

  warn: (message, ...args) => {
    if (shouldLog('warn')) {
      console.warn(`[Date-Core] ${message}`, ...args);
    }
  },

  info: (message, ...args) => {
    if (shouldLog('info')) {
      console.info(`[Date-Core] ${message}`, ...args);
    }
  },

  debug: (message, ...args) => {
    if (shouldLog('debug')) {
      console.debug(`[Date-Core] ${message}`, ...args);
    }
  },

  // Logger-specific functions
  errorHandling: {
    error: (message, ...args) => {
      if (shouldLog('error', 'errorHandling')) {
        console.error(`[Date-Core:Error] ${message}`, ...args);
      }
    },
  },

  localeManager: {
    warn: (message, ...args) => {
      if (shouldLog('warn', 'localeManager')) {
        console.warn(`[Date-Core:Locale] ${message}`, ...args);
      }
    },
    error: (message, ...args) => {
      if (shouldLog('error', 'localeManager')) {
        console.error(`[Date-Core:Locale] ${message}`, ...args);
      }
    },
    info: (message, ...args) => {
      if (shouldLog('info', 'localeManager')) {
        console.info(`[Date-Core:Locale] ${message}`, ...args);
      }
    },
  },

  appInitialization: {
    info: (message, ...args) => {
      if (shouldLog('info', 'appInitialization')) {
        console.info(`[Date-Core:Init] ${message}`, ...args);
      }
    },
  },

  dateValidation: {
    error: (message, ...args) => {
      if (shouldLog('error', 'dateValidation')) {
        console.error(`[Date-Core:Validation] ${message}`, ...args);
      }
    },
  },
};

// Configure logger
export const configureLogger = (config = {}) => {
  Object.assign(LOGGER_CONFIG, config);
};

// Get logger configuration
export const getLoggerConfig = () => ({...LOGGER_CONFIG});

// Check if we're in production
export const isProduction = () => {
  return (
    typeof process !== 'undefined' &&
    (process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'prod' ||
      typeof window === 'undefined')
  );
};
