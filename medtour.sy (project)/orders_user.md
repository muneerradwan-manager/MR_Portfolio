# User Orders Experience

Use this document to describe how end-users browse, inspect, and manage their medical tourism requests inside the app.

## 1. Journey Overview

1. **Discovery** – users submit requests from public flows (center/hotel/service detail screens). The request payload is persisted via `UserOrderRepository.storeOrder()`.
2. **Tracking** – once logged in, users land on `UnifiedOrdersListView`, which surfaces every request with real-time status, timestamps, and scope badges.
3. **Inspection** – tapping an item opens `UnifiedOrderDetailsView`, showing all medical, hospitality, and contact details in a modern card layout.
4. **Self-service** – users can cancel pending requests directly from the details screen; other transitions are restricted to admins.

## 2. Orders List UX

- **Widget**: `UnifiedOrdersListView` (`lib/features/Orders/presentation/views/orders_list_view.dart`).
- **State Management**: `OrdersListCubit` emits `Loading → Loaded/Error` as it calls `UserOrderRepository.getOrders()`.
- **Capabilities**:
  - Pull-to-refresh (re-fetches from API).
  - Server-side search by order code.
  - Shimmer placeholders and smart empty/error states from `GenericListPage`.
- **Card content**: order code, requester name, colored status pill, scope icon, medical center/hotel names, stay dates, and humanized “submitted Xh ago” timestamp.

## 3. Order Details UX

- **Widget**: `UnifiedOrderDetailsView` (`orders_details_view.dart`).
- **Data Fetch**: `OrderDetailsCubit.fetchOrderById(id)` consumes `GET /orders/{id}`.
- **Section breakdown**:
  - `order_information`: scope, linked medical center/hotel, status timeline.
  - `contact_information`: full name, phone, email, preferred channel.
  - `medical_information`: treatment goal, patient details, whether they consulted a doctor before.
  - `accommodation_details`: check-in/out dates, rooms, adults/kids, associated room type.
  - `notes`: extra context the traveler supplied.
  - `view_details`: quick deep links to items such as center, service, equipment, or hotel pages in `PUBLIC_ROUTES`.
- **Animations**: hero banner with gradient overlay, staggered card reveals, and iconography to keep the experience portfolio-friendly.

## 4. Managing a Request

| Scenario               | Implementation                                                                                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cancel pending request | `CancelOrderCubit` calls `UserOrderRepository.cancelOrder(id)` (internally `PATCH /orders/{id}/status` → `canceled`). Snackbar feedback + data refresh                   |
| Read-only updates      | Users can’t edit data, but the view listens to `OrderDetailsCubit` reloads triggered after any mutation so the screen stays current                                      |
| View related assets    | `_buildNavigationItems` uses `navigatorKey` to push into detail pages (e.g., `CenterDetailsView`, `RoomsByTypeView`), letting portfolios showcase cross-feature cohesion |

## 5. Data Contract Reference

`OrderModel` (`lib/features/USER/data/models/request_model.dart`) is the single source of truth on the client. Key fields:

- `code`, `status`, `submittedAt`, `respondedAt`, `completedAt`, `canceledAt` – for timeline displays.
- `medicalTreatment`, `seenDoctorBefore`, `forWhom`, `patientAge`, `medicalCenter`, `medicalserviceId` – enable medical storytelling.
- `checkIn`, `checkOut`, `countOfRooms`, `countOfAdults`, `countOfChildren`, `hotelRelation` – support travel planning narratives.
- `additionalInfo`/`notes`, `origin`, `travelTimeline` – highlight personalization.

## 6. API Touchpoints

| Purpose      | Verb + Path                 | Notes                                                                                                               |
| ------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| List orders  | `GET /orders`               | Supports filters (`status`, `code`, `from`, `to`, `page`). Response parsed via `OrdersResponseModel` for pagination |
| Show order   | `GET /orders/{id}`          | Handles both wrapped `{ data: {...} }` or raw payloads                                                              |
| Cancel order | `PATCH /orders/{id}/status` | Body `{ "status": "canceled" }`; invoked through repository helper                                                  |

## 7. Portfolio Talking Points

- Reusable **“unified”** widgets that adapt behavior based on role—showcases maintainable UI architecture.
- Bloc-driven state keeps networking, error handling, and UI transitions deterministic.
- Rich information hierarchy with hero animations, iconography, and deep links demonstrates product thinking beyond plain CRUD.
- Tests/checklist: loading states, empty states, search accuracy, cancellation flow, cross-navigation to public detail views.

Highlighting these facets in your portfolio conveys both design sensibility and robust Flutter engineering.
