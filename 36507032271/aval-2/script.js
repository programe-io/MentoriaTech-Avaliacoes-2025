// === BLOG DA NATÁLIA - VIDA FITNESS === //
// Tema preto com efeitos e motivação 💪

// Quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  const mensagens = [
    "🔥 A força vem da persistência!",
    "💪 Transforme esforço em resultado!",
    "🌟 Seu corpo é o reflexo da sua dedicação.",
    "🥇 Disciplina supera motivação.",
    "⚡ Hoje você treina, amanhã você conquista!"
  ];

  // Exibe mensagem de boas-vindas
  const boasVindas = document.createElement("div");
  boasVindas.classList.add("boas-vindas");
  boasVindas.textContent = "Bem-vinda(o) ao Blog da Natália 💪";
  document.body.prepend(boasVindas);

  setTimeout(() => {
    boasVindas.style.opacity = "0";
    setTimeout(() => boasVindas.remove(), 800);
  }, 4000);

  // Exibe frases motivacionais
  const fraseElemento = document.createElement("div");
  fraseElemento.classList.add("motivacao");
  document.body.appendChild(fraseElemento);

  let index = 0;
  function mudarFrase() {
    fraseElemento.textContent = mensagens[index];
    fraseElemento.classList.add("aparecer");
    setTimeout(() => fraseElemento.classList.remove("aparecer"), 2500);
    index = (index + 1) % mensagens.length;
  }

  mudarFrase();
  setInterval(mudarFrase, 4000);

  // Botão "Modo Energia"
  const botaoEnergia = document.createElement("button");
  botaoEnergia.textContent = "⚡ Modo Energia";
  botaoEnergia.classList.add("botao-energia");
  document.body.appendChild(botaoEnergia);

  let energiaAtiva = false;
  botaoEnergia.addEventListener("click", () => {
    energiaAtiva = !energiaAtiva;
    document.body.style.background =
      energiaAtiva
        ? "linear-gradient(135deg, #000000, #220011, #440022)"
        : "#000";
    botaoEnergia.textContent = energiaAtiva ? "💤 Modo Normal" : "⚡ Modo Energia";
  });

  // Botão "Voltar ao Topo"
  const btnTopo = document.createElement("button");
  btnTopo.textContent = "⬆️ Topo";
  btnTopo.classList.add("btn-topo");
  document.body.appendChild(btnTopo);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
