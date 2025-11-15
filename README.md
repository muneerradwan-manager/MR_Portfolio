# Muneer Radwan - Flutter Developer Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing Flutter applications and development skills. Features a clean UI with dark/light theme support, smooth animations, and a fully responsive design.

## 🚀 Features

- **Modern UI/UX**: Clean, elegant design with smooth animations using Framer Motion
- **Dark/Light Theme**: Toggle between dark and light modes with persistent theme preference
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Smooth Animations**: Scroll-triggered animations and page transitions
- **Project Showcase**: Display Flutter projects with details, technologies, and links
- **Contact Form**: Functional contact form with validation
- **GitHub Pages Ready**: Automated deployment workflow included

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/muneer_radwan_portfolio.git
   cd muneer_radwan_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in the terminal)

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
muneer_radwan_portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                      # Static assets
├── src/
│   ├── components/              # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── projects.js          # Project data
│   ├── pages/                   # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx                  # Main app component with routing
│   ├── index.css                # Global styles with Tailwind
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── package.json
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md
```

## 🎨 Customization

### Updating Project Data

Edit `src/data/projects.js` to add, remove, or modify projects:

```javascript
{
  id: 1,
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["Flutter", "Dart", "Firebase"],
  screenshots: ["/screenshots/project-1.jpg"],
  githubLink: "https://github.com/yourusername/project",
  playStoreLink: "https://play.google.com/store/apps/...",
  featured: true
}
```

### Updating Personal Information

1. **Contact Information**: Edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`
2. **About Section**: Edit `src/pages/About.jsx` and `src/pages/Home.jsx`
3. **Social Links**: Update links in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

### Theme Colors

Modify `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom primary colors
  }
}
```

### SEO Metadata

Update `index.html` with your personal information:
- Title and description
- Open Graph tags
- Twitter card metadata
- Update the base URL in meta tags

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Update Base Path** (if needed)
   - If your repository name is different, update the `base` in `vite.config.js`:
     ```javascript
     base: '/your-repo-name/',
     ```

3. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

4. **Wait for Deployment**
   - Go to the "Actions" tab in your repository
   - Wait for the workflow to complete
   - Your site will be available at `https://yourusername.github.io/muneer_radwan_portfolio/`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder**
   - Use GitHub Pages, Netlify, Vercel, or any static hosting service
   - Upload the contents of the `dist` directory

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Features Breakdown

### Pages

- **Home**: Hero section with introduction and skills overview
- **Projects**: Grid layout showcasing Flutter applications
- **About**: Detailed information about skills, experience, and background
- **Contact**: Contact form and social media links

### Components

- **Navbar**: Responsive navigation with active route highlighting
- **Footer**: Social links and quick navigation
- **Card**: Reusable card component with hover effects
- **Button**: Multiple button variants (primary, secondary, outline, ghost)
- **ThemeToggle**: Dark/light mode switcher

## 🔧 Configuration

### Vite Configuration

The `vite.config.js` includes:
- React plugin with compiler
- Base path for GitHub Pages deployment

### Tailwind Configuration

The `tailwind.config.js` includes:
- Dark mode support (class-based)
- Custom color palette
- Extended theme configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Muneer Radwan**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

---

Made with ❤️ using React and Vite
