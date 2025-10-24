// script.js

// 1. Botão voltar ao topo
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Topo';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

// Estilo básico do botão via JS
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '16px';
backToTopButton.style.backgroundColor = '#ffcc00';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';

// Mostrar botão após rolar 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Voltar ao topo ao clicar
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 2. Destaque do menu conforme a seção visível
const sections = document.querySelectorAll('section, article');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
});

// 3. Fade-in das seções ao rolar
const faders = document.querySelectorAll('section, article');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.classList.add('fade-section');
    appearOnScroll.observe(fader);
});
