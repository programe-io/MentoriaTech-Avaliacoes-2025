// Mensagem de boas-vindas ao abrir a página
window.onload = function() {
  alert("🏎️ Bem-vindo ao mundo de Mario Kart! Escolha seu personagem favorito!");
  };

  // Botão de surpresa com personagens aleatórios
  function personagemSurpresa() {
    const personagens = ["Mario", "Luigi", "Peach", "Bowser", "Yoshi", "Toad", "Donkey Kong"];
      const sorteado = personagens[Math.floor(Math.random() * personagens.length)];
        alert("🎉 Seu personagem surpresa é: " + sorteado + "!");
        }

        // Animação de clique nos artigos
        const artigos = document.querySelectorAll("article");
        artigos.forEach(artigo => {
          artigo.addEventListener("click", () => {
              artigo.style.backgroundColor = "#d1ffd1"; // muda cor
                  artigo.style.transition = "background-color 0.5s";
                      setTimeout(() => {
                            artigo.style.backgroundColor = "#fff"; // volta ao normal
                                }, 1000);
                                  });
                                  });

                                  // Quiz simples sobre Mario Kart
                                  function iniciarQuiz() {
                                    let resposta = prompt("Quem é o principal rival do Mario em Mario Kart? (dica: é o vilão grandão 🐢)");
                                      if (resposta && resposta.toLowerCase() === "bowser") {
                                          alert("✅ Acertou! Bowser é o rival clássico do Mario!");
                                            } else {
                                                alert("❌ Ops... a resposta certa era Bowser!");
                                                  }
                                                  }