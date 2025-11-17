# OVACS Mobile Suite

OVACS is a cross-platform Flutter application that helps care coordinators,
case managers, and clinicians run every part of their practice from a single
workspace. This document walks through the full product narrative so new team
members, stakeholders, and QA engineers can understand the expected behavior
from the moment a user opens the app.

---

## 1. First-Time Entry & Authentication

1. **Splash → Onboarding**  
   - User sees the branded splash screen while the app loads DI, theme, and
     localization modules.  
   - If this is the first launch, a short onboarding carousel explains the
     value proposition and requests notification permission.

2. **Sign-In Options**  
   - Email + password (primary), SSO cards (SAML/OAuth), and “Continue as
     guest” for demo tenants.  
   - “Forgot password?” opens a modal with email field and delivers a reset
     link/SMS code.  
   - “Create account” supports multi-step registration (organization, role,
     contact info, verification).  
   - Input validation uses localized error text and shakes invalid fields.

3. **Session Handling**  
   - After successful auth, JWT and refresh tokens are stored via secure
     storage.  
   - Biometric unlock can be enabled for subsequent launches.  
   - Inactive sessions trigger a soft logout banner; revoked tokens force a
     hard sign-out with explanation.

---

## 2. Global Dashboard Narrative

Once authenticated, the user lands on the dashboard (`features/dashboard`):

- **Top Bar**: organization selector, quick search, notification bell badge,
  and profile avatar.  
- **KPI Cards**: today’s sessions, active cases, pending documents, unread
  messages. Tapping drills into the respective module with pre-applied
  filters.  
- **Smart Feed**: chronological timeline of assignments, escalations,
  approvals, and mentions. Each item links to its source entity.  
- **Floating Action Button (FAB)**: contextual create menu (new client, case,
  session, group message, document upload).

---

## 3. Core Modules & User Stories

Below is the expected CRUD flow for every major feature. Each module follows
the same interaction pattern: list → filters/search → detail view → actions.

### 3.1 Connections
- **View**: cards with avatar, role, availability, last interaction.  
- **Add**: choose role (clinician, coordinator, external partner), collect
  contact info, relationship tags, and permissions.  
- **Edit**: inline fields for roles, escalation level, notes, and preferred
  channels.  
- **Delete/Deactivate**: soft delete with dependency check (cases & sessions
  referencing the connection).  
- **Details**: timeline of collaborations, shared documents, and shared cases.

### 3.2 Clients
- **View**: segmented tabs (Active, Archived, Onboarding). Search supports
  MRN, phone, or custom tags.  
- **Add**: multi-step wizard (demographics, contacts, insurance, consent).  
- **Edit**: field-level autosave, alerts for conflicting identifiers.  
- **Delete**: allowed only for onboarding state; otherwise archive with reason.  
- **Details**: snapshot header (photo, risk level, primary coordinator), quick
  actions (new session, message, document upload), health metrics, case list.

### 3.3 Cases
- **View**: Kanban by status (Intake, Planning, Active, Monitoring, Closed).  
- **Add**: choose client, assign owner, define objectives, attach templates.  
- **Edit**: update goals, participants, due dates; log progress notes.  
- **Delete**: available only before activation; otherwise close with outcome.  
- **Details**: tabs for plan, tasks, documents, sessions, and audit history.

### 3.4 Sessions
- **View**: calendar + list hybrid with filters (provider, modality, location).  
- **Add**: schedule form with recurrence, video link, reminders, consent check.  
- **Edit**: reschedule, reassign clinician, change notes; notify attendees.  
- **Delete**: cancel with reason and optional client notification.  
- **Details**: attendance, notes, billing codes, attachments, follow-up tasks.

### 3.5 Documents
- **View**: repository with type filters (intake forms, labs, agreements).  
- **Add**: scan/upload, select client/case, apply labels, request signatures.  
- **Edit**: rename, retag, update visibility (team, client, external).  
- **Delete**: enforce retention policy; show why deletion might be blocked.  
- **Details**: preview, version history, signature status timeline.

### 3.6 Messages
- **View**: unified inbox with grouping by conversation or channel (Direct,
  Groups, Broadcast).  
- **Compose**: text, attachments, voice notes, templates, mentions.  
- **Edit**: grace period for correcting sent messages.  
- **Delete**: remove for everyone (if allowed) or for self, with audit trail.  
- **Details**: conversation info, participants, linked entities (case/session).

### 3.7 Groups
- **View**: list of topic-based rooms (care teams, departments, ad-hoc).  
- **Add**: pick members, set purpose, configure posting permissions.  
- **Edit**: change name, description, avatar, and roles (owner/moderator).  
- **Delete**: archive group after exporting conversation log.  
- **Details**: pinned items, shared documents, upcoming sessions, poll module.

### 3.8 Notifications
- **View**: prioritized feed (Critical, Action Required, FYI). Swipe actions to
  mark read, snooze, or open.  
- **Add**: generated by system rules or manual broadcasts.  
- **Edit**: admins can update broadcast content or recipients until sent.  
- **Delete**: allowed for drafts; recipients can dismiss delivered alerts.  
- **Details**: message body, related entity, quick action buttons (approve,
  acknowledge, view case).

### 3.9 Profile
- **View**: personal info, credentials, specialties, availability.  
- **Edit**: update contact, language, bio, notification preferences.  
- **Security**: change password, enable biometrics, manage sessions.  
- **Delete**: request account deletion (multi-step confirmation).  
- **Details**: audit log of devices, delegated access list.

### 3.10 Settings
- **Organization**: timezone, branding, intake templates, approval routes.  
- **Users & Roles**: role matrix, invite flow, bulk role assignment.  
- **Integrations**: EHR, calendar, telehealth providers; test connection.  
- **Billing**: subscription, usage, invoices.  
- **Data Controls**: export, backups, retention policies.

---

## 4. Cross-Cutting Stories

- **Search & Global Filters**: persistent search bar supports clients, cases,
  documents, and messages with typeahead suggestions.  
- **Localization**: Arabic & English toggles via settings; RTL support across
  layouts.  
- **Offline Mode**: cached lists and pending actions queue for sync.  
- **Accessibility**: font scaling, screen reader labels, high-contrast theme.  
- **Audit & Compliance**: every add/edit/delete logs who, when, and why with
  reason pickers for sensitive changes.  
- **Notifications**: push, email, SMS options per channel; quiet hours toggle.  
- **Help & Feedback**: contextual help drawer, in-app chat with support, quick
  link to knowledge base.

---

## 5. QA Checklist (Add/Edit/Delete/View)

For each module verify:

- **Add**: mandatory fields enforced, optimistic UI state, error handling.  
- **Edit**: autosave or explicit save feedback, conflict resolution.  
- **Delete**: confirmation dialog, dependency validation, undo/snackbar when
  possible.  
- **View**: pagination, sorting, filtering, empty states, access control.  
- **Details**: complete metadata, related entities, action shortcuts.  
- **Permissions**: role-based guards on buttons and API calls.  
- **Sync**: visual indicators while fetching, pull-to-refresh support.  
- **Testing**: unit tests for cubits/repos, widget tests for critical flows.

---

## 6. Tech Stack Pointers

- Flutter 3.x with Riverpod/Cubit state, Dio networking, JSON serializable
  models, Firebase messaging, and secure storage.  
- Modularized under `lib/features/*` with shared widgets in `lib/core`.  
- The README doubles as the canonical product story; keep it updated whenever
  a feature changes.

---

Happy shipping! Update this document whenever you introduce new flows or
retire legacy ones so designers, engineers, and QA stay aligned.
