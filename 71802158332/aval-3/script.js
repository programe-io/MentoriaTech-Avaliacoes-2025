// script.js - JavaScript Completo e Separado

// Dados dinâmicos (exemplo: conquistas com contador animado)
const conquistasData = [
    { titulo: 'Bolas de Ouro', valor: 5, unidade: '' },
    { titulo: 'Ligas dos Campeões', valor: 5, unidade: '' },
    { titulo: 'Eurocopas', valor: 1, unidade: '' },
    { titulo: 'Nations League', valor: 1, unidade: '' },
    { titulo: 'Gols Oficiais', valor: 950, unidade: '+' },
    { titulo: 'Gols de Cabeça', valor: 151, unidade: '' },
    { titulo: 'Vitórias em Competições Europeias', valor: 200, unidade: '+' }, // Aproximado
    { titulo: 'Patrimônio Líquido (2025)', valor: 1000, unidade: 'M USD' }
];

// Função para navegação suave
function initSmoothScroll() {
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
}

// Função para animar contadores de conquistas
function initCounters() {
    const countersContainer = document.querySelector('#conquistas');
    if (!countersContainer) return;

    // Substitui a lista estática por contadores dinâmicos
    const ul = countersContainer.querySelector('ul');
    ul.innerHTML = ''; // Limpa a lista original

    conquistasData.forEach(conquista => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.classList.add('counter');
        span.setAttribute('data-target', conquista.valor);
        span.textContent = '0'; // Inicia em 0
        li.innerHTML = `<strong>${conquista.titulo}:</strong> <span class="counter" data-target="${conquista.valor}">${conquista.unidade ? '0 ' + conquista.unidade : '0'}</span>`;
        ul.appendChild(li);
    });

    // Anima os contadores ao rolar para a seção
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;

    function animateCounters() {
        if (hasAnimated) return;
        const rect = countersContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 50; // Velocidade da animação
                let current = 0;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current) + (counter.getAttribute('data-target') === '950' ? '+' : ''); // Adapta unidade se necessário
                }, 20);
            });
            hasAnimated = true;
        }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Verifica imediatamente
}

// Função para modal da galeria
function initGalleryModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.gallery img');
    const closeBtn = document.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.getAttribute('data-full') || img.src;
            captionText.textContent = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Função para carregar conteúdo dinâmico (exemplo: atualizar gols em 2025)
function updateDynamicContent() {
    // Simula uma API call ou dados atualizados
    const alNassrContent = document.querySelector('#carreira .timeline-item:last-child p');
    if (alNassrContent) {
        alNassrContent.textContent = 'Em 2025, aos 40 anos, marcou 35 gols na temporada 2024/25 (atualizado), rumo aos 1000 gols oficiais (já ultrapassou 975).'; // Exemplo de update
    }
}

// Inicialização principal
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initCounters();
    initGalleryModal();
    updateDynamicContent();

    // Adiciona um evento de scroll para efeitos adicionais (ex: header sticky)
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
});

// Tratamento de erros e console
window.addEventListener('error', (e) => {
    console.error('Erro no script:', e.message);
});