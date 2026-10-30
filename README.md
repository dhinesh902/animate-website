# Jrink – Premium Orange Cinematic Landing Page

An ultra-premium, cinematic product landing page for **Jrink Orange** delivering an immersive Apple-style product storytelling experience with scroll-controlled image sequence animation, luxury black-and-orange visual theme, and smooth GSAP ScrollTrigger timeline transitions.

---

## 🍊 Features & Highlights

- **Scroll-Controlled Canvas Image Sequence**: 299 high-definition frames rendered on an optimized HTML5 Canvas, pinned and synchronized to scroll progress using **GSAP ScrollTrigger**.
- **Apple-Style Typography & Storytelling**: Dynamic overlay scenes gracefully fade in and out at choreographed scroll checkpoints:
  - *Scene 1*: `PURE. NATURAL. UNFILTERED.`
  - *Scene 2*: `ONE FRUIT. ENDLESS FRESHNESS.`
  - *Scene 3*: `FRESHNESS IN EVERY MOMENT.`
  - *Scene 4*: `FEEL THE ORANGE.`
- **Luxury Black & Orange Aesthetics**:
  - Deep black background (`#050505`)
  - Primary Orange (`#FF7A00`) and Golden Orange (`#FFA726`)
  - Frosted glass cards (`glass-panel`) with ambient orange glows and refined borders.
- **High-Performance Architecture**:
  - Intelligent aspect ratio preservation (no image distortion).
  - High-DPI / Retina device pixel ratio support.
  - Zero unnecessary React re-renders during scrubbing via direct `requestAnimationFrame` canvas drawing.
  - Automatic detection, natural ascending sorting, and preloading of frames.
- **Comprehensive Page Flow**:
  - Sticky glass navigation header with responsive mobile drawer.
  - Hero section with ambient lighting, floating particles, and scroll indicator.
  - Pinned cinematic canvas animation section with real-time frame counter.
  - Editorial "It Starts With Nature" split-screen brand story.
  - 3 Dark glass feature cards ("Natural Beauty", "Bold Freshness", "Pure Energy").
  - Full-width cinematic CTA section.
  - Minimalist luxury footer with social links and back-to-top interaction.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://gsap.com/) & [GSAP ScrollTrigger](https://gsap.com/scrolltrigger/)
- **Component Motion**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Canvas Engine**: HTML5 Canvas with 2D Context & DPR scaling

---

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── frames/route.ts       # Automatic frame detection & sorting API
│   ├── globals.css               # Global theme tokens, glows, scrollbars
│   ├── layout.tsx                # Metadata & root layout
│   └── page.tsx                  # Main server component
├── components/
│   ├── Header.tsx                # Sticky glassmorphic navigation header
│   ├── HeroSection.tsx           # Immersive hero with ambient lighting & CTA
│   ├── OrangeSequence.tsx        # GSAP ScrollTrigger canvas sequence & scenes
│   ├── BrandStory.tsx            # Editorial split-screen brand philosophy
│   ├── FeaturesSection.tsx       # 3 Dark glass experience cards
│   ├── CTASection.tsx            # Full-width dramatic promotional banner
│   ├── Footer.tsx                # Minimalist luxury footer
│   └── LoadingScreen.tsx         # Circular progress & preloading screen
├── hooks/
│   └── useImageSequence.ts       # Image preloading & progress tracker hook
├── lib/
│   └── getFrames.ts              # Natural ascending frame sorter
└── public/
    ├── orange/                   # 299 orange animation frames
    ├── orange-hero.png           # High-resolution hero visual
    └── jring.webp                # Branded graphic asset
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```
