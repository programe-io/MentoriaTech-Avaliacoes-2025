// Loader inicial
        window.addEventListener('load', function() {
            const loader = document.getElementById('loader');
            setTimeout(function() {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 2000);
        });

        // Criar partículas para o hero
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Tamanho aleatório
                const size = Math.random() * 10 + 5;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Posição horizontal aleatória
                particle.style.left = `${Math.random() * 100}%`;
                
                // Atraso aleatório para animação
                particle.style.animationDelay = `${Math.random() * 15}s`;
                
                // Cor aleatória
                const colors = ['#00d9ff', '#ff2e63', '#00ff88', '#ffffff'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.background = color;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Menu responsivo
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Animações ao scroll
        function checkScroll() {
            const sidebarWidgets = document.querySelectorAll('.sidebar-widget');
            const articles = document.querySelectorAll('article');
            
            // Sidebar widgets
            sidebarWidgets.forEach((widget, index) => {
                if (isElementInViewport(widget)) {
                    setTimeout(() => {
                        widget.classList.add('animated');
                    }, index * 200);
                }
            });
            
            // Articles
            articles.forEach((article, index) => {
                if (isElementInViewport(article)) {
                    setTimeout(() => {
                        article.classList.add('animated');
                    }, index * 200);
                }
            });
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);

        // Smooth scrolling para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Fechar menu mobile se estiver aberto
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            });
        });

        // Inicializar partículas
        createParticles();