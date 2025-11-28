// scripts.js com Efeito Cascata (Staggered Reveal)

document.addEventListener('DOMContentLoaded', () => {
    const revealCards = document.querySelectorAll('.reveal-card');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };
    
    // Tempo de atraso (delay) entre a revelação de um card e o próximo (em milissegundos)
    const staggerDelay = 200; 

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                
                // Encontra o índice do card dentro do NodeList para calcular o delay
                const cardIndex = Array.from(revealCards).indexOf(card);
                
                // Calcula o atraso sequencial
                const delay = cardIndex * staggerDelay; 

                // Aplica o atraso e a transição
                setTimeout(() => {
                    card.classList.add('is-visible');
                }, delay);
                
                observer.unobserve(card);
            }
        });
    }, observerOptions);

    revealCards.forEach(card => {
        observer.observe(card);
    });
});