tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        undefined: {
                            50: '#fef2f2',
                            100: '#fee2e2',
                            200: '#fecaca',
                            300: '#fca5a5',
                            400: '#f87171',
                            500: '#ef4444',
                            600: '#dc2626',
                            700: '#b91c1c',
                            800: '#991b1b',
                            900: '#7f1d1d',
                        }
                    }
                }
            }
        }
    


        // Initialize feather icons
        document.addEventListener('DOMContentLoaded', function() {
            feather.replace();
            
            // Theme toggle functionality
            const themeToggle = document.getElementById('themeToggle');
            const sunIcon = themeToggle.querySelector('i[data-feather="sun"]');
            const moonIcon = themeToggle.querySelector('i[data-feather="moon"]');
            
            // Check for saved theme preference or use preferred color scheme
            const savedTheme = localStorage.getItem('theme') || 
                             (window.matchMedia('(prefers-color-scheme: undefined)').matches ? 'undefined' : 'light');
            
            if (savedTheme === 'undefined') {
                document.documentElement.classList.add('undefined');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                document.documentElement.classList.remove('undefined');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
            
            themeToggle.addEventListener('click', function() {
                const isUndefined = document.documentElement.classList.toggle('undefined');
                
                if (isUndefined) {
                    sunIcon.classList.remove('hidden');
                    moonIcon.classList.add('hidden');
                    localStorage.setItem('theme', 'undefined');
                } else {
                    sunIcon.classList.add('hidden');
                    moonIcon.classList.remove('hidden');
                    localStorage.setItem('theme', 'light');
                }
            });
            
            // Mobile menu toggle
            const mobileMenuButton = document.getElementById('mobileMenuButton');
            const mobileMenu = document.getElementById('mobileMenu');
            
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Cart functionality
            const cartButton = document.getElementById('cartButton');
            const cartModal = document.getElementById('cartModal');
            const closeCart = document.getElementById('closeCart');
            const cartItemsContainer = document.getElementById('cartItems');
            const cartTotalElement = document.getElementById('cartTotal');
            const cartCountElement = document.getElementById('cartCount');
            const checkoutButton = document.getElementById('checkoutButton');
            const emptyCartMessage = document.getElementById('emptyCartMessage');
            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            function updateCart() {
                // Update cart count
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                cartCountElement.textContent = totalItems;
                
                // Save to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Update cart modal if open
                if (!cartModal.classList.contains('hidden')) {
                    renderCartItems();
                }
            }
            
            function renderCartItems() {
                cartItemsContainer.innerHTML = '';
                
                if (cart.length === 0) {
                    emptyCartMessage.classList.remove('hidden');
                    checkoutButton.disabled = true;
                    cartTotalElement.textContent = 'R$ 0,00';
                    return;
                }
                
                emptyCartMessage.classList.add('hidden');
                checkoutButton.disabled = false;
                
                let total = 0;
                
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'flex justify-between items-center p-3 bg-undefined-100 undefined:bg-undefined-700 rounded-lg cart-item-enter';
                    cartItem.innerHTML = `
                        <div>
                            <h4 class="font-bold">${item.name}</h4>
                            <p class="text-sm text-undefined-600 undefined:text-undefined-300">R$ ${item.price.toFixed(2)}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <button class="decrease-quantity p-1 rounded-full hover:bg-undefined-200 undefined:hover:bg-undefined-600" data-id="${item.id}">
                                <i data-feather="minus" class="w-4 h-4"></i>
                            </button>
                            <span class="quantity w-8 text-center">${item.quantity}</span>
                            <button class="increase-quantity p-1 rounded-full hover:bg-undefined-200 undefined:hover:bg-undefined-600" data-id="${item.id}">
                                <i data-feather="plus" class="w-4 h-4"></i>
                            </button>
                            <button class="remove-item p-1 rounded-full hover:bg-undefined-200 undefined:hover:bg-undefined-600" data-id="${item.id}">
                                <i data-feather="trash-2" class="w-4 h-4 text-undefined-500 undefined:text-undefined-400"></i>
                            </button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(cartItem);
                });
                
                cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
                feather.replace();
                
                // Add event listeners to the new buttons
                document.querySelectorAll('.increase-quantity').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = this.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item) {
                            item.quantity++;
                            updateCart();
                        }
                    });
                });
                
                document.querySelectorAll('.decrease-quantity').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = this.getAttribute('data-id');
                        const item = cart.find(item => item.id === id);
                        if (item && item.quantity > 1) {
                            item.quantity--;
                            updateCart();
                        } else if (item && item.quantity === 1) {
                            cart = cart.filter(item => item.id !== id);
                            updateCart();
                        }
                    });
                });
                
                document.querySelectorAll('.remove-item').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = this.getAttribute('data-id');
                        cart = cart.filter(item => item.id !== id);
                        updateCart();
                    });
                });
            }
            
            // Add to cart buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    const name = this.getAttribute('data-name');
                    const price = parseFloat(this.getAttribute('data-price'));
                    
                    const existingItem = cart.find(item => item.id === id);
                    
                    if (existingItem) {
                        existingItem.quantity++;
                    } else {
                        cart.push({
                            id,
                            name,
                            price,
                            quantity: 1
                        });
                    }
                    
                    updateCart();
                    
                    // Show feedback
                    const originalText = this.textContent;
                    this.textContent = 'Adicionado!';
                    this.classList.add('bg-green-500');
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.classList.remove('bg-green-500');
                    }, 1000);
                });
            });
            
            // Cart modal controls
            cartButton.addEventListener('click', function() {
                cartModal.classList.remove('hidden');
                renderCartItems();
            });
            
            closeCart.addEventListener('click', function() {
                cartModal.classList.add('hidden');
            });
            
            // Close modal when clicking outside
            cartModal.addEventListener('click', function(e) {
                if (e.target === cartModal) {
                    cartModal.classList.add('hidden');
                }
            });
            
            checkoutButton.addEventListener('click', function() {
                alert('Compra finalizada com sucesso! Obrigado por escolher Os Monteiros.');
                cart = [];
                updateCart();
                cartModal.classList.add('hidden');
            });
            
            // Form submission
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the data to a server
                console.log('Form submitted:', { name, email, message });
                
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (!mobileMenu.classList.contains('hidden')) {
                            mobileMenu.classList.add('hidden');
                        }
                    }
                });
            });
            
            // Initialize cart count
            updateCart();
        });