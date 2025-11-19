n# Gym Management System

A comprehensive Flutter-based gym management application designed to streamline operations for gym administrators. This application provides a complete solution for managing invoices, expenses, products, users, and tracking financial metrics through an intuitive and modern user interface.

## 📱 Project Overview

The Gym Management System is a cross-platform mobile application built with Flutter that enables gym administrators to efficiently manage their business operations. The app features a robust architecture with clean code principles, state management, and seamless API integration.

## ✨ Key Features

### 1. **Dashboard & Analytics**
- Real-time financial summary with income, expenses, store statistics, and user counts
- Interactive line charts for income visualization using FL Chart
- Monthly income trends with toggle between actual and average views
- Color-coded metrics for quick insights

### 2. **Invoice Management**
- Create, edit, and delete invoices
- Search invoices by client name or invoice number
- Filter invoices by date range
- View detailed invoice information including:
  - Client details (name, phone)
  - Invoice items with quantities and prices
  - Payment tracking
  - Notes and timestamps
- Invoice number tracking

### 3. **Expense Tracking**
- Add, edit, and manage expenses
- Categorize expenses for better organization
- Track expense amounts and dates
- Search and filter expense records

### 4. **Store/Product Management**
- Complete product catalog management
- Add, edit, and delete products
- Product details including:
  - Product name and description
  - Price and quantity tracking
  - Product images with image picker
  - Status management (active/inactive)
- Inventory tracking

### 5. **User Management**
- Client/user registration and management
- User profile management
- Search and filter users
- User type-based access control

### 6. **Authentication & Security**
- Secure login system with token-based authentication
- User session management
- Role-based access control
- Secure token storage using SharedPreferences

### 7. **User Interface Features**
- Modern, responsive design
- Custom drawer navigation
- Search functionality across modules
- Pull-to-refresh for data updates
- Empty state handling
- Error state management
- No internet connection detection
- Loading states with progress indicators
- Custom form fields with validation
- Date picker integration

## 🛠️ Technology Stack

### Core Framework
- **Flutter SDK**: ^3.9.2
- **Dart**: Latest stable version

### State Management
- **GetX (get)**: ^4.7.2
  - Reactive state management
  - Dependency injection
  - Route management
  - Snackbar and dialog utilities

### Networking & API
- **Dio**: ^5.9.0
  - HTTP client for API calls
  - Request/response interceptors
  - Error handling
  - Timeout configuration
- **Pretty Dio Logger**: ^1.4.0
  - Request/response logging for debugging
- **Internet Connection Checker**: ^3.0.1
  - Network connectivity monitoring

### Data Persistence
- **SharedPreferences**: ^2.5.3
  - Local data storage
  - Token and user data persistence

### UI Components & Design
- **Flutter SVG (flutter_svg)**: ^2.2.2
  - SVG image rendering
- **Iconsax**: ^0.0.8
  - Modern icon library
- **FL Chart (fl_chart)**: ^1.1.1
  - Beautiful charts and graphs
  - Line charts for income visualization
- **Cached Network Image**: ^3.4.1
  - Efficient image loading and caching
- **Image Picker**: ^1.2.1
  - Camera and gallery image selection
- **Permission Handler**: ^12.0.1
  - Runtime permission management

### Functional Programming
- **Dartz**: ^0.10.1
  - Functional programming utilities
  - Either type for error handling
  - Option type for nullable values

### Utilities
- **Equatable**: ^2.0.7
  - Value equality comparison
  - Reduces boilerplate code
- **Device Preview**: ^1.3.1
  - Multi-device preview during development
  - Responsive design testing

### Development Tools
- **Flutter Lints**: ^6.0.0
  - Code quality and style enforcement

### Custom Fonts
- **Cairo Font Family**: Multiple weights (ExtraLight, Light, Regular, Medium, SemiBold, Bold, ExtraBold)
- **Inter Font Family**: Complete family with 18pt, 24pt, and 28pt variants in multiple weights and styles

## 🏗️ Architecture

The application follows a clean architecture pattern with clear separation of concerns:

### Architecture Layers

1. **Views Layer** (`lib/views/`)
   - UI components and screens
   - Admin views for different modules
   - Authentication views
   - Splash screen

2. **Controllers Layer** (`lib/controllers/`)
   - Business logic management
   - State management using GetX
   - Module-specific controllers:
     - Authentication
     - Home/Dashboard
     - Invoices
     - Expenses
     - Store/Products
     - Users

3. **Repositories Layer** (`lib/repositories/`)
   - Data access abstraction
   - API communication
   - Local storage management
   - Business logic encapsulation

4. **Services Layer** (`lib/services/`)
   - API service with Dio client
   - Network request handling
   - Error handling and transformation

5. **Models Layer** (`lib/models/`)
   - Data models
   - JSON serialization/deserialization
   - Business entities

6. **Core Layer** (`lib/core/`)
   - Constants (colors, images)
   - Enums
   - Error handling
   - Extensions
   - Theme configuration
   - Utility functions

7. **Widgets Layer** (`lib/widgets/`)
   - Reusable UI components
   - Custom form fields
   - Cards and containers
   - Module-specific widgets

## 📁 Project Structure

```
lib/
├── controllers/          # State management controllers
│   ├── auth_controller.dart
│   ├── expenses/
│   ├── home/
│   ├── invoices/
│   ├── store/
│   ├── users/
│   └── user_type_controller.dart
├── core/                 # Core utilities and constants
│   ├── constants/
│   ├── enums/
│   ├── errors/
│   ├── extensions/
│   ├── functions/
│   └── theme/
├── models/               # Data models
│   ├── category_model.dart
│   ├── client_model.dart
│   ├── expense_model.dart
│   ├── invoice_model.dart
│   ├── product_model.dart
│   └── profile_model.dart
├── repositories/         # Data access layer
│   ├── auth_repository.dart
│   ├── expenses_repository.dart
│   ├── home_repository.dart
│   ├── invoices_repository.dart
│   ├── storage_repository.dart
│   ├── store_repository.dart
│   └── users_repository.dart
├── services/            # API and external services
│   └── api_service.dart
├── views/               # UI screens
│   ├── admin/
│   │   ├── expenses/
│   │   ├── home/
│   │   ├── invoices/
│   │   ├── store/
│   │   └── users/
│   ├── auth/
│   └── splash/
├── widgets/             # Reusable widgets
│   ├── expenses/
│   ├── invoices/
│   ├── store/
│   └── users/
└── main.dart            # Application entry point
```

## 🔌 API Integration

The application integrates with a RESTful API backend:

- **Base URL**: `https://gym.smartbeta.dev/api`
- **Authentication**: Bearer token-based authentication
- **Request Methods**: GET, POST, DELETE
- **Error Handling**: Comprehensive error handling with custom failure types
- **Request Interceptors**: Automatic token injection
- **Response Logging**: Detailed request/response logging in debug mode

### API Features
- Automatic token management
- Request/response interceptors
- Timeout handling (15 seconds)
- Error transformation
- Pretty logging for debugging

## 🎨 UI/UX Features

### Design System
- **Color Scheme**:
  - Primary Color: `#696CFF`
  - Scaffold Background: `#F5F4F9`
  - Text Color: `#56577A`
  - Fill Color: `#E7E7FF`
  
- **Typography**: Custom text styles with responsive sizing
- **Spacing**: Responsive padding and margins
- **Icons**: SVG icons and Iconsax icon library

### Responsive Design
- Adaptive layouts for different screen sizes
- Responsive text sizing
- Flexible padding and margins
- Multi-device support (Android, iOS, Web, Windows, macOS, Linux)

### User Experience
- Pull-to-refresh functionality
- Search and filter capabilities
- Loading indicators
- Empty state messages
- Error state handling
- No internet connection detection
- Smooth navigation transitions
- Custom drawer navigation
- Modal bottom sheets for forms

## 🔐 Security Features

- Token-based authentication
- Secure token storage
- Role-based access control
- User type validation
- Secure API communication

## 📊 Data Models

### Invoice Model
- Invoice number, client information
- Invoice items with quantities and prices
- Payment tracking
- Timestamps and notes

### Product Model
- Product details (name, description, price)
- Inventory management (quantity)
- Image support
- Status tracking

### Expense Model
- Expense categorization
- Amount and date tracking
- Notes and descriptions

### User/Client Model
- User profile information
- Contact details
- User type classification

## 🚀 Getting Started

### Prerequisites
- Flutter SDK (^3.9.2 or higher)
- Dart SDK
- Android Studio / VS Code with Flutter extensions
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gym_app
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Run the application**
   ```bash
   flutter run
   ```

### Build for Production

**Android:**
```bash
flutter build apk --release
```

**iOS:**
```bash
flutter build ios --release
```

**Web:**
```bash
flutter build web
```

**Windows:**
```bash
flutter build windows
```

## 🧪 Development Features

- **Device Preview**: Enabled in debug mode for web platform
- **Debug Logging**: Pretty Dio logger for API requests/responses
- **Code Quality**: Flutter lints for code standards
- **Hot Reload**: Fast development iteration

## 📱 Platform Support

- ✅ Android
- ✅ iOS
- ✅ Web
- ✅ Windows
- ✅ macOS
- ✅ Linux

## 🎯 Key Functionalities

1. **Dashboard**
   - Financial overview
   - Income charts
   - Quick statistics

2. **Invoice Management**
   - CRUD operations
   - Search and filter
   - Detailed view

3. **Expense Management**
   - Track expenses
   - Categorize expenses
   - Search functionality

4. **Product Management**
   - Inventory management
   - Product catalog
   - Image upload

5. **User Management**
   - Client management
   - User profiles
   - Access control

## 🔄 State Management

The application uses **GetX** for state management, providing:
- Reactive programming
- Dependency injection
- Route management
- Snackbar and dialog utilities
- Memory-efficient state management

## 📦 Dependencies Summary

### Production Dependencies
- `get`: State management and dependency injection
- `dio`: HTTP client
- `shared_preferences`: Local storage
- `flutter_svg`: SVG rendering
- `dartz`: Functional programming
- `fl_chart`: Chart library
- `cached_network_image`: Image caching
- `image_picker`: Image selection
- `permission_handler`: Permissions
- `iconsax`: Icon library
- `equatable`: Value equality
- `internet_connection_checker`: Network monitoring
- `pretty_dio_logger`: API logging
- `device_preview`: Development preview

### Development Dependencies
- `flutter_test`: Testing framework
- `flutter_lints`: Code quality

## 🎓 Learning Outcomes

This project demonstrates:
- Clean architecture implementation
- State management with GetX
- RESTful API integration
- Error handling and validation
- Responsive UI design
- Image handling and caching
- Local data persistence
- Authentication and authorization
- Chart visualization
- Form handling and validation
- Search and filter functionality

## 📝 Notes

- The application uses a custom theme with responsive design
- All API calls are wrapped with error handling
- Network connectivity is checked before API calls
- Token-based authentication is implemented
- Role-based access control for different user types
- Comprehensive error messages and user feedback

## 👨‍💻 Development

Built with Flutter and following best practices for:
- Code organization
- State management
- API integration
- Error handling
- User experience
- Performance optimization

---

**Version**: 0.1.0  
**Last Updated**: 2024  
**License**: Private Project
