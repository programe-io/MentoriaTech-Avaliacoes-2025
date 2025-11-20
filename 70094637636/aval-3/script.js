let tipoEscolhido = "";

document.getElementById("btnCriar").onclick = function () {
    document.getElementById("modalTipo").style.display = "flex";
    };

    function escolherTipo(tipo) {
        tipoEscolhido = tipo;
            document.getElementById("modalTipo").style.display = "none";

                // Agora CETIM e BORBOLETAS abrem a personalização
                    if (tipo === "cetim" || tipo === "borboletas") {
                            document.getElementById("modalPersonalizar").style.display = "flex";

                                    // Trocar o texto do campo quantidade
                                            document.querySelector("label[for='qtdFlores']").innerText =
                                                        tipo === "cetim" ? "Quantidade de flores:" : "Quantidade de borboletas:";
                                                            }
                                                            }

                                                            function fecharTudo() {
                                                                document.getElementById("modalTipo").style.display = "none";
                                                                    document.getElementById("modalPersonalizar").style.display = "none";
                                                                    }

                                                                    function enviarWhats() {
                                                                        let qtdFlores = document.getElementById("qtdFlores").value;
                                                                            let cor = document.getElementById("cor").value;
                                                                                let led = document.getElementById("corLed").value;
                                                                                    let cartinha = document.getElementById("cartinha").value;
                                                                                        let chocolates = document.getElementById("qtdChoco").value;

                                                                                            let tipoTexto =
                                                                                                    tipoEscolhido === "cetim"
                                                                                                                ? "🌷|Olá! quero um buquê de cetim"
                                                                                                                            : "🌷| Olá!quero um buquê de borboletas";

                                                                                                                                let quantidadeTexto =
                                                                                                                                        tipoEscolhido === "cetim"
                                                                                                                                                    ? "Quantidade de flores"
                                                                                                                                                                : "Quantidade de borboletas";

                                                                                                                                                                    let mensagem =
                                                                                                                                                                    `${tipoTexto} personalizado da seguinte maneira:

                                                                                                                                                                    • ${quantidadeTexto}: ${qtdFlores}
                                                                                                                                                                    • Cor: ${cor}
                                                                                                                                                                    • LED (cor): ${led}
                                                                                                                                                                    • Cartinha: ${cartinha}
                                                                                                                                                                    • Chocolates: ${chocolates}`;

                                                                                                                                                                        let url = "https://wa.me/5589988174622?text=" + encodeURIComponent(mensagem);
                                                                                                                                                                            window.open(url, "_blank");
                                                                                                                                                                            }








                                                                                                                                                                            // Abrir o quadradinho de preços
                                                                                                                                                                            document.getElementById("btnPrecos").onclick = function() {
                                                                                                                                                                                document.getElementById("modalPrecos").style.display = "flex";
                                                                                                                                                                                };

                                                                                                                                                                                function fecharPrecos() {
                                                                                                                                                                                    document.getElementById("modalPrecos").style.display = "none";
                                                                                                                                                                                    }

                                                                                                                                                                                    // Abrir a imagem com o preço
                                                                                                                                                                                    function abrirPreco(tipo) {
                                                                                                                                                                                        let img = document.getElementById("imgPreco");

                                                                                                                                                                                            if (tipo === "buques") {
                                                                                                                                                                                                    img.src = "https://i.ibb.co/9kQg7rNb/Tabela-de-pre-os-de-manicure-nail-designer-rosa-story-do-instagram-20251115-135947-0000.jpg"; // coloque o link aqui
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                img.src = "https://i.ibb.co/cKwhRnwZ/Tabela-de-pre-os-de-manicure-nail-designer-rosa-story-do-instagram-20251113-190708-0000.jpg"; // coloque o link aqui
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                        document.getElementById("modalPrecos").style.display = "none";
                                                                                                                                                                                                                            document.getElementById("modalImagemPreco").style.display = "flex";
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                            function fecharImagemPreco() {
                                                                                                                                                                                                                              document.getElementById("modalImagemPreco").style.display = "none";
                                                                                                                                                                                                                              }







                                                                                                                                                                                                                              // Função para comprar buquê direto pelo WhatsApp
                                                                                                                                                                                                                              function comprarBuque(botao) {
                                                                                                                                                                                                                                  let card = botao.closest(".card-buque");
                                                                                                                                                                                                                                      let nome = card.getAttribute("data-nome");

                                                                                                                                                                                                                                          let mensagem = `🌷| Olá! quero comprar um ${nome}`;
                                                                                                                                                                                                                                              let url = "https://wa.me/5589988174622?text=" + encodeURIComponent(mensagem);

                                                                                                                                                                                                                                                  window.open(url, "_blank");
                                                                                                                                                                                                                                                  }