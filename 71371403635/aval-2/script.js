// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
      internalLinks.forEach(link => {
          link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                      if (!targetId || targetId === '#') return;
                            const target = document.querySelector(targetId);
                                  if (!target) return;
                                        e.preventDefault();
                                              const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
                                                    window.scrollTo({ top, behavior: 'smooth' });
                                                        });
                                                          });

                                                            // Player card click -> simple modal alternative (alert)
                                                              document.querySelectorAll('.player-card').forEach(card => {
                                                                  card.addEventListener('click', () => {
                                                                        const name = card.dataset.name || card.querySelector('h4')?.textContent;
                                                                              if (!name) return;
                                                                                    alert(`Você clicou em ${name} — um dos jogadores que inspiram o Júlio.`);
                                                                                        });
                                                                                          });

                                                                                            // Highlight active nav link while scrolling
                                                                                              const navLinks = Array.from(document.querySelectorAll('.main-nav a'));
                                                                                                const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')));
                                                                                                  function updateActive() {
                                                                                                      let currentIndex = -1;
                                                                                                          sections.forEach((sec, i) => {
                                                                                                                if (!sec) return;
                                                                                                                      const top = sec.getBoundingClientRect().top;
                                                                                                                            if (top <= 120) currentIndex = i;
                                                                                                                                });
                                                                                                                                    navLinks.forEach((a, i) => {
                                                                                                                                          a.classList.toggle('active', i === currentIndex);
                                                                                                                                              });
                                                                                                                                                }
                                                                                                                                                  updateActive();
                                                                                                                                                    window.addEventListener('scroll', updateActive);
                                                                                                                                                    });