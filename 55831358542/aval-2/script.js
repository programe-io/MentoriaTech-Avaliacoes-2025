/**
 * Script.js para o Site do Pedro
 * Este código fornece uma base simples para a interatividade do site.
 */

// 1. Função para manipular os cliques do menu de navegação
// Esta função é chamada pelo atributo 'onclick' nos links da sua tag <nav>.
function menuClick(pageName) {
    // Exibe um alerta simples para simular a navegação.
    // Em um site real, você carregaria o conteúdo da página aqui.
    alert(`Você clicou em: ${pageName}. A página será carregada em breve!`);
    
    // Opcional: Loga a ação no console do navegador para fins de debug.
    console.log(`Navegação: O usuário tentou ir para a página "${pageName}"`);
}

// 2. Evento que é disparado assim que a estrutura do HTML é carregada.
// É um bom lugar para colocar qualquer lógica inicial que precisa rodar no carregamento.
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona uma mensagem de "base" ao console para confirmar que o script carregou.
    console.log('✅ Base do JavaScript carregada com sucesso!');
    console.log('O DOM (Document Object Model) está pronto.');

    // Exemplo de uma interação simples: Mudar o texto do rodapé após 3 segundos
    setTimeout(() => {
        const footerText = document.querySelector('footer p');
        if (footerText) {
            footerText.textContent = footerText.textContent.replace('2024', '2024 - JS Ativado!');
        }
    }, 3000); // 3000 milissegundos = 3 segundos
});