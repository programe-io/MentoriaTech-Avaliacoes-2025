document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Alternar tema claro/escuro
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.textContent = body.classList.contains('dark-theme') ? 'Tema Claro' : 'Tema Escuro';
    });

    // Adicionar classe 'active' ao link clicado
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita o comportamento padrão do link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});