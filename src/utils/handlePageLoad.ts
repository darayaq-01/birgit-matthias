export async function handlePageLoad({ page }) {
    const path = page.path;
    const navbarLinks = document.querySelectorAll('.navbar-link');
    navbarLinks.forEach((link) => {
        const linkHref = link.getAttribute('href');
        console.log({ linkHref }, { path });

        if (linkHref === path) {
            link.classList.add('border-b-1', 'border-[#93cbd4dc]');
        }

        if (linkHref === '/aktuelles' && path.includes('/aktuelles/')) {
            link.classList.add('border-b-2', 'border-[#95f1ffc7]');
        }
    });
}