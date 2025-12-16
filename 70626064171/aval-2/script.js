// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidade de Busca
    const criarBarraBusca = () => {
        const nav = document.querySelector('nav');
        const buscaHtml = `
            <div style="margin-top: 10px;">
                <input type="text" id="inputBusca" placeholder="Buscar receita..." 
                style="padding: 8px; border-radius: 20px; border: none; width: 250px;">
            </div>
        `;
        nav.insertAdjacentHTML('beforeend', buscaHtml);

        const input = document.getElementById('inputBusca');
        input.addEventListener('keyup', () => {
            const termo = input.value.toLowerCase();
            const cards = document.querySelectorAll('article');

            cards.forEach(card => {
                const titulo = card.querySelector('h3').innerText.toLowerCase();
                if (titulo.includes(termo)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    };

    // 2. Sistema de "Curtir" Receitas
    const adicionarBotaoCurtir = () => {
        const cards = document.querySelectorAll('.content');
        
        cards.forEach(card => {
            const btnCoracao = document.createElement('span');
            btnCoracao.innerHTML = ' ❤️';
            btnCoracao.style.cursor = 'pointer';
            btnCoracao.style.fontSize = '1.2rem';
            btnCoracao.title = 'Curtir esta receita';
            
            btnCoracao.addEventListener('click', function() {
                this.classList.toggle('curtido');
                if(this.classList.contains('curtido')) {
                    this.style.filter = 'grayscale(0%)';
                    alert('Receita favoritada!');
                } else {
                    this.style.filter = 'grayscale(100%)';
                }
            });

            // Iniciar como não curtido
            btnCoracao.style.filter = 'grayscale(100%)';
            card.querySelector('h3').appendChild(btnCoracao);
        });
    };

    // 3. Animação de Entrada (Scroll Reveal)
    const animarCards = () => {
        const articles = document.querySelectorAll('article');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        articles.forEach(article => {
            article.style.opacity = '0';
            article.style.transform = 'translateY(20px)';
            article.style.transition = 'all 0.6s ease-out';
            observer.observe(article);
        });
    };

    // Inicializar funções
    criarBarraBusca();
    adicionarBotaoCurtir();
    animarCards();
});