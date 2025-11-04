// === Boas-vindas ao site ===
document.addEventListener("DOMContentLoaded", function() {
    alert("💋 Bem-vinda ao mundo da Maquiagem da Bruna!");
    });

    // === Animação suave no título ===
    const titulo = document.querySelector("h1");
    titulo.style.opacity = 0;
    titulo.style.transition = "opacity 2s";

    setTimeout(() => {
        titulo.style.opacity = 1;
        }, 500);

        // === Botão de inspiração ===
        const botao = document.createElement("button");
        botao.textContent = "Ver Dica de Maquiagem 💄";
        document.body.appendChild(botao);

        botao.addEventListener("click", () => {
            const dicas = [
                    "Use um bom primer para preparar a pele!",
                            "O iluminador é seu melhor amigo para um glow perfeito!",
                                    "Lembre-se: menos é mais — realce sua beleza natural!",
                                            "Sempre remova a maquiagem antes de dormir 😉",
                                                    "Um batom poderoso muda tudo!"
                                                        ];

                                                            // Escolhe uma dica aleatória
                                                                const dica = dicas[Math.floor(Math.random() * dicas.length)];
                                                                    alert(`💋 Dica da Bruna: ${dica}`);
                                                                    });

                                                                    // === Mudar cor do fundo ao passar o mouse sobre o título ===
                                                                    titulo.addEventListener("mouseover", () => {
                                                                        document.body.style.backgroundColor = "#1a1a1a";
                                                                        });

                                                                        titulo.addEventListener("mouseout", () => {
                                                                            document.body.style.backgroundColor = "#000000";
                                                                            });

                                                                            // === Mensagem no rodapé dinâmica ===
                                                                            const footer = document.querySelector("footer");
                                                                            if (footer) {
                                                                                const anoAtual = new Date().getFullYear();
                                                                                    footer.innerHTML = `© ${anoAtual} Criado com 💕 por Bruna | Todos os direitos reservados`;
                                                                                    }
                                                                                    