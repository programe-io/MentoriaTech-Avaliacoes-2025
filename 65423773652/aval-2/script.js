document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================================
    // MÓDULO 1: Carrinho de Compras (E-commerce Core)
    // =======================================================
    
    const cartElements = {
        list: document.getElementById('cart-items-list'),
        count: document.getElementById('cart-count'),
        totalValue: document.getElementById('cart-total-value'),
        modal: document.getElementById('cart-modal'),
        openBtn: document.getElementById('open-cart-btn'),
        closeBtn: document.querySelector('.modal-content .close-btn'),
        checkoutBtn: document.getElementById('checkout-btn'),
    };

    let cart = JSON.parse(localStorage.getItem('doceDeliciaCart')) || [];

    const saveCart = () => localStorage.setItem('doceDeliciaCart', JSON.stringify(cart));

    const showToast = (message, isError = false) => {
        const toast = document.getElementById('toast-notification');
        toast.textContent = message;
        toast.style.backgroundColor = isError ? '#e74c3c' : '#38c172'; // Verde ou Vermelho
        
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000); // 3 segundos
    };

    const updateCartDisplay = () => {
        cartElements.list.innerHTML = '';
        let total = 0;
        let totalItems = 0;

        if (cart.length === 0) {
            cartElements.list.innerHTML = '<li class="empty-cart-message">Seu carrinho está vazio. Adicione um doce!</li>';
            cartElements.checkoutBtn.classList.add('disabled');
            cartElements.checkoutBtn.disabled = true;
        } else {
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                totalItems += item.quantity;

                const li = document.createElement('li');
                li.classList.add('cart-item');
                li.innerHTML = `
                    <span class="item-name">${item.name}</span>
                    <div class="item-controls">
                        <button class="qty-change-btn" data-id="${item.id}" data-change="-1">-</button>
                        <span class="item-qty">${item.quantity}x</span>
                        <button class="qty-change-btn" data-id="${item.id}" data-change="1">+</button>
                        <span class="item-price">R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>
                        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remover item">&times;</button>
                    </div>
                `;
                cartElements.list.appendChild(li);
            });
            cartElements.checkoutBtn.classList.remove('disabled');
            cartElements.checkoutBtn.disabled = false;
        }

        cartElements.count.textContent = totalItems;
        cartElements.totalValue.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        saveCart();
    };
    
    const handleCartAction = (id, change) => {
        const itemIndex = cart.findIndex(item => item.id === id);
        
        if (itemIndex > -1) {
            const currentItem = cart[itemIndex];

            if (change === 1) {
                currentItem.quantity += 1;
                showToast(`Mais um ${currentItem.name} adicionado!`);
            } else if (change === -1) {
                currentItem.quantity -= 1;
                if (currentItem.quantity <= 0) {
                    cart.splice(itemIndex, 1); // Remove se a quantidade for 0
                    showToast(`${currentItem.name} removido do carrinho.`, true);
                }
            } else if (change === 'remove') {
                cart.splice(itemIndex, 1);
                showToast(`${currentItem.name} excluído do carrinho.`, true);
            }
        }
        updateCartDisplay();
    };

    // Event Listeners: Adicionar ao Carrinho
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            const name = e.currentTarget.dataset.name;
            const price = parseFloat(e.currentTarget.dataset.price);

            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                handleCartAction(id, 1);
            } else {
                cart.push({ id, name, price, quantity: 1 });
                showToast(`${name} adicionado ao carrinho!`);
            }

            updateCartDisplay();
        });
    });

    // Event Listeners: Alterar Quantidade/Remover (Delegação)
    cartElements.list.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (e.target.classList.contains('qty-change-btn')) {
            const change = parseInt(e.target.dataset.change);
            handleCartAction(id, change);
        } else if (e.target.classList.contains('cart-item-remove')) {
            handleCartAction(id, 'remove');
        }
    });

    // Event Listeners: Modal
    cartElements.openBtn.addEventListener('click', () => cartElements.modal.style.display = 'block');
    cartElements.closeBtn.addEventListener('click', () => cartElements.modal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === cartElements.modal) {
            cartElements.modal.style.display = 'none';
        }
    });

    // Event Listener: Checkout
    cartElements.checkoutBtn.addEventListener('click', () => {
        alert(`Pedido finalizado! O total de ${cartElements.totalValue.textContent} será enviado para o seu WhatsApp.`);
        cart = [];
        updateCartDisplay();
        cartElements.modal.style.display = 'none';
    });

    updateCartDisplay(); // Inicializa o carrinho ao carregar
    
    // =======================================================
    // MÓDULO 2: Interações de UI (Menu Mobile & Filtros)
    // =======================================================
    
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Toggle Menu Mobile
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const isExpanded = mainNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Filtro de Produtos
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            productCards.forEach(card => {
                const itemCategory = card.dataset.category;
                // Aplica efeito de transição (seria configurado no CSS)
                card.style.opacity = '0.3'; 
                card.style.display = 'none'; 

                setTimeout(() => {
                    if (category === 'all' || itemCategory === category) {
                        card.style.display = 'figure';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                    }
                }, 150); // Delay para simular transição
            });
        });
    });
    
    // =======================================================
    // MÓDULO 3: Newsletter (Formulário)
    // =======================================================
    
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMessage = document.getElementById('newsletter-message');

    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('email-input').value;

        // Simulação de envio
        newsletterMessage.textContent = `Email ${emailInput} registrado! Desconto enviado.`;
        newsletterMessage.classList.add('success');
        
        setTimeout(() => {
            document.getElementById('email-input').value = '';
            newsletterMessage.textContent = '';
            newsletterMessage.classList.remove('success');
        }, 5000);
    });

});