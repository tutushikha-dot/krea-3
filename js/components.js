/**
 * Krea 3 — Design System Components Interactive Engine (100% Non-Minified)
 * Zero external dependencies. Pure vanilla ES6.
 */

// 1. Segmented Toggle Component Driver
class K3Toggle {
	constructor(containerEl) {
		this.container = containerEl;
		this.pill = this.container.querySelector('.k3-toggle-pill');
		this.buttons = Array.from(this.container.querySelectorAll('.k3-toggle-btn'));
		
		if (!this.buttons.length) return;

		this.init();
	}

	init() {
		// Set total items custom property
		this.container.style.setProperty('--total-items', this.buttons.length);

		// Determine initial active index
		let activeIndex = this.buttons.findIndex(b => b.classList.contains('active') || b.getAttribute('aria-checked') === 'true');
		if (activeIndex === -1) activeIndex = 0;

		this.setActive(activeIndex, false);

		// Bind click events
		this.buttons.forEach((btn, index) => {
			btn.addEventListener('click', () => {
				this.setActive(index, true);
				this.dispatchChange(btn, index);
			});
		});
	}

	setActive(index, triggerEvent = true) {
		this.buttons.forEach((b, i) => {
			const isTarget = i === index;
			b.classList.toggle('active', isTarget);
			b.setAttribute('aria-checked', isTarget ? 'true' : 'false');
		});

		if (this.pill) {
			this.pill.style.setProperty('--i', index);
		}
	}

	dispatchChange(btn, index) {
		const event = new CustomEvent('k3-toggle-change', {
			bubbles: true,
			detail: {
				index,
				value: btn.getAttribute('data-value') || btn.textContent.trim(),
				button: btn
			}
		});
		this.container.dispatchEvent(event);
	}
}

// 2. Before/After Split Comparison Slider Driver
class K3CompareSlider {
	constructor(containerEl) {
		this.container = containerEl;
		this.divider = this.container.querySelector('.k3-compare-divider');
		this.beforeLayer = this.container.querySelector('.k3-compare-before');
		this.isDragging = false;

		this.init();
	}

	init() {
		this.setSplit(50);

		// Mouse and Touch Listeners
		const onPointerDown = (e) => {
			this.isDragging = true;
			this.updatePosition(e);
		};

		const onPointerMove = (e) => {
			if (!this.isDragging) return;
			this.updatePosition(e);
		};

		const onPointerUp = () => {
			this.isDragging = false;
		};

		this.container.addEventListener('mousedown', onPointerDown);
		window.addEventListener('mousemove', onPointerMove);
		window.addEventListener('mouseup', onPointerUp);

		this.container.addEventListener('touchstart', onPointerDown, { passive: true });
		window.addEventListener('touchmove', onPointerMove, { passive: true });
		window.addEventListener('touchend', onPointerUp);
	}

	updatePosition(e) {
		const rect = this.container.getBoundingClientRect();
		const clientX = e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
		const offsetX = clientX - rect.left;
		let percentage = (offsetX / rect.width) * 100;
		percentage = Math.max(0, Math.min(100, percentage));

		this.setSplit(percentage);
	}

	setSplit(pct) {
		this.container.style.setProperty('--split', `${pct}%`);
		this.container.style.setProperty('--split-num', pct);
	}
}

// 3. Carousel Horizontal Scroll Driver
class K3Carousel {
	constructor(containerEl) {
		this.container = containerEl;
		this.stage = this.container.querySelector('.k3-curve-stage');
		this.prevBtn = this.container.querySelector('[data-carousel-prev]');
		this.nextBtn = this.container.querySelector('[data-carousel-next]');

		this.init();
	}

	init() {
		if (this.prevBtn && this.stage) {
			this.prevBtn.addEventListener('click', () => {
				this.stage.scrollBy({ left: -360, behavior: 'smooth' });
			});
		}

		if (this.nextBtn && this.stage) {
			this.nextBtn.addEventListener('click', () => {
				this.stage.scrollBy({ left: 360, behavior: 'smooth' });
			});
		}

		// Drag to scroll for mouse
		let isDown = false;
		let startX;
		let scrollLeft;

		this.stage.addEventListener('mousedown', (e) => {
			isDown = true;
			this.stage.classList.add('active');
			startX = e.pageX - this.stage.offsetLeft;
			scrollLeft = this.stage.scrollLeft;
		});

		window.addEventListener('mouseup', () => {
			isDown = false;
			this.stage.classList.remove('active');
		});

		this.stage.addEventListener('mousemove', (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - this.stage.offsetLeft;
			const walk = (x - startX) * 1.5;
			this.stage.scrollLeft = scrollLeft - walk;
		});
	}
}

// Global Auto-initialization
document.addEventListener('DOMContentLoaded', () => {
	// Initialize all toggles
	document.querySelectorAll('.k3-toggle-group').forEach(el => new K3Toggle(el));

	// Initialize all compare sliders
	document.querySelectorAll('.k3-compare-slider').forEach(el => new K3CompareSlider(el));

	// Initialize all carousels
	document.querySelectorAll('.k3-carousel').forEach(el => new K3Carousel(el));
});
