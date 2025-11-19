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
      {
        label: "Google Drive",
        type: "drive",
        href: "https://drive.google.com/drive/folders/1X2ru252a65I7uECfaLPTFvX2NWVP6EJW?usp=sharing",
      },
    ],
    metrics: [
      {
        labelKey: "userRoles",
        label: "User Roles",
        valueKey: "userRolesValue",
        value: "5 personas",
      },
      {
        labelKey: "languages",
        label: "Languages",
        valueKey: "languagesValue",
        value: "11 locales",
      },
      {
        labelKey: "platforms",
        label: "Platforms",
        valueKey: "platformsValue",
        value: "iOS · Android",
      },
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
          translationKey: "admin",
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
          translationKey: "centerOwner",
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
          translationKey: "hotelOwner",
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
          translationKey: "doctor",
          name: "Doctor",
          summary: "Keeps personal profiles and schedules current.",
          capabilities: [
            "Profile editing with specialization metadata",
            "Schedule blocks, appointment slots, and availability windows",
            "Assigned center visibility and messaging hooks",
          ],
        },
        {
          translationKey: "customer",
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
      {
        label: "Google Drive",
        type: "drive",
        href: "https://drive.google.com/drive/folders/1JIaqThihR35PITbFkXOSbwVyIEhm3WV0?usp=sharing",
      },
    ],
    metrics: [
      {
        labelKey: "coreModules",
        label: "Core Modules",
        valueKey: "coreModulesValue",
        value: "10+",
      },
      {
        labelKey: "channels",
        label: "Channels",
        valueKey: "channelsValue",
        value: "Push · Email · SMS",
      },
      {
        labelKey: "platforms",
        label: "Platforms",
        valueKey: "platformsValue",
        value: "iOS · Android · Tablet",
      },
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
          translationKey: "careCoordinator",
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
          translationKey: "caseManager",
          name: "Case Manager",
          summary: "Runs cases, sessions, and documentation throughput.",
          capabilities: [
            "Kanban-style case management with objectives, templates, and audits.",
            "Session scheduling with recurrence, reminders, and consent tracking.",
            "Document repository with labels, retention, and signature workflows.",
          ],
        },
        {
          translationKey: "clinician",
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
  {
    id: 3,
    title: "AutoLakta",
    slug: "autolakta",
    tagline: "Automotive marketplace for buyers, sellers, and admins",
    industry: "Automotive Marketplace / Mobility Commerce",
    description:
      "AutoLakta unifies car shoppers, business sellers, advertisers, and platform administrators inside a multilingual Flutter experience that blends catalog discovery, seller storefront tooling, and governance-grade admin consoles.",
    technologies: [
      "flutter",
      "get",
      "dio",
      "get_storage",
      "cached_network_image",
      "intl",
      "connectivity_plus",
      "jwt_decoder",
      "lottie",
      "carousel_slider",
      "smooth_page_indicator",
      "flutter_svg",
      "shimmer",
      "readmore",
      "flutter_colorpicker",
      "image_picker",
      "image_cropper",
    ],
    brand: {
      accent: "#E1622B",
      logo: null,
      icon: null,
    },
    screenshots: [],
    links: [],
    metrics: [
      {
        labelKey: "personas",
        label: "Personas",
        valueKey: "personasValue",
        value: "4 roles",
      },
      {
        labelKey: "locales",
        label: "Locales",
        valueKey: "localesValue",
        value: "5 languages",
      },
      {
        labelKey: "platforms",
        label: "Platforms",
        valueKey: "platformsValue",
        value: "iOS · Android · Web",
      },
    ],
    deliverables: [
      "Buyer marketplace and advanced search",
      "Seller storefronts and ad tooling",
      "Admin governance console",
    ],
    caseStudy: {
      summary: [
        {
          title: "Challenge",
          body: "Dealers, advertisers, and admins were juggling fragmented tools to grow inventory while shoppers expected a modern, mobile-first buying experience with filters, media-rich listings, and transparent operations.",
        },
        {
          title: "Solution",
          body: "AutoLakta ships as a feature-first Flutter workspace with onboarding, advanced discovery, seller dashboards, advertiser flows, and admin governance modules powered by GetX, Dio, and secure local persistence.",
        },
      ],
      highlights: [
        {
          title: "Guided onboarding & authentication",
          description:
            "Splash, onboarding, and email/phone authentication with JWT sessions, GetStorage persistence, and OAuth-ready UI components.",
        },
        {
          title: "Advanced catalog discovery",
          description:
            "Buyers search and filter by brand, model, drivetrain, transmission, price, and category with live counts, removable chips, and resilient empty states.",
        },
        {
          title: "Seller & admin toolkits",
          description:
            "Business profiles, seller dashboards, ad editors, and admin CRUD consoles for brands, fuels, transmissions, and advertiser accounts.",
        },
      ],
      userJourney: [
        {
          title: "Onboarding & setup",
          steps: [
            "Splash and onboarding sequences introduce the marketplace brand story.",
            "Users authenticate via phone/email with JWT-backed sessions and post-verification messaging.",
          ],
        },
        {
          title: "Discover & shortlist",
          steps: [
            "Home hero surfaces featured cars, business highlights, and promotional sliders.",
            "Advanced filters and wishlists help shoppers curate and revisit vehicles.",
          ],
        },
        {
          title: "Operate & govern",
          steps: [
            "Sellers update storefronts, manage stock, and launch promotions.",
            "Admins verify listings, approve brands/models, and monitor platform data quality.",
          ],
        },
      ],
      userRoles: [
        {
          translationKey: "carShopper",
          name: "Car Shopper",
          summary:
            "Explores inventory, saves favorites, and requests follow-ups.",
          capabilities: [
            "Search, filter, and compare vehicles across categories.",
            "Wishlist management with notifications for promo updates.",
            "Detailed car screens with specs, media galleries, and reviews.",
          ],
        },
        {
          translationKey: "businessSeller",
          name: "Business Seller",
          summary: "Maintains storefronts, listings, and pricing strategies.",
          capabilities: [
            "Profile editing with media, geolocation, and contact data.",
            "Ad creation/editing with media upload and pricing tools.",
            "Stock dashboards with quick actions for publishing or pausing vehicles.",
          ],
        },
        {
          translationKey: "advertiser",
          name: "Advertiser",
          summary: "Highlights campaigns and monitors performance.",
          capabilities: [
            "Promotion management with banner scheduling and highlights.",
            "Insight cards that track impressions, leads, and engagement.",
            "Collaboration workflows with platform administrators.",
          ],
        },
        {
          translationKey: "platformAdmin",
          name: "Platform Admin",
          summary: "Stewards catalog integrity and user governance.",
          capabilities: [
            "CRUD consoles for brands, models, fuels, and transmissions.",
            "Advertiser verification and account lifecycle controls.",
            "Global monitors for offline states, errors, and support tickets.",
          ],
        },
      ],
      flow: [
        {
          title: "Onboarding funnel",
          steps: [
            "Splash → onboarding carousel → auth selection (email/phone/OAuth) → verification → personalized home.",
            "Session guard persists tokens via GetStorage and skips redundant logins.",
          ],
        },
        {
          title: "Catalog governance",
          steps: [
            "Admins curate core datasets before listings go live.",
            "Advertisers and sellers submit updates which route through approval workflows with status badges.",
          ],
        },
      ],
      technical: {
        architecture: [
          "Feature-first folder structure for auth, home, search, store, admin, seller, wishlist, and settings domains.",
          "GetX controllers orchestrate navigation, dependency injection, and reactive state.",
          "Dio client with interceptors, repository layer, and JWT parsing keeps networking cleanly separated.",
          "Shared components, theme tokens, and bindings wire reusable UI primitives across modules.",
        ],
        experience: [
          "Cairo font family and bilingual localization powered by GetX translations.",
          "Light/dark theming with shared design tokens and runtime switching.",
          "Global connectivity monitor, shimmer placeholders, snackbars, and loaders standardize UX feedback.",
          "Image picker + cropper utilities ensure sellers publish high-quality media.",
        ],
      },
    },
    featured: true,
  },
  {
    id: 4,
    title: "Let's Go Gym",
    slug: "lets-go-gym",
    tagline: "Multilingual back-office suite for modern gyms",
    industry: "Gym Management / Operations OS",
    description:
      "Let's Go Gym centralizes dashboards, billing, inventory, clients, and staff governance into a single Flutter workspace. It delivers live KPIs, full CRUD tooling, role-aware security, and localization across eight languages so gym operators can run day-to-day operations from anywhere.",
    technologies: [
      "flutter",
      "dart",
      "get",
      "dio",
      "shared_preferences",
      "flutter_svg",
      "iconsax",
      "fl_chart",
      "cached_network_image",
      "image_picker",
      "permission_handler",
      "dartz",
      "equatable",
      "device_preview",
      "flutter_lints",
      "Cairo font",
      "Inter font",
    ],
    brand: {
      accent: "#696CFF",
      logo: null,
      icon: null,
    },
    screenshots: [],
    links: [
      {
        label: "Case Study",
        type: "web",
        href: "https://github.com/muneerradwan-manager/MR_Portfolio/tree/main/projects/gym",
      },
    ],
    metrics: [
      {
        labelKey: "modules",
        label: "Operational modules",
        valueKey: "modulesValue",
        value: "5+",
      },
      {
        labelKey: "locales",
        label: "Locales",
        valueKey: "localesValue",
        value: "8 languages",
      },
      {
        labelKey: "platforms",
        label: "Platforms",
        valueKey: "platformsValue",
        value: "Android · iOS · Web · Desktop",
      },
    ],
    deliverables: [
      "Realtime analytics dashboard",
      "Unified billing, expenses, store, and user management",
      "Role-based security with localization",
    ],
    caseStudy: {
      summary: [
        {
          title: "Challenge",
          body: "Gym owners were juggling spreadsheets, legacy POS tools, and single-language UIs to track invoices, expenses, inventory, and staff—making it impossible to maintain clean financial visibility or a consistent operator experience.",
        },
        {
          title: "Solution",
          body: "Built Let's Go Gym as a clean-architecture Flutter application with GetX-driven modules, Dio-powered APIs, secure token storage, and localization primitives so every operational surface—dashboard, invoicing, expenses, store, users—lives in one cohesive workspace.",
        },
      ],
      highlights: [
        {
          title: "Realtime control center",
          description:
            "Income vs expense KPIs, FL Chart visualizations, trend toggles, and color-coded cards keep operators aligned on financial health in seconds.",
        },
        {
          title: "Role-ready CRUD modules",
          description:
            "Invoices, expenses, store catalog, and user management share consistent patterns with search, filters, detail drawers, and validation so teams can work faster with fewer mistakes.",
        },
        {
          title: "Enterprise-grade security",
          description:
            "Bearer token auth, session guards, localization-aware UI, and offline detection keep data secure whether owners manage the gym from Android, iOS, Web, or desktop.",
        },
      ],
      userJourney: [
        {
          title: "Launch & authenticate",
          steps: [
            "Splash and onboarding screens introduce the value props before routing to login.",
            "Users sign in with email/password and receive secure token storage plus session guards.",
          ],
        },
        {
          title: "Configure & operate",
          steps: [
            "Admins set up branding, localization, and permissions, then dive into invoices, expenses, and store modules.",
            "Finance leads reconcile payments while store managers update inventory, pricing, and product media.",
          ],
        },
        {
          title: "Monitor & iterate",
          steps: [
            "Owners watch live KPI cards, filter trends, and export insights before adjusting pricing, promos, or staffing.",
            "Localization-ready UI keeps teams productive across English, Arabic, and additional locales.",
          ],
        },
      ],
      userRoles: [
        {
          name: "Gym Owner",
          summary:
            "Keeps a real-time pulse on revenue, expenses, and operational health.",
          capabilities: [
            "View income vs expense KPIs, trend charts, and store stats in one dashboard.",
            "Drill into invoice or expense detail when anomalies appear.",
            "Switch languages on the fly to collaborate with multilingual teams.",
          ],
        },
        {
          name: "Finance Lead",
          summary: "Runs invoicing, payments, and expense control for the gym.",
          capabilities: [
            "Create, edit, and search invoices by client or number with payment tracking.",
            "Categorize expenses, attach notes, and audit spending per time period.",
            "Use filtered views to reconcile outstanding balances quickly.",
          ],
        },
        {
          name: "Store Manager",
          summary: "Owns product catalog, inventory, and procurement.",
          capabilities: [
            "Maintain products with descriptions, pricing, quantity, and media uploads.",
            "Toggle active/inactive status to keep shelves accurate across platforms.",
            "Monitor low-stock alerts and upcoming purchase needs.",
          ],
        },
      ],
      flow: [
        {
          title: "Localization-aware onboarding",
          steps: [
            "Splash → onboarding → login enables English or Arabic-first experiences.",
            "Session guard rehydrates tokens so returning users skip redundant auth.",
          ],
        },
        {
          title: "Operational guardrails",
          steps: [
            "Consistency across list → detail → action flows limits training time.",
            "Connectivity checks, shimmer loaders, and error banners protect data integrity during poor networks.",
          ],
        },
      ],
      technical: {
        architecture: [
          "Clean architecture with views, controllers (GetX), repositories, and services layered per module.",
          "Dio networking with interceptors, request logging, and failure modeling via Dartz.",
          "SharedPreferences-backed secure token + session storage with guards around each API call.",
          "Reusable widgets, cards, and form fields for invoices, expenses, store, and users.",
        ],
        experience: [
          "Localization infrastructure for 8 languages with Cairo/Inter fonts and RTL-aware spacing.",
          "Device Preview + responsive layout tokens keep mobile, tablet, and desktop views in sync.",
          "Offline detection, pull-to-refresh, and empty/error states provide clear user feedback.",
          "Hot reload friendly structure plus Flutter Lints to keep the codebase maintainable.",
        ],
      },
    },
    featured: true,


    
  },
];
