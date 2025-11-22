(function() {
    // FUNÇÕES DO CARRINHO (SÃO MANTIDAS)
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    // NOTE: Selecionamos os botões aqui.
    const addToCartButtons = document.querySelectorAll('.add-to-cart'); 
    const checkoutButton = document.getElementById('checkout-btn');
    let cart = []; 

    // VARIÁVEIS DAS ABAS/FILTROS
    const tabButtons = document.querySelectorAll('.tab-button');
    const gameItems = document.querySelectorAll('.game-item');

    // Função para atualizar o carrinho
    function updateCart() {
        cartItemsList.innerHTML = ''; 
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`;
            cartItemsList.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Função de filtragem de jogos
    function filterGames(filter) {
        gameItems.forEach(item => {
            const genres = item.getAttribute('data-genre').split(' '); 

            if (filter === 'all' || genres.includes(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    // --- EVENT LISTENERS DAS ABAS ---
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Gerencia a classe 'active' para o CSS
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            filterGames(filter);
        });
    });


    // --- EVENT LISTENERS DO CARRINHO ---
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const itemElement = event.target.closest('.game-item');
            const itemId = itemElement.getAttribute('data-id');
            const itemName = itemElement.getAttribute('data-name');
            const itemPrice = parseFloat(itemElement.getAttribute('data-price'));

            const existingItem = cart.find(item => item.id === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1 });
            }

            updateCart();
            alert(`${itemName} adicionado ao carrinho!`);
        });
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert(`Compra finalizada! Total a pagar: ${cartTotalSpan.textContent}. Obrigado por comprar na GameStore!`);
            cart = [];
            updateCart();
        } else {
            alert('Seu carrinho está vazio. Adicione um jogo antes de finalizar a compra.');
        }
    });

    // Função de Rolagem Suave (Para os links do NAV funcionarem)
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
})();