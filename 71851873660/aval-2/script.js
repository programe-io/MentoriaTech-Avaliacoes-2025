document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegação Suave (Smooth Scroll)
    
    // Seleciona todos os links de navegação que apontam para IDs internos (#sobre, #cardapio, #contato)
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão (pular imediatamente para a seção)
            e.preventDefault();

            // Pega o ID da seção de destino (ex: "#cardapio")
            const idDestino = this.getAttribute('href');
            
            // Encontra o elemento de destino
            const elementoDestino = document.querySelector(idDestino);

            if (elementoDestino) {
                // Rola a página suavemente até o elemento
                window.scrollTo({
                    top: elementoDestino.offsetTop - document.querySelector('header').offsetHeight, // Ajusta a rolagem para não cobrir o conteúdo com o cabeçalho fixo
                    behavior: 'smooth'
                });
            }
        });
    });


    // **********************************************
    // 2. Exemplo: Alerta de Pedido (Pode ser melhorado com um modal ou formulário)
    // **********************************************
    const botaoPedido = document.querySelector('.btn-whatsapp');
    
    if (botaoPedido) {
        botaoPedido.addEventListener('click', (e) => {
            // Se for um link real do WhatsApp (href="https://wa.me/...")
            // não precisamos do preventDefault, mas se for um placeholder "#", usamos.
            if (botaoPedido.getAttribute('href') === '#') {
                e.preventDefault();
                alert('O link para o WhatsApp foi clicado! Certifique-se de substituir o "#" no HTML pelo seu link real do WhatsApp.');
            }
            // Se for um link real, ele abrirá o WhatsApp diretamente.
        });
    }

});