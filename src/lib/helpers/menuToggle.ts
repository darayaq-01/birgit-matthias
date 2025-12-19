export function setupMenuToggle() {
    const body = document.body;
    const html = document.documentElement;
    const hamburger = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleBodyScroll = (lock: boolean) => {
        body.style.overflow = lock ? 'hidden' : '';
        html.style.overflow = lock ? 'hidden' : '';
        body.style.height = lock ? '100vh' : '';
    };

    const updateMenuState = () => {
        if (!mobileMenu || window.innerWidth >= 1024) {
            toggleBodyScroll(false);
            hamburger?.classList.remove('open');
            return;
        }

        const isOpen = !mobileMenu.classList.contains('hidden');
        toggleBodyScroll(isOpen);

        if (isOpen) {
            hamburger?.classList.add('open');
        } else {
            hamburger?.classList.remove('open');
        }
    };

    const closeMenu = () => {
        if (mobileMenu && window.innerWidth < 1024) {
            requestAnimationFrame(() => {
                mobileMenu.classList.add('hidden');
                toggleBodyScroll(false);
                hamburger?.classList.remove('open');
            });
        }
    };

    // Observar cambios en el menú
    if (mobileMenu) {
        const observer = new MutationObserver(updateMenuState);
        observer.observe(mobileMenu, {
            attributes: true,
            attributeFilter: ['class'],
        });
    }

    // Cerrar menú al hacer click en links
    const menuLinks = document.querySelectorAll('#mobile-menu a.navbar-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth < 1024) {
                const href = link.getAttribute('href');

                // Si es un anchor en la misma página (empieza con # o /#)
                if (href && (href.startsWith('#') || href.startsWith('/#'))) {
                    // Cerrar inmediatamente para anchors
                    closeMenu();

                    // Si estamos en home y el href es /#algo, extraer el hash
                    if (window.location.pathname === '/' && href.startsWith('/#')) {
                        e.preventDefault();
                        const hash = href.substring(1); // Quita el primer /
                        const targetElement = document.querySelector(hash);

                        if (targetElement) {
                            // Pequeño delay para que el menú se cierre primero
                            setTimeout(() => {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                // Actualizar la URL sin recargar
                                window.history.pushState(null, '', hash);
                            }, 300);
                        }
                    }
                } else {
                    // Para navegación a otras páginas, pequeño delay
                    setTimeout(() => {
                        closeMenu();
                    }, 50);
                }
            }
        });
    });

    // Actualizar estado al redimensionar
    window.addEventListener('resize', updateMenuState);

    // Estado inicial
    updateMenuState();
}

// Auto-inicializar
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupMenuToggle);
    } else {
        setupMenuToggle();
    }
}