// Aguarda o carregamento completo do conteúdo da página antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
    // --------------------------------------------------------------------------
    // 1. Funcionalidade: Rolagem Suave (Smooth Scrolling)
    // --------------------------------------------------------------------------

    // Seleciona todos os links na navegação e o botão "Ver Cardápio" na seção Hero
    const links = document.querySelectorAll('nav a[href^="#"], .hero a.btn');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão do link de salto imediato
            event.preventDefault();

            // Pega o ID da seção de destino (ex: #cardapio)
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Rola para a seção de destino de forma suave
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('header').offsetHeight, // Ajusta pelo tamanho do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });


    // --------------------------------------------------------------------------
    // 2. Funcionalidade: Simular Ação de Pedido da Promoção
    // --------------------------------------------------------------------------

    // Seleciona o botão "Aproveitar" da promoção
    const promoBtn = document.querySelector('.promocao-aside .btn');

    if (promoBtn) {
        promoBtn.addEventListener('click', function(event) {
            // Previne a rolagem padrão do link (já que ele aponta para #cardapio)
            event.preventDefault(); 
            
            // Simula uma ação de pedido
            alert('🎉 Promoção ativada! Você está sendo redirecionado para o nosso cardápio. Escolha seu açaí e adicione a sua dose extra gratuita!');
            
            // Opcional: Você pode forçar a rolagem para o cardápio após o alerta, se preferir
            const cardapioSection = document.querySelector('#cardapio');
            if (cardapioSection) {
                 window.scrollTo({
                    top: cardapioSection.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

});