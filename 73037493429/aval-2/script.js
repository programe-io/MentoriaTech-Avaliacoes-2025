// ========================================
// MENU HAMBÚRGUER (MOBILE)
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ========================================
// FILTRO DE POSTS POR CATEGORIA
// ========================================
const filterLinks = document.querySelectorAll('[data-category]');
const posts = document.querySelectorAll('.post');

// Função para filtrar posts
function filterPosts(category) {
    posts.forEach(post => {
        const postCategory = post.getAttribute('data-category');

        if (category === 'all' || postCategory === category) {
            post.classList.remove('hidden');
            // Animação de entrada
            post.style.animation = 'fadeIn 0.6s ease';
        } else {
            post.classList.add('hidden');
        }
    });

    // Atualizar link ativo
    filterLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });
}

// Adicionar eventos de clique aos filtros
filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        filterPosts(category);

        // Scroll suave para o topo da seção de posts
        document.querySelector('.posts-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================
const backToTopButton = document.getElementById('backToTop');

// Mostrar/ocultar botão baseado no scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Funcionalidade de voltar ao topo
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// ANIMAÇÃO DE ENTRADA DOS POSTS
// ========================================
// Observer para animar posts quando entrarem na viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const postObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todos os posts
posts.forEach(post => {
    post.style.opacity = '0';
    post.style.transform = 'translateY(20px)';
    post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    postObserver.observe(post);
});

// ========================================
// SMOOTH SCROLLING PARA LINKS INTERNOS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// EFEITO HOVER NOS CARDS DE POST
// ========================================
posts.forEach(post => {
    // Adicionar efeito de elevação ao hover
    post.addEventListener('mouseenter', () => {
        post.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// ========================================
// CONTADOR DE POSTS POR CATEGORIA
// ========================================
function updateCategoryCounts() {
    const categories = {
        javascript: 0,
        css: 0,
        desenvolvimento: 0
    };

    posts.forEach(post => {
        if (!post.classList.contains('hidden')) {
            const category = post.getAttribute('data-category');
            if (categories.hasOwnProperty(category)) {
                categories[category]++;
            }
        }
    });

    // Atualizar contadores na sidebar
    document.querySelectorAll('.categories-list li').forEach(li => {
        const link = li.querySelector('a[data-category]');
        const count = li.querySelector('.count');
        if (link && count) {
            const category = link.getAttribute('data-category');
            if (categories.hasOwnProperty(category)) {
                count.textContent = categories[category];
            }
        }
    });
}

// Atualizar contadores inicialmente
updateCategoryCounts();

// ========================================
// PREVENÇÃO DE LINKS VAZIOS
// ========================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ========================================
// LAZY LOADING DE IMAGENS
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Força o carregamento
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.post-image img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// ANIMAÇÃO DE TÍTULO NA ROLAGEM
// ========================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Rolando para baixo
        header.style.transform = 'translateY(-100%)';
    } else {
        // Rolando para cima
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

header.style.transition = 'transform 0.3s ease';

// ========================================
// MENSAGEM DE BOAS-VINDAS NO CONSOLE
// ========================================
console.log('%c🚀 TechBlog', 'font-size: 20px; color: #FF6600; font-weight: bold;');
console.log('%cBem-vindo ao TechBlog! Explore nossos artigos sobre tecnologia e programação.', 'font-size: 14px; color: #000000;');

// ========================================
// MODO DE LEITURA (ADICIONAL)
// ========================================
// Adicionar classe ao body quando estiver em modo de leitura
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const post = button.closest('.post');
        post.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Destacar o post temporariamente
        post.style.boxShadow = '0 0 30px rgba(255, 102, 0, 0.4)';
        setTimeout(() => {
            post.style.boxShadow = '';
        }, 2000);
    });
});

// ========================================
// FECHAR MENU AO REDIMENSIONAR JANELA
// ========================================
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});

// ========================================
// ACESSIBILIDADE: NAVEGAÇÃO POR TECLADO
// ========================================
document.addEventListener('keydown', (e) => {
    // ESC fecha o menu mobile
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    }
});
