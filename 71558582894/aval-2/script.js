// A função é executada após o HTML ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtém o botão de contato pelo ID
    const contatoBtn = document.getElementById('contato-btn');

    // Adiciona um "ouvinte de evento" para o clique
    if (contatoBtn) {
        contatoBtn.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link (navegar para #)
            event.preventDefault(); 
            
            // Exibe um alerta simples
            alert('Obrigada por querer entrar em contato! Mande um e-mail para: larissa.lourrany@exemplo.com');
        });
    }

    // Você pode adicionar mais funcionalidades aqui, como:
    // - Mostrar/Esconder comentários
    // - Carregar posts dinamicamente
    // - Validar formulários (se houver)
});