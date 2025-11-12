// Variável global para armazenar o número de peixes
let numPeixes = 0;

// Função para manipular o placar de peixes
function adicionarPeixe() {
    // 1. Aumenta o contador
    numPeixes++;
    
    // 2. Atualiza o elemento no HTML
    const placarElemento = document.getElementById('placar-capturas');
    
    // 3. Adiciona um pequeno feedback visual
    if (placarElemento) {
        placarElemento.textContent = numPeixes;
        
        // Efeito: Bate e volta a cor para indicar o "fisgado"
        placarElemento.style.transition = 'color 0.1s';
        placarElemento.style.color = '#e74c3c'; // Muda para vermelho
        
        setTimeout(() => {
            placarElemento.style.color = '#00897b'; // Volta para a cor original
        }, 150);
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