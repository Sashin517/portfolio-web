# 🚀 Sashin Deemantha | Developer & Designer Portfolio

## 🎯 Overview

A high-fidelity, high-performance personal portfolio website bridging the gap between front-end architecture and high-end visual design. This project showcases a seamless fusion of UI/UX case studies and complex Software Engineering projects (MLOps, SaaS, AI Agents). Built with Next.js 15, TypeScript, and a premium animation stack including GSAP and Framer Motion.

---

## 📦 Project Architecture

### 1. Core Application (`/app`)
- `layout.tsx` - Root layout with global font configurations and Lenis smooth-scroll provider.
- `page.tsx` - Main single-page application structuring the vertical flow of components.
- `globals.css` - Tailwind directives and custom utility classes.

### 2. UI Components (`/app/components`)
- `Navbar.tsx` - Custom "scroll-spy" navigation bar using mathematical scroll-position calculations to track active sections flawlessly.
- `Hero.tsx` - Dynamic landing section featuring GSAP-pulsing glows, custom SVGs, and a state-driven CV download dropdown.
- `Work.tsx` - Project showcase grid powered by GSAP `ScrollTrigger` for staggered reveal animations.
- `TechStack.tsx` - "Arsenal" grid featuring a draggable React component powered by Framer Motion and precise CSS dashed-pathing.
- `Footer.tsx` - Clean contact section with raw inline SVG integrations to eliminate heavy dependency requirements.

### 3. Static Assets (`/public`)
- `/projects/` - High-resolution (1440x1080) WebP/PNG thumbnails of featured case studies.
- `/cv/` - Downloadable PDF assets (`CV_SE.pdf`, `CV_UIUX.pdf`).
- `/icons/` - Custom UI SVGs exported directly from Figma (cursors, code brackets, etc.).

---

## 🚀 How to Run Locally

You need **Node.js** installed on your machine.

### Step 1: Install Dependencies

Open a terminal and navigate to the project root folder:

```bash
cd portfolio-web
```

Install the required Node packages:

```bash
npm install --legacy-peer-deps
```

> **Note:** Because this project uses Next.js 15 / React 19 alongside specific animation libraries, the `--legacy-peer-deps` flag avoids version resolution warnings.

### Step 2: Start the Development Server

```bash
npm run dev
```

Open your browser and go to **http://localhost:3000**.

### Step 3: Build for Production (Optional)

```bash
npm run build
npm start
```

---

## 🎨 Key Engineering Features

### ✅ Pixel-Perfect Figma Translation
Exact 1-to-1 reproduction of complex design constraints, including specific radial gradient stops (`#FFFFFF` to `#E8E8E8`) and precisely calculated dashed stroke vectors (16px weight, 9px gap).

### ✅ Advanced Scroll Intelligence
- **Premium Smooth Scrolling:** Integrated `@studio-freight/react-lenis` with custom physics (lerp: 0.08) for a buttery-smooth, floaty navigation feel.
- **Flawless Scroll-Spy:** A manual intersection calculation using dynamic pixel boundaries, so the active navigation pill tracks large, overflowing sections without stuttering.

### ✅ Fluid Micro-Interactions
Combines **Framer Motion** (spring-physics layout animations like the sliding nav pill and draggable tech-stack items) with **GSAP** (timeline animations and scroll-triggered reveals).

### ✅ Zero-Dependency Optimizations
Heavy icon libraries in the Footer were replaced with optimized, raw inline SVGs to fix caching conflicts and improve initial load times.

---

## 🔧 Tech Stack Reference

- **Framework:** Next.js 15 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation Engine:** GSAP (GreenSock) + ScrollTrigger plugin
- **UI Physics:** Framer Motion
- **Smooth Scrolling:** React Lenis
- **Iconography:** Lucide React & Custom Inline SVGs
- **Deployment:** Vercel (Recommended)

---

## 🤝 Let's Connect

Currently open to UI/UX and Software Engineering roles.

- **Email:** sashindeemantha@gmail.com
- **GitHub:** [Sashin517](https://github.com/Sashin517)
- **LinkedIn:** [sashindr](https://linkedin.com/in/sashindr)
- **Behance:** [sashindeemantha](https://behance.net/sashindeemantha)

---

*Designed & Engineered by Sashin Deemantha © 2026*