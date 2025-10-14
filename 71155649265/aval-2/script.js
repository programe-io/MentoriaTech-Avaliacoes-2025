// Espera o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1.2s ease-in-out';

    setTimeout(() => {
        mainContent.style.opacity = '1';
    }, 300); // pequeno delay para efeito suave

    // Efeito de hover sutil no menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.transition = 'color 0.3s';
        link.addEventListener('mouseenter', () => {
            link.style.color = '#007aff'; // azul Apple
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = ''; // volta ao padrão
        });
    });

    // Alternar visibilidade da galeria
    const galeriaTitulo = document.querySelector('aside h3');
    const imagens = galeriaTitulo.parentElement.querySelectorAll('img:nth-of-type(n+2)');

    galeriaTitulo.style.cursor = 'pointer';
    galeriaTitulo.addEventListener('click', () => {
        imagens.forEach(img => {
            img.style.transition = 'opacity 0.4s ease';
            if (img.style.display === 'none' || img.style.opacity === '0') {
                img.style.display = 'block';
                setTimeout(() => img.style.opacity = '1', 10);
            } else {
                img.style.opacity = '0';
                setTimeout(() => img.style.display = 'none', 400);
            }
        });
    });

    // Ativar modo escuro com botão flutuante
    const darkButton = document.createElement('button');
    darkButton.textContent = '🌙 Modo Escuro';
    Object.assign(darkButton.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 15px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s'
    });

    document.body.appendChild(darkButton);

    let darkMode = false;
    darkButton.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.style.transition = 'background-color 0.5s, color 0.5s';
        if (darkMode) {
            document.body.style.backgroundColor = '#111';
            document.body.style.color = '#e5e5e5';
            darkButton.textContent = '☀️ Modo Claro';
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            darkButton.textContent = '🌙 Modo Escuro';
        }
    });
});
