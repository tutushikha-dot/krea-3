# Krea 3 — Authentic Speed Comparison & Interactive Hero Editor (100% Non-Minified)

A 100% non-minified, authentic implementation of **[Krea 3](https://www.krea.ai/krea-3)** featuring both the **Speed & Cost Performance Comparison** section and the **Interactive Hero Image Editor** directly below it on the same page.

## 🚀 Live Demo Links
- **Local Wi-Fi Server**: `http://192.168.0.146:8008/`
- **Live GitHub Pages URL**: [https://tutushikha-dot.github.io/krea-3/](https://tutushikha-dot.github.io/krea-3/)
- **GitHub Repository**: [https://github.com/tutushikha-dot/krea-3](https://github.com/tutushikha-dot/krea-3)

---

## 📦 Architecture & Codebase

```
├── index.html              # 100% clean, semantic HTML with both Performance & Hero sections
├── css/
│   ├── performance.css     # 100% unminified styles for Speedometer Gauge, rolling numbers, & docks
│   └── hero.css            # 100% unminified styles for canvas scaling, SVG cutout mask, & prompt pins
├── js/
│   ├── performance.js      # 100% unminified JS driving rolling mechanical counters & gauge dots/ticks
│   └── hero.js             # 100% unminified JS driving dynamic SVG mask cutouts, pins, & subject switching
├── assets/                 # High-resolution WebP hero bases & localized edit layers
├── fonts/                  # Authentic Suisse Intl font family (.woff2) & fonts.css
├── icons/                  # Platform SVG vector assets
├── favicon/                # Platform & browser favicons
└── .nojekyll               # GitHub Pages static serving configuration
```

---

## ⚡ Features & Micro-Interactions

### Section 1: Speed & Cost Performance Comparison
1. **Rolling Mechanical Counter Animation (`.roll`)**:
   - Vertical rolling counter with gradient mask edge clipping.
   - Dual-layer rolling animation with motion blur clearance (`filter: blur(10px)` to `blur(0px)`).
   - Rhythmic staggered transition delay (0ms on `"Faster,"`, 90ms on `"Cheaper"`).
   - Automatic width calculation to eliminate text jitter.

2. **Authentic Semicircular Speedometer Gauge**:
   - `viewBox="0 0 1381 692"` with 53 precision-placed dots and 9 radial tick lines.
   - Dynamically highlights active dot arcs and radial ticks based on speed ratio (`faster / 24`).

3. **Segmented "Compared to" Tab Switcher**:
   - Sliding white pill indicator with spring physics (`cubic-bezier(0.34, 1.3, 0.64, 1)`).
   - **GPT Image 2** (OpenAI icon): displays `10× Faster, 3× Cheaper`.
   - **Nano Banana Pro** (Banana emoji 🍌): displays `4× Faster, 2× Cheaper`.

---

### Section 2: Interactive Hero Image Editor
1. **Multi-Subject Inpainting Engine**:
   - Switch between **Sardines & Lisbon Tiles**, **Fashion Editorial (Windcoat)**, **Skate Crew**, and **Roadside Billboard**.
   - Base 2736×1536 canvas responsive scaling via `@container` queries.

2. **Glassmorphic Prompt Badges & Bounding Boxes**:
   - Pin 1: `"Swap the lemon for a lime"` (`✓ Under 8s`)
   - Pin 2: `"Make the label emerald green"` (`✓ Under 8s`)
   - Interactive bounding boxes with 4-corner `.k3r-handle` indicators.

3. **Dynamic SVG Cutout Mask**:
   - `#k3-dim-holes` mask creates dark background scrim while dynamically punching out rectangular windows with rounded corners around active edited areas.
   - Light sweep gradient animation across freshly inpainted layers.

---

### Global Chrome & Navigation
- **Adaptive Top Header**: Seamlessly transitions between light theme on the performance section (black logo and buttons) and dark glassmorphic theme on the hero section (white logo, translucent blur button).
- **Floating Bottom Navigation Dock**: Frosted glassmorphism with one-click smooth scrolling between `Performance` and `Hero Editor`, plus active tab state detection via `IntersectionObserver`.
