document.addEventListener('DOMContentLoaded', function() {
    
    // ----------------------------------------------------------------
    // 1. FUNCIONALIDADE: INSERIR ANO ATUAL NO RODAPÉ
    // ----------------------------------------------------------------
    
    // Seleciona o elemento de parágrafo no rodapé pelo ID
    const copyrightElement = document.getElementById('copyright-info');
    
    // Obtém o ano atual
    const anoAtual = new Date().getFullYear();

    if (copyrightElement) {
        // Altera o texto do elemento (atualiza o 2025 para o ano atual)
        copyrightElement.innerHTML = `&copy; ${anoAtual} Supernatural Hunters Blog. Todos os direitos reservados. | <a href="#">Política de Privacidade</a>`;
    }


    // ----------------------------------------------------------------
    // 2. FUNCIONALIDADE: ALTERNAR TEMA (MODO CAÇADA NOTURNA)
    // ----------------------------------------------------------------
    
    const themeButton = document.getElementById('toggle-theme-btn');
    const body = document.body;

    if (themeButton) {
        // Adiciona um "ouvinte de evento" ao botão para detectar o clique
        themeButton.addEventListener('click', function() {
            // Alterna a classe 'night-mode' no corpo do documento
            // Se a classe existe, remove; se não existe, adiciona.
            body.classList.toggle('night-mode');

            // Atualiza o texto do botão para refletir o modo atual
            if (body.classList.contains('night-mode')) {
                themeButton.textContent = 'Desativar Modo Caçada Noturna';
            } else {
                themeButton.textContent = 'Ativar Modo Caçada Noturna';
            }
        });
    }

});