// app.js - interatividade simples para Aistem
document.addEventListener('DOMContentLoaded', () => {
  // ano no rodapé
    const y = new Date().getFullYear();
      document.getElementById('year').textContent = y;

        // sidebar toggle (abre ao clicar demo)
          const sidebar = document.getElementById('sidebar');
            const demoBtn = document.getElementById('demoBtn');
              const toggleSidebar = document.getElementById('toggleSidebar');

                demoBtn.addEventListener('click', () => {
                    sidebar.classList.add('open');
                        // animação adicional: destaque rápido nos cards
                            flashCards();
                              });

                                if(toggleSidebar){
                                    toggleSidebar.addEventListener('click', () => sidebar.classList.remove('open'));
                                      }

                                        // animação leve nos cards ao abrir sidebar
                                          function flashCards(){
                                              const cards = document.querySelectorAll('.card');
                                                  cards.forEach((c, i) => {
                                                        c.animate([
                                                                { transform: 'translateY(0) scale(1)', boxShadow: '0 8px 30px rgba(2,6,23,0.08)' },
                                                                        { transform: 'translateY(-6px) scale(1.02)', boxShadow: '0 18px 40px rgba(37,99,235,0.12)' },
                                                                                { transform: 'translateY(0) scale(1)', boxShadow: '0 8px 30px rgba(2,6,23,0.08)' }
                                                                                      ], { duration: 550 + i * 80, easing:'ease-out' });
                                                                                          });
                                                                                            }

                                                                                              // efeito hover para elementos com <span> destacados: troca de cor via JS (acessível)
                                                                                                document.querySelectorAll('h3 span, .highlight').forEach(el => {
                                                                                                    el.addEventListener('mouseenter', () => el.setAttribute('data-old', el.style.transform || ''));
                                                                                                        el.addEventListener('mouseover', () => el.style.transform = 'translateY(-2px)');
                                                                                                            el.addEventListener('mouseleave', () => el.style.transform = '');
                                                                                                              });

                                                                                                                // pequena função para rodar quando quiser simular dados (ex: demo)
                                                                                                                  window.aistemDemo = function(){
                                                                                                                      alert('Demo Aistem: processamento concluído ✅\nRecomendações geradas em 3 segundos (simulado).');
                                                                                                                        };
                                                                                                                        });