// Adicionando animações de entrada para os elementos
        document.addEventListener('DOMContentLoaded', function() {
            // Animação de entrada para os artigos
            const articles = document.querySelectorAll('article');
            articles.forEach((article, index) => {
                article.style.animationDelay = `${0.1 * index}s`;
            });
            
            // Efeito de digitação no título do destaque
            const featuredText = document.querySelector('.featured h2');
            const text = featuredText.textContent;
            featuredText.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    featuredText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Inicia a animação de digitação após um breve delay
            setTimeout(typeWriter, 500);
            
            // Adiciona efeito de parallax no header
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const header = document.querySelector('header');
                header.style.transform = `translateY(${scrolled * 0.4}px)`;
            });

            // Criar partículas de fundo
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Tamanho aleatório
                const size = Math.random() * 6 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Posição aleatória
                particle.style.left = `${Math.random() * 100}vw`;
                particle.style.top = `${Math.random() * 100}vh`;
                
                // Atraso de animação aleatório
                particle.style.animationDelay = `${Math.random() * 15}s`;
                
                // Duração de animação aleatória
                particle.style.animationDuration = `${15 + Math.random() * 20}s`;
                
                particlesContainer.appendChild(particle);
            }

            // Efeito de brilho interativo nos cards
            const cards = document.querySelectorAll('article');
            cards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    this.style.setProperty('--mouse-x', `${x}px`);
                    this.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        });