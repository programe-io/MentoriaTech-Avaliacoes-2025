// script.js - Interatividade simples

document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".galeria img");

    imagens.forEach(img => {
        img.addEventListener("click", () => {
              // abre a imagem em uma nova aba
                    window.open(img.src, "_blank");
                        });
                          });

                            console.log("Página sobre Yuri Alberto carregada com sucesso!");
                            });
                            