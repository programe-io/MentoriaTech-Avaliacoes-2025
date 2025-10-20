 // Adicionando animações de entrada aos elementos quando a página carrega
        document.addEventListener('DOMContentLoaded', function() {
            // Animação de entrada para artigos
            const articles = document.querySelectorAll('article');
            articles.forEach((article, index) => {
                article.style.animationDelay = `${index * 0.2}s`;
            });
            
            // Animação de entrada para widgets da sidebar
            const widgets = document.querySelectorAll('.sidebar-widget');
            widgets.forEach((widget, index) => {
                widget.style.animationDelay = `${index * 0.3}s`;
            });
            
            // Efeito de digitação no título do hero (opcional)
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
            
            // Inicia o efeito de digitação após um pequeno delay
            setTimeout(typeWriter, 1000);
        });