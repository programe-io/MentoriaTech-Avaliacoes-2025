// script.js

// 1. Função para adicionar interatividade ao cabeçalho
function inicializarInteratividadeHeader() {
    // Seleciona o elemento do cabeçalho (header)
    const header = document.querySelector('header');
    
    // Define um array de cores para alternar
    const cores = ['#004d40', '#4CAF50', '#FFC107', '#E53935']; // Verde Escuro, Verde Claro, Amarelo, Vermelho
    let indiceCorAtual = 0;

    // Adiciona um "ouvinte de evento" (event listener) para o clique
    header.addEventListener('click', function() {
        // Altera a cor do fundo para a próxima cor no array
        indiceCorAtual = (indiceCorAtual + 1) % cores.length;
        header.style.backgroundColor = cores[indiceCorAtual];
        
        // Exibe uma mensagem rápida no console
        console.log("Cor do cabeçalho alterada para: " + cores[indiceCorAtual]);
    });
}

// 2. Função para exibir uma mensagem de boas-vindas temporária
function exibirMensagemBoasVindas() {
    // Cria um novo elemento <div> para a mensagem
    const mensagemDiv = document.createElement('div');
    mensagemDiv.textContent = "Bem-vindo ao Futebol Mais Bonito do Mundo!";
    
    // Adiciona estilos inline para que a mensagem seja visível
    mensagemDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #ffc107; /* Amarelo */
        color: #333;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        opacity: 1;
        transition: opacity 1s ease-in-out;
    `;
    
    // Adiciona a mensagem ao corpo do documento
    document.body.appendChild(mensagemDiv);

    // Usa setTimeout para fazer a mensagem desaparecer após 3 segundos (3000ms)
    setTimeout(() => {
        // Inicia a transição de opacidade para 'fade out'
        mensagemDiv.style.opacity = '0'; 
        
        // Remove o elemento do DOM após a transição (mais 1 segundo)
        setTimeout(() => {
            mensagemDiv.remove();
        }, 1000); 

    }, 3000);
}

// 3. O Ponto de Entrada: Executa as funções quando a página estiver totalmente carregada
document.addEventListener('DOMContentLoaded', function() {
    inicializarInteratividadeHeader();
    exibirMensagemBoasVindas();
});