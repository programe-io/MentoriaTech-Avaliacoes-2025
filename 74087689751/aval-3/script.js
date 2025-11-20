// script.js — interatividade básica
document.addEventListener('DOMContentLoaded', ()=>{

  // data automática no artigo e footer
    const pubDateEl = document.getElementById('pubDate');
      const yearEl = document.getElementById('year');
        const now = new Date();
          pubDateEl.textContent = now.toLocaleString('pt-BR', { dateStyle: 'long', timeStyle: 'short' });
            yearEl.textContent = now.getFullYear();

              // tempo de leitura aproximado
                const readTimeEl = document.getElementById('readTime');
                  if(readTimeEl) readTimeEl.textContent = Math.max(1, Math.round( (document.querySelector('.article-body').textContent||'').split(' ').length / 200 ));

                    // menu mobile toggle
                      const mobileBtn = document.getElementById('mobileMenuBtn');
                        const mainMenu = document.getElementById('mainMenu');
                          if(mobileBtn && mainMenu){
                              mobileBtn.addEventListener('click', ()=>{
                                    const expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
                                          mobileBtn.setAttribute('aria-expanded', String(!expanded));
                                                mainMenu.style.display = expanded ? 'none' : 'flex';
                                                    });
                                                      }

                                                        // theme toggle (dark <-> light)
                                                          const themeBtn = document.getElementById('themeToggle');
                                                            themeBtn?.addEventListener('click', ()=>{
                                                                const pressed = themeBtn.getAttribute('aria-pressed') === 'true';
                                                                    themeBtn.setAttribute('aria-pressed', String(!pressed));
                                                                        if(!pressed){
                                                                              document.documentElement.style.setProperty('--bg','#f6f9ff');
                                                                                    document.documentElement.style.setProperty('--card','#ffffff');
                                                                                          document.documentElement.style.setProperty('--text','#0b1a2b');
                                                                                                document.documentElement.style.setProperty('--muted','#4b6b88');
                                                                                                      themeBtn.textContent = '☀️';
                                                                                                          } else {
                                                                                                                document.documentElement.style.setProperty('--bg','#071022');
                                                                                                                      document.documentElement.style.setProperty('--card','#0f1726');
                                                                                                                            document.documentElement.style.setProperty('--text','#e8f1fb');
                                                                                                                                  document.documentElement.style.setProperty('--muted','#9fb0c8');
                                                                                                                                        themeBtn.textContent = '🌙';
                                                                                                                                            }
                                                                                                                                              });

                                                                                                                                                // busca simulada (evita reload)
                                                                                                                                                  const searchForm = document.getElementById('searchForm');
                                                                                                                                                    searchForm?.addEventListener('submit', (e)=>{
                                                                                                                                                        e.preventDefault();
                                                                                                                                                            const q = (document.getElementById('q')?.value || '').trim();
                                                                                                                                                                if(!q) return alert('Digite algo pra buscar, mano.');
                                                                                                                                                                    alert('Busca simulada: "'+q+'". (Implementa backend pra buscar de verdade.)');
                                                                                                                                                                      });

                                                                                                                                                                        // progresso interativo (exemplo)
                                                                                                                                                                          const prog = document.getElementById('investProgress');
                                                                                                                                                                            if(prog){
                                                                                                                                                                                setInterval(()=> {
                                                                                                                                                                                      prog.value = Math.min(prog.max, prog.value + 1);
                                                                                                                                                                                          }, 3000);
                                                                                                                                                                                            }

                                                                                                                                                                                            });