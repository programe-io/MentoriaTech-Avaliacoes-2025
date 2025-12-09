document.addEventListener('DOMContentLoaded', () => {
      const likeBtn = document.getElementById('likeBtn');
        const themeToggle = document.getElementById('themeToggle');

          let liked = false;
            let likesCount = 0;

              likeBtn.addEventListener('click', () => {
                  liked = !liked;
                      likesCount += liked ? 1 : -1;
                          likeBtn.textContent = liked ? `Curtido (${likesCount}) ❤️` : `Curtir ❤️`;

                              likeBtn.animate(
                                    [{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }],
                                          { duration: 220 }
                                              );
                                                });

                                                  themeToggle.addEventListener('click', () => {
                                                      document.body.classList.toggle('dark');
                                                          const isDark = document.body.classList.contains('dark');
                                                              themeToggle.textContent = isDark ? 'Tema claro' : 'Alternar tema';

                                                                  try {
                                                                        localStorage.setItem('bruna-theme-dark', isDark ? '1' : '0');
                                                                            } catch (e) {}
                                                                              });

                                                                                try {
                                                                                    const pref = localStorage.getItem('bruna-theme-dark');
                                                                                        if (pref === '1') {
                                                                                              document.body.classList.add('dark');
                                                                                                    themeToggle.textContent = 'Tema claro';
                                                                                                        }
                                                                                                          } catch (e) {}
                                                                                                          });
})