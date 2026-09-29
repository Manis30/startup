# Startup Landing Page

A modern startup marketing website built with React, TypeScript, Vite, and Tailwind CSS. This project is designed as a polished SaaS-style landing page with sections for features, services, pricing, blog content, and simple authentication screens.

## Overview

This app is a responsive one-page startup website with:

- Dark-themed SaaS-style UI
- Navigation and mobile menu
- Feature highlight blocks
- Service showcase sections
- Pricing card comparison with monthly/yearly toggle
- Blog cards and newsletter/contact form
- Sign in and sign up pages
- Smooth visual styling and hover interactions

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide and Heroicons

## Project Structure

```text
week3/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── index.html
└── README.md
```

## Features

- Responsive homepage for a startup or SaaS brand
- UIs tailored for marketing and conversion-focused pages
- Interactive pricing switcher
- Multiple route pages for authentication flows
- Clean, reusable component-based architecture
- Optimized production build with Vite

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

The app will be available in your browser at the local Vite URL, usually:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the app for production
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## Production Build

To generate a production bundle:

```bash
npm run build
```

Then preview it with:

```bash
npm run preview
```

## Deployment

This project is compatible with static hosting platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Azure Static Web Apps

For a basic deployment flow, build the project and upload the contents of the `dist` folder.

## Customization

You can easily tailor this template to your brand by editing:

- `src/components/header.tsx` for navigation and branding
- `src/components/features.tsx` for feature content
- `src/components/price.tsx` for pricing plans
- `src/components/blog.tsx` for articles and announcements
- `src/App.tsx` for route configuration
- `src/index.css` for global styling and design tokens

## Notes

- The project uses a modern dark UI palette and is intended for product marketing websites.
- Authentication pages are basic route-driven templates and can be extended with real backend/API integration.
- The project was verified with a successful production build using `npm run build`.

## License

This project is licensed under the ISC License.
