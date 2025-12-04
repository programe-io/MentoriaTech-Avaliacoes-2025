/**
 * =====================================
 * 1. Manipulação do DOM (Document Object Model)
 * =====================================
 * O DOM é a representação da sua página HTML. O JS o usa para ler e mudar o conteúdo.
 */

// 1.1. Altera o texto do rodapé para mostrar o ano atual dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    // Pega o elemento <p> dentro do <footer> que contém os direitos autorais
    const copyrightParagraph = document.querySelector('footer p');

    if (copyrightParagraph) {
        // Cria um novo objeto Date para pegar o ano atual
        const currentYear = new Date().getFullYear();
        
        // Define o texto de direitos autorais dinamicamente
        copyrightParagraph.textContent = `© ${currentYear} Meu Site HTML. Todos os direitos reservados.`;
    }
});


/**
 * =====================================
 * 2. Manipulação de Eventos
 * =====================================
 * Torna o site interativo respondendo a ações do usuário.
 */

// 2.1. Impede o envio do formulário e mostra um alerta
// Seleciona o elemento <form>
const contactForm = document.querySelector('form');

if (contactForm) {
    // Adiciona um "listener" (ouvinte) para o evento 'submit' (envio)
    contactForm.addEventListener('submit', function(event) {
        
        // **event.preventDefault()** é crucial: ele impede que o navegador recarregue a página
        // (comportamento padrão de um formulário)
        event.preventDefault(); 
        
        // Pega o valor digitado no campo Nome
        const nameInput = document.getElementById('nome');
        const userName = nameInput ? nameInput.value : 'Visitante';

        // Mostra uma mensagem de confirmação ao usuário
        alert(`Obrigado, ${userName}! Seu formulário foi interceptado pelo JavaScript e não será enviado.`);
        
        // Chamando uma função extra de exemplo
        logFormSubmit(userName);
    });
}


/**
 * =====================================
 * 3. Função de Exemplo
 * =====================================
 * Declara uma função reutilizável para realizar uma tarefa.
 */

function logFormSubmit(name) {
    // Isto aparecerá no console do navegador (F12)
    console.log(`[JS Ativo] Submissão do formulário logada para o usuário: ${name}`);
    
    // Você pode usar esta função para enviar dados para um servidor (backend) futuramente.
}

// 3.1. Exemplo de como chamar uma função em outro lugar
// Você pode chamar esta função a partir de um clique em qualquer elemento que desejar:
// Por exemplo, document.getElementById('secao').addEventListener('click', minhaFuncaoDeExemplo);