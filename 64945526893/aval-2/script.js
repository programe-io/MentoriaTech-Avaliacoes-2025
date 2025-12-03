document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica do Menu Hamburguer ---
    const toggleButton = document.getElementById('menu-toggle');
    const navBar = document.querySelector('.navbar'); 

    if (toggleButton && navBar) {
        toggleButton.addEventListener('click', () => {
            // Alterna a classe 'active' para mostrar/esconder o menu
            navBar.classList.toggle('active'); 
        });
    }

    // --- 2. Efeito de Máquina de Escrever ---
    const subtitleElement = document.getElementById('subtitulo-efeito');
    const fullText = "Salvar Pessoas. Caçar Coisas. O Negócio da Família.";
    let index = 0;

    if (subtitleElement) {
        subtitleElement.textContent = ''; // Limpa o conteúdo inicial
        
        function typeWriter() {
            if (index < fullText.length) {
                // Adiciona o próximo caractere
                subtitleElement.textContent += fullText.charAt(index);
                index++;
                // Chama a função novamente após 50 milissegundos
                setTimeout(typeWriter, 50); 
            }
        }
        typeWriter();
    }
});