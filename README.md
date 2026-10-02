# GrowMyTherapy - Single-Page Therapist Website Submission

A high-performance, responsive single-page website built for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in Santa Monica, CA. This project was developed as part of the recruitment process for GrowMyTherapy, cloning and adapting the layout structure of Conejo Valley Family Counseling while applying custom branding, local SEO copywriting, and custom UI sections.

---

## 🚀 Live Demo & Repository

- **Live Deployment:**  https://growmytherapy-profile.netlify.app/
- **GitHub Repository:**  https://github.com/ShaziyaKhanam888/growmytherapy
- **Video Walkthrough:**  https://www.loom.com/share/9f247d19ac5a4224a1fca1df4d88e6e2

---

## 🛠️ Tech Stack & Tools

- **Framework:** Next.js (App Router)
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS (v4)
- **Deployment:** Netlify
- **Icons:** Custom SVG Components

---

## ✨ Features & Requirements Fulfilled

### 1. Structure & Layout Clone (Part 1)
- Recreated the exact structure, vertical proportions, and desktop/mobile container layout from the template reference.
- **Hero Section Image Handling:** Optimized for both desktop and mobile views. Uses a framed container on desktop and dynamic scaling (`h-auto` with `object-top`) on mobile to ensure Dr. Maya's photo renders fully without clipping.

### 2. Custom Color Theme (Part 2)
Developed a distinct, accessible color palette tailored for a modern therapy practice:
- **Deep Navy Blue (`#0F172A`):** Used for primary headings, branding, and footer elements.
- **Soft Slate Grey (`#475569`):** Applied to body copy and secondary metadata for clean contrast.
- **Vibrant Coral (`#FF6B57`):** Accent color for primary CTAs, link hovers, badge tags, and icons.
- **Soft Cool Background (`#F4F6F8`):** Off-white canvas providing warm visual comfort.

### 3. Copywriting & Local SEO Optimization (Part 2)
- Tailored for **Dr. Maya Reynolds, PsyD** in **Santa Monica, CA**.
- Integrated specialized SEO keywords and targeted services:
  1. *Anxiety & Burnout Therapy in Santa Monica*
  2. *Trauma & EMDR Therapy in Santa Monica*
  3. *Therapy for High-Achievers & Perfectionism*
- Integrated core modalities including Cognitive Behavioral Therapy (CBT), EMDR, and mindfulness techniques.

### 4. Custom "Our Office" Section (Part 3)
- Built a dedicated `#office` section highlighting her physical therapy environment at *123th Street 45 W, Santa Monica, CA*.
- Displays high-resolution office space images (`office1.jpeg` and `office2.jpeg`) in a responsive grid layout.

---

## 📁 Project Folder Structure

```text
growmytherapy/
├── app/
│   ├── globals.css      # Custom Tailwind CSS theme variables
│   ├── layout.js        # Root metadata & font setup
│   └── page.js          # Single-page layout assembly
├── components/
│   ├── Navbar.jsx       # Header & navigation links
│   ├── Hero.jsx         # Hero section & profile image container
│   ├── Intro.jsx        # Quote block & practitioner background
│   ├── WhoWeHelp.jsx    # 3 Specialized SEO service cards
│   ├── Office.jsx       # Custom Part 3 Santa Monica office showcase
│   ├── Icons.jsx        # SVGs for therapy modalities
│   └── Footer.jsx       # Practice info, CTA & copyright
└── public/
    └── images/          # Assets (Dr. Maya's profile photo & office images)
