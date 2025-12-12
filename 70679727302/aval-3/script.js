// Mensagem de boas-vindas quando a página carrega
window.onload = function () {
    alert("👩‍🍳 Bem-vindo(a) ao site de receitas rápidas!");
    };

    // Aviso ao clicar em uma receita
    function mostrarAviso(nomeReceita) {
        alert("Você abriu a receita: " + nomeReceita);
        }

        // Detecta cliques nos artigos
        document.addEventListener("DOMContentLoaded", function () {
            const artigos = document.querySelectorAll("article");

                artigos.forEach(artigo => {
                        artigo.addEventListener("click", function () {
                                    const titulo = artigo.querySelector("h2").innerText;
                                                mostrarAviso(titulo);
                                                        });
                                                            });
                                                            });

                                                            // Botão para voltar ao topo
                                                            const botaoTopo = document.createElement("button");
                                                            botaoTopo.innerText = "⬆️ Topo";
                                                            botaoTopo.style.position = "fixed";
                                                            botaoTopo.style.bottom = "20px";
                                                            botaoTopo.style.right = "20px";
                                                            botaoTopo.style.padding = "10px 15px";
                                                            botaoTopo.style.background = "#ff9800";
                                                            botaoTopo.style.color = "white";
                                                            botaoTopo.style.border = "none";
                                                            botaoTopo.style.borderRadius = "8px";
                                                            botaoTopo.style.cursor = "pointer";
                                                            botaoTopo.style.display = "none";

                                                            document.body.appendChild(botaoTopo);

                                                            // Mostrar o botão quando o usuário desce a página
                                                            window.addEventListener("scroll", function () {
                                                                if (window.scrollY > 200) {
                                                                        botaoTopo.style.display = "block";
                                                                            } else {
                                                                                    botaoTopo.style.display = "none";
                                                                                        }
                                                                                        });

                                                                                        // Fazer o botão subir para o topo
                                                                                        botaoTopo.addEventListener("click", function () {
                                                                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                                                                            });