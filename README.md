# Krea 3 — Authentic Speed & Performance Comparison Section (100% Non-Minified)

A 100% non-minified, authentic implementation of the **[Krea 3](https://www.krea.ai/krea-3)** speed comparison component with rolling mechanical counters, semicircular speedometer gauge, and segmented tab switcher.

## 🚀 Live Demo Links
- **Local Wi-Fi Server**: `http://192.168.0.146:8008/`
- **Live GitHub Pages URL**: [https://tutushikha-dot.github.io/krea-3/](https://tutushikha-dot.github.io/krea-3/)
- **GitHub Repository**: [https://github.com/tutushikha-dot/krea-3](https://github.com/tutushikha-dot/krea-3)

---

## 📦 Architecture & Codebase

```
├── index.html              # 100% semantic HTML for the speed comparison section
├── css/
│   └── performance.css     # 100% unminified, documented styles, keyframes & container queries
├── js/
│   └── performance.js      # 100% unminified vanilla JS engine driving the rolling counter & gauge
├── fonts/                  # Authentic Suisse Intl font family (.woff2) & fonts.css
├── icons/                  # Platform SVG vector assets
├── favicon/                # Platform & browser favicons
└── .nojekyll               # GitHub Pages static serving configuration
```

---

## ⚡ Features & Micro-Interactions

1. **Rolling Mechanical Number Counter (`.roll`)**:
   - Implements Krea's vertical sliding counter with gradient mask edges.
   - Dual-layer rolling animation with motion blur clearance (`filter: blur(10px)` to `blur(0px)`).
   - Rhythmic staggered transition delay (0ms on `"Faster,"`, 90ms on `"Cheaper"`).
   - Width auto-calculation avoiding word jitter during number shifts.

2. **Authentic Semicircular Speedometer Gauge**:
   - `viewBox="0 0 1381 692"` with 53 precision-placed dots and 9 radial tick lines.
   - Dynamically highlights active dot arcs and tick lines based on speed ratio (`faster / 24`).

3. **Segmented "Compared to" Tab Switcher**:
   - Sliding white pill indicator with spring physics (`cubic-bezier(0.34, 1.3, 0.64, 1)`).
   - **GPT Image 2** (OpenAI icon): displays `10× Faster, 3× Cheaper`.
   - **Nano Banana Pro** (Banana emoji 🍌): displays `4× Faster, 2× Cheaper`.

4. **Floating Bottom Navigation Dock & Top Header**:
   - Header with Krea SVG logo, "Technical report", and "Contact sales" pill buttons.
   - Frosted glassmorphic bottom dock with "Capabilities", "Use Cases", "Performance" [active], "Benchmarks", and vibrant blue "Try Krea 3" CTA.
