// Exibe uma mensagem de boas-vindas
window.onload = function() {
    alert("💋 Bem-vinda ao site da Maquiagem da Bruna!");
    };

    // Botão que mostra dicas aleatórias
    const botao = document.getElementById("botaoDica");

    const dicas = [
        "Use um bom primer para preparar a pele!",
            "Nunca durma de maquiagem 😴",
                "Aposte em um blush cremoso para um ar natural!",
                    "O batom rosa é o toque final do poder 💄",
                        "Cuide da sua pele antes e depois da make 💕"
                        ];

                        botao.addEventListener("click", () => {
                            const dica = dicas[Math.floor(Math.random() * dicas.length)];
                                alert(`✨ Dica da Bruna: ${dica}`);
                                });
                                