export const projects = [
  {
    id: 1,
    title: "MedTour.sy",
    slug: "medtour",
    tagline: "Medical tourism OS for patients, partners, and coordinators",
    industry: "Medical Tourism / Marketplace",
    description:
      "MedTour.sy delivers a premium landing experience that guides medical travelers through the brand story, curated services, logistics support, and call-to-action moments. The public hero screens highlight hero narratives, modular sections for services, how-it-works flows, testimonials, multilingual content, and CTA cards that route visitors to coordinators, reflecting a cohesive marketing-to-product journey.",
    technologies: [
      "cached_network_image",
      "dartz",
      "device_info_plus",
      "device_preview",
      "dio",
      "dropdown_search",
      "file_picker",
      "flutter_bloc",
      "flutter_localizations",
      "flutter_svg",
      "font_awesome_flutter",
      "free_map",
      "get_it",
      "iconsax",
      "intl",
      "permission_handler",
      "photo_view",
      "pinput",
      "readmore",
      "shared_preferences",
      "shimmer",
      "url_launcher",
      "window_manager",
      "Cairo fonts",
      "Manrope fonts",
      "Poppins fonts",
      "Stripe API",
    ],
    brand: {
      accent: "#0A8ACF",
      logo: null,
      icon: null,
    },
    screenshots: [],
    links: [
      {
        label: "Visit Website",
        type: "web",
        href: "https://medtour.sy/",
      },
    ],
    metrics: [
      { label: "User Roles", value: "5 personas" },
      { label: "Languages", value: "11 locales" },
      { label: "Platforms", value: "iOS · Android" },
    ],
    deliverables: [
      "Marketing landing experience",
      "Role-based mobile & web app",
      "Admin console + governance",
    ],
    caseStudy: {
      summary: [
        {
          title: "Challenge",
          body: "International patients needed a single, trusted destination to browse treatments, compare centers and hotels, and hand off logistics to coordinators without friction.",
        },
        {
          title: "Solution",
          body: "Designed and shipped a Flutter-powered platform with guided onboarding, partner verification, and a role-aware workspace that keeps admins, centers, hotels, doctors, and travelers in sync.",
        },
      ],
      highlights: [
        {
          title: "Guided pre-arrival journey",
          description:
            "Hero narratives, modular service blocks, and testimonials lead prospects to Get Started CTAs that route directly to coordinators.",
        },
        {
          title: "Dual registration funnels",
          description:
            "Customers breeze through a lightweight sign-up while partners complete a licensed two-step flow with OTP verification and profile completion gates.",
        },
        {
          title: "Role-aware dashboards",
          description:
            "Post-login routing launches bespoke home screens for Admin, Center Owner, Hotel Owner, Doctor, and Customer roles with curated menus.",
        },
      ],
      userJourney: [
        {
          title: "Landing → Action",
          steps: [
            "Spectacular hero, services, how-it-works, testimonials, and CTAs build trust.",
            "Visitors tap Get Started to choose customer or partner journeys.",
          ],
        },
        {
          title: "Registration & Verification",
          steps: [
            "Customers submit personal details and land directly inside their home feed.",
            "Partners complete personal info, institution details, license data, and OTP email verification before activating their workspace.",
          ],
        },
        {
          title: "Authentication & Routing",
          steps: [
            "Login routes returning users to their role dashboard.",
            "Session-aware guard skips login when a valid token exists.",
            "Password reset is split into email request and secure reset form.",
          ],
        },
      ],
      userRoles: [
        {
          name: "Admin",
          summary:
            "Full control over people, permissions, and platform content.",
          capabilities: [
            "Cross-platform dashboard with live KPIs",
            "User, role, and permission lifecycle management",
            "Order/request triage with status, completion, and audit tools",
          ],
        },
        {
          name: "Center Owner",
          summary:
            "Manages clinics, doctors, departments, and medical services.",
          capabilities: [
            "Center profile creation, photo galleries, and working hours",
            "Doctor, department, service, and equipment catalogs",
            "Event scheduling and insight access",
          ],
        },
        {
          name: "Hotel Owner",
          summary:
            "Operates hospitality inventory tightly linked to medical trips.",
          capabilities: [
            "Hotel profiles with licensing proof and amenity controls",
            "Room-type templates, pricing, and per-room availability",
            "Event programming and concierge coordination",
          ],
        },
        {
          name: "Doctor",
          summary: "Keeps personal profiles and schedules current.",
          capabilities: [
            "Profile editing with specialization metadata",
            "Schedule blocks, appointment slots, and availability windows",
            "Assigned center visibility and messaging hooks",
          ],
        },
        {
          name: "Customer",
          summary: "Explores services and orchestrates travel logistics.",
          capabilities: [
            "Browse centers, hotels, doctors, and equipment libraries",
            "Create medical, lodging, or equipment requests and track statuses",
            "Future-ready placeholders for flights and transportation bookings",
          ],
        },
      ],
      flow: [
        {
          title: "Authentication funnel",
          steps: [
            "Landing page → CTA → Register (user or partner) → Verification (if partner) → Login → Role dashboard",
            "Existing sessions bypass login and drop users into their home instantly.",
          ],
        },
        {
          title: "Role-based navigation",
          steps: [
            "Each role receives a dedicated navigation drawer with scoped modules.",
            "Guards ensure only permitted features render per permission tag.",
          ],
        },
      ],
      technical: {
        architecture: [
          "Feature-based Flutter workspace (ADMIN, AUTH, OWNER, DOCTOR, USER, PUBLIC)",
          "BLoC/Cubit state containers with dependency injection via GetIt",
          "Dio-powered networking layer with interceptors and typed routes",
          "Shared core widgets, theming, and utilities reused across modules",
        ],
        experience: [
          "11-language localization (EN, AR, TR, RU, ZH, FA, HI, UR, JA, KO, TH, DE)",
          "Light/dark theme toggle driven by shared design tokens",
          "Offline-friendly caching and session persistence via SharedPreferences",
          "Role-aware routing guards and permission-tag enforcement",
          "High-fidelity media handling with uploads, galleries, and PhotoView",
        ],
      },
    },
    featured: true,
  },
  {
    id: 2,
    title: "OVACS Mobile Suite",
    slug: "ovacs",
    tagline:
      "One command center for coordinators, case managers, and clinicians",
    industry: "Case, Client, Session And Document Management System",
    description:
      "OVACS is a cross-platform Flutter workspace built for regulated care teams. It unifies onboarding, dashboards, clients, cases, sessions, documents, messaging, and compliance workflows so coordinators, case managers, and clinicians can run the entire practice without bouncing between tools.",
    technologies: [
      "Dartz",
      "Dio",
      "Equatable",
      "file_picker",
      "flutter_bloc",
      "flutter_secure_storage",
      "path_provider",
      "get_it",
      "iconsax",
      "json_annotation",
      "permission_handler",
      "url_launcher",
      "intl",
      "flutter_svg",
      "pinput",
      "device_preview",
      "flex_color_picker",
      "shimmer",
      "open_filex",
      "share_plus",
      "record",
      "just_audio",
      "firebase_core",
      "firebase_messaging",
      "flutter_local_notifications",
      "Cairo font family",
    ],
    brand: {
      accent: "#0F6E8C",
      logo: null,
      icon: null,
    },
    screenshots: [],
    links: [
      {
        label: "Visit Website",
        type: "web",
        href: "https://ovacs.com/",
      },
    ],
    metrics: [
      { label: "Core Modules", value: "10+" },
      { label: "Channels", value: "Push · Email · SMS" },
      { label: "Platforms", value: "iOS · Android · Tablet" },
    ],
    deliverables: [
      "Role-aware mobile suite",
      "Modular CRUD workspaces",
      "QA + compliance documentation",
    ],
    caseStudy: {
      summary: [
        {
          title: "Challenge",
          body: "Care teams juggled disconnected tools for clients, cases, messaging, and compliance, creating context switching, audit gaps, and onboarding drag for new staff.",
        },
        {
          title: "Solution",
          body: "Designed OVACS as a guided Flutter suite with shared navigation, reusable CRUD patterns, and opinionated QA checklists so every module behaves consistently while staying HIPAA-ready.",
        },
      ],
      highlights: [
        {
          title: "First-time entry playbook",
          description:
            "Splash → onboarding carousel → multi-option sign-in with SSO, guest tenants, and granular validation keeps the first-run experience on-brand and secure.",
        },
        {
          title: "Dashboard telling the whole story",
          description:
            "KPIs, smart feed, quick search, and contextual FAB shortcuts launch users into the right module with filters already applied.",
        },
        {
          title: "Universal CRUD rails",
          description:
            "Every module mirrors the list → filter → detail → action rhythm, so QA, product, and engineering speak the same language across Connections, Clients, Cases, Sessions, and more.",
        },
      ],
      userJourney: [
        {
          title: "Splash & Onboarding",
          steps: [
            "Branded splash loads DI, localization, and theme tokens.",
            "First launch shows onboarding carousel plus notification opt-in.",
          ],
        },
        {
          title: "Authentication Center",
          steps: [
            "Sign-in supports email/password, SSO cards, and guest tenants.",
            "Forgot-password modal and multi-step account creation with validation and field shaking for errors.",
          ],
        },
        {
          title: "Session Handling",
          steps: [
            "JWT + refresh tokens persist via secure storage with biometric unlock.",
            "Soft logout banner for inactivity and forced logout messaging for revoked tokens.",
          ],
        },
      ],
      userRoles: [
        {
          name: "Care Coordinator",
          summary:
            "Owns day-to-day relationships, assignments, and follow-ups.",
          capabilities: [
            "Connections module with availability, relationship tags, and escalation levels.",
            "Clients onboarding wizard, timeline snapshots, and quick actions.",
            "Smart feed triage with contextual drill-ins.",
          ],
        },
        {
          name: "Case Manager",
          summary: "Runs cases, sessions, and documentation throughput.",
          capabilities: [
            "Kanban-style case management with objectives, templates, and audits.",
            "Session scheduling with recurrence, reminders, and consent tracking.",
            "Document repository with labels, retention, and signature workflows.",
          ],
        },
        {
          name: "Clinician",
          summary:
            "Delivers care, communicates, and keeps profile/security data current.",
          capabilities: [
            "Unified inbox for direct, group, and broadcast conversations.",
            "Profile + availability editor with credential tracking.",
            "Security center for biometrics, sessions, and password rotation.",
          ],
        },
      ],
      flow: [
        {
          title: "Dashboard narrative",
          steps: [
            "Organization selector, notifications, and avatar anchor the top bar.",
            "KPI cards deep link with filters; smart feed timeline keeps teams aligned.",
            "Floating action button adapts to context (client, case, session, document).",
          ],
        },
        {
          title: "Module CRUD contract",
          steps: [
            "Every feature enforces list views with search + filters + empty states.",
            "Detail screens surface metadata, related entities, and quick actions.",
            "Add/Edit/Delete flows honor dependency checks, retention rules, and undo/snackbar cues.",
          ],
        },
      ],
      technical: {
        architecture: [
          "Flutter 3.x workspace with feature modules under lib/features/*",
          "Riverpod + Cubit state with shared widgets in lib/core",
          "Dio networking with JSON serializable models and service locators",
          "Secure storage for tokens plus Firebase messaging hooks",
        ],
        experience: [
          "Localization with Arabic/English toggles and RTL support",
          "Offline mode caches lists and queues pending actions",
          "Accessibility via font scaling, screen reader labels, and high-contrast theme",
          "Audit-ready logging across every add/edit/delete event",
        ],
      },
    },
    featured: true,
  },
];
