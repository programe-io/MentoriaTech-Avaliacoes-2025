
// script.js

// 1. Mensagem de Boas-Vindas ao carregar a página
function saudarVisitante() {
    // Alerta pop-up de boas-vindas
    alert("Bem-vindo(a) à ilha! Você é um Pogue ou um Kook? Fique ligado nas nossas teorias!");
}

// 2. Adiciona um evento que dispara a função quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', saudarVisitante);

// 3. Exemplo de interação (opcional): Adicionar um contador simples para os artigos
const artigos = document.querySelectorAll('article');
console.log(`Este blog tem ${artigos.length} artigos destacados.`);

// Função para mostrar a hora no rodapé (melhorando a funcionalidade do site)
function mostrarDataHora() {
    const dataAtual = new Date();
    const elementoFooter = document.querySelector('footer p');
    
    // Concatena a informação da data/hora ao texto existente
    elementoFooter.textContent += ` | Última visita: ${dataAtual.toLocaleDateString()} ${dataAtual.toLocaleTimeString()}`;
}

// Executa a função após um pequeno delay para não conflitar com o alerta inicial
setTimeout(mostrarDataHora, 100);
