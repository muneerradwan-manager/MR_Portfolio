# Admin Capabilities Guide

This document summarizes everything an administrator can do inside the **MEDTOUR.SY** Flutter app. It is structured so you can reuse it in your portfolio or onboarding docs.

## 1. Role Scope

- Acts as the system operator responsible for maintaining data quality across **facilities, users, roles, permissions, medical content, and orders**.
- Accesses the authenticated area via `AuthCubit` (role check comes from `UserModel.roles`); admin-only widgets listen to `state.primaryRole`.
- Works primarily within modules under `lib/features/ADMIN` plus cross-cutting order views under `lib/features/Orders`.

## 2. Platform Modules

| Module              | Location                                                                                    | Key Actions                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Dashboard           | `features/ADMIN/Dashboard`                                                                  | View KPIs via `GetAdminDashboardCubit` and `DashboardRepository`.                                      |
| Users               | `features/ADMIN/Users`                                                                      | CRUD users, assign/revoke roles, restore deleted accounts, update status.                              |
| Roles & Permissions | `features/ADMIN/Roles`, `features/ADMIN/Permissions`                                        | Create roles, attach permissions, manage permission catalog.                                           |
| Facilities          | `features/ADMIN/Facilities`                                                                 | Create/update/delete facilities via dedicated cubits (`CreateFacilityCubit`, etc.).                    |
| Orders              | Shared `features/Orders` views + admin cubits under `features/ADMIN/Orders`. See section 4. |
| Content Libraries   | Repositories under `features/PUBLIC_ROUTES`                                                 | Seed and review countries, cities, departments, services, equipment, hotels, rooms, schedules, offers. |
| Partner Pipelines   | Center Owner / Hotel Owner / Doctor feature folders                                         | Approve or manage partner-generated content after it syncs into admin APIs.                            |

> Tip: All modules consume data through repositories registered in `core/di/service_locator.dart`, making it easy to trace dependencies for demonstrations.

## 3. Cross-Cutting Tools

- **Navigation Drawer Cubits** (`AdminDrawerCubit`, `CenterOwnerDrawerCubit`, etc.) keep the admin shell responsive on desktop/tablet.
- **Localization + Theming**: Admin screens inherit `LanguageCubit` and `ThemeCubit` so the UI is bilingual/dark-friendly when you showcase it.
- **Storage & Networking**: `DioClient` injects JWT access/refresh tokens; admins benefit from silent refresh implemented in `core/network/dio_client.dart`.

## 4. Orders Management (Admin View)

Admins share UI components with end-users but gain extra controls thanks to role checks inside `UnifiedOrderDetailsView`.

### List Page

- Widget: `UnifiedOrdersListView` (`features/Orders/presentation/views/orders_list_view.dart`).
- Data: `OrdersListCubit` → `UserOrderRepository.getOrders()` (`GET /orders` with status/code/date filters).
- UX: Animated cards show scope (medical/hotel/both), live status badge, associated center/hotel, and submitted timestamp. Supports search and pull-to-refresh.

### Detail Page

- Widget: `UnifiedOrderDetailsView` (`orders_details_view.dart`).
- Builder: `OrderDetailsCubit.fetchOrderById(id)` loads full payload including linked entities.
- Sections: Order information, contact info, medical details, accommodation, notes, and deep links to related center/hotel/service/equipment screens.

### Admin-Only Actions

| Action                                             | Implementation                                               | API                                      |
| -------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Update status (processing/contacted/done/canceled) | `UpdateOrderStatusCubit` → `_repository.updateOrderStatus()` | `PATCH /orders/{id}/status`              |
| Complete order quick action                        | `CompleteOrderCubit.completeOrder(id)`                       | `PATCH /orders/{id}/status` (`done`)     |
| Mark as emailed                                    | `MarkEmailedCubit.markAsEmailed(id)`                         | `POST /orders/admin/{id}/mark-emailed`   |
| Cancel on behalf of user                           | `CancelOrderCubit.cancelOrder(id)`                           | `PATCH /orders/{id}/status` (`canceled`) |

Each cubit listens for success/error states and triggers `OrderDetailsCubit.fetchOrderById()` to refresh the UI. Snackbars (`ProSnackbar`) communicate outcomes.

For a more granular walkthrough, reference `docs/orders_admin.md`.

## 5. Showcase Checklist

- Demonstrate role-based rendering by switching between admin and standard accounts.
- Highlight repository + cubit architecture to prove maintainability.
- Mention silent token refresh and storage-backed sessions as production-ready touches.
- Capture screenshots/GIFs of dashboard stats, user CRUD flows, and order status transitions for your portfolio.
