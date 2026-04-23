# Muhammad Rizwan Portfolio

A modern personal portfolio website built to showcase projects, services, experience, testimonials, and contact details in a clean, responsive UI.

## Overview

This project is a single-page style portfolio app with routed sections for:

- Home
- About
- Projects
- Services
- Blog
- Testimonials
- Contact

It uses animated UI elements, responsive layouts, and a contact form that sends submissions through FormSubmit.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Router DOM
- TanStack Query
- Sonner and Radix UI components

## Features

- Responsive navbar with mobile menu
- Animated hero, cards, and section transitions
- Dedicated pages for portfolio content
- Skill, experience, education, and project sections
- Contact form with email submission
- WhatsApp floating action button
- Toast notifications for feedback
- Vercel-ready routing configuration

## Project Structure

- `src/App.tsx` - App routing and providers
- `src/pages/` - Route pages such as Home, About, Projects, and Contact
- `src/components/` - Shared layout, navigation, footer, and UI pieces
- `src/components/ui/` - Reusable shadcn-style UI components
- `src/assets/` - Static assets used by the site

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Lint

```bash
npm run lint
```

### Run Tests

```bash
npm run test
```

## Deployment

This app is Vercel-friendly and includes a `vercel.json` rewrite so client-side routing works on refresh.

For deployment:

1. Build the app with `npm run build`
2. Deploy the generated production output with your hosting provider
3. Make sure the host supports SPA rewrites for React Router


## Notes

- The contact form is wired to FormSubmit.
- Social links and WhatsApp contact are already included in the UI.
- The project is designed to be easy to extend with more portfolio content, blog posts, or service pages.
