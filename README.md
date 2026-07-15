# Masar NDT — Corporate Website

Company site for **Masar NDT / AKMEC Group**, showcasing inspection, conventional & advanced NDT, asset integrity engineering, manpower/outsourcing services, industries served, and a resources/workbook section.

This project is a standalone, frontend-only React Single Page Application (SPA), fully optimized for hosting on **GitHub Pages**.

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS + React Router
- **Routing:** HashRouter (handles routing entirely client-side, avoiding 404 reload errors on static hosts like GitHub Pages)
- **Database/Backend:** None (decoupled for static hosting; contact submissions are simulated client-side)

## Project Structure

```
masar-website/
├── .github/          GitHub Actions automated deployment workflow
├── src/              React source files (components, pages, data)
├── index.html        Main entry point
├── tailwind.config   Tailwind CSS configurations
├── vite.config.js    Vite building configurations
└── package.json      Project metadata, scripts and dependencies
```

## Getting Started

### 1. Installation

Install all required dependencies in the root directory:

```bash
npm install
```

### 2. Development Run

Start the local development server:

```bash
npm run dev
```

The site will be running on `http://localhost:5173`.

### 3. Production Build

Build the static distribution files:

```bash
npm run build
```

This compiles and outputs the optimized production files to the `dist/` directory.

---

## Deployment to GitHub Pages

This repository is pre-configured with **GitHub Actions** for seamless continuous integration and deployment.

### Automated Deployment (Recommended)

1. Push this project to your GitHub repository (onto the `main` or `master` branch).
2. Go to your repository on GitHub.
3. Navigate to **Settings** -> **Pages**.
4. Under **Build and deployment** -> **Source**, select **GitHub Actions** from the dropdown menu.
5. Every time you push updates to GitHub, the Action defined in `.github/workflows/deploy.yml` will automatically build the React app and deploy it to GitHub Pages.

---

## Contact Form submissions

Since the backend server has been removed, the contact form in `src/components/ContactForm.jsx` has been updated to simulate submission locally. It triggers a brief 1-second loading state and then shows the success screen without calling any external APIs.

To connect this to a real inbox in the future, you can integrate a third-party client-side form receiver (such as **Formspree**, **EmailJS**, or **Getform**) by updating the `handleSubmit` method.

## Editing Site Copy

All content (services, industries, office details, stats, etc.) lives in one place:

```
src/data/content.js
```

Edit this file to update text anywhere on the site — every page pulls from it.

## Design Notes

The visual identity uses an industrial "inspection nameplate / technical spec-sheet" language: deep steel-navy and warm off-white surfaces, a signal-red accent used for tags and calls to action, hairline "blueprint" grid dividers, and nameplate-style cards with corner crop-marks for service and method descriptions — echoing equipment ID plates and inspection stamps. Fonts: Oswald (display/headings), Inter (body), IBM Plex Mono (tags, codes, specs).
