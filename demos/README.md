# Date-Core Demos

Comprehensive examples and testing utilities for the date-core library.

## 🚀 Quick Start

### Import Demos

```javascript
// Import specific demos
import {
  TestLocaleManager,
  demonstrateArabicLocaleSupport,
} from 'date-core/demos';

// Import all demos
import * as demos from 'date-core/demos';
```

### Run Tests

```javascript
// Test locale manager functionality
import {TestLocaleManager} from 'date-core/demos';
TestLocaleManager();

// Demonstrate Arabic locale support
import {demonstrateArabicLocaleSupport} from 'date-core/demos';
demonstrateArabicLocaleSupport();
```

## 📋 Available Demos

### Basic Usage (`basic-usage.js`)

#### **Testing Functions**

- `TestLocaleManager()` - Comprehensive locale manager testing
- `switchLocale(newLocale)` - Switch locale dynamically

#### **Component Examples**

- `DateComponentExample()` - Basic component usage with app locale
- `DateComponentWithOverride()` - Component with locale override
- `AppDateDisplay(props)` - React Native component demo

#### **App Scenarios**

- `AppScenarios()` - Real-world usage examples

### Advanced Usage (`advanced-usage.js`)

#### **Arabic Locale Demonstration**

- `demonstrateArabicLocaleSupport()` - Comprehensive Arabic locale demos
- `ArabicDateExample()` - React Native component with Arabic dates
- `DateDisplayComponent(props)` - Reusable date display component

#### **Migration & Performance**

- `legacyDateMigration` - Legacy date library migration helpers
- `performanceComparison()` - Performance comparison utilities

### Multi-Locale Support (`multi-locale-demo.js`)

- `runMultiLocaleDemos()` - Complete multi-locale testing
- `testSpecificLocale(locale)` - Test specific locale functionality
- `demoCustomLocale()` - Custom locale registration examples

### Error Handling (`error-handling-demo.js`)

- `runErrorHandlingDemos()` - Comprehensive error handling tests
- `testErrorScenario(input, functionName)` - Test specific error scenarios

### App Initialization (`app-initialization-demo.js`)

- `runAppInitializationDemos()` - Complete app initialization testing
- `testAppInitialization(config)` - Test specific initialization scenarios

## 💡 Usage Examples

### **1. Test Locale Manager**

```javascript
import {TestLocaleManager} from 'date-core/demos';

// Run comprehensive tests
TestLocaleManager();
```

### **2. Demonstrate Arabic Support**

```javascript
import {demonstrateArabicLocaleSupport} from 'date-core/demos';

// Show all Arabic locale features
demonstrateArabicLocaleSupport();
```

### **3. Component Usage**

```javascript
import {AppDateDisplay} from 'date-core/demos';

const MyComponent = () => {
  const dateDisplay = AppDateDisplay({
    date: new Date(),
    forceLocale: 'ar',
  });

  return (
    <View>
      <Text>{dateDisplay.data.smartDate}</Text>
      <Text>{dateDisplay.data.time}</Text>
    </View>
  );
};
```

### **4. App Scenarios**

```javascript
import {AppScenarios} from 'date-core/demos';

// Real-world usage examples
AppScenarios();
```

### **5. Migration from Legacy Date Libraries**

```javascript
import {legacyDateMigration} from 'date-core/demos';

// Use migration helpers
const date = new Date();
const formattedDate = legacyDateMigration.formatDate(date);
const relativeTime = legacyDateMigration.fromNow(date, 'ar');
```

## 🧪 Testing

### **Run All Tests**

```javascript
import {
  TestLocaleManager,
  demonstrateArabicLocaleSupport,
  runMultiLocaleDemos,
  runErrorHandlingDemos,
  runAppInitializationDemos,
  performanceComparison,
} from 'date-core/demos';

// Test locale manager
TestLocaleManager();

// Test Arabic locale support
demonstrateArabicLocaleSupport();

// Test multi-locale support
runMultiLocaleDemos();

// Test error handling
runErrorHandlingDemos();

// Test app initialization
runAppInitializationDemos();

// Test performance
performanceComparison();
```

## 📚 Learning Path

1. **Start with Basic Usage**
   - Run `TestLocaleManager()` to understand locale management
   - Try `AppScenarios()` for real-world examples

2. **Explore Advanced Features**
   - Run `demonstrateArabicLocaleSupport()` to see Arabic features
   - Run `runMultiLocaleDemos()` to test locale switching
   - Use `legacyDateMigration` for migration help

3. **Test Error Handling & Initialization**
   - Run `runErrorHandlingDemos()` to understand error handling
   - Run `runAppInitializationDemos()` to test app configuration

4. **Apply to Your App**
   - Use the examples as templates for your components
   - Customize the scenarios for your use cases

## 🎯 Best Practices

### **1. Use App Locale by Default**

```javascript
// Use app locale (omit locale parameter)
formatDateLocalized(date);
getRelativeTimeLocalized(date);
```

### **2. Override Only When Needed**

```javascript
// Force specific locale only when necessary
formatDateLocalized(date, {locale: 'ar'}); // Force Arabic
formatDateLocalized(date, {locale: 'en'}); // Force English
```

### **3. Test Locale Switching**

```javascript
// Test locale changes
import {switchLocale} from 'date-core/demos';
switchLocale('ar');
```

## 🔧 Customization

### **Extend App Scenarios**

```javascript
// Add to AppScenarios object
AppScenarios.newScenario = data => ({
  // Your custom formatting logic
});
```

## 📄 License

This demos package is part of the date-core project.
