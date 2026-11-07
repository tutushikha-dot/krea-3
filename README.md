# Krea 3 — Official Design System, Components & Interactive Showcase

A 100% non-minified, authentic implementation of **[Krea 3](https://www.krea.ai/krea-3)** featuring the **Complete Design System & Component Library**, alongside the **Speed & Cost Performance Comparison** and **Interactive Hero Editor**.

## 🚀 Live Demo Links
- **Design System Catalog & Playground**:
  - Local Wi-Fi: `http://192.168.0.146:8008/design-system.html`
  - GitHub Pages: [https://tutushikha-dot.github.io/krea-3/design-system.html](https://tutushikha-dot.github.io/krea-3/design-system.html)
- **Live Landing Page (Performance + Hero)**:
  - Local Wi-Fi: `http://192.168.0.146:8008/`
  - GitHub Pages: [https://tutushikha-dot.github.io/krea-3/](https://tutushikha-dot.github.io/krea-3/)
- **GitHub Repository**: [https://github.com/tutushikha-dot/krea-3](https://github.com/tutushikha-dot/krea-3)

---

## 🎨 Design System Architecture & Tokens

All tokens are defined in [`css/tokens.css`](file:///Users/sumitimac27/httrack/krea-3-repo/css/tokens.css) with zero third-party dependencies:

```
krea-3-repo/
├── css/
│   ├── tokens.css          # Core Design System tokens (Typography, Colors, Radii, Shadows, Easings)
│   ├── components.css      # 100% authentic, modular component classes
│   ├── performance.css     # Unminified styles for the Speedometer Gauge & rolling numbers
│   └── hero.css            # Unminified styles for the Hero stage, SVG cutout mask & prompt pins
├── js/
│   ├── components.js       # Vanilla ES6 drivers for toggles, comparison slider & carousel
│   ├── performance.js      # Vanilla JS rolling counter & gauge engine
│   └── hero.js             # Vanilla JS inpainting mask & prompt engine
├── design-system.html      # Interactive living documentation & component playground
├── index.html              # Main production landing page
└── assets/                 # High-resolution WebP hero bases & localized edit layers
```

---

## 📦 Exact Components

1. **Button System (`.k3-btn`)**:
   - `.k3-btn-primary`: Solid high-contrast pill (white on dark / black on light).
   - `.k3-btn-secondary`: Translucent glassmorphism (`backdrop-filter: blur(16px)` + inset border).
   - `.k3-btn-outline`: Clean bordered pill for secondary actions ("Technical report").
   - `.k3-btn-brand`: Royal blue CTA (`#2563eb`) with ambient glow shadow.
   - `.k3-btn-chip`: Glassmorphic press-to-compare trigger ("Hold to compare").
   - `.active-scale-95`: Spring click physics across all interactive buttons.

2. **SVG Icon Suite (`.k3-icon`)**:
   - Handcrafted 24×24 line geometry (Feather/Lucide style, 100% stroke, zero image dependencies).
   - `krea-brand`, `sparkle`, `image-plus`, `chevron-left/right/down`, `arrow-up-right`, `rotate-ccw`, `close-x`, `check`, and `loader-spin`.

3. **Segmented Toggles & Tabs (`.k3-toggle-group`)**:
   - Radio group accessible segmented switches (2, 3, or 4 options).
   - Spring-physics sliding white indicator pill (`cubic-bezier(0.34, 1.3, 0.64, 1)`).

4. **Comment Badges, Pins & Bounding Boxes (`.k3r-*`)**:
   - `.k3r-label`: Teardrop numbered pin badge (`14px 14px 14px 4px`) with dynamic `--region-color`.
   - `.k3r-note`: Frosted glass prompt capsule with blur 40px and `✓ Under 8s` timing pill.
   - `.k3r-box`: Interactive canvas bounding box with 4-corner hover-scale handles (`.k3r-handle`).

5. **Before / After Split Comparison Slider (`.k3-compare-slider`)**:
   - Touch & mouse draggable vertical split divider with circular grip puck.
   - Live split clipping via CSS custom properties (`--split: X%`).

6. **Curved Slide Gallery Carousel (`.k3-carousel`)**:
   - Horizontal scroll-snap gallery with grab-to-drag cursor and circular arrow controls.

7. **Navigation Docks & Headers**:
   - `.k3-top-header`: Fixed header with automatic light/dark mode adaptation.
   - `.k3-floating-dock`: Frosted bottom dock with active tab states and brand CTA button.
