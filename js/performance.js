/**
 * Krea 3 — Authentic Speed Comparison & Gauge Engine (100% Non-Minified)
 *
 * Implements the rolling mechanical counter animations ("10× / 4× Faster", "3× / 2× Cheaper"),
 * the semicircular speedometer gauge highlighting, and the segmented tab switcher.
 */

// Model comparison specifications from Krea 3 benchmarks
const COMPARISONS = {
	gpt2: {
		id: 'gpt2',
		name: 'GPT Image 2',
		faster: '10×',
		cheaper: '3×',
		numericFaster: 10,
		numericCheaper: 3,
		gaugeRatio: 10 / 24, // ~41.7% around the 180° arch
		activeTickIndex: 3,  // Line 3 in the 9-line radial tick array
		litDotsCount: 22     // 22 dots lit from bottom-left
	},
	nbpro: {
		id: 'nbpro',
		name: 'Nano Banana Pro',
		faster: '4×',
		cheaper: '2×',
		numericFaster: 4,
		numericCheaper: 2,
		gaugeRatio: 4 / 24,  // ~16.7% around the 180° arch
		activeTickIndex: 1,  // Line 1 in the 9-line radial tick array
		litDotsCount: 9      // 9 dots lit from bottom-left
	}
};

class SpeedComparisonEngine {
	constructor() {
		// Active state: Nano Banana Pro is the active state in the user's reference screenshot
		this.activeModel = 'nbpro';
		this.isTransitioning = false;

		// DOM References
		this.toggleGroup = document.getElementById('toggle-group');
		this.togglePill = document.getElementById('toggle-pill');
		this.toggleBtns = document.querySelectorAll('.toggle-btn');

		this.rollFaster = document.getElementById('roll-faster');
		this.sizerFaster = document.getElementById('sizer-faster');
		this.layerFasterA = document.getElementById('layer-faster-a');
		this.layerFasterB = document.getElementById('layer-faster-b');

		this.rollCheaper = document.getElementById('roll-cheaper');
		this.sizerCheaper = document.getElementById('sizer-cheaper');
		this.layerCheaperA = document.getElementById('layer-cheaper-a');
		this.layerCheaperB = document.getElementById('layer-cheaper-b');

		this.dots = Array.from(document.querySelectorAll('.gauge-svg .dot'));
		this.ticks = Array.from(document.querySelectorAll('.gauge-svg .tick'));

		this.init();
	}

	init() {
		// Set initial state without animation delays
		this.applyState(this.activeModel, false);
		this.bindEvents();
	}

	bindEvents() {
		this.toggleBtns.forEach((btn, index) => {
			btn.addEventListener('click', () => {
				const modelKey = btn.getAttribute('data-model');
				if (modelKey === this.activeModel) return;

				this.switchModel(modelKey, index);
			});
		});
	}

	switchModel(modelKey, targetIndex) {
		this.activeModel = modelKey;
		this.applyState(modelKey, true, targetIndex);
	}

	applyState(modelKey, animate = true, targetIndex = 1) {
		const data = COMPARISONS[modelKey];
		if (!data) return;

		// 1. Update Segmented Toggle Pill position
		const index = targetIndex !== undefined ? targetIndex : (modelKey === 'gpt2' ? 0 : 1);
		this.togglePill.style.setProperty('--i', index);

		this.toggleBtns.forEach((btn) => {
			const isCurrent = btn.getAttribute('data-model') === modelKey;
			btn.classList.toggle('on', isCurrent);
			btn.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
		});

		// 2. Animate the Rolling Numbers
		if (animate) {
			this.animateRoll(this.rollFaster, this.sizerFaster, this.layerFasterA, this.layerFasterB, data.faster, 0);
			this.animateRoll(this.rollCheaper, this.sizerCheaper, this.layerCheaperA, this.layerCheaperB, data.cheaper, 90);
		} else {
			this.setStaticRoll(this.rollFaster, this.sizerFaster, this.layerFasterA, this.layerFasterB, data.faster);
			this.setStaticRoll(this.rollCheaper, this.sizerCheaper, this.layerCheaperA, this.layerCheaperB, data.cheaper);
		}

		// 3. Update Semicircular Speedometer Gauge
		this.updateGauge(data);
	}

	setStaticRoll(rollEl, sizerEl, layerA, layerB, newText) {
		sizerEl.textContent = newText;
		layerA.textContent = newText;
		layerA.className = 'roll-layer active';
		layerB.textContent = '';
		layerB.className = 'roll-layer';
		rollEl.style.width = `${sizerEl.offsetWidth}px`;
	}

	animateRoll(rollEl, sizerEl, layerA, layerB, newText, delayMs) {
		// Identify which layer is currently active
		const currentActive = layerA.classList.contains('active') ? layerA : layerB;
		const incomingLayer = currentActive === layerA ? layerB : layerA;

		// Update sizer to target width
		sizerEl.textContent = newText;
		rollEl.style.width = `${sizerEl.offsetWidth}px`;

		// Prepare incoming layer
		incomingLayer.textContent = newText;
		incomingLayer.className = 'roll-layer'; // reset positions to translateY(100%)

		// Force reflow
		void incomingLayer.offsetWidth;

		// Trigger synchronized rolling transition
		setTimeout(() => {
			currentActive.className = 'roll-layer exit-up';
			incomingLayer.className = 'roll-layer active';
		}, delayMs);
	}

	updateGauge(data) {
		// Update 53 dots along the arc
		this.dots.forEach((dot, idx) => {
			if (idx <= data.litDotsCount) {
				dot.classList.add('lit');
			} else {
				dot.classList.remove('lit');
			}
		});

		// Update 9 radial ticks
		this.ticks.forEach((tick, idx) => {
			// Line 0 is always the baseline tick, line data.activeTickIndex is the peak comparison tick
			if (idx === 0 || idx === data.activeTickIndex) {
				tick.classList.add('lit');
			} else {
				tick.classList.remove('lit');
			}
		});
	}
}

// Instantiate engine when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => new SpeedComparisonEngine());
} else {
	new SpeedComparisonEngine();
}
