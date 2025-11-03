// Funções JS (mantidas iguais)

// 1. Smooth scrolling function (Função para rolagem suave)
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        // Usa 'smooth' para uma transição suave
        element.scrollIntoView({ behavior: 'smooth' }); 
    }
}

// 2. Navigation highlighting (Destaque o link da seção atual)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    // 250px é um offset para garantir que a seção esteja visível
    sections.forEach(section => { 
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 250)) { 
            current = section.getAttribute('id');
        }
    });
    
    // Adiciona a classe 'active' ao link de navegação correspondente
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 3. Fade-in animation on scroll (Animação de "surgimento" ao rolar)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // O elemento deve estar 10% visível para disparar a animação
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

// Aplica o observer a todos os elementos com a classe 'fade-in'
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Garante que os elementos iniciais já visíveis apareçam ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            el.classList.add('appear');
        }
    });
});