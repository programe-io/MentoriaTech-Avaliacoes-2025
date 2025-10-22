document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidade para o botão "Adicionar ao Carrinho"
    const botoesAdicionar = document.querySelectorAll('.add-to-cart');

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            // Encontra o item de produto pai
            const itemProduto = this.closest('.product-item');
            const nomePerfume = itemProduto.querySelector('h3').textContent;

            // Simulação de adição ao carrinho (poderia ser uma lógica mais complexa com JS)
            alert(`"${nomePerfume}" foi adicionado ao seu carrinho!`);

            // (Opcional) Mudar o texto do botão brevemente para indicar sucesso
            const textoOriginal = this.textContent;
            this.textContent = 'Adicionado!';
            this.style.backgroundColor = '#4CAF50'; // Cor verde

            setTimeout(() => {
                this.textContent = textoOriginal;
                this.style.backgroundColor = ''; // Retorna ao CSS original (Roxo)
            }, 1500);
        });
    });

    // 2. Funcionalidade para o formulário de Contato
    const formContato = document.querySelector('.contact form');

    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário (que exigiria backend)

            // Simulação de envio
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

            // Limpa o formulário após a simulação de envio
            formContato.reset();
        });
    }

    // 3. (Opcional) Efeito suave de scroll ao clicar nos links do menu
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});