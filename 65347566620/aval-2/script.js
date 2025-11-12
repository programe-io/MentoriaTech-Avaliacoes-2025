// Função para mostrar/esconder o conteúdo extra no ARTICLE
function toggleDetalhes() {
    const detalhes = document.getElementById('detalhes-extras');
    const botao = document.getElementById('toggle-button');
    
    // Altera o estado de visualização
    if (detalhes.style.display === 'none' || detalhes.style.display === '') {
        detalhes.style.display = 'block';
        botao.textContent = 'Esconder Tópicos Chave';
    } else {
        detalhes.style.display = 'none';
        botao.textContent = 'Ver Tópicos Chave';
    }
}

// Função para injetar o ano atual no rodapé
document.addEventListener('DOMContentLoaded', () => {
    const anoElement = document.getElementById('ano-atual');
    const hoje = new Date();
    
    // Define o ano atual no elemento <footer>
    if (anoElement) {
        anoElement.textContent = hoje.getFullYear();
    }
});