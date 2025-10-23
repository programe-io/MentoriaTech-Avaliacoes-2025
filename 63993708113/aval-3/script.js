// Desenhar logotipo no canvas do topo
const logoCanvas = document.getElementById("logoCanvas");
if (logoCanvas) {
  const ctx = logoCanvas.getContext("2d");
    ctx.fillStyle = "#fff";
      ctx.beginPath();
        ctx.arc(40, 40, 35, 0, Math.PI * 2);
          ctx.fillStyle = "#ff0077";
            ctx.fill();
              ctx.font = "bold 20px Arial";
                ctx.fillStyle = "#fff";
                  ctx.fillText("M", 28, 50);
                  }

                  // Canvas da seção
                  const canvas = document.getElementById("meuCanvas");
                  if (canvas) {
                    const ctx = canvas.getContext("2d");
                      ctx.fillStyle = "blue";
                        ctx.fillRect(20, 20, 160, 60);
                          ctx.fillStyle = "white";
                            ctx.font = "20px Arial";
                              ctx.fillText("Logo", 70, 55);
                              }

                              // Diálogo
                              const dialog = document.getElementById("meuDialogo");
                              const abrir = document.getElementById("abrirDialogo");
                              const fechar = document.getElementById("fecharDialogo");

                              abrir.addEventListener("click", () => dialog.showModal());
                              fechar.addEventListener("click", () => dialog.close());