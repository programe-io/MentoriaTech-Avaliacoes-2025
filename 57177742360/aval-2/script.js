// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    mobileMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulação de cadastro
            alert(`Obrigado por se inscrever com o email: ${email}`);
            this.reset();
        });
    }
    
    // Smooth scroll para links internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de cards ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animação aos cards de artigo
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Contador de visualizações simulado
    function simulateViewCount() {
        const viewCountElements = document.querySelectorAll('.article-meta span:first-child');
        viewCountElements.forEach(element => {
            const randomViews = Math.floor(Math.random() * 1000) + 100;
            // Poderia adicionar um contador de visualizações aqui
        });
    }
    
    simulateViewCount();
    
    // Sistema de comentários básico
    function initCommentSystem() {
        console.log('Sistema de comentários inicializado');
        // Aqui poderia ser implementada a lógica para comentários
    }
    
    initCommentSystem();
    
    // Dark mode toggle (opcional)
    function initDarkMode() {
        const darkModeToggle = document.createElement('button');
        darkModeToggle.textContent = '🌙';
        darkModeToggle.className = 'dark-mode-toggle';
        darkModeToggle.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--secondary-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            z-index: 1000;
            font-size: 1.2rem;
        `;
        
        document.body.appendChild(darkModeToggle);
        
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    }
    
    // Descomente a linha abaixo para ativar o dark mode
    // initDarkMode();
});

// Função para carregar mais artigos
function loadMoreArticles() {
    // Simulação de carregamento de mais artigos
    console.log('Carregando mais artigos...');
    
    // Aqui poderia fazer uma requisição AJAX para carregar mais conteúdo
    setTimeout(() => {
        alert('Mais artigos carregados!');
    }, 1000);
}

// Adicionar botão "Carregar Mais" dinamicamente
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.textContent = 'Carregar Mais Artigos';
    loadMoreBtn.className = 'btn';
    loadMoreBtn.style.margin = '30px auto';
    loadMoreBtn.style.display = 'block';
    
    loadMoreBtn.addEventListener('click', loadMoreArticles);
    
    const articlesSection = document.querySelector('.articles');
    if (articlesSection) {
        articlesSection.appendChild(loadMoreBtn);
    }
});