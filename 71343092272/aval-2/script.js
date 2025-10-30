// Adicionando interatividade e animações adicionais
        document.addEventListener('DOMContentLoaded', function() {
            // Animação para os cards ao rolar a página
            const cards = document.querySelectorAll('.card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach(card => {
                observer.observe(card);
            });
            
            // Efeito de digitação no título do destaque
            const highlightTitle = document.querySelector('.highlight-title');
            const originalText = highlightTitle.textContent;
            highlightTitle.textContent = '';
            highlightTitle.classList.add('typing-effect');
            
            setTimeout(() => {
                highlightTitle.textContent = originalText;
                highlightTitle.classList.remove('typing-effect');
            }, 3500);
            
            // Efeito de hover nos botões de odds
            const odds = document.querySelectorAll('.odd');
            odds.forEach(odd => {
                odd.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                    this.style.background = 'var(--accent)';
                });
                
                odd.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                    this.style.background = 'rgba(255, 255, 255, 0.1)';
                });
            });
            
            // Animação especial para os artigos do blog
            const blogArticles = document.querySelectorAll('.blog-article');
            blogArticles.forEach((article, index) => {
                article.style.animationDelay = `${index * 0.2}s`;
            });
        });