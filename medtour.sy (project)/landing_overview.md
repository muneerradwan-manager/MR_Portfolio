# Landing Experience Overview

This document captures everything showcased on the public landing experiences built in `med_tour_landing_page.dart` and `landing_view.dart`. Use it when you describe the project’s first-touch UX in your portfolio or documentation.

## 1. Screens Covered

- `MedTourLandingPage` (single-page scroll with hero, story sections, CTA, and footer).
- `LandingView` (sliver-based layout composed of reusable sections such as Hero, Services, How It Works, Platform Features, Testimonials, Contact, and Footer).

Both screens share design language (brand gradients, SVG logo, reusable padding helpers, and `FooterSection`), but they target different use cases: `MedTourLandingPage` is a marketing storytelling page, while `LandingView` assembles modular components for campaigns or A/B testing.

## 2. MedTourLandingPage Breakdown

| Section | Description | Implementation Highlights |
| --- | --- | --- |
| Logo + Hero | Top of the page displays `AppImages.logo` and a hero card with gradient background, descriptive text, and a “Get Started” CTA that navigates to `AppRoutes.login`. | `_buildHeroSection` adjusts layout for wide vs. narrow viewports, changes gradient palette depending on dark/light mode, and uses `CustomElevatedButton` tied to `navigatorKey`. |
| About | Introduces the brand’s story using localized strings `landing_modern_about_*` and a themed image placeholder using `AppImages.landingAbout`. | `_buildSection` orchestrates hero text/image with gradients resolved via `_resolveSectionGradient`. |
| Medical | Highlights medical services with `landing_modern_medical_*` content and `AppImages.landingMedical`. | Uses same section builder; gradient keyed to `colorScheme.primary`. |
| Hotel | Focuses on hospitality partners using `AppImages.landingHotel` and the corresponding localized copy. | Section can be reversed (image/text order) for rhythm. |
| Transport | Explains logistics support with `AppImages.landingTransport`. | Gradient uses `colorScheme.secondaryContainer`. |
| Flight | Covers travel/flight assistance with `AppImages.landingFlight`. | Gradient uses `colorScheme.primaryContainer`; reversed layout for variation. |
| Call To Action | Encourages visitors to visit the public website (`http://161.97.64.130/`) via `AppHelper.launchUrlHelper`. Includes a CTA button, supportive text, and gradient background tuned for theme mode. | `_buildCallToActionSection` centralizes colors, typography, and button action. |
| Footer | `FooterSection` component closes the page with contact/social info. | Imported from `features/LANDING/presentation/components`. |

### Visual System Notes

- **Gradients** change based on `Brightness`, blending accent colors with surface tones for elevated cards.
- **Image placeholders** use `Image.asset` overlays plus semantic labels for accessibility.
- **Spacing helpers**: `paddingWithoutAppBar`, `defaultPadding`, and `AppSizes` keep layout consistent across devices.

## 3. LandingView Breakdown

`LandingView` leverages `CustomScrollView` with a `ScrollController` and a sequence of `SliverToBoxAdapter` widgets. Each sliver hosts a stand-alone section widget, making the page easy to remix.

| Section Component | Purpose | Key Elements |
| --- | --- | --- |
| `HeroSection` | High-level value proposition, CTA, and hero imagery (implementation lives in `components/hero_section.dart`). |
| `ServicesSection` | Highlights major offerings (medical coordination, accommodations, logistics, etc.). |
| `HowItWorksSection` | Step-by-step guide showing the booking/request pipeline. |
| `PlatformFeaturesSection` | Lists differentiators such as multilingual support, secure data, expert network, etc. |
| `TestimonialsSection` | Social proof with client quotes and ratings. |
| `ContactSection` | Inquiry form or contact details for leads. |
| `FooterSection` | Shared with MedTourLandingPage for consistency. |

### Shared Experience Traits

- **Surface background**: `Theme.of(context).colorScheme.surface` keeps the environment clean and matches light/dark palettes.
- **State management**: These landing screens are pure UI; they don’t rely on Bloc, so they’re lightweight for web/desktop builds.
- **Localization**: All textual content uses `AppLocalizations` (via `.tr(context)`) ensuring multi-language readiness.

## 4. Talking Points for Documentation / Portfolio

- **Brand Cohesion**: Both screens use the same SVG logo, footer, and gradient logic, reinforcing identity across entry points.
- **Responsive Layouts**: `LayoutBuilder` splits sections into columns when `maxWidth > 720`, otherwise stacks them vertically for mobile readability.
- **Actionable CTAs**: Hero buttons route to login or launch the corporate site, demonstrating integration between marketing and product flows.
- **Accessibility**: Image placeholders include semantic labels and gradient overlays for better contrast.
- **Extensibility**: Because sections are modular widgets, new campaigns can reorder or swap modules without touching business logic.

Use this overview to explain how visitors first experience the platform, from the marketing hero down to the call-to-action and navigation into the app. 

