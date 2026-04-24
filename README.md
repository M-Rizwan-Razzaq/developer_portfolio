# Muhammad Rizwan Portfolio

A polished, responsive portfolio website built to present projects, services, experience, testimonials, and contact details in one clean place.

**Live Demo:** [mrizwandev.vercel.app](https://mrizwandev.vercel.app/)  
**Screenshots:** [View the full gallery](#screenshots)  
**Code:** This repository

## Overview

This is a modern single-page portfolio experience with routed sections for:

- Home
- About
- Projects
- Services
- Blog
- Testimonials
- Contact

It is designed to feel fast, responsive, and professional across desktop and mobile, with animated sections, reusable UI components, and an email contact form.

## Screenshots

The screenshots below are stored in `public/readmepicture` and show the main sections of the website.

### Hero Section

![Hero section](./public/readmepicture/herosection)

### About

![About section](./public/readmepicture/About)

### Projects

![Projects section](./public/readmepicture/Projects)

### Services

![Services section](./public/readmepicture/services)

### Blog

![Blog section](./public/readmepicture/blogs)

### Testimonials

![Testimonials section](./public/readmepicture/testimonial)

### Technologies

![Technologies section](./public/readmepicture/technologies)

### Academic Background

![Academic section](./public/readmepicture/accademic)

### Contact

![Contact section](./public/readmepicture/contact)

### Footer

![Footer section](./public/readmepicture/footer)

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

- Strong hero section with clear call to action
- Responsive navbar with mobile menu
- Animated cards, sections, and transitions
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
- `public/readmepicture/` - README screenshots for each major section

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
