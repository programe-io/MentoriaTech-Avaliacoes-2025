// === JS DO JORNAL ===

// Alternar tema (modo escuro / claro)
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
    themeBtn.textContent = dark ? "Modo claro" : "Modo escuro";
    });

    // Criar modal de leitura\const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="dialog">
          <div class="content">
                <span class="close-x">X</span>
                      <h2>Leitura da matéria</h2>
                            <p>Conteúdo completo da matéria irá aqui futuramente.</p>
                                </div>
                                  </div>
                                  `;
                                  document.body.appendChild(modal);

                                  // Fechar modal
                                  modal.querySelector(".close-x").onclick = () => modal.classList.remove("open");

                                  // Abrir modal ao clicar nos botões "Ler"
                                  document.querySelectorAll("[data-article-id]").forEach(btn => {
                                    btn.addEventListener("click", () => {
                                        modal.classList.add("open");
                                          });
                                          });
                                          