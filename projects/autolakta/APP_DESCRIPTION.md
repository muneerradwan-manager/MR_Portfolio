## AutoLakta Application Overview

### Executive Summary
AutoLakta is a Flutter-based automotive marketplace that connects car buyers, sellers, business owners, and platform administrators inside a single mobile experience. It blends e-commerce patterns (catalog browsing, wishlists, advanced filters) with role-specific tooling (seller storefronts, advertiser onboarding, admin data stewardship) while supporting multilingual content, theming, and responsive layouts out of the box.

### Target Personas & Value
- **Car shoppers** discover featured vehicles, filter inventory by dozens of attributes, save favorites, and request more information.
- **Business sellers & advertisers** manage their public profile, publish listings, highlight promotions, and monitor performance.
- **Platform administrators** curate the catalog, approve brands/models/fuels/transmissions, and oversee ads or advertiser accounts.

### Functional Highlights
1. **Onboarding & Authentication**
   - Splash and onboarding flows introduce brand story and guide first-time setup.
   - Email/phone authentication with JWT session handling, GetStorage persistence, and device-aware UI states.
   - Post-verification messaging and reusable UI assets for OAuth buttons (Google/Facebook).

2. **Home Experience**
   - Dynamic hero section with search entry points, business highlights, and promotional sliders sourced from network data.
   - Featured car grid backed by observable controllers: handles shimmer loading, error states, and graceful empty UX (`HomeController`, `VerticalProductShimmer`, custom widgets).

3. **Advanced Search & Filters**
   - Buyers can stack brand, model, fuel type, transmission, category, and price filters; each filter renders as removable chips.
   - Real-time result counts, manual refresh, and grid rendering of filtered cars with reusable card components.
   - Search state survives refreshes thanks to GetX observables and controller-managed input fields.

4. **Storefront & Brand Exploration**
   - Tabbed catalog view segmented by vehicle categories (cars, motorcycles, trucks, vans, heavy machinery).
   - Featured brand carousel with quick access to detailed brand pages and inventory filtered by brand.
   - Shared components (custom tab bar, rounded imagery, global search container) ensure consistent visuals across light/dark themes.

5. **Car Detail, Wishlist, & Promotions**
   - Dedicated screens for viewing full car specs, reading expanded descriptions, and rating or reviewing vehicles.
   - Wishlist management to bookmark vehicles for later, plus promo banners managed centrally for marketing pushes.

6. **Seller & Business Profile Toolkit**
   - Business profile module for editing store information, media, contact details, and geolocation metadata.
   - Seller dashboards handle ad creation/editing, stock management, pricing tools, and media uploads (image picker + cropper utilities).

7. **Administration Console**
   - Nested admin screens for ads, advertisers, brands, models, fuel types, transmissions, and categorized data.
   - CRUD workflows with detailed cards, verification badges, and status management to keep catalog data accurate.

8. **Profile & Settings**
   - Profile area consolidates personal data, saved searches, notifications, and app preferences.
   - Settings expose theme toggles (light/dark), locale switches, privacy/help links, and logout/session controls.

9. **Supportive Utilities**
   - Global network monitor warns users about offline states.
   - Full-screen loaders, snackbars, shimmer placeholders, and custom grid/list layouts standardize UX.
   - Local storage helpers encapsulate secure persistence for tokens, preferences, and cached responses.

### Assets & Localization
- Rich asset pack (logos, onboarding art, brand icons, Lottie animations, payment logos, success states) organized under `assets/images`, `assets/svg`, and `assets/lotties`.
- Custom Cairo font family (200–900 weights) delivers consistent bilingual typography.
- Internationalization handled through GetX `translations`, enabling rapid addition of new locales and dynamic runtime switching.

### Technology Stack (from `pubspec.yaml`)
| Category | Package | Purpose |
| --- | --- | --- |
| Framework | `flutter`, `cupertino_icons` | Cross-platform UI toolkit with iOS-styled widgets. |
| State & Navigation | `get` | Dependency injection, routing, and reactive controllers. |
| Networking & Data | `dio`, `dartz`, `jwt_decoder`, `cached_network_image` | REST client with interceptors, functional utilities for results, JWT parsing, and optimized image caching. |
| Storage & Device | `get_storage`, `device_info_plus`, `permission_handler`, `device_preview` | Local key-value persistence, device fingerprints, runtime permissions, and preview-on-desktop tooling. |
| Localization & Formatting | `intl` | Number/date localization and locale-aware formatting. |
| UI & Animation | `lottie`, `carousel_slider`, `smooth_page_indicator`, `animated_flip_counter`, `visibility_detector`, `flutter_rating_bar`, `dotted_border`, `flutter_svg`, `readmore`, `awesome_snackbar_content`, `shimmer` | Rich motion design, carousels, indicators, counters, lazy rendering, rating widgets, SVG rendering, expandable text, stylized snackbars, and skeleton loaders. |
| Media Capture & Editing | `image_picker`, `image_cropper` | Capture/select car photos and crop before upload. |
| UX Utilities | `url_launcher`, `iconsax`, `flutter_colorpicker`, `connectivity_plus` | Deep linking, icon packs, color selection, and network status detection. |
| Monitoring & Logging | `logger` | Structured logging and developer-time diagnostics. |
| Tooling | `flutter_launcher_icons` | Automated generation of platform launcher icons. |
| Dev/Test | `flutter_test`, `flutter_lints` | Unit/widget testing and lint rules aligned with Flutter 3.9+. |

### Architectural Notes
- **Feature-first structure:** Each domain (auth, cars, search, store, admin, seller, wishlist, settings) owns its controllers, screens, and widgets, enabling modular scaling.
- **Reusable core components:** `core/common/widgets` houses shared UI primitives (app bars, grids, loaders, buttons) to maintain consistency.
- **Bindings & routing:** `GeneralBindings` wires repositories/controllers at startup, while `routes.dart` centralizes navigation definitions aligned with GetX.
- **Theming & localization controllers:** `ThemeController` and `LanguageController` drive runtime changes across the entire app tree without rebuild penalties.
- **Networking abstraction:** `dio_client`, `api_service`, and repository layers isolate API calls from UI, simplifying maintenance and testability.

### Platform Support & Distribution Readiness
- Targets Flutter SDK ^3.9.2 with Material 3 theming, ensuring compatibility across Android, iOS, Web, and desktop (via DevicePreview for responsive QA).
- Uses `flutter_launcher_icons` for branded app icons and includes platform manifests/assets (web manifest, icons) for multi-platform builds.

### Future-Friendly Enhancements
- Extend analytics hooks to track conversion funnels (search → detail → lead).
- Plug in payment gateways (PayPal/Stripe assets already bundled) for in-app reservation deposits.
- Expand localization files to cover more markets and auto-detect locale via `Get.deviceLocale`.
- Add automated tests around controllers and repositories to leverage the existing `flutter_test` scaffolding.

