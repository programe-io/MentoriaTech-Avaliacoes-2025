// Função para mostrar/esconder os resultados detalhados no ARTICLE
function toggleResultados() {
    const resultados = document.getElementById('resultados-completos');
    const botao = document.getElementById('toggle-button');
    
    // Altera o estado de visualização
    if (resultados.style.display === 'none' || resultados.style.display === '') {
        resultados.style.display = 'block';
        botao.textContent = 'Esconder Resultados Detalhados';
    } else {
        resultados.style.display = 'none';
        botao.textContent = 'Mostrar Resultados Completos';
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