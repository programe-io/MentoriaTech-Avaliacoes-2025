<script>
    // 1. Função para abrir o modal
    function openModal(title, description, imageSrc) {
        // Seleciona os elementos do modal
        const modal = document.getElementById('product-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalImage = document.getElementById('modal-image');

        // Atualiza o conteúdo do modal com os dados do produto
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = imageSrc;

        // Torna o modal visível (removendo a classe 'hidden' do Tailwind)
        modal.classList.remove('hidden');
    }

    // 2. Função para fechar o modal
    function closeModal() {
        const modal = document.getElementById('product-modal');
        // Oculta o modal (adicionando a classe 'hidden' do Tailwind)
        modal.classList.add('hidden');
    }

    // 3. Adiciona ouvintes de eventos a todos os botões "Ver Detalhes"
    document.addEventListener('DOMContentLoaded', () => {
        // Seleciona todos os botões com a classe 'details-button'
        const detailButtons = document.querySelectorAll('.details-button');
        
        detailButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                // Previne o comportamento padrão do link
                event.preventDefault(); 
                
                // Obtém os dados armazenados nos atributos 'data-' do botão
                const title = button.getAttribute('data-title');
                const description = button.getAttribute('data-description');
                const imageSrc = button.getAttribute('data-image');

                // Chama a função para abrir o modal
                openModal(title, description, imageSrc);
            });
        });

        // Adiciona ouvinte de evento ao botão de fechar (X)
        const closeButton = document.getElementById('close-modal-button');
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        // Fecha o modal ao clicar fora dele
        const modal = document.getElementById('product-modal');
        if (modal) {
            modal.addEventListener('click', (event) => {
                // Verifica se o clique foi diretamente no fundo do modal
                if (event.target === modal) {
                    closeModal();
                }
            });
        }
    });
</script>