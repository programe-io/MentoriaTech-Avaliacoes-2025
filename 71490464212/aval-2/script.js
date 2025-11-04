// script.js — funções simples para a página
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
    const navList = document.querySelector('.main-nav ul');

      // Alterna menu em telas pequenas
        menuToggle?.addEventListener('click', () => {
            if (!navList) return;
                if (navList.style.display === 'flex') {
                      navList.style.display = 'none';
                          } else {
                                navList.style.display = 'flex';
                                      navList.style.flexDirection = 'column';
                                            navList.style.gap = '12px';
                                                  navList.style.background = 'transparent';
                                                      }
                                                        });

                                                          // Exemplo simples: ao clicar numa imagem da galeria, abre em nova aba
                                                            document.querySelectorAll('.gallery img').forEach(img => {
                                                                img.style.cursor = 'zoom-in';
                                                                    img.addEventListener('click', () => {
                                                                          // abre a src atual em nova aba (substitua por lightbox se quiser)
                                                                                window.open(img.src, '_blank');
                                                                                    });
                                                                                      });
                                                                                      });
                                                                                      