// 1. Funcionalidade de Mudar Tema (Claro/Escuro)

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se há uma preferência salva no localStorage
    const savedTheme = localStorage.getItem('onepiece-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleButton.textContent = '☀️ Mudar Tema'; // Atualiza texto do botão
    } else {
        themeToggleButton.textContent = '🌙 Mudar Tema';
    }

    // Adiciona o evento de clique ao botão
    themeToggleButton.addEventListener('click', () => {
        // Alterna a classe 'dark-theme' no <body>
        body.classList.toggle('dark-theme');

        // Salva a preferência no localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('onepiece-theme', 'dark');
            themeToggleButton.textContent = '☀️ Mudar Tema';
            alert('Tema Escuro ativado! Prepare-se para navegar na noite...');
        } else {
            localStorage.setItem('onepiece-theme', 'light');
            themeToggleButton.textContent = '🌙 Mudar Tema';
            alert('Tema Claro ativado! O sol de East Blue brilha!');
        }
    });

    // 2. Efeito de Clique Simples nos Cards (Feedback Visual)

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Verifica se o clique não foi no botão de "Ver Habilidade" (para não duplicar ações)
            if (!event.target.classList.contains('btn-card')) {
                const nomePersonagem = card.getAttribute('data-personagem');
                
                // Adiciona e remove uma classe para um feedback visual rápido
                card.classList.add('clicked');
                
                setTimeout(() => {
                    card.classList.remove('clicked');
                    // Você pode adicionar um modal ou uma exibição de detalhes aqui
                    console.log(`Card do personagem ${nomePersonagem} foi clicado.`);
                }, 300);
            }
        });
    });

    // 3. Efeito CSS para o 'clicked' (Adicione no style.css se quiser visível)
    // .card.clicked { border: 3px solid yellow; }
});