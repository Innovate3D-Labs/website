// Custom JavaScript for Innovate3D Theme
import Plugin from 'src/plugin-system/plugin.class';

class Innovate3DTheme extends Plugin {
    static options = {
        scrollThreshold: 100
    };

    init() {
        this._registerEvents();
    }

    _registerEvents() {
        window.addEventListener('scroll', this._onScroll.bind(this));
    }

    _onScroll() {
        const header = document.querySelector('.header-main');
        if (!header) return;

        if (window.scrollY > this.options.scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
}

// Register the plugin
PluginManager.register('Innovate3DTheme', Innovate3DTheme); 