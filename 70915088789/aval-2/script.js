// Interatividade simples de exemplo
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", e => {
              e.preventDefault();
                    alert(`Você clicou em: ${link.textContent}`);
                        });
                          });
                          });