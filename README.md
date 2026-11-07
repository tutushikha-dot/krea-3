# Krea 3 (krea.ai/krea-3) — Master Component & Animation Reference

A complete, self-contained, dependency-free reference implementation of the **[Krea 3](https://www.krea.ai/krea-3)** landing page, designed for **Magic Patterns**, **Claude Code**, and AI coding agents.

## 🚀 Live Demo & Links
- **GitHub Repository**: [https://github.com/tutushikha-dot/krea-3](https://github.com/tutushikha-dot/krea-3)
- **Live GitHub Pages URL**: [https://tutushikha-dot.github.io/krea-3/](https://tutushikha-dot.github.io/krea-3/)

---

## 📦 What is inside this repository:
1. `index.html`: Fully self-contained, standalone interactive webpage with inlined styles, SVGs, and animations.
2. `css/styles.css`: Complete design system, utility classes, and custom keyframe animations.
3. `js/main.js`: Vanilla JavaScript driving all micro-interactions (no frameworks or bundlers required).
4. `krea-3-reference.html`: Single-file architecture blueprint with embedded agent specifications.

---

## 🎨 Design System Specifications

### 1. Typography
- **Primary Font**: `"Plus Jakarta Sans"`, `"Suisse Intl"`, -apple-system, sans-serif
- **Code / Mono**: `"JetBrains Mono"`, monospace
- **Display Hero Title**: `clamp(2.5rem, 5.5vw, 4.5rem)`, weight `700`, tracking `-0.04em`, line-height `1.05`
- **Section Heading**: `2.25rem - 2.5rem`, weight `700`, tracking `-0.03em`
- **Body & Descriptions**: `1.0625rem`, color `#71717a`

### 2. Color Palette & Tokens
- **Backgrounds**: `#ffffff` (light), `#fafafa` (secondary), `#f4f4f5` (tertiary), `#09090b` (inverse dark)
- **Text**: `#09090b` (primary), `#71717a` (muted), `#ffffff` (inverse)
- **Borders**: `#e4e4e7` (subtle border), `#d4d4d8` (strong border)
- **Accents**:
  - Brand Blue: `#2563eb`
  - Neon Pink (prompt bounding box): `#ec4899`
  - Sunflower Yellow: `#eab308`
  - Forest Green: `#15803d`
  - Lilac Purple: `#a855f7`
  - Sand Amber: `#d97706`

---

## ⚡ Animation & Micro-Interaction Engine

### 1. Interactive Hero Prompt Editor (`#hero`)
- **Location**: Homepage Hero
- **Behavior**: Clicking prompt pills (`amber shield glasses`, `flying white dove`, `glossy red lip`, `shearling coat`) highlights the exact bounding box over the subject and cross-fades the corresponding edit layer.
- **Subject Switcher**: Tabs to switch between 4 base subjects (`windcoat`, `crew`, `sardine`, `billboard`).

### 2. Speed Gauge & Latency Benchmarks (`#benchmarks`)
- **Location**: Speed comparison / "How it works" section
- **Visual**: Arched speedometer gauge highlighting 4× faster latency than Nano Banana Pro, with comparative animated progress bars.

### 3. Infinite Enterprise Partner Marquee
- **Keyframe**: `@keyframes marquee`
- **Timing**: `25s linear infinite`, pauses on hover with horizontal gradient fade masks.

### 4. Interactive Before/After Diff Slider
- **Behavior**: Draggable / pointer-following split slider with clipped paths comparing high-fidelity 4K output against competitors.

### 5. Hex Color Realtime Swatches (`#hex-colors`)
- **Behavior**: Clicking hex color pills (`Original`, `Sunflower`, `Forest`, `Lilac`, `Sand`) triggers an instant product variant transition.

### 6. Floating macOS Plugin Dock (`#plugins`)
- **Behavior**: Parabolic hover magnification (scales from `1.0` up to `1.55` based on mouse distance) with spring physics and floating tooltips for creative plugins (Photoshop, Illustrator, After Effects, Premiere, DaVinci, Blender, ChatGPT).

### 7. Expandable FAQ Accordion (`#faq`)
- **Behavior**: Smooth height expansion (`max-height` transition) with 180-degree chevron rotation.

---

## 🛠️ Instructions for Magic Patterns & AI Agents
- **To use as Homepage Hero**: Take `<header id="hero" class="hero-section">` and the accompanying CSS/JS.
- **To use as "How It Works" Section**: Use `<section id="benchmarks">` or `<section id="use-cases">`.
- **To use the Plugin Dock**: Transplant `<section id="plugins">` and the dock magnification script in `js/main.js`.