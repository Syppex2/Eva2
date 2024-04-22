document.addEventListener('DOMContentLoaded', function () {
    // Oculta todas las secciones excepto la primera al cargar la página
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'home') {
            section.style.display = 'none';
        }
    });
});

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // Oculta todas las secciones
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Muestra la sección correspondiente al enlace clicado
        const sectionId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(sectionId);
        targetSection.style.display = 'block';
    });
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();

    if (name === '' || email === '') {
        alert('Por favor, complete todos los campos.');
    } else {
        alert('Gracias por contactarnos, ' + name + '. Te responderemos pronto.');
        form.reset();
    }
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const targetLink = document.querySelector(`nav a[href="#${section.id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            targetLink.classList.add('active');
        }
    });
});
