// Filtro de categorias
document.addEventListener('DOMContentLoaded', function() {
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const itensCardapio = document.querySelectorAll('.item-cardapio');
    
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            categoriaBtns.forEach(b => b.classList.remove('active'));
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            
            // Filtra os itens do cardápio
            itensCardapio.forEach(item => {
                if (categoria === 'todos' || item.getAttribute('data-categoria') === categoria) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Modal de pedido
    const modal = document.getElementById('modal-pedido');
    const btnPedido = document.querySelectorAll('.btn-pedido');
    const closeBtn = document.querySelector('.close');
    const formPedido = document.getElementById('form-pedido');
    const itemInput = document.getElementById('item');
    
    // Abre o modal quando clica em um botão de pedido
    btnPedido.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemCardapio = this.closest('.item-cardapio');
            const nomeItem = itemCardapio.querySelector('h3').textContent;
            itemInput.value = nomeItem;
            modal.style.display = 'block';
        });
    });
    
    // Fecha o modal quando clica no X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Fecha o modal quando clica fora dele
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Processa o formulário de pedido
    formPedido.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const item = itemInput.value;
        const quantidade = document.getElementById('quantidade').value;
        
        // Aqui você normalmente enviaria os dados para um servidor
        // Por enquanto, vamos apenas mostrar um alerta
        alert(`Pedido enviado!\n\nNome: ${nome}\nTelefone: ${telefone}\nItem: ${item}\nQuantidade: ${quantidade}\n\nEm breve entraremos em contato para confirmar seu pedido!`);
        
        // Limpa o formulário e fecha o modal
        formPedido.reset();
        modal.style.display = 'none';
    });
    
    // Formatação do telefone
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        
        if (value.length > 11) {
            value = value.substring(0, 11);
        }
        
        if (value.length > 10) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 6) {
            value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/^(\d*)/, '($1');
        }
        
        this.value = value;
    });
});