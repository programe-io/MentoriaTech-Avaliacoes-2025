document.addEventListener('DOMContentLoaded', () => {
    // 1. Alerta de Boas-Vindas
    alert('Seja bem-vindo(a) ao site de Relacionamento - Conexões Verdadeiras!');

    // --- Interatividade "Sobre Mim" ---

    // 2. Criação do botão "Mostrar/Ocultar" na seção Sobre Mim
    const aside = document.querySelector('aside');
    const aboutMeText = aside.querySelector('p'); // O parágrafo de descrição
    
    // Cria o novo botão
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Ocultar Descrição';
    toggleButton.id = 'toggle-about-me';
    
    // Estilo básico para o botão (opcional, pode ser feito no CSS)
    toggleButton.style.padding = '5px 10px';
    toggleButton.style.margin = '10px 0';
    toggleButton.style.cursor = 'pointer';
    
    // Insere o botão após o título 'Sobre Mim'
    const h2 = aside.querySelector('h2');
    if (h2) {
        h2.insertAdjacentElement('afterend', toggleButton);
    }
    
    // Lógica para mostrar/ocultar
    toggleButton.addEventListener('click', () => {
        // Alterna a classe 'hidden' no parágrafo
        aboutMeText.classList.toggle('hidden'); 
        
        // Atualiza o texto do botão
        if (aboutMeText.classList.contains('hidden')) {
            toggleButton.textContent = 'Mostrar Descrição';
        } else {
            toggleButton.textContent = 'Ocultar Descrição';
        }
    });

    // --- Interatividade Galeria ---
    
    // 3. Efeito de clique nas imagens da galeria
    const galleryImages = document.querySelectorAll('.gallery img');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', (event) => {
            // Exibe um alerta com o texto alternativo da imagem
            alert(`Você clicou na imagem: ${event.target.alt}`);
            
            // Adiciona um feedback visual (opcional: pode ser ajustado no CSS)
            image.style.border = '3px solid #ff4500'; // Cor Laranja avermelhada
            
            // Remove o feedback após um breve período (ex: 500ms)
            setTimeout(() => {
                image.style.border = 'none';
            }, 500);
        });
        
        // Estilo de cursor para indicar que a imagem é clicável
        image.style.cursor = 'pointer';
    });
});

/*
    Para que a interatividade "Ocultar Descrição" funcione,
    você precisará adicionar o seguinte código ao seu arquivo CSS:

    .hidden {
        display: none !important;
    }
*/