<script>
    // Aguarda o carregamento completo do documento
    document.addEventListener('DOMContentLoaded', (event) => {
        // Seleciona o link "Compre" pelo ID que adicionei no HTML
        const buyButton = document.getElementById('buy-button');

        // Verifica se o elemento foi encontrado
        if (buyButton) {
            // Adiciona um listener de evento de clique
            buyButton.addEventListener('click', (e) => {
                // Impede o comportamento padrão do link (navegar imediatamente)
                e.preventDefault();
                
                // Exibe um alerta
                alert('🛒 Compra simulada! Redirecionando para o site da Apple...');
                
                // Redireciona para o link original (Apple Store) após um pequeno atraso
                setTimeout(() => {
                    window.location.href = buyButton.href;
                }, 500); 
            });
        }
    });
</script>