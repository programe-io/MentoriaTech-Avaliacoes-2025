// ====== Interações da Página de Eventos ======

// Rolagem suave ao clicar nos links do menu
const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(link => {
  link.addEventListener("click", function (e) {
      e.preventDefault();
          const destino = document.querySelector(this.getAttribute("href"));

              if (destino) {
                    destino.scrollIntoView({ behavior: "smooth" });
                        }
                          });
                          });

                          // Destaque visual ao passar o mouse sobre os artigos de eventos
                          const artigos = document.querySelectorAll("article");

                          artigos.forEach(art => {
                            art.addEventListener("mouseenter", () => {
                                art.style.transform = "scale(1.02)";
                                    art.style.transition = "0.3s";
                                      });

                                        art.addEventListener("mouseleave", () => {
                                            art.style.transform = "scale(1)";
                                              });
                                              });

                                              // Alerta simples ao clicar em uma imagem da galeria
                                              const imagens = document.querySelectorAll("#galeria img");

                                              imagens.forEach(img => {
                                                img.addEventListener("click", () => {
                                                    alert("Você clicou na imagem: " + img.alt);
                                                      });
                                                      });

                                                      // Mensagem no console indicando que o script está funcionando
                                                      console.log("JavaScript do plano de eventos carregado com sucesso!");
                                                      