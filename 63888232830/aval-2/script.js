// Animação de entrada para os elementos
        document.addEventListener('DOMContentLoaded', function() {
            // Animação de entrada para os artigos
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            animatedElements.forEach(element => {
                observer.observe(element);
            });
            
            // Animação sequencial para os artigos
            const articles = document.querySelectorAll('article');
            articles.forEach((article, index) => {
                article.style.transitionDelay = `${index * 0.1}s`;
                article.classList.add('animate');
            });
            
            // Efeito de hover nos artigos
            articles.forEach(article => {
                article.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                article.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Efeito de digitação no título do hero
            const heroTitle = document.querySelector('.hero h2');
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
            
            // Inicia a animação de digitação após um pequeno delay
            setTimeout(typeWriter, 500);
        });