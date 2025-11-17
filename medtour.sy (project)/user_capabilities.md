# User Capabilities Guide

This document summarizes what an authenticated traveler (customer) can see and do inside the **MEDTOUR.SY** Flutter app, including how they interact with their orders.

## 1. Role Scope

- Users browse public content (centers, hotels, services, rooms) and can submit medical-tourism requests from any of those entry points.
- Once logged in, they track and manage their requests via shared `features/Orders` screens. Permissions are enforced via `AuthCubit` role data—non-admin users see a read-only experience except for cancellations.

## 2. Core User Journeys

| Journey                 | Location                                           | Highlights                                                                                                                         |
| ----------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Explore destinations    | `features/PUBLIC_ROUTES/presentation/views`        | Country, city, region, amenity, hotel, center, service, equipment, doctor, offer, event, and room browsers with localized strings. |
| Submit request          | `UserOrderRepository.storeOrder()` (various forms) | Each form collects contact info, travel dates, medical treatment goals, and accommodation preferences.                             |
| Track requests          | `UnifiedOrdersListView`                            | Shows every submitted order with live status chips and scope icons.                                                                |
| Inspect request         | `UnifiedOrderDetailsView`                          | Presents detailed cards for medical info, accommodation, notes, and quick links back to referenced facilities.                     |
| Manage profile/settings | `features/SETTINGS` + `features/USER`              | Theme/language toggles, logout via `AuthCubit.logout()`.                                                                           |

## 3. Orders Experience (User View)

### List Page

- Widget: `UnifiedOrdersListView` (`lib/features/Orders/presentation/views/orders_list_view.dart`).
- State: `OrdersListCubit` loads data through `UserOrderRepository.getOrders()` (supports search by code and pull-to-refresh).
- UX extras: Shimmer placeholders, localized empty/error states, animated cards showing status and key logistics.

### Detail Page

- Widget: `UnifiedOrderDetailsView` (`orders_details_view.dart`).
- Sections: order info, contact info, medical info, accommodation details, notes, and navigation links to associated center/hotel/service/equipment pages so the user can revisit context.
- Data: `OrderDetailsCubit.fetchOrderById(id)` handles loading and error messaging.

### User Actions on Orders

| Action                       | Implementation                                                                                                                      | Notes |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Cancel pending request       | `CancelOrderCubit.cancelOrder(id)` → `PATCH /orders/{id}/status` (`canceled`). UI guarded so only allowed statuses show the button. |
| Refresh order data           | Pull down on list or tap retry on error states; cubits re-fetch from API.                                                           |
| Navigate to related entities | `_buildNavigationItems` pushes to `CenterDetailsView`, `HotelDetailsView`, `RoomsByTypeView`, etc., using `navigatorKey`.           |
| Monitor timeline             | Status text, submitted/updated timestamps, and response markers appear inside the info cards.                                       |

For a deeper dive into the shared UI, see `docs/orders_user.md`.

## 4. Portfolio Talking Points

- Emphasize the **“unified”** UI that adapts based on role—showing thoughtful component reuse.
- Mention responsive list/detail layouts, hero header animations, and multi-language support (`AppLocalizations`) to highlight product polish.
- Showcase cancellation flow with snackbar feedback to illustrate real-world lifecycle handling.
- Point out that all networking goes through `UserOrderRepository` → `DioClient`, benefiting from JWT refresh logic for seamless sessions.

Use these notes to craft case studies or demo scripts that highlight both UX and engineering depth of the user journey.
