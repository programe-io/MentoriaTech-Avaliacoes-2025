 // Adicionando animação de entrada para os elementos
        document.addEventListener('DOMContentLoaded', function() {
            // Animação de entrada para os artigos
            const articles = document.querySelectorAll('article');
            articles.forEach((article, index) => {
                article.style.animationDelay = `${0.5 + (index * 0.2)}s`;
            });
            
            // Animação para os itens da timeline
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                item.style.animationDelay = `${0.2 + (index * 0.2)}s`;
            });
            
            // Efeito de flutuação para o botão
            const btn = document.querySelector('.btn');
            setInterval(() => {
                btn.style.transform = 'translateY(-5px)';
                setTimeout(() => {
                    btn.style.transform = 'translateY(0)';
                }, 1000);
            }, 3000);
        });