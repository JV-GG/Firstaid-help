# 🩺 Clinical Emergency First Aid Guide

A production-ready, full-stack medical protocol application designed to deliver immediate, clinical-grade step-by-step first aid guidance. This system features an interactive AI emergency co-pilot, standardized medical acronym visualizations, and triage severity indicators, wrapped in a high-end, responsive dark clinical-cool interface.

---

## 🚀 Key Features

*   **Clinical Taxonomy & Guidance**: Comprehensive, pre-verified instructions covering 10 major emergency categories (Fractures, Burns, Bleeding, Choking, Cardiac Events, Poisoning, Allergic Reactions, and more).
*   **Interactive AI Co-Pilot**: An integrated slide-out chat drawer (`ChatDrawer`) powered by the **MiniMax-M2.7** model via the MiniMax Chat Completion API, providing instant, calm, and tailored first aid advice.
*   **Standardized Medical Directives**: Visual rendering of clinical acronyms (e.g., **R.I.C.E.** for sprains, **D.R.I.** for fractures, **C.C.C.** for burns, and **C.A.B.** for CPR) using the custom `FormulaDisplay` component.
*   **Triage Severity Tiers**: Dynamic severity classification (**Mild**, **Moderate**, **Severe**) visually represented with custom `SeverityBadge` components.
*   **Safety Safeguards ("Do Nots")**: Prominent caution panels (`DoNotBox`) highlighting contraindicated actions for each specific trauma event to prevent further injury.
*   **High-End Dark Clinical-Cool UI**:
    *   Dynamic ECG heartbeat pulse background using **Framer Motion**.
    *   Ultra-fine visual noise styling for depth and premium textures.
    *   Modern typography featuring Vercel's **Geist / Inter**, **Space Grotesk**, and **JetBrains Mono**.
    *   Glassmorphism card animations and responsive layout grids.
    *   Sticky Quick Access bar for instant navigation to high-priority protocols on mobile.

---

## 🛠 Tech Stack

*   **Framework**: [Next.js 16 (Turbopack, App Router)](https://nextjs.org/)
*   **Core Logic**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **AI Integration**: MiniMax AI (`MiniMax-M2.7` Text Chat Completion API)

---

## 📁 Project Architecture

```txt
├── app/
│   ├── api/chat/route.ts        # MiniMax AI assistant routing endpoint
│   ├── category/
│   │   └── [slug]/              # Category pages (e.g., /category/fractures)
│   │       ├── [type]/          # Injury detail pages (e.g., /category/fractures/collarbone)
│   │       │   ├── loading.tsx
│   │       │   └── page.tsx     # Render step-by-step guides, "Do Nots", and recovery info
│   │       ├── loading.tsx
│   │       └── page.tsx         # Category overview and injury type selections
│   ├── globals.css              # Theme variables, custom scrollbars, noise and glassmorphism styling
│   ├── layout.tsx               # Root layout, Google Fonts integration, visual noise overlay
│   └── page.tsx                 # App landing page with taxonomy grid & ECG animation
├── components/
│   ├── BackgroundNoise.tsx      # SVG texture background for depth
│   ├── BreadcrumbNav.tsx        # Responsive navigation helper
│   ├── CategoryCard.tsx         # Grid card with interactive glassmorphism hover animations
│   ├── ChatDrawer.tsx           # Floating AI assistant launcher and message terminal
│   ├── DoNotBox.tsx             # Red alert section listing contraindicated actions
│   ├── EmergencyBanner.tsx      # High-visibility warning alert
│   ├── FormulaDisplay.tsx       # Highlights acronym directives (RICE, DRI)
│   ├── QuickAccessBar.tsx       # Mobile-optimized bottom sticky bar
│   ├── SeverityBadge.tsx        # Colored triage indicators (green, yellow, red)
│   └── StepCard.tsx             # Interactive interactive step-by-step rescue instructions
├── lib/
│   ├── firstaid-data.ts         # Static first-aid medical taxonomy and protocol data
│   └── minimax.ts               # MiniMax API configuration helper client
├── package.json
└── tsconfig.json
```

---

## 🔑 Environment Setup

To run the AI assistant (First Aid Co-Pilot), copy the environment setup and add your MiniMax API Key:

Create a `.env.local` file in the root directory:

```env
# MiniMax API Credentials
MINIMAX_API_KEY=your_minimax_api_key_here
NEXT_PUBLIC_MINIMAX_API_KEY=your_minimax_api_key_here
```

---

## 💻 Getting Started

Ensure you have [Node.js](https://nodejs.org/) installed. We recommend using `pnpm` or `npm`.

### 1. Install dependencies
```bash
pnpm install
# or
npm install
```

### 2. Run the development server
```bash
pnpm dev
# or
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build for production
```bash
pnpm build
# or
npm run build
```

### 4. Run production build
```bash
pnpm start
# or
npm run start
```

### 5. Lint and format
```bash
pnpm lint
# or
npm run lint
```

---

## ⚕️ Medical Disclaimer

> [!WARNING]
> This application is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, treatment, or clinical judgement. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. **If you are experiencing a life-threatening medical emergency, call your local emergency services (e.g., 911 / 999) immediately.**
