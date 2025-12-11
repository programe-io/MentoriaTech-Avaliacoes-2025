// 1. Mensagem de Boas-Vindas ao Carregar a Página
// O evento 'DOMContentLoaded' garante que o script só roda depois que todo o HTML for carregado.
document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada com sucesso! Pronto para interagir.");
    
    // Alerta de boas-vindas (pode ser irritante, use com moderação em sites reais!)
    // alert("Bem-vindo ao Meu Primeiro Website Interativo!"); 
});


// 2. Validação Simples do Formulário de Contato
// Seleciona o formulário usando seu ID (se não tiver ID, use a tag 'form')
const formulario = document.querySelector('form');

if (formulario) {
    // Adiciona um 'ouvinte de evento' para quando o formulário for submetido
    formulario.addEventListener('submit', function(event) {
        
        // Impede o comportamento padrão de envio do formulário (que recarregaria a página)
        event.preventDefault(); 
        
        // Pega os valores dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        let isValid = true;
        let errorMessage = '';

        // Validação do Nome
        if (nome === '') {
            errorMessage += 'O campo Nome é obrigatório.\n';
            isValid = false;
        }

        // Validação do Email (apenas verifica se está vazio)
        if (email === '') {
            errorMessage += 'O campo Email é obrigatório.\n';
            isValid = false;
        } 
        
        // Você poderia adicionar uma validação de formato de email mais complexa aqui
        // Ex: else if (!email.includes('@')) { ... }
        
        // Validação da Mensagem
        if (mensagem === '') {
            errorMessage += 'O campo Mensagem é obrigatório.\n';
            isValid = false;
        }
        
        // Verifica o resultado da validação
        if (isValid) {
            // Se tudo estiver OK, simula o envio e limpa o formulário
            console.log('Dados a serem enviados:', {
                nome: nome,
                email: email,
                mensagem: mensagem
            });
            
            // Exibe uma mensagem de sucesso
            alert('Mensagem enviada com sucesso! Obrigado pelo seu contato.');
            
            // Limpa o formulário
            formulario.reset(); 
            
            // Em um site real, você faria uma requisição AJAX para um servidor aqui.
        } else {
            // Se houver erro, exibe a lista de problemas
            alert('Erro no preenchimento do formulário:\n' + errorMessage);
        }
    });
} else {
    console.warn("Formulário de contato não encontrado no DOM. A validação não será aplicada.");
}