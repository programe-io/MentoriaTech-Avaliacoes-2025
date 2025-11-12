// Função para mostrar/esconder as regras avançadas no ARTICLE
function toggleRegras() {
    const regras = document.getElementById('regras-extras');
    const botao = document.getElementById('toggle-button');
    
    // Altera o estado de visualização
    if (regras.style.display === 'none' || regras.style.display === '') {
        regras.style.display = 'block';
        botao.textContent = 'Esconder Regras Avançadas';
    } else {
        regras.style.display = 'none';
        botao.textContent = 'Mostrar Regras Avançadas';
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