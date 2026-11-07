/**
 * Krea 3 — Interactive Hero Component Engine (100% Non-Minified & Authentic)
 *
 * Implements the prompt editor, animated bounding boxes, dynamic SVG hole cutouts,
 * layer cross-fading, and subject switching according to Krea's exact coordinate system.
 */

// Subject definitions matching authentic Krea 3 canvas coordinates (2736 x 1536)
const SUBJECTS = {
	sardine: {
		id: 'sardine',
		name: 'Sardines & Lisbon Tiles',
		focus: 0.5,
		baseImage: './assets/s.krea.ai/k3-landing-final/hero-sardine-base.webp',
		alt: 'An overhead still life of an open tin of Portuguese sardines, crusty bread, a cut lemon, and a glass of vinho verde on traditional blue ceramic tiles.',
		edits: [
			{
				id: 'lime',
				number: 1,
				color: 'var(--color-blue, #2563eb)',
				prompt: 'Swap the lemon for a lime',
				badge: '✓ Under 8s',
				notePosition: 'below',
				box: { x: 34, y: 5, w: 14, h: 26.5 },
				layer: { x: 34.32, y: 5.27, w: 13.34, h: 25.65 },
				image: './assets/s.krea.ai/k3-landing-final/hero-sardine-lime.webp',
				active: true
			},
			{
				id: 'label',
				number: 2,
				color: 'var(--color-pink, #ec4899)',
				prompt: 'Make the label emerald green',
				badge: '✓ Under 8s',
				notePosition: 'below',
				box: { x: 32.5, y: 40.5, w: 23, h: 32 },
				layer: { x: 32.6, y: 40.89, w: 22.48, h: 31.45 },
				image: './assets/s.krea.ai/k3-landing-final/hero-sardine-label.webp',
				active: true
			},
			{
				id: 'olives',
				number: 3,
				color: 'var(--color-green, #10b981)',
				prompt: 'Add a side of green olives',
				badge: '✓ Under 8s',
				notePosition: 'above',
				box: { x: 65, y: 32, w: 24.5, h: 40.5 },
				layer: { x: 65.46, y: 32.36, w: 24.2, h: 39.91 },
				image: './assets/s.krea.ai/k3-landing-final/hero-sardine-olives.webp',
				active: false
			},
			{
				id: 'fork',
				number: 4,
				color: 'var(--color-amber, #f59e0b)',
				prompt: 'Add a vintage sardine fork',
				badge: '✓ Under 8s',
				notePosition: 'above',
				box: { x: 19, y: 36, w: 18.5, h: 59.5 },
				layer: { x: 19.41, y: 36.65, w: 18.17, h: 58.79 },
				image: './assets/s.krea.ai/k3-landing-final/hero-sardine-fork.webp',
				active: false
			},
			{
				id: 'wine',
				number: 5,
				color: 'var(--color-purple, #8b5cf6)',
				prompt: 'Pour a glass of chilled vinho verde',
				badge: '✓ Under 8s',
				notePosition: 'below',
				box: { x: 42, y: 0, w: 17.5, h: 21.5 },
				layer: { x: 42.4, y: 0, w: 17.11, h: 21.35 },
				image: './assets/s.krea.ai/k3-landing-final/hero-sardine-wine.webp',
				active: false
			}
		]
	},
	windcoat: {
		id: 'windcoat',
		name: 'Fashion Editorial (Coat)',
		focus: 0.55,
		baseImage: './assets/s.krea.ai/k3-landing-final/hero-windcoat-base.webp',
		alt: 'A fashion portrait of a platinum-haired model in oversized black wool coat against a blue-pink studio gradient.',
		edits: [
			{
				id: 'lenses',
				number: 1,
				color: 'var(--color-amber, #f59e0b)',
				prompt: 'Add amber shield sunglasses',
				badge: '✓ Under 8s',
				notePosition: 'above',
				box: { x: 53.5, y: 32, w: 13, h: 12.5 },
				layer: { x: 53.95, y: 32.23, w: 12.54, h: 11.78 },
				image: './assets/s.krea.ai/k3-landing-final/hero-windcoat-lenses.webp',
				active: true
			},
			{
				id: 'dove',
				number: 2,
				color: 'var(--color-blue, #2563eb)',
				prompt: 'Add a flying white dove',
				badge: '✓ Under 8s',
				notePosition: 'below',
				box: { x: 70, y: 1.5, w: 24, h: 37.5 },
				layer: { x: 70.21, y: 2.15, w: 23.57, h: 36.52 },
				image: './assets/s.krea.ai/k3-landing-final/hero-windcoat-dove.webp',
				active: true
			},
			{
				id: 'lips',
				number: 3,
				color: 'var(--color-pink, #ec4899)',
				prompt: 'Apply glossy cherry red lipstick',
				badge: '✓ Under 8s',
				notePosition: 'below',
				box: { x: 58, y: 44.5, w: 5, h: 6.5 },
				layer: { x: 58.08, y: 44.79, w: 4.42, h: 5.53 },
				image: './assets/s.krea.ai/k3-landing-final/hero-windcoat-lips.webp',
				active: false
			},
			{
				id: 'coat',
				number: 4,
				color: 'var(--color-green, #10b981)',
				prompt: 'Change wool coat to shearling bomber',
				badge: '✓ Under 8s',
				notePosition: 'above',
				box: { x: 14, y: 32.5, w: 53.5, h: 67.5 },
				layer: { x: 14.18, y: 32.68, w: 53.25, h: 67.32 },
				image: './assets/s.krea.ai/k3-landing-final/hero-windcoat-coat.webp',
				active: false
			}
		]
	},
	crew: {
		id: 'crew',
		name: 'Skate Crew',
		focus: 0.55,
		baseImage: './assets/s.krea.ai/k3-landing-final/hero-crew-start-fix2.webp',
		alt: 'A candid portrait of four young creatives on a sunny city sidewalk.',
		edits: [
			{
				id: 'ghost',
				number: 1,
				color: 'var(--color-purple, #8b5cf6)',
				prompt: 'Replace jacket with a cute cartoon ghost graphic',
				badge: '✓ Under 8s',
				notePosition: 'above',
				box: { x: 42, y: 44, w: 13.5, h: 33.5 },
				layer: { x: 41.48, y: 43.42, w: 13.96, h: 34.7 },
				image: './assets/s.krea.ai/k3-landing-final/hero-crew-ghost.webp',
				active: true
			},
			{
				id: 'dino',
				number: 2,
				color: 'var(--color-green, #10b981)',
				prompt: 'Replace graphic with origami green dinosaur',
				badge: '✓ Under 8s',
				notePosition: 'above',
				box: { x: 55.5, y: 45, w: 9.5, h: 34 },
				layer: { x: 55.45, y: 44.6, w: 9.32, h: 35.61 },
				image: './assets/s.krea.ai/k3-landing-final/hero-crew-dino.webp',
				active: true
			}
		]
	},
	billboard: {
		id: 'billboard',
		name: 'Highway Billboard',
		focus: 0.45,
		baseImage: './assets/s.krea.ai/k3-landing-final/hero-billboard-base.webp',
		alt: 'A roadside billboard standing under a clear sunset sky.',
		edits: [
			{
				id: 'ad',
				number: 1,
				color: 'var(--color-blue, #2563eb)',
				prompt: 'Swap the billboard advertisement artwork',
				badge: '✓ Under 8s',
				notePosition: 'below',
				box: { x: 13, y: 5.5, w: 69, h: 67.5 },
				layer: { x: 10.23, y: 0.98, w: 73.54, h: 77.34 },
				image: './assets/s.krea.ai/k3-landing-final/hero-billboard-ad.webp',
				active: true
			},
			{
				id: 'gulls',
				number: 2,
				color: 'var(--color-pink, #ec4899)',
				prompt: 'Add flock of flying sea gulls in formation',
				badge: '✓ Under 8s',
				notePosition: 'below',
				box: { x: 2.5, y: 41.5, w: 8, h: 15 },
				layer: { x: 1.24, y: 40.62, w: 9.54, h: 16.8 },
				image: './assets/s.krea.ai/k3-landing-final/hero-billboard-gulls.webp',
				active: false
			}
		]
	}
};

// Global state tracking
let currentSubjectKey = 'sardine'; // Default to the Portuguese sardine scene as in the user's reference

class KreaHeroEngine {
	constructor() {
		this.stage = document.getElementById('hero-stage');
		this.baseImage = document.getElementById('hero-base-image');
		this.layersContainer = document.getElementById('hero-layers');
		this.boxesContainer = document.getElementById('hero-boxes');
		this.notesContainer = document.getElementById('hero-notes');
		this.maskHolesGroup = document.getElementById('mask-holes-group');
		this.holesSvg = document.getElementById('holes-svg');

		this.init();
	}

	init() {
		this.renderSubject(currentSubjectKey);
		this.setupSwitcher();
	}

	renderSubject(subjectKey) {
		currentSubjectKey = subjectKey;
		const subject = SUBJECTS[subjectKey];
		if (!subject) return;

		// Set stage focus variable for responsive alignment
		this.stage.style.setProperty('--focus', subject.focus);

		// Update base image
		this.baseImage.src = subject.baseImage;
		this.baseImage.alt = subject.alt;

		// Clear existing dynamic elements
		this.layersContainer.innerHTML = '';
		this.boxesContainer.innerHTML = '';
		this.notesContainer.innerHTML = '';
		this.maskHolesGroup.innerHTML = '';

		// Render edits
		subject.edits.forEach((edit) => {
			this.renderEdit(edit);
		});

		this.updateMaskCutouts();
	}

	renderEdit(edit) {
		// 1. Create edit overlay layer
		const layerEl = document.createElement('div');
		layerEl.id = `layer-${edit.id}`;
		layerEl.className = `layer ${edit.active ? '' : 'hidden'}`;
		layerEl.style.left = `${edit.layer.x}%`;
		layerEl.style.top = `${edit.layer.y}%`;
		layerEl.style.width = `${edit.layer.w}%`;
		layerEl.style.height = `${edit.layer.h}%`;
		layerEl.style.backgroundImage = `url(${edit.image})`;
		this.layersContainer.appendChild(layerEl);

		// 2. Create Bounding Box
		const boxEl = document.createElement('div');
		boxEl.id = `box-${edit.id}`;
		boxEl.className = `k3r-box ${edit.active ? 'active' : ''}`;
		boxEl.style.left = `${edit.box.x}%`;
		boxEl.style.top = `${edit.box.y}%`;
		boxEl.style.width = `${edit.box.w}%`;
		boxEl.style.height = `${edit.box.h}%`;
		boxEl.style.setProperty('--region-color', edit.color);

		// Number label on top-left of box
		const labelEl = document.createElement('span');
		labelEl.className = 'k3r-label';
		labelEl.textContent = edit.number;
		boxEl.appendChild(labelEl);

		// Corner resize handles (ne, sw, se)
		['ne', 'sw', 'se'].forEach((dir) => {
			const handle = document.createElement('span');
			handle.className = `k3r-handle ${dir}`;
			boxEl.appendChild(handle);
		});

		// Animated glowing SVG trace
		const traceSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		traceSvg.setAttribute('class', 'trace');
		traceSvg.setAttribute('viewBox', '0 0 100 100');
		traceSvg.setAttribute('preserveAspectRatio', 'none');
		const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttribute('x', '0');
		rect.setAttribute('y', '0');
		rect.setAttribute('width', '100%');
		rect.setAttribute('height', '100%');
		rect.setAttribute('rx', '10');
		traceSvg.appendChild(rect);
		boxEl.appendChild(traceSvg);

		// Toggle on box click
		boxEl.addEventListener('click', () => {
			this.toggleEdit(edit);
		});

		this.boxesContainer.appendChild(boxEl);

		// 3. Create Glassmorphic Prompt Note Pill
		const noteEl = document.createElement('div');
		noteEl.id = `note-${edit.id}`;
		noteEl.className = `k3r-note ${edit.notePosition} ${edit.active ? '' : 'hidden'}`;
		noteEl.style.setProperty('--region-color', edit.color);

		// Position note relative to bounding box
		noteEl.style.left = `${edit.box.x}%`;
		if (edit.notePosition === 'below') {
			noteEl.style.top = `${edit.box.y + edit.box.h + 1.2}%`;
		} else {
			noteEl.style.top = `${edit.box.y - 1.2}%`;
		}

		noteEl.innerHTML = `
			<span class="k3r-num">${edit.number}</span>
			<span class="k3r-prompt-text">${edit.prompt}</span>
			<span class="k3r-badge">${edit.badge}</span>
		`;

		noteEl.addEventListener('click', () => {
			this.toggleEdit(edit);
		});

		this.notesContainer.appendChild(noteEl);
	}

	toggleEdit(edit) {
		edit.active = !edit.active;

		const layerEl = document.getElementById(`layer-${edit.id}`);
		const boxEl = document.getElementById(`box-${edit.id}`);
		const noteEl = document.getElementById(`note-${edit.id}`);

		if (layerEl) layerEl.classList.toggle('hidden', !edit.active);
		if (boxEl) boxEl.classList.toggle('active', edit.active);
		if (noteEl) noteEl.classList.toggle('hidden', !edit.active);

		this.updateMaskCutouts();
	}

	updateMaskCutouts() {
		const subject = SUBJECTS[currentSubjectKey];
		this.maskHolesGroup.innerHTML = '';

		let anyActive = false;
		subject.edits.forEach((edit) => {
			if (edit.active) {
				anyActive = true;
				// In an SVG mask: black cutout removes the dark overlay, letting the image shine through
				const hole = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
				hole.setAttribute('x', `${edit.box.x}%`);
				hole.setAttribute('y', `${edit.box.y}%`);
				hole.setAttribute('width', `${edit.box.w}%`);
				hole.setAttribute('height', `${edit.box.h}%`);
				hole.setAttribute('rx', '10');
				hole.setAttribute('fill', 'black');
				this.maskHolesGroup.appendChild(hole);
			}
		});

		if (anyActive) {
			this.holesSvg.classList.add('dimmed');
		} else {
			this.holesSvg.classList.remove('dimmed');
		}
	}

	setupSwitcher() {
		const switcherBtns = document.querySelectorAll('.subject-btn');
		switcherBtns.forEach((btn) => {
			btn.addEventListener('click', () => {
				const subjectKey = btn.getAttribute('data-subject');
				if (subjectKey === currentSubjectKey) return;

				switcherBtns.forEach((b) => b.classList.remove('active'));
				btn.classList.add('active');

				this.renderSubject(subjectKey);
			});
		});
	}
}

// Instantiate engine when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => new KreaHeroEngine());
} else {
	new KreaHeroEngine();
}
