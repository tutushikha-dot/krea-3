document.addEventListener('DOMContentLoaded', () => {
      
      // 1. HERO PROMPT & SUBJECT SWITCHER
      const heroBoxes = document.querySelectorAll('.hero-box');
      const heroOverlays = document.querySelectorAll('.hero-overlay');
      const subjectPills = document.querySelectorAll('.subject-pill');
      const heroBaseImg = document.getElementById('heroBaseImg');

      const subjectData = {
        windcoat: {
          base: "https://s.krea.ai/k3-landing-final/hero-windcoat-base.webp",
          boxes: [
            { id: "lenses", tag: "amber shield glasses", x: 53.5, y: 32, w: 13, h: 12.5, overlay: "https://s.krea.ai/k3-landing-final/hero-windcoat-lenses.webp" },
            { id: "dove", tag: "flying white dove", x: 70, y: 2, w: 24, h: 37.5, overlay: "https://s.krea.ai/k3-landing-final/hero-windcoat-dove.webp" },
            { id: "lips", tag: "glossy red lip", x: 58, y: 44.5, w: 5, h: 6.5, overlay: "https://s.krea.ai/k3-landing-final/hero-windcoat-lips.webp" },
            { id: "coat", tag: "shearling wool coat", x: 14, y: 32.5, w: 53.5, h: 67.5, overlay: "https://s.krea.ai/k3-landing-final/hero-windcoat-coat.webp" }
          ]
        },
        crew: {
          base: "https://s.krea.ai/k3-landing-final/hero-crew-start-fix2.webp",
          boxes: [
            { id: "ghost", tag: "plush ghost character", x: 42, y: 44, w: 13.5, h: 33.5, overlay: "https://s.krea.ai/k3-landing-final/hero-crew-ghost.webp" },
            { id: "star", tag: "golden star mascot", x: 65, y: 38, w: 17, h: 43.5, overlay: "https://s.krea.ai/k3-landing-final/hero-crew-star.webp" }
          ]
        },
        sardine: {
          base: "https://s.krea.ai/k3-landing-final/hero-sardine-base.webp",
          boxes: [
            { id: "label", tag: "MARÉ ALTA sardine tin", x: 32.5, y: 40.5, w: 23, h: 32, overlay: "https://s.krea.ai/k3-landing-final/hero-sardine-label.webp" },
            { id: "olives", tag: "spanish green olives", x: 65, y: 32, w: 24.5, h: 40.5, overlay: "https://s.krea.ai/k3-landing-final/hero-sardine-olives.webp" }
          ]
        },
        billboard: {
          base: "https://s.krea.ai/k3-landing-final/hero-billboard-base.webp",
          boxes: [
            { id: "ad", tag: "seagull run club billboard", x: 13, y: 5.5, w: 69, h: 67.5, overlay: "https://s.krea.ai/k3-landing-final/hero-billboard-ad.webp" },
            { id: "balloon", tag: "hot air balloon", x: 22, y: 80, w: 5.5, h: 13, overlay: "https://s.krea.ai/k3-landing-final/hero-billboard-balloon.webp" }
          ]
        }
      };

      heroBoxes.forEach(box => {
        box.addEventListener('click', () => {
          heroBoxes.forEach(b => b.classList.remove('active'));
          box.classList.add('active');
          const editId = box.id.replace('box-', '');
          heroOverlays.forEach(img => {
            img.classList.toggle('active', img.id === `overlay-${editId}`);
          });
        });
      });

      subjectPills.forEach(pill => {
        pill.addEventListener('click', () => {
          subjectPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const subjectKey = pill.getAttribute('data-subject');
          const data = subjectData[subjectKey];
          if (data) {
            heroBaseImg.src = data.base;
            // hide overlays
            heroOverlays.forEach(img => img.classList.remove('active'));
          }
        });
      });


      // 2. USE CASES TABS
      const tabBtns = document.querySelectorAll('.tab-btn');
      const useCaseTitle = document.getElementById('useCaseTitle');
      const useCaseDesc = document.getElementById('useCaseDesc');
      const ref1 = document.getElementById('ref1');
      const ref2 = document.getElementById('ref2');
      const ref3 = document.getElementById('ref3');
      const useCaseOutput = document.getElementById('useCaseOutput');

      const useCasesData = {
        fashion: {
          title: "High-Fashion Editorial Scene",
          desc: "Preserves apparel textures, exact stitching, and color harmony from multiple moodboard references.",
          ref1: "https://s.krea.ai/k3-stuff-landing/use-cases-fashion-reference1.webp",
          ref2: "https://s.krea.ai/k3-stuff-landing/use-cases-fashion-reference2.webp",
          ref3: "https://s.krea.ai/k3-stuff-landing/use-cases-fashion-reference3.webp",
          output: "https://s.krea.ai/k3-landing-final/use-cases-fashion-output-fix.webp"
        },
        gaming: {
          title: "3D Game Environment & Character",
          desc: "Maintains hard-surface specular highlights, armor silhouette, and game engine PBR lighting.",
          ref1: "https://s.krea.ai/k3-stuff-again/use-cases-gaming-reference1.webp",
          ref2: "https://s.krea.ai/k3-stuff-again/use-cases-gaming-reference2.webp",
          ref3: "https://s.krea.ai/k3-stuff-again/use-cases-gaming-reference3.webp",
          output: "https://s.krea.ai/k3-stuff-again/use-cases-gaming-output.webp"
        },
        film: {
          title: "Cinematic Film Concept Frame",
          desc: "Maintains anamorphic lens flares, volumetric fog, and character costume consistency across shots.",
          ref1: "https://s.krea.ai/k3-stuff-landing/use-cases-film-reference1.webp",
          ref2: "https://s.krea.ai/k3-stuff-landing/use-cases-film-reference2.webp",
          ref3: "https://s.krea.ai/k3-stuff-again/use-cases-film-reference3.webp",
          output: "https://s.krea.ai/k3-stuff-landing/use-cases-film-output.webp"
        },
        photography: {
          title: "Commercial Editorial Photography",
          desc: "Keeps natural skin pore detail and depth of field blur without waxiness or oversmoothing.",
          ref1: "https://s.krea.ai/k3-stuff-again/use-cases-photography-reference1.webp",
          ref2: "https://s.krea.ai/k3-stuff-again/use-cases-photography-reference2.webp",
          ref3: "https://s.krea.ai/k3-stuff-again/use-cases-photography-reference3.webp",
          output: "https://s.krea.ai/k3-stuff-again/use-cases-photography-output.webp"
        },
        product: {
          title: "Cosmetic & Product Packaging",
          desc: "Renders legible micro-typography, glass reflections, and exact brand logo embossing.",
          ref1: "https://s.krea.ai/k3-stuff-again/use-cases-product-reference1.webp",
          ref2: "https://s.krea.ai/k3-stuff-again/use-cases-product-reference2.webp",
          ref3: "https://s.krea.ai/k3-stuff-again/use-cases-product-reference3.webp",
          output: "https://s.krea.ai/k3-stuff-again/use-cases-product-output.webp"
        }
      };

      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const data = useCasesData[btn.dataset.tab];
          if (data) {
            useCaseTitle.textContent = data.title;
            useCaseDesc.textContent = data.desc;
            ref1.src = data.ref1;
            ref2.src = data.ref2;
            ref3.src = data.ref3;
            useCaseOutput.src = data.output;
          }
        });
      });


      // 3. HEX COLOR SWATCHES
      const swatchBtns = document.querySelectorAll('.swatch-btn');
      const hexColorImage = document.getElementById('hexColorImage');
      const colorImages = {
        original: "https://s.krea.ai/k3-landing-final/hexf-5-original.webp",
        sunflower: "https://s.krea.ai/k3-landing-final/hexf-5-sunflower.webp",
        forest: "https://s.krea.ai/k3-landing-final/hexf-5-forest.webp",
        lilac: "https://s.krea.ai/k3-landing-final/hexf-5-lilac.webp",
        sand: "https://s.krea.ai/k3-landing-final/hexf-5-sand.webp"
      };

      swatchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          swatchBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const colorKey = btn.dataset.color;
          if (colorImages[colorKey]) {
            hexColorImage.style.opacity = '0.3';
            setTimeout(() => {
              hexColorImage.src = colorImages[colorKey];
              hexColorImage.style.opacity = '1';
            }, 100);
          }
        });
      });


      // 4. BEFORE / AFTER COMPARISON SLIDER
      const diffSlider = document.getElementById('diffSlider');
      const diffBefore = document.getElementById('diffBefore');
      const diffHandle = document.getElementById('diffHandle');
      let isDragging = false;

      function updateSliderPosition(clientX) {
        const rect = diffSlider.getBoundingClientRect();
        let x = clientX - rect.left;
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        const percentage = (x / rect.width) * 100;
        diffBefore.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
        diffHandle.style.left = `${percentage}%`;
      }

      diffSlider.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
      });
      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
      });
      window.addEventListener('mouseup', () => { isDragging = false; });
      diffSlider.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
      });
      window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0].clientX);
      });
      window.addEventListener('touchend', () => { isDragging = false; });


      // 5. MACOS PARABOLIC DOCK MAGNIFICATION
      const dock = document.getElementById('pluginDock');
      const dockItems = dock.querySelectorAll('.dock-item');

      dock.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        dockItems.forEach(item => {
          const rect = item.getBoundingClientRect();
          const itemCenterX = rect.left + rect.width / 2;
          const distance = Math.abs(mouseX - itemCenterX);
          const maxDistance = 140;
          
          if (distance < maxDistance) {
            const scale = 1 + (0.55 * (1 - distance / maxDistance));
            item.style.transform = `scale(${scale})`;
          } else {
            item.style.transform = 'scale(1)';
          }
        });
      });

      dock.addEventListener('mouseleave', () => {
        dockItems.forEach(item => {
          item.style.transform = 'scale(1)';
        });
      });


      // 6. FAQ ACCORDION
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          // Close others
          faqItems.forEach(i => i.classList.remove('open'));
          if (!isOpen) {
            item.classList.add('open');
          }
        });
      });

    });