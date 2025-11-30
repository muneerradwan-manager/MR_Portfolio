# Let’s Go Gym

> Multilingual back-office suite for gyms — real-time insights, billing, inventory, and team management powered by Flutter & GetX  
> **Targets**: Android · iOS · Web · Windows · macOS · Linux

Let’s Go Gym centralizes everything gym operators track each day: invoices, expenses, stock, clients, staff, and KPIs. The app follows clean architecture, leverages GetX for state/routing/DI, Dio for resilient networking, and a full localization stack so every screen reads naturally in eight languages (including RTL).

---

## ⚡ TL;DR

- **Realtime control center** – income vs expense KPIs, FL Chart graphs, trend toggles, color-coded cards.
- **Full CRUD modules** – invoices, expenses, store catalog, users/clients, each with search + filters + detail views.
- **Enterprise security** – bearer tokens, secure storage, session guards, role-based navigation, offline detection.
- **Anywhere, any language** – shipping with EN / AR / FA / JA / KO / RU / TH / TR and RTL-aware UI primitives.

---

## 📱 Feature Overview

| Module | Highlights |
| --- | --- |
| **Dashboard & Analytics** | สรุปรายได้/ค่าใช้จ่ายเรียลไทม์, กราฟเส้น FL Chart, สลับ Monthly actual vs average, การ์ดสีบอกสถานะ |
| **Invoice Engine** | CRUD ครบ, ค้นหาด้วยลูกค้าหรือเลขบิล, ตัวกรองช่วงวันที่, ติดตามการชำระ, รายละเอียดสินค้า + client + หมายเหตุ |
| **Expense Tracking** | เพิ่ม/แก้/ลบค่าใช้จ่าย, จัดหมวด, ค้นหาและกรองตามวันที่หรือประเภท |
| **Store & Inventory** | คลังสินค้าแบบมีราคา/สต็อก, อัปโหลดรูปด้วย Image Picker, สถานะ active/inactive, inventory monitor |
| **User Management** | ลงทะเบียนลูกค้า, โปรไฟล์, ค้นหา/กรอง, สิทธิ์ตามบทบาท |
| **Authentication & Security** | Token-based login, secure storage (SharedPreferences), session guard, role-aware routing |
| **UX Enhancements** | Responsive UI, custom drawer, pull-to-refresh, empty/error states, no-connection banners, form validation, date picker |

---

## 🛠️ Tech Stack

| Layer | Stack |
| --- | --- |
| Framework | Flutter SDK ^3.9.2, Dart latest |
| State Management | GetX (DI, routing, reactivity, snackbar/dialog utilities) |
| Networking | Dio + Pretty Dio Logger, interceptors, timeout + error handling |
| Persistence | SharedPreferences (tokens & profile cache) |
| UI / Charts | FL Chart, Flutter SVG, Iconsax, Cached Network Image, Image Picker, Permission Handler |
| FP & Utils | Dartz (Either/Option), Equatable |
| Tooling | Device Preview, Flutter Lints |
| Fonts | Cairo + Inter families for LTR/RTL typography |

---

## 🏗️ Clean Architecture Layout

`
lib/
├─ core/          # constants, theme, enums, errors, extensions, helpers
├─ models/        # invoice, expense, product, client, profile entities
├─ services/      # api_service.dart (Dio client, interceptors, logging)
├─ repositories/  # auth, home, invoices, expenses, store, users, storage
├─ controllers/   # GetX controllers per module (auth/home/invoices/etc.)
├─ views/         # admin dashboards, module screens, auth, splash
├─ widgets/       # reusable cards, tables, form fields, module widgets
└─ main.dart      # entry point + dependency injection + localization
`

The stack enforces separation of concerns: views trigger controllers, controllers coordinate repositories, repositories abstract services, and models keep data normalized.

---

## 🌍 Localization & Accessibility

- All copy resides in /src/i18n/locales with runtime language switching.
- **8 locales bundled:** **English, Arabic, Persian, Japanese, Korean, Russian, Thai, Turkish**.
- RTL languages leverage Cairo fonts, logical spacing (gap-*, 	ext-start), and direction-aware icons (
tl:rotate-180).
- Validation, empty states, offline banners, and error toasts are localized to keep UX consistent worldwide.

---

## 🔌 API & Data Contracts

- **Base URL:** https://gym.smartbeta.dev/api
- **Auth:** Bearer tokens auto-injected by Dio interceptors
- **Methods:** GET / POST / DELETE
- **Timeouts:** 15s with custom failure types
- **Logging:** Pretty Dio Logger (debug builds)

### Core Models
- **Invoices** – client info, line items, payments, timestamps, notes
- **Expenses** – category, amount, date, memo
- **Products** – price, quantity, description, media, status
- **Users/Clients** – profile data, contacts, user type (role-based access)

---

## 🚀 Getting Started

`ash
# 1) Clone
 git clone https://github.com/muneerradwan-manager/MR_Portfolio.git
 cd MR_Portfolio

# 2) Install Flutter deps
 flutter pub get

# 3) Run (เลือกดีไวซ์ของคุณ)
 flutter run
`

### Build commands

| Platform | Command |
| --- | --- |
| Android | lutter build apk --release |
| iOS | lutter build ios --release |
| Web | lutter build web |
| Windows | lutter build windows |

---

## 🧪 Dev Experience & Tooling

- **Device Preview** เปิดใช้ใน debug เพื่อเทสต์ responsive
- **Pretty Dio Logger** แสดง request/response พร้อม payload
- **Flutter Lints** คุมคุณภาพโค้ด
- **Hot Reload** ทำงานรวดเร็วระหว่างพัฒนา

---

## 🔐 Security Highlights

- Token-based auth + secure persistence
- Role-based routing & guarded actions
- Connectivity guard ก่อนยิง API
- สถานะ error/empty/offline แสดงผลชัดเจนทุกมอดูล

---

## 📬 Contact

| ช่องทาง | รายละเอียด |
| --- | --muneer.radwan.manager
| Email | firebase.projects.1997@gmail.com |
| Phone / WhatsApp | +963-947-446-326 |
| LinkedIn | [linkedin.com/in/muneer-radwan-3b7543352](https://www.linkedin.com/in/muneer-radwan-3b7543352) |

---

Crafted with ❤️ by **Muneer Radwan** — Flutter developer focused on multilingual, data-rich products like **Let’s Go Gym**.
