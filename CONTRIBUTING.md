# 🤝 Contributing to Date-Core

Thank you for your interest in contributing to Date-Core! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Adding New Locales](#adding-new-locales)
- [Code Style](#code-style)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## 🤔 How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker
- Include detailed steps to reproduce the bug
- Provide your environment details (OS, Node.js version, etc.)
- Include error messages and stack traces

### Suggesting Enhancements

- Use the GitHub issue tracker with the "enhancement" label
- Describe the feature and its benefits
- Provide use cases and examples

### Pull Requests

- Fork the repository
- Create a feature branch
- Make your changes
- Add tests for new functionality
- Ensure all tests pass
- Update documentation if needed
- Submit a pull request

## 🛠️ Development Setup

### Prerequisites

- Node.js >= 14.0.0
- Yarn (recommended) or npm

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/yourusername/date-core.git
cd date-core

# Install dependencies
yarn install

# Run tests
yarn test

# Run demos
yarn demo
```

### Available Scripts

```bash
# Testing
yarn test              # Run all tests
yarn test:watch        # Run tests in watch mode
yarn test:coverage     # Run tests with coverage

# Demos
yarn demo              # Run basic demo
yarn demo:advanced     # Run advanced demo
yarn demo:multi-locale # Run multi-locale demo
yarn demo:error        # Run error handling demo
yarn demo:init         # Run app initialization demo

# Building
yarn build             # Build the library
yarn prepublishOnly    # Build and test before publish
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

### Test Structure

- **Unit Tests**: Test individual functions
- **Integration Tests**: Test function combinations
- **Locale Tests**: Test locale-specific functionality
- **Error Handling Tests**: Test invalid input handling

### Writing Tests

```javascript
// Example test structure
describe('formatDate', () => {
  it('should format valid date correctly', () => {
    const result = formatDate(new Date('2024-01-15'));
    expect(result).toBe('2024-01-15');
  });

  it('should handle invalid date gracefully', () => {
    const result = formatDate('invalid-date');
    expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});
```

## 📝 Submitting Changes

### Commit Message Format

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Examples:

- `feat(locale): add Italian locale support`
- `fix(formatting): handle null dates gracefully`
- `docs(readme): update installation instructions`

### Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes
4. **Add** tests for new functionality
5. **Run** tests: `yarn test`
6. **Commit** your changes: `git commit -m 'feat: add amazing feature'`
7. **Push** to the branch: `git push origin feature/amazing-feature`
8. **Open** a Pull Request

### Pull Request Guidelines

- Provide a clear description of the changes
- Include tests for new functionality
- Update documentation if needed
- Ensure all tests pass
- Follow the code style guidelines

## 🌍 Adding New Locales

### Locale File Structure

Create a new locale file in `lib/locales/`:

```javascript
// lib/locales/it.js (Italian example)
export const it = {
  months: [
    'gennaio',
    'febbraio',
    'marzo',
    'aprile',
    'maggio',
    'giugno',
    'luglio',
    'agosto',
    'settembre',
    'ottobre',
    'novembre',
    'dicembre',
  ],
  monthsShort: [
    'gen',
    'feb',
    'mar',
    'apr',
    'mag',
    'giu',
    'lug',
    'ago',
    'set',
    'ott',
    'nov',
    'dic',
  ],
  weekdays: [
    'domenica',
    'lunedì',
    'martedì',
    'mercoledì',
    'giovedì',
    'venerdì',
    'sabato',
  ],
  weekdaysShort: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'],
  weekdaysMin: ['do', 'lu', 'ma', 'me', 'gi', 've', 'sa'],
  relativeTime: {
    future: 'tra %s',
    past: '%s fa',
    s: 'alcuni secondi',
    ss: '%d secondi',
    m: 'un minuto',
    mm: '%d minuti',
    h: "un'ora",
    hh: '%d ore',
    d: 'un giorno',
    dd: '%d giorni',
    w: 'una settimana',
    ww: '%d settimane',
    M: 'un mese',
    MM: '%d mesi',
    y: 'un anno',
    yy: '%d anni',
  },
  calendar: {
    sameDay: 'oggi alle LT',
    nextDay: 'domani alle LT',
    nextWeek: 'dddd alle LT',
    lastDay: 'ieri alle LT',
    lastWeek: 'dddd scorso alle LT',
    sameElse: 'L',
  },
  numberMap: {}, // For custom numeral systems
  symbolMap: {}, // For custom numeral systems
};

export default it;
```

### Registration Steps

1. **Create** the locale file
2. **Add** export to `lib/locales/index.js`
3. **Add** tests for the new locale
4. **Update** documentation
5. **Test** with demos

### Testing New Locales

```javascript
// Test the new locale
import {setLocale, formatDateLocalized} from 'date-core';
import {it} from 'date-core';

// Register and test
registerLocale('it', it);
setLocale('it');
console.log(formatDateLocalized(new Date())); // Should show Italian date
```

## 🎨 Code Style

### JavaScript Style Guide

- Use ES6+ features
- Use arrow functions where appropriate
- Use template literals for string interpolation
- Use destructuring for object/array access
- Use const/let instead of var
- Use meaningful variable names

### File Organization

```
lib/
├── config/          # Configuration files
├── core/           # Core functionality
├── utils/          # Utility functions
└── locales/        # Locale configurations
```

### Function Guidelines

- Keep functions small and focused
- Use descriptive function names
- Add JSDoc comments for public functions
- Handle errors gracefully
- Return consistent data types

### Example Function

```javascript
/**
 * Formats a date with locale support
 * @param {Date|string} date - The date to format
 * @param {Object} options - Formatting options
 * @param {string} [options.locale] - Locale code
 * @param {string} [options.format] - Format type
 * @returns {string} Formatted date string
 */
export const formatDateLocalized = (date, {locale, format} = {}) => {
  // Implementation
};
```

## 📚 Additional Resources

- [GitHub Issues](https://github.com/yourusername/date-core/issues)
- [API Documentation](./README.md#-api-reference)
- [Demo Examples](./demos/)

## 🙏 Thank You

Thank you for contributing to Date-Core! Your contributions help make this library better for everyone.
