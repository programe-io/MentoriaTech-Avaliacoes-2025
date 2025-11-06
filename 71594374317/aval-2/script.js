 // Adicionando animação de entrada para elementos quando aparecem na tela
        document.addEventListener('DOMContentLoaded', function() {
            // Animação de entrada para elementos
            const animatedElements = document.querySelectorAll('article, .sidebar-widget');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
            
            // Efeito de digitação no hero
            const heroTitle = document.querySelector('.hero h1');
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            function typeWriter() {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Inicia a animação de digitação após um breve delay
            setTimeout(typeWriter, 500);
        });