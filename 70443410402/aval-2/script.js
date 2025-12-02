// Arquivo: script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Variáveis
    const desenvolvedor = "Izaac Marley";
    const nomeBlog = "Zona Gamer";
    
    // 2. Cria uma mensagem
    const mensagem = `Bem-vindo(a) à ${nomeBlog}! Conteúdo exclusivo por ${desenvolvedor}.`;
    
    // 3. Encontra o cabeçalho no HTML
    const cabecalho = document.querySelector('.cabecalho');
    
    if (cabecalho) {
        // 4. Cria um novo elemento de parágrafo (p)
        const elementoMensagem = document.createElement('p');
        elementoMensagem.textContent = mensagem;
        
        // 5. Adiciona um ID para estilização (opcional, mas útil)
        elementoMensagem.id = 'js-mensagem-boas-vindas';
        
        // 6. Insere o novo elemento logo abaixo do parágrafo existente no cabeçalho
        const pExistente = cabecalho.querySelector('p');
        if (pExistente) {
            pExistente.after(elementoMensagem);
        } else {
            cabecalho.appendChild(elementoMensagem);
        }
    }
});