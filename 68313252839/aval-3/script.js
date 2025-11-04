// O catálogo de dados não é mais necessário aqui, pois a informação está no HTML.

const verCatalogoBtn = document.getElementById('ver-catalogo-btn');
const catalogoSection = document.getElementById('catalogo');

/**
 * Função para rolagem suave ao clicar no botão "Explorar Vestidos"
 */
function rolarParaCatalogo() {
    catalogoSection.scrollIntoView({ behavior: 'smooth' });
}

// --- Inicialização e Event Listeners ---

// 1. Evento de clique no botão principal
verCatalogoBtn.addEventListener('click', rolarParaCatalogo);

// 2. Placeholder de funcionalidade para os botões "Ver Detalhes"
// Usamos a seção do catálogo, pois os botões estão lá
catalogoSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('detalhes-btn')) {
        const card = event.target.closest('.vestido-card');
        const vestidoId = card.getAttribute('data-id');
        
        // Pega o título do vestido no card para usar no alerta
        const vestidoNome = card.querySelector('h4').textContent;
        
        alert(`Detalhes do Vestido ID ${vestidoId}: ${vestidoNome}. Implementar navegação para a página de detalhes.`);
    }
});