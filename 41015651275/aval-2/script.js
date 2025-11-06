document.getElementById("formContato").addEventListener("submit", function(e) {
        e.preventDefault();
            alert("🎶 Sua mensagem foi enviada com sucesso! Obrigada pelo contato ❤️");
                this.reset();
                });

})document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();
        alert("🎶 Obrigada pelo contato! Sua mensagem foi enviada com sucesso ❤️");
            this.reset();
            });
/* ==============================================
   Blog MPB Interativo - por Ana Almeida
      ============================================== */

      // Espera o conteúdo da página carregar
      document.addEventListener("DOMContentLoaded", function() {

        // ===== ROLAGEM SUAVE AO CLICAR NO MENU =====
          const links = document.querySelectorAll("nav a");

            for (const link of links) {
                link.addEventListener("click", function(event) {
                      event.preventDefault();
                            const targetId = this.getAttribute("href");
                                  const targetSection = document.querySelector(targetId);

                                        window.scrollTo({
                                                top: targetSection.offsetTop - 60,
                                                        behavior: "smooth"
                                                              });
                                                                  });
                                                                    }

                                                                      // ===== EFEITO AO PASSAR O MOUSE SOBRE OS ARTIGOS =====
                                                                        const artigos = document.querySelectorAll("article");

                                                                          artigos.forEach(artigo => {
                                                                              artigo.addEventListener("mouseenter", () => {
                                                                                    artigo.style.backgroundColor = "#8b0e2e";
                                                                                          artigo.style.transition = "background-color 0.3s ease";
                                                                                              });

                                                                                                  artigo.addEventListener("mouseleave", () => {
                                                                                                        artigo.style.backgroundColor = "#660a1b";
                                                                                                            });
                                                                                                              });

                                                                                                                // ===== BOTÃO VOLTAR AO TOPO =====
                                                                                                                  const botaoTopo = document.createElement("button");
                                                                                                                    botaoTopo.textContent = "⬆ Voltar ao topo";
                                                                                                                      botaoTopo.style.position = "fixed";
                                                                                                                        botaoTopo.style.bottom = "20px";
                                                                                                                          botaoTopo.style.right = "20px";
                                                                                                                            botaoTopo.style.padding = "10px 15px";
                                                                                                                              botaoTopo.style.backgroundColor = "#800020";
                                                                                                                                botaoTopo.style.color = "white";
                                                                                                                                  botaoTopo.style.border = "none";
                                                                                                                                    botaoTopo.style.borderRadius = "10px";
                                                                                                                                      botaoTopo.style.cursor = "pointer";
                                                                                                                                        botaoTopo.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
                                                                                                                                          botaoTopo.style.display = "none";
                                                                                                                                            botaoTopo.style.fontWeight = "bold";
                                                                                                                                              document.body.appendChild(botaoTopo);

                                                                                                                                                // Mostra o botão quando rolar a página
                                                                                                                                                  window.addEventListener("scroll", () => {
                                                                                                                                                      if (window.scrollY > 300) {
                                                                                                                                                            botaoTopo.style.display = "block";
                                                                                                                                                                } else {
                                                                                                                                                                      botaoTopo.style.display = "none";
                                                                                                                                                                          }
                                                                                                                                                                            });

                                                                                                                                                                              // Ação do botão
                                                                                                                                                                                botaoTopo.addEventListener("click", () => {
                                                                                                                                                                                    window.scrollTo({
                                                                                                                                                                                          top: 0,
                                                                                                                                                                                                behavior: "smooth"
                                                                                                                                                                                                    });
                                                                                                                                                                                                      });

                                                                                                                                                                                                        // ===== ANIMAÇÃO SUAVE NAS IMAGENS =====
                                                                                                                                                                                                          const imagens = document.querySelectorAll("article img");
                                                                                                                                                                                                            imagens.forEach(img => {
                                                                                                                                                                                                                img.addEventListener("mouseover", () => {
                                                                                                                                                                                                                      img.style.transform = "scale(1.05)";
                                                                                                                                                                                                                            img.style.transition = "transform 0.4s ease";
                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                    img.addEventListener("mouseout", () => {
                                                                                                                                                                                                                                          img.style.transform = "scale(1)";
                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                  // ===== MENSAGEM DE BOAS-VINDAS =====
                                                                                                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                                                                                                        alert("🎶 Bem-vindo(a) ao Blog MPB de Ana Almeida! Explore e sinta a música brasileira no coração. ❤️");
                                                                                                                                                                                                                                                          }, 800);
                                                                                                                                                                                                                                                          });
                                                                                                                                                                                                      /* ==============================================
                                                                                                                                                                                                         Remover conteúdo duplicado no Blog MPB
                                                                                                                                                                                                            Criado por Ana Almeida
                                                                                                                                                                                                               ============================================== */

                                                                                                                                                                                                               document.addEventListener("DOMContentLoaded", function() {

                                                                                                                                                                                                                 // ===== FUNÇÃO PARA REMOVER DUPLICADOS EM QUALQUER SELETOR =====
                                                                                                                                                                                                                   function removerDuplicados(seletor) {
                                                                                                                                                                                                                       const elementos = document.querySelectorAll(seletor);
                                                                                                                                                                                                                           const textosVistos = new Set();

                                                                                                                                                                                                                               elementos.forEach(elemento => {
                                                                                                                                                                                                                                     const texto = elemento.textContent.trim().toLowerCase();

                                                                                                                                                                                                                                           if (textosVistos.has(texto)) {
                                                                                                                                                                                                                                                   elemento.remove(); // Remove o duplicado
                                                                                                                                                                                                                                                         } else {
                                                                                                                                                                                                                                                                 textosVistos.add(texto);
                                                                                                                                                                                                                                                                       }
                                                                                                                                                                                                                                                                           });
                                                                                                                                                                                                                                                                             }

                                                                                                                                                                                                                                                                               // ===== APLICA A LIMPEZA EM DIFERENTES PARTES DO SITE =====
                                                                                                                                                                                                                                                                                 removerDuplicados("article");   // Remove artigos duplicados
                                                                                                                                                                                                                                                                                   removerDuplicados("aside li");  // Remove curiosidades duplicadas
                                                                                                                                                                                                                                                                                     removerDuplicados("nav a");     // Remove links repetidos no menu

                                                                                                                                                                                                                                                                                       console.log("✅ Duplicados removidos com sucesso!");
                                                                                                                                                                                                                                                                                       });
                                                                                                                                                                                                                                                                                                                                                      