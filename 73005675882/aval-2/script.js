// ===== MENU RESPONSIVO =====
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  });

  // ===== ANIMAÇÃO SUAVE NOS CARDS =====
  const cards = document.querySelectorAll('.card');

  window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

                if (cardTop < windowHeight - 100) {
                      card.style.opacity = 1;
                            card.style.transform = 'translateY(0)';
                                }
                                  });
                                  });

                                  // ===== ESTILO INICIAL DOS CARDS =====
                                  cards.forEach(card => {
                                    card.style.opacity = 0;
                                      card.style.transform = 'translateY(40px)';
                                        card.style.transition = 'all 0.6s ease';
                                        });