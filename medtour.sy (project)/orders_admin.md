# Admin Orders Workflow

This guide explains how the medical_tourism admin experience handles Orders (customer requests). Use it in your portfolio to highlight both UX and engineering decisions.

## 1. Overview

- **Screens**: `UnifiedOrdersListView` and `UnifiedOrderDetailsView` (single code path for admin + user; admin gains extra actions).
- **State**: Orders list/detail rely on `OrdersListCubit` and `OrderDetailsCubit`. Admin-specific mutations are handled by `UpdateOrderStatusCubit`, `CompleteOrderCubit`, and `MarkEmailedCubit`.
- **Data source**: REST endpoints under `AppUrls.orders`. All mutations are routed through `UserOrderRepository` to keep the networking layer centralized.
- **Role detection**: `AuthCubit` exposes `primaryRole`. The details view checks `primaryRole == 'admin'` to toggle privileged controls.

## 2. List Screen (Orders Backlog)

| Aspect         | Details                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Widget         | `UnifiedOrdersListView` (`lib/features/Orders/presentation/views/orders_list_view.dart`)                                         |
| Initial load   | `OrdersListCubit.fetchOrders()` triggers in `initState`                                                                          |
| Filters/search | search field debounces into `fetchOrders(code: value)`; server-side filtering keeps client light                                 |
| Visuals        | `_ModernOrderCard` animates each list item, shows order code, requester, scope icon, status chip, timestamps, medical/hotel info |
| Refresh        | Pull-to-refresh triggers `fetchOrders()` again                                                                                   |
| UX extras      | Shimmer placeholders via `ShimmerCardList` while loading                                                                         |

**Data flow**: `OrdersListCubit` calls `UserOrderRepository.getOrders()` which hits `GET /orders` with optional query params (`status`, `code`, `from`, `to`, `page`). The response is parsed into `OrdersResponseModel` → `OrderModel` list with pagination metadata.

## 3. Details Screen (Single Request)

| Aspect         | Details                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Widget         | `UnifiedOrderDetailsView` (`orders_details_view.dart`)                                                                                                           |
| Loading        | `OrderDetailsCubit.fetchOrderById(id)` on mount                                                                                                                  |
| Layout         | Hero header + multiple `_InfoSectionCard`s (order info, contact, medical, accommodation, notes, navigation links to related center/hotel/service detail screens) |
| Admin controls | `_buildActionButtons` injects status pickers + CTA buttons only when `isAdmin` is true                                                                           |
| Feedback       | `ProSnackbar` surfaces outcomes for cancel/update actions                                                                                                        |

### Admin actions

1. **Status transitions** (Processing → Contacted → Done → Canceled) via `UpdateOrderStatusCubit`. Calls `PATCH /orders/{id}/status` with `{ status: <value> }`.
2. **Mark as emailed** to keep track of manual outreach. `MarkEmailedCubit.markAsEmailed()` posts `POST /orders/admin/{id}/mark-emailed` (legacy-compatible endpoint).
3. **Complete order** convenience button wired to `CompleteOrderCubit.completeOrder()` → `PATCH /orders/{id}/status` with `done`.
4. **Cancel order** uses the shared `CancelOrderCubit`, but admins can trigger it if customer asks to close the ticket.

The cubits listen for success/error states and refresh the detail view (`OrderDetailsCubit.fetchOrderById`) to keep UI in sync.

## 4. Data Model Highlights

`OrderModel` captures everything the admin cares about:

- Identifiers/metadata: `code`, `scope`, `status`, `submittedAt`, `respondedAt`, `completedAt`.
- Contact channels: `fullName`, `phone`, `email`, `preferContact`.
- Medical context: `medicalTreatment`, `forWhom`, `patientAge`, `seenDoctorBefore`, `medicalCenter` (linked entity), `medicalserviceId`, `equipmentId`.
- Hospitality context: `hotelRelation`, `checkIn/checkOut`, guest counts, room preferences.
- Audit helpers: `additionalInfo/notes`, `origin`, `travelTimeline`.

## 5. API Contract Summary

| Action                 | Verb + Path                            | Body                                                                | Notes                               |
| ---------------------- | -------------------------------------- | ------------------------------------------------------------------- | ----------------------------------- |
| Fetch paginated orders | `GET /orders`                          | query params (`status`, `code`, `from`, `to`, `page`)               | Returns `{ data: [], meta: {} }`    |
| Fetch single order     | `GET /orders/{id}`                     | –                                                                   | Supports wrapped or direct payloads |
| Update status          | `PATCH /orders/{id}/status`            | `{ "status": "processing" \| "contacted" \| "done" \| "canceled" }` | Used by admin buttons               |
| Mark emailed           | `POST /orders/admin/{id}/mark-emailed` | –                                                                   | Legacy helper                       |

## 6. Testing Checklist

- Fetch list → verify shimmer, error, empty states.
- Search by code → expect filtered results.
- Open details as admin → confirm action buttons render; as user they should hide.
- Update status → expect snackbar + refreshed timeline.
- Cancel or mark emailed → ensure server state updates and cards reflect new status.
- Deep links to related center/hotel/service pages should navigate correctly.

## 7. Extensibility Ideas

- Add bulk status updates by extending `OrdersListCubit` with selection state.
- Wire push notifications/webhooks once `UpdateOrderStatusCubit` succeeds.
- Persist local filters (status/date range) in storage for returning admins.
- Attach file uploads (e.g., treatment plans) via new sections inside `_InfoSectionCard`.

This architecture showcases a reusable Dart + Bloc + Dio stack with thoughtful UX—great portfolio material for demonstrating admin tooling.
