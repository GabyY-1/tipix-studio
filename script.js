// Navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Apparition progressive des éléments
const elements = document.querySelectorAll(
    '.section-title, .empty-card, .game-card, .contact-section'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

elements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});


// Année automatique du footer
const footer = document.querySelector('footer');

if (footer) {
    const year = new Date().getFullYear();

    const yearElement = document.createElement('div');
    yearElement.className = 'footer-year';
    yearElement.textContent = year;

    footer.appendChild(yearElement);
}
