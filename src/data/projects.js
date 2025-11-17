export const projects = [
  {
    id: 7,
    title: "MedTour.sy",
    slug: "medtour",
    tagline: "Medical tourism OS for patients, partners, and coordinators",
    industry: "Medical Tourism / Marketplace",
    description:
      "MedTour.sy delivers a premium landing experience that guides medical travelers through the brand story, curated services, logistics support, and call-to-action moments. The public hero screens highlight hero narratives, modular sections for services, how-it-works flows, testimonials, multilingual content, and CTA cards that route visitors to coordinators, reflecting a cohesive marketing-to-product journey.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "flutter_bloc",
      "Riverpod",
      "Dio",
      "GetIt",
      "cached_network_image",
      "device_info_plus",
      "dropdown_search",
      "file_picker",
      "flutter_svg",
      "font_awesome_flutter",
      "free_map",
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
      "Stripe API",
    ],
    brand: {
      accent: "#0A8ACF",
      logo: null,
      icon: null,
    },
    screenshots: [
      "/screenshots/medtour/landing_1.png",
      "/screenshots/medtour/landing_2.png",
      "/screenshots/medtour/landing_3.png",
      "/screenshots/medtour/landing_4.png",
      "/screenshots/medtour/landing_5.png",
      "/screenshots/medtour/landing_6.png",
      "/screenshots/medtour/landing_7.png",
    ],
    links: [
      {
        label: "Google Play",
        type: "playstore",
        href: "https://play.google.com/store/apps/details?id=com.medtour.sy",
      },
    ],
    metrics: [
      { label: "User Roles", value: "5 personas" },
      { label: "Languages", value: "11 locales" },
      { label: "Platforms", value: "iOS · Android · Web · Desktop" },
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
          summary: "Full control over people, permissions, and platform content.",
          capabilities: [
            "Cross-platform dashboard with live KPIs",
            "User, role, and permission lifecycle management",
            "Order/request triage with status, completion, and audit tools",
          ],
        },
        {
          name: "Center Owner",
          summary: "Manages clinics, doctors, departments, and medical services.",
          capabilities: [
            "Center profile creation, photo galleries, and working hours",
            "Doctor, department, service, and equipment catalogs",
            "Event scheduling and insight access",
          ],
        },
        {
          name: "Hotel Owner",
          summary: "Operates hospitality inventory tightly linked to medical trips.",
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
    id: 1,
    title: "E-Commerce Flutter App",
    slug: "ecommerce-flutter",
    description:
      "A full-featured e-commerce mobile application built with Flutter, featuring product catalog, shopping cart, user authentication, and payment integration. Includes real-time inventory management and order tracking.",
    technologies: ["Flutter", "Dart", "Firebase", "Provider", "Stripe API"],
    screenshots: [
      "/screenshots/ecommerce-1.jpg",
      "/screenshots/ecommerce-2.jpg",
      "/screenshots/ecommerce-3.jpg",
    ],
    links: [
      {
        label: "Google Play",
        type: "playstore",
        href: "https://play.google.com/store/apps/details?id=com.example.ecommerce",
      },
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Weather Forecast App",
    slug: "weather-forecast",
    description:
      "Beautiful weather application with location-based forecasts, detailed weather maps, and customizable widgets. Features include 7-day forecasts, hourly predictions, and weather alerts.",
    technologies: ["Flutter", "Dart", "REST API", "Provider", "Geolocator"],
    screenshots: ["/screenshots/weather-1.jpg", "/screenshots/weather-2.jpg"],
    links: [],
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    slug: "task-manager",
    description:
      "Productive task management app with team collaboration features. Includes project boards, task assignments, deadlines, notifications, and progress tracking with beautiful UI/UX.",
    technologies: ["Flutter", "Dart", "Firebase", "Bloc", "Cloud Firestore"],
    screenshots: [
      "/screenshots/task-1.jpg",
      "/screenshots/task-2.jpg",
      "/screenshots/task-3.jpg",
    ],
    links: [],
    featured: false,
  },
  {
    id: 4,
    title: "Social Media App",
    slug: "social-media",
    description:
      "Modern social media platform with real-time messaging, story features, post sharing, and user profiles. Built with scalable architecture and optimized performance.",
    technologies: ["Flutter", "Dart", "Firebase", "Riverpod", "WebRTC"],
    screenshots: ["/screenshots/social-1.jpg", "/screenshots/social-2.jpg"],
    links: [
      {
        label: "Google Play",
        type: "playstore",
        href: "https://play.google.com/store/apps/details?id=com.example.social",
      },
    ],
    featured: true,
  },
  {
    id: 5,
    title: "Fitness Tracker",
    slug: "fitness-tracker",
    description:
      "Comprehensive fitness tracking application with workout plans, progress charts, calorie counter, and integration with wearable devices. Features beautiful animations and intuitive navigation.",
    technologies: ["Flutter", "Dart", "SQLite", "Provider", "Charts"],
    screenshots: [
      "/screenshots/fitness-1.jpg",
      "/screenshots/fitness-2.jpg",
      "/screenshots/fitness-3.jpg",
    ],
    links: [],
    featured: false,
  },
  {
    id: 6,
    title: "News Reader App",
    slug: "news-reader",
    description:
      "Clean and modern news aggregator with multiple sources, categories, bookmarking, and offline reading capabilities. Features dark mode and customizable reading experience.",
    technologies: ["Flutter", "Dart", "REST API", "Hive", "GetX"],
    screenshots: ["/screenshots/news-1.jpg", "/screenshots/news-2.jpg"],
    links: [],
    featured: false,
  },
];
