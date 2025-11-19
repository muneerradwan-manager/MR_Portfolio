# Muneer Radwan — Flutter Portfolio

[Live Demo](https://muneerradwan-manager.github.io/MR_Portfolio/) · [Source Code](https://github.com/muneerradwan-manager/MR_Portfolio)

This repository hosts my production-ready portfolio built with React 19 and Vite. The site highlights my Flutter work across marketplaces, legal-tech, and enterprise apps with bilingual (English/Arabic) content, RTL-aware layout, and high-quality presentation assets. ([repo](https://github.com/muneerradwan-manager/MR_Portfolio))

## ✨ Highlights

- **Showcase ready** – hero story, deep project case studies, metrics, and screen galleries
- **Bilingual experience** – full i18n support (English + Arabic) with Cairo font and RTL spacing fixes
- **Accessible & responsive** – mobile-first layout, keyboard-friendly navigation, and theming controls
- **Production tooling** – Vite build, TailwindCSS, Framer Motion animations, and GitHub Pages deployment

## 🧩 Featured Projects

| Project                | Summary                                                         | Key Capabilities                                      |
| ---------------------- | --------------------------------------------------------------- | ----------------------------------------------------- |
| **MedTour.sy**         | Medical tourism OS for patients, partners, and coordinators     | 5 user roles, 11 locales, iOS/Android parity          |
| **OVACS Mobile Suite** | Case management workspace for regulated care teams              | CRUD rails, notifications, multi-channel comms        |
| **AutoLakta**          | Automotive marketplace for buyers, sellers, advertisers, admins | Advanced filters, seller dashboards, admin governance |

All project data lives in `src/data/projects.js`, making it easy to extend or localize.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, React Router
- **Styling:** TailwindCSS, custom CSS variables, Cairo font for Arabic
- **Animations:** Framer Motion, Lottie-ready sections
- **i18n:** react-i18next with EN/AR JSON locales
- **Deployment:** GitHub Actions → GitHub Pages (base path already configured)

## 🚀 Getting Started

```bash
git clone https://github.com/muneerradwan-manager/MR_Portfolio.git
cd MR_Portfolio
npm install
npm run dev
```

Other scripts:

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run build`   | Production build (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint                            |

## 📦 Project Structure

```
MR_Portfolio/
├── public/                # Static assets (favicons, screenshots)
├── src/
│   ├── components/        # Reusable UI (Navbar, Card, Button, etc.)
│   ├── pages/             # Home, Projects, ProjectDetails, About, Contact
│   ├── data/              # projects.js, about.js, profile.js, etc.
│   ├── i18n/              # EN/AR locale files + config
│   └── main.jsx           # App bootstrap
├── .github/workflows/     # CI deploy pipeline
├── index.html             # Meta + root container
└── vite.config.js         # Base path + React compiler config
```

## 🌍 Localization Notes

- Uses `react-i18next` with `src/i18n/locales/en.json` and `ar.json`
- `LanguageSwitcher` toggles `html[lang]` + `dir` and loads Cairo font for Arabic
- RTL spacing handled with logical utilities (`gap`, `text-start`, `rtl:rotate-180`)

## 📬 Contact

| Channel          | Details                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Email            | firebase.projects.1997@gmail.com                                                               |
| Phone / WhatsApp | +963-947-446-326                                                                               |
| LinkedIn         | [linkedin.com/in/muneer-radwan-3b7543352](https://www.linkedin.com/in/muneer-radwan-3b7543352) |

## 📄 License

This project is released under the MIT License.

---

Built with ❤️ by **Muneer Radwan** — mid-level Flutter developer focused on high-quality, multilingual mobile experiences.
