// Innovate3D Theme JavaScript

import Plugin from 'src/plugin-system/plugin.class';

class Innovate3DTheme extends Plugin {
    init() {
        this.initializeLazyLoading();
        this.initializeStickyHeader();
        this.initializeProductHover();
    }

    initializeLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    initializeStickyHeader() {
        const header = document.querySelector('.header-main');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                header.classList.remove('scroll-up');
                return;
            }

            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-up');
                header.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                header.classList.remove('scroll-down');
                header.classList.add('scroll-up');
            }
            lastScroll = currentScroll;
        });
    }

    initializeProductHover() {
        const productBoxes = document.querySelectorAll('.product-box');
        
        productBoxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                box.classList.add('is-hover');
            });
            
            box.addEventListener('mouseleave', () => {
                box.classList.remove('is-hover');
            });
        });
    }
}

// Register the plugin
PluginManager.register('Innovate3DTheme', Innovate3DTheme, '[data-innovate3d-theme]'); 