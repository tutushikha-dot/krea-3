# Krea 3 — Authentic Interactive Hero Section (100% Non-Minified)

A 100% non-minified, authentic implementation of the **[Krea 3](https://www.krea.ai/krea-3)** interactive hero section.

Designed with clean, human-readable semantic HTML, CSS, and vanilla ES6 JavaScript with complete developer control.

## 🚀 Live Demo Links
- **Live GitHub Pages URL**: [https://tutushikha-dot.github.io/krea-3/](https://tutushikha-dot.github.io/krea-3/)
- **Local Wi-Fi Server**: `http://192.168.0.146:8008/`
- **GitHub Repository**: [https://github.com/tutushikha-dot/krea-3](https://github.com/tutushikha-dot/krea-3)

---

## 📦 Architecture & Codebase

```
├── index.html         # 100% clean, semantic Hero section HTML
├── css/
│   └── hero.css       # 100% unminified, documented master styles & animations
├── js/
│   └── hero.js        # 100% unminified vanilla JS engine with exact coordinate math
├── fonts/             # Authentic Suisse Intl font family (.woff2) & fonts.css
├── assets/            # Authentic high-resolution WebP hero bases & edit layers
├── icons/             # Platform SVG vector assets
├── favicon/           # Platform & browser favicons
└── .nojekyll          # GitHub Pages static serving configuration
```

---

## ⚡ Features & Capabilities

1. **Exact 2736 × 1536 Canvas Coordinates**:
   - Matches the official Krea 3 coordinate engine (`box` and `layer` percentage positions).
2. **Interactive Bounding Boxes (`.k3r-box`)**:
   - Corner resize handles (`.k3r-handle.ne`, `.sw`, `.se`) with spring scaling.
   - Animated SVG trace stroke around active selection.
   - Number pins (`.k3r-label`).
3. **Glassmorphic Prompt Note Pills (`.k3r-note`)**:
   - Ultra-clean backdrop blur (`backdrop-filter: blur(40px) saturate(160%)`).
   - Pill badge status (`✓ Under 8s`).
   - Dynamic top/below placement based on bounding box Y-axis clearance.
4. **SVG Cutout Dimming Mask (`#k3-dim-holes`)**:
   - Dims the surrounding scene with `rgba(0, 0, 0, 0.32)` while cutting out sharp rectangular holes for active subjects.
5. **Multi-Subject Switcher**:
   - Includes full coordinate sets and authentic assets for:
     - **Sardines** (Overhead Lisboa tiles, bread, lemon to lime, green label)
     - **Windcoat** (Fashion editorial with dove, sunglasses, coat)
     - **Skate Crew** (Urban sidewalk candid with dino and ghost graphics)
     - **Billboard** (Sunset highway advertisement swap)
6. **Authentic Typography**:
   - Uses real **Suisse Intl** fonts directly linked from the `./fonts/` directory.
