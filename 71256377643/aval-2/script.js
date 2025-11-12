// Botão de menu (mobile)
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});

// Efeito de fade-in ao rolar a página
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
