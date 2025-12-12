// =========================
// MENSAGEM DE BOAS-VINDAS
// =========================
window.onload = function () {
    alert("Bem-vindo(a) ao site de Receitas Rápidas! 🍽️");
    };


    // =========================
    // MODO ESCURO / CLARO
    // =========================
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        }


        // =========================
        // MOSTRAR / ESCONDER RECEITAS
        // =========================
        function toggleReceitas() {
            const secao = document.querySelector("section");

                if (secao.style.display === "none") {
                        secao.style.display = "block";
                            } else {
                                    secao.style.display = "none";
                                        }
                                        }


                                        // =========================
                                        // DESTAQUE AO PASSAR O MOUSE
                                        // =========================
                                        const artigos = document.querySelectorAll("article");

                                        artigos.forEach(art => {
                                            art.addEventListener("mouseenter", () => {
                                                    art.style.backgroundColor = "#fff1d6";
                                                            art.style.transition = "0.3s";
                                                                });

                                                                    art.addEventListener("mouseleave", () => {
                                                                            art.style.backgroundColor = "transparent";
                                                                                });
                                                                                });