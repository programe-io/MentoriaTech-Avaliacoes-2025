/* ==========================================================
   SCRIPT DO BLOG PESSOAL DE BELEZA 💄
      Recursos:
         1. Modo claro/escuro
            2. Botão "Voltar ao topo"
               3. Rolagem suave e efeitos de entrada
                  ========================================================== */

                  /* ===================== MODO ESCURO / CLARO ===================== */

                  // Cria o botão de alternar tema
                  const themeToggle = document.createElement("button");
                  themeToggle.innerHTML = "🌙";
                  themeToggle.id = "themeToggle";
                  document.body.appendChild(themeToggle);

                  // Define tema salvo (caso o usuário já tenha escolhido antes)
                  const userTheme = localStorage.getItem("theme");
                  if (userTheme === "dark") {
                      document.body.classList.add("dark-mode");
                          themeToggle.innerHTML = "☀️";
                          }

                          // Função de alternar modo
                          themeToggle.addEventListener("click", () => {
                              document.body.classList.toggle("dark-mode");

                                  if (document.body.classList.contains("dark-mode")) {
                                          themeToggle.innerHTML = "☀️";
                                                  localStorage.setItem("theme", "dark");
                                                      } else {
                                                              themeToggle.innerHTML = "🌙";
                                                                      localStorage.setItem("theme", "light");
                                                                          }
                                                                          });

                                                                          /* ======== ESTILOS INLINE DO BOTÃO (pode ser movido para CSS) ======== */
                                                                          themeToggle.style.position = "fixed";
                                                                          themeToggle.style.bottom = "25px";
                                                                          themeToggle.style.left = "25px";
                                                                          themeToggle.style.zIndex = "1000";
                                                                          themeToggle.style.padding = "10px 12px";
                                                                          themeToggle.style.border = "none";
                                                                          themeToggle.style.borderRadius = "50%";
                                                                          themeToggle.style.fontSize = "18px";
                                                                          themeToggle.style.cursor = "pointer";
                                                                          themeToggle.style.backgroundColor = "#e75480";
                                                                          themeToggle.style.color = "#fff";
                                                                          themeToggle.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
                                                                          themeToggle.style.transition = "all 0.3s";
                                                                          themeToggle.addEventListener("mouseenter", () => {
                                                                              themeToggle.style.transform = "scale(1.1)";
                                                                              });
                                                                              themeToggle.addEventListener("mouseleave", () => {
                                                                                  themeToggle.style.transform = "scale(1)";
                                                                                  });

                                                                                  /* ===================== BOTÃO "VOLTAR AO TOPO" ===================== */
                                                                                  const topButton = document.createElement("button");
                                                                                  topButton.id = "topBtn";
                                                                                  topButton.innerHTML = "⬆️";
                                                                                  document.body.appendChild(topButton);

                                                                                  // Mostra ou oculta o botão conforme rolagem
                                                                                  window.onscroll = function() {
                                                                                      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                                                                                              topButton.style.display = "block";
                                                                                                  } else {
                                                                                                          topButton.style.display = "none";
                                                                                                              }
                                                                                                              };

                                                                                                              // Ao clicar, sobe suavemente para o topo
                                                                                                              topButton.addEventListener("click", function() {
                                                                                                                  window.scrollTo({
                                                                                                                          top: 0,
                                                                                                                                  behavior: "smooth"
                                                                                                                                      });
                                                                                                                                      });

                                                                                                                                      /* ===================== ANIMAÇÃO SUAVE NA ROLAGEM ===================== */

                                                                                                                                      // Função para animar elementos ao entrar na tela
                                                                                                                                      const fadeElements = document.querySelectorAll('.fade-in');

                                                                                                                                      function checkFade() {
                                                                                                                                          const triggerBottom = window.innerHeight * 0.85;

                                                                                                                                              fadeElements.forEach(el => {
                                                                                                                                                      const boxTop = el.getBoundingClientRect().top;

                                                                                                                                                              if (boxTop < triggerBottom) {
                                                                                                                                                                          el.classList.add('visible');
                                                                                                                                                                                  } else {
                                                                                                                                                                                              el.classList.remove('visible');
                                                                                                                                                                                                      }
                                                                                                                                                                                                          });
                                                                                                                                                                                                          }

                                                                                                                                                                                                          window.addEventListener('scroll', checkFade);
                                                                                                                                                                                                          window.addEventListener('load', checkFade);

                                                                                                                                                                                                          /* ===================== ESTILOS DO MODO ESCURO ===================== */
                                                                                                                                                                                                          /* Você pode mover isso para o CSS também */
                                                                                                                                                                                                          const darkModeStyles = document.createElement("style");
                                                                                                                                                                                                          darkModeStyles.innerHTML = `
                                                                                                                                                                                                              body.dark-mode {
                                                                                                                                                                                                                      background-color: #1f1f1f;
                                                                                                                                                                                                                              color: #f8f8f8;
                                                                                                                                                                                                                                      transition: background-color 0.5s, color 0.5s;
                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                              body.dark-mode header {
                                                                                                                                                                                                                                                      background: linear-gradient(135deg, #3a3a3a, #555);
                                                                                                                                                                                                                                                              color: #fff;
                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                      body.dark-mode nav {
                                                                                                                                                                                                                                                                              background-color: #2c2c2c;
                                                                                                                                                                                                                                                                                      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                              body.dark-mode nav a {
                                                                                                                                                                                                                                                                                                      color: #ffb6c1;
                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                              body.dark-mode article {
                                                                                                                                                                                                                                                                                                                      background-color: #2b2b2b;
                                                                                                                                                                                                                                                                                                                              box-shadow: 0 2px 6px rgba(0,0,0,0.4);
                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                      body.dark-mode .sobre {
                                                                                                                                                                                                                                                                                                                                              background-color: #2b2b2b;
                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                      body.dark-mode footer {
                                                                                                                                                                                                                                                                                                                                                              background-color: #3a3a3a;
                                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                                      .fade-in {
                                                                                                                                                                                                                                                                                                                                                                              opacity: 0;
                                                                                                                                                                                                                                                                                                                                                                                      transform: translateY(20px);
                                                                                                                                                                                                                                                                                                                                                                                              transition: opacity 1s ease, transform 1s ease;
                                                                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                                                                      .fade-in.visible {
                                                                                                                                                                                                                                                                                                                                                                                                              opacity: 1;
                                                                                                                                                                                                                                                                                                                                                                                                                      transform: translateY(0);
                                                                                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                                                                                          `;
                                                                                                                                                                                                                                                                                                                                                                                                                          document.head.appendChild(darkModeStyles);
                                                                                                                                                                                                                                                                                                                                                                                                                          