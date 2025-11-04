// --- 1. INTERAÇÃO DO BOTÃO "LEIA MAIS" (Expande a Matéria Principal) ---
// O objetivo é mostrar apenas o resumo da matéria (o primeiro parágrafo) e permitir
// que o usuário clique para ver o conteúdo completo.

function configurarLeiaMais() {
    const artigoPrincipal = document.querySelector('main article');
    // Seleciona todos os parágrafos dentro do artigo (exceto o primeiro, que é a manchete)
    const paragrafosCompletos = artigoPrincipal.querySelectorAll('p:nth-child(n+4)'); 
    
    // Esconde os parágrafos adicionais por padrão
    paragrafosCompletos.forEach(p => {
        p.style.display = 'none';
    });

    // Cria o botão "Leia Mais"
    const botaoLeiaMais = document.createElement('a');
    botaoLeiaMais.textContent = 'Leia a matéria completa »';
    botaoLeiaMais.href = '#';
    botaoLeiaMais.classList.add('btn-primary', 'leia-mais-btn'); 
    artigoPrincipal.appendChild(botaoLeiaMais);

    // Evento de clique
    botaoLeiaMais.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Alterna a visibilidade dos parágrafos
        paragrafosCompletos.forEach(p => {
            // Se estiver oculto, mostra; se estiver visível, oculta
            p.style.display = p.style.display === 'none' ? 'block' : 'none';
        });

        // Altera o texto do botão
        if (paragrafosCompletos[0].style.display === 'block') {
            botaoLeiaMais.textContent = '« Recolher Matéria';
        } else {
            botaoLeiaMais.textContent = 'Leia a matéria completa »';
        }
    });
}

// --- 2. INTERAÇÃO DA GALERIA (Visualização Ampliada) ---
// O objetivo é fazer com que, ao clicar em uma imagem na galeria, ela abra em uma 
// visualização em tela cheia (Modal) para melhor apreciação.

function configurarGaleriaModal() {
    const imagensGaleria = document.querySelectorAll('.gallery img');
    
    // Cria o Modal (estrutura pop-up) dinamicamente
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 2000; /* Acima de todos os outros elementos */
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.9); /* Fundo escuro */
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;
    
    const modalConteudo = document.createElement('img');
    modalConteudo.style.cssText = `
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        max-height: 90vh; /* Altura máxima da tela */
        border-radius: 10px;
        animation-name: zoom;
        animation-duration: 0.6s;
    `;
    
    modal.appendChild(modalConteudo);
    document.body.appendChild(modal);

    // Adiciona o evento de clique em cada imagem
    imagensGaleria.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalConteudo.src = img.src;
        });
    });

    // Adiciona o evento para fechar o Modal ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        // Garante que só feche se clicar no fundo do modal e não na imagem
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}


// --- 3. EXECUÇÃO DE TODAS AS FUNÇÕES APÓS O CARREGAMENTO DA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    configurarLeiaMais();
    configurarGaleriaModal();
    console.log('Interações do site de Futebol Americano carregadas!');
});