# MEDTOUR - Medical Tourism Platform

## Complete Project Documentation

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [User Entry Story](#user-entry-story)
3. [User Roles & Capabilities](#user-roles--capabilities)
   - [Admin](#1-admin)
   - [Center Owner](#2-center-owner)
   - [Hotel Owner](#3-hotel-owner)
   - [Doctor](#4-doctor)
   - [Customer](#5-customer)
4. [Application Flow](#application-flow)
5. [Technical Architecture](#technical-architecture)

---

## Project Overview

**MEDTOUR** is a comprehensive medical tourism platform that connects patients with medical centers, hotels, and healthcare services. The platform facilitates the entire medical tourism journey from booking medical services to accommodation and transportation.

The application supports **5 distinct user roles**, each with specific permissions and capabilities tailored to their responsibilities in the medical tourism ecosystem.

---

## User Entry Story

### First-Time Visitor Journey

1. **Landing Page**

   - New visitors are greeted by an attractive landing page showcasing:
     - Hero section with platform introduction
     - Services overview
     - How it works section
     - Platform features
     - Testimonials
     - Contact information
     - Footer with additional links
   - Visitors can click **"Get Started"** button to begin their journey

2. **Registration Options**

   Users can register in two ways:

   **a) Register as User (Customer)**

   - Route: `/register-as-user`
   - Simple registration form requiring:
     - First name & Last name
     - Phone number
     - Email address
     - Password & Password confirmation
     - Profile photo (optional)
     - Terms and conditions agreement
   - Upon successful registration, users are automatically logged in and redirected to their home page
   - Default role: **Customer**

   **b) Register as Partner**

   - Route: `/register-as-partner`
   - Two-step registration process:

     **Step 1: Personal Information**

     - First name & Last name
     - Phone number (must start with +)
     - Email address
     - Password & Password confirmation

     **Step 2: Institution Details**

     - License number
     - Institution name
     - Institution type (Clinic or Hotel)
     - Location (Country, City, Region)
     - Terms and conditions agreement

   - After registration, partners must verify their email via OTP
   - Upon verification, they receive their role (Center Owner or Hotel Owner)
   - Partners need to complete their profile setup before accessing full features

3. **Login**

   - Route: `/login`
   - Existing users can log in with email and password
   - Upon successful login, users are redirected to their role-specific dashboard:
     - **Admin** → `/admin-home`
     - **Center Owner** → `/center-owner-home`
     - **Hotel Owner** → `/hotel-owner-home`
     - **Doctor** → `/doctor-home`
     - **Customer** → `/user-home`

4. **Returning Users**

   - If a user is already authenticated (session exists), they are automatically redirected to their role-specific home page
   - No need to log in again

5. **Password Reset**
   - Users can request password reset via email
   - Route: `/password-reset-email`
   - After receiving reset link, users can reset their password
   - Route: `/password-reset`

---

## User Roles & Capabilities

### 1. Admin

**Role Purpose:** Full system administration and management

**Entry Point:** `/admin-home`

**Capabilities:**

#### **Dashboard**

- View comprehensive platform statistics
- Monitor system activity
- Access overview of all platform metrics

#### **User Management** ✅

- **View** all registered users
- **Create** new users manually
- **Edit** user information (name, email, phone, status)
- **Delete** users (soft delete)
- **View** deleted users
- **Restore** deleted users
- **Assign** roles to users
- **Remove** roles from users
- **Update** user status (active/inactive)
- **View** user details including roles and permissions

#### **Role Management** ✅

- **View** all system roles
- **Create** new roles
- **Edit** existing roles
- **Delete** roles
- **View** role details
- **Assign** permissions to roles
- **Revoke** permissions from roles
- Manage role hierarchies

#### **Permission Management** ✅

- **View** all system permissions
- **Create** new permissions
- **Edit** existing permissions
- **Delete** permissions
- **View** permission details
- Configure permission tags and descriptions

#### **Facility Management** ✅

- **View** all facilities in the system
- **Create** new facilities
- **Edit** facility information
- **Delete** facilities
- **View** facility details

#### **Order/Request Management** ✅

- **View** all orders across the platform
- **View** order details
- **Update** order status
- **Mark** orders as emailed
- **Complete** orders
- Monitor order flow and analytics

#### **Content Management**

- **View** all medical centers
- **View** all hotels
- Monitor platform content

#### **Settings**

- Access application settings
- Configure system preferences

---

### 2. Center Owner

**Role Purpose:** Manage medical centers, doctors, services, and facilities

**Entry Point:** `/center-owner-home`

**Initial Setup:**

- Must create a center profile before accessing full features
- Profile creation requires:
  - Center information (name, description, address)
  - Contact details
  - Working hours
  - Location details
  - Photos
  - License verification

**Capabilities:**

#### **Center Profile Management** ✅

- **View** center profile
- **Create** center profile (if not exists)
- **Edit** center information
- **Add** photos to center gallery
- **Delete** photos
- **Update** contact information
- **Manage** working hours
- **View** center statistics and reviews

#### **Doctor Management** ✅

- **View** all doctors in the center
- **Create** new doctor profiles
- **Edit** doctor information
- **Delete** doctors
- **View** doctor details
- Assign doctors to departments
- Manage doctor specializations

#### **Department Management** ✅

- **View** all departments in the center
- **Create** new departments
- **Edit** department information
- **Delete** departments
- **View** department details
- Organize departments hierarchically

#### **Medical Services Management** ✅

- **View** all medical services offered
- **Create** new services
- **Edit** service information (name, description, price)
- **Delete** services
- **View** service details
- Link services to departments

#### **Equipment Management** ✅

- **View** all medical equipment
- **Create** new equipment entries
- **Edit** equipment information
- **Delete** equipment
- **View** equipment details
- Track equipment availability

#### **Event Management** ✅

- **View** all center events
- **Create** new events (conferences, workshops, etc.)
- **Edit** event information
- **Delete** events
- **View** event details
- Manage event schedules and locations

#### **Settings**

- Access personal settings
- Update account information

---

### 3. Hotel Owner

**Role Purpose:** Manage hotels, room types, and accommodations

**Entry Point:** `/hotel-owner-home`

**Initial Setup:**

- Must create a hotel profile before accessing full features
- Profile creation requires:
  - Hotel information (name, description, address)
  - Contact details
  - Location details (country, city, region)
  - Photos
  - License verification
  - Amenities selection

**Capabilities:**

#### **Hotel Profile Management** ✅

- **View** hotel profile
- **Create** hotel profile (if not exists)
- **Edit** hotel information
- **Add** photos to hotel gallery
- **Delete** photos
- **Update** contact information
- **Manage** hotel amenities
- **View** hotel statistics and reviews

#### **Room Type Management** ✅

- **View** all room types
- **Create** new room types (Standard, Deluxe, Suite, etc.)
- **Edit** room type information (name, description, capacity, amenities)
- **Delete** room types
- **Update** room type pricing

#### **Room Management** ✅

- **View** all rooms in the hotel
- **Create** new room entries
- **Edit** room information (number, status, features)
- **Delete** rooms
- **View** room details
- Link rooms to room types
- Manage room availability

#### **Hotel Amenities Management**

- **View** all available amenities
- Manage amenities for the hotel
- Update amenity configurations

#### **Event Management**

- **View** hotel events
- **Create** hotel-related events
- Manage event schedules

#### **Settings**

- Access personal settings
- Update account information

---

### 4. Doctor

**Role Purpose:** Manage personal profile and work schedules

**Entry Point:** `/doctor-home`

**Note:** Doctors are typically created by Center Owners, but can manage their own profiles and schedules.

**Capabilities:**

#### **Profile Management** ✅

- **View** personal doctor profile
- **Edit** profile information
- **Update** specialization details
- **Manage** professional information
- **View** assigned center/department
- Update contact information

#### **Schedule Management** ✅

- **View** work schedules
- **Create** new schedule entries
- **Edit** existing schedules
- **Delete** schedules
- **Manage** availability
- Set working hours for different days
- Manage appointment slots

#### **Settings**

- Access personal settings
- Update account preferences

---

### 5. Customer

**Role Purpose:** Browse services, book accommodations, and create service requests

**Entry Point:** `/user-home`

**Capabilities:**

#### **Service Browsing**

- **View** all medical centers
- **View** center details (services, doctors, departments, reviews)
- **View** all hotels
- **View** hotel details (rooms, amenities, reviews)
- **View** doctor profiles (public)
- **View** service details
- **View** department details
- **View** equipment information
- **View** room details

#### **Order/Request Management** ✅

- **View** all personal orders/requests
- **View** order details
- **Create** new service requests (medical services)
- **Create** room booking requests
- **Create** equipment rental requests
- Track order status
- View order history

#### **Booking Capabilities**

- Book medical services
- Book hotel rooms
- Request equipment rentals
- Manage booking preferences

#### **Future Features** (Placeholders)

- **Flights** - Browse and book flights
- **Transportation** - Arrange transportation services

#### **Settings**

- Access personal settings
- Update profile information
- Manage preferences

---

## Application Flow

### Authentication Flow

```
Landing Page
    ↓
[New User?]
    ├─ Yes → Register (User/Partner) → Email Verification (if partner) → Login → Role-Based Dashboard
    └─ No → Login → Role-Based Dashboard

[Already Authenticated?]
    ├─ Yes → Direct to Role-Based Dashboard
    └─ No → Landing Page
```

### Role-Based Routing

After authentication, users are automatically routed based on their primary role:

| Role         | Route                | Dashboard              |
| ------------ | -------------------- | ---------------------- |
| Admin        | `/admin-home`        | Admin Dashboard        |
| Center Owner | `/center-owner-home` | Center Owner Dashboard |
| Hotel Owner  | `/hotel-owner-home`  | Hotel Owner Dashboard  |
| Doctor       | `/doctor-home`       | Doctor Dashboard       |
| Customer     | `/user-home`         | User Dashboard         |

### Navigation Structure

Each role has a dedicated navigation drawer with role-specific menu items:

- **Admin**: Dashboard, Requests, Medical Centers, Hotels, Facilities, Permissions, Roles, Users, Deleted Users, Settings
- **Center Owner**: Center Profile, Doctors, Departments, Medical Services, Equipment, Events, Settings
- **Hotel Owner**: Hotel Profile, Room Types, Rooms, Settings
- **Doctor**: My Profile, Work Schedules, Settings
- **Customer**: My Requests, Medical Centers, Hotels, Flights, Transportation, Settings

---

## Technical Architecture

### Technology Stack

- **Framework**: Flutter (Cross-platform)
- **State Management**: BLoC/Cubit pattern
- **Architecture**: Feature-based modular architecture
- **Networking**: Dio HTTP Client
- **Local Storage**: SharedPreferences
- **Dependency Injection**: Service Locator pattern

### Project Structure

```
lib/
├── main.dart                    # Application entry point
├── app.dart                     # Main app widget
├── core/                        # Core functionality
│   ├── constant/               # Constants (routes, URLs, colors)
│   ├── di/                     # Dependency injection
│   ├── network/                # Network configuration
│   ├── routes/                 # Route generation
│   ├── services/               # Core services
│   ├── theme/                  # Theme configuration
│   ├── widgets/                # Reusable widgets
│   └── views/                  # Common views
├── features/                    # Feature modules
│   ├── ADMIN/                  # Admin feature
│   ├── AUTH/                   # Authentication feature
│   ├── CENTER_OWNER/           # Center owner feature
│   ├── DOCTOR/                 # Doctor feature
│   ├── HOTEL_OWNER/            # Hotel owner feature
│   ├── USER/                   # Customer feature
│   ├── PUBLIC_ROUTES/          # Public browsing features
│   ├── Orders/                 # Order management
│   ├── SETTINGS/               # Settings feature
│   └── LANDING/                # Landing page
```

### Key Features

1. **Multi-language Support**: Supports 11 languages (EN, AR, TR, RU, ZH, FA, HI, UR, JA, KO, TH, DE)
2. **Theme Support**: Light and dark themes
3. **Role-Based Access Control**: Permission-based feature access
4. **Image Upload**: Profile photos and gallery management
5. **Responsive Design**: Works on mobile, tablet, and desktop
6. **Offline Capabilities**: Local storage for cached data

---

## Permission System

The platform uses a sophisticated permission-based access control system:

- **Roles** contain multiple **Permissions**
- **Users** can have multiple **Roles**
- **Permissions** are identified by **tags**
- Features check for specific permission tags before allowing access
- Admins can create, edit, and assign roles and permissions

### Example Permission Tags

- `users.view`
- `users.create`
- `users.edit`
- `users.delete`
- `roles.view`
- `roles.create`
- `roles.edit`
- `roles.delete`
- `permissions.view`
- `permissions.create`
- `permissions.edit`
- `permissions.delete`
- `facilities.view`
- `facilities.create`
- `facilities.edit`
- `facilities.delete`

---

## Summary

**MEDTOUR** is a comprehensive medical tourism platform that connects all stakeholders in the medical tourism ecosystem:

- **Customers** can browse and book medical services and accommodations
- **Center Owners** can manage their medical facilities, doctors, and services
- **Hotel Owners** can manage their hotels and rooms
- **Doctors** can manage their profiles and schedules
- **Admins** have full control over the platform, users, and content

Each role has specific capabilities and responsibilities, ensuring a well-organized and efficient medical tourism marketplace.

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Platform**: Flutter (Mobile, Web, Desktop)
