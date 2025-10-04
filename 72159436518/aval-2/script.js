// 1️⃣ Mensagem de boas-vindas personalizada
window.onload = function() {
  const nome = prompt("Olá! Qual é o seu nome?");
    const msg = document.getElementById("welcome-msg");
      if (nome) {
          msg.textContent = `Bem-vindo(a), ${nome}! 😊`;
            } else {
                msg.textContent = "Bem-vindo(a) ao meu site!";
                  }
                  };

                  // 2️⃣ Atualiza data e hora automaticamente
                  function atualizarDataHora() {
                    const agora = new Date();
                      const dataHora = agora.toLocaleString("pt-BR", {
                          dateStyle: "long",
                              timeStyle: "medium"
                                });
                                  document.getElementById("data-hora").textContent = dataHora;
                                  }
                                  setInterval(atualizarDataHora, 1000);
                                  atualizarDataHora();

                                  // 3️⃣ Alternar modo escuro/claro
                                  const botao = document.getElementById("modo-btn");
                                  botao.addEventListener("click", () => {
                                    document.body.classList.toggle("dark-mode");
                                      if (document.body.classList.contains("dark-mode")) {
                                          botao.textContent = "☀️ Ativar modo claro";
                                            } else {
                                                botao.textContent = "🌙 Ativar modo escuro";
                                                  }
                                                  });