// Atualiza automaticamente o ano no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const anoEl = document.getElementById("ano");
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // Simula latência aleatória
  const latenciaEl = document.getElementById("latencia");
  if (latenciaEl) {
    const atualizarLatencia = () => {
      const ms = Math.floor(50 + Math.random() * 150);
      latenciaEl.textContent = ms + " ms";
    };
    atualizarLatencia();
    setInterval(atualizarLatencia, 3000); // atualiza a cada 3 segundos
  }

  // Botão "Começar"
  const btnComecar = document.getElementById("btn-começar");
  if (btnComecar) {
    btnComecar.addEventListener("click", () => {
      alert("Você clicou em 'Começar'! 🚀");
    });
  }

  // Botão "Demo"
  const btnDemo = document.getElementById("btn-demo");
  if (btnDemo) {
    btnDemo.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  // Alternar tema claro/escuro
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Alternar Tema";
  toggleBtn.className = "btn";
  document.querySelector("header").appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});