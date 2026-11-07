# Krea 3 (krea.ai/krea-3) — Authentic 1:1 Production Website Mirror

A complete, authentic 1:1 mirror of the official **[Krea 3](https://www.krea.ai/krea-3)** website, with all production layouts, SvelteKit application bundles, SuisseIntl typography, interactive components, and high-resolution assets.

Designed for direct integration with **Magic Patterns**, **Claude Code**, GitHub Actions, and web agents.

## 🚀 Live Demo & Links
- **Live Website (GitHub Pages)**: [https://tutushikha-dot.github.io/krea-3/](https://tutushikha-dot.github.io/krea-3/)
- **GitHub Repository**: [https://github.com/tutushikha-dot/krea-3](https://github.com/tutushikha-dot/krea-3)

---

## 📦 Repository Structure

```
├── index.html         # Authentic Krea 3 production HTML (483 KB)
├── _app/              # SvelteKit production runtime, chunks & stylesheets
│   └── b6d71630aea537f6/
│       └── immutable/
│           ├── assets/    # Production CSS stylesheets (0.DUZ0V3xd.css, etc.)
│           ├── chunks/    # Component chunks (Hero, Benchmarks, PluginDock, etc.)
│           └── entry/     # SvelteKit hydration & app entry points
├── fonts/             # Complete SuisseIntl font family (.woff2) & fonts.css
├── assets/            # Authentic high-resolution WebP hero media & edit layers
├── plugins/           # Creative plugin dock icons (PS, AE, PR, Blender, etc.)
├── icons/             # UI vector icon assets
├── favicon/           # Platform & browser favicons
└── .nojekyll          # Directs GitHub Pages to serve _app/ without Jekyll filtering
```

---

## 🎨 Key Sections & Architecture

1. **Interactive Hero Prompt Editor**:
   - Dynamic prompt pill targeting with precise bounding coordinates and multi-subject layering (`windcoat`, `crew`, `sardine`, `billboard`).
2. **Speed & Latency Benchmarks**:
   - Curved latency speedometer gauge comparing generation speeds against leading models.
3. **Infinite Marquee**:
   - Production marquee component featuring partner studios and creative enterprises.
4. **Before / After Comparison Sliders**:
   - High-fidelity visual split comparisons with interactive position tracking.
5. **Creative Tools Plugin Dock**:
   - Interactive macOS-inspired magnification dock housing creative application integrations (Adobe Photoshop, Illustrator, Premiere Pro, After Effects, DaVinci Resolve, Blender, ChatGPT).
6. **Feature Matrix & FAQ**:
   - Expandable accordions, technical specifications, and tier breakdowns.

---

## 🛠️ Integration with Magic Patterns & AI Agents

- **Magic Patterns**: Connect this repository directly using `https://github.com/tutushikha-dot/krea-3` (Magic Patterns will read all original components, styles, and assets) or supply the live URL `https://tutushikha-dot.github.io/krea-3/`.
- **Claude Code**: Clone or reference this repository directly to inspect production CSS rules, Svelte component structures, and asset layouts.
