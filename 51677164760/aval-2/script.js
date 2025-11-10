/* =========================================
   Projeto de Grau - Funções JavaScript
   ========================================= */

// Mensagem de boas-vindas no console
console.log("Bem-vindo ao Projeto de Grau! 🚀");

// ======== Rolagem suave ========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));
    destino.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ======== Botão "Voltar ao topo" ========

// Cria o botão dinamicamente
const botaoTopo = document.createElement("button");
botaoTopo.innerText = "⬆️";
botaoTopo.id = "btnTopo";
document.body.appendChild(botaoTopo);

// Estilo básico do botão
botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "30px";
botaoTopo.style.right = "30px";
botaoTopo.style.padding = "10px 15px";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.backgroundColor = "#4ca1af";
botaoTopo.style.color = "white";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
botaoTopo.style.transition = "opacity 0.3s";

// Mostrar o botão quando rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
    botaoTopo.style.opacity = "1";
  } else {
    botaoTopo.style.opacity = "0";
    botaoTopo.style.display = "none";
  }
});

// Voltar ao topo ao clicar
botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ======== Menu Responsivo (opcional) ========

// Cria botão de menu em telas pequenas
const menuButton = document.createElement("div");
menuButton.id = "menu-btn";
menuButton.innerHTML = "☰";
menuButton.style.display = "none";
menuButton.style.position = "absolute";
menuButton.style.top = "15px";
menuButton.style.right = "20px";
menuButton.style.fontSize = "24px";
menuButton.style.cursor = "pointer";
menuButton.style.color = "white";
document.querySelector("header").appendChild(menuButton);

const nav = document.querySelector("nav");

// Mostrar botão apenas em telas pequenas
function atualizarMenu() {
  if (window.innerWidth < 768) {
    menuButton.style.display = "block";
    nav.style.display = "none";
  } else {
    menuButton.style.display = "none";
    nav.style.display = "block";
  }
}

atualizarMenu();
window.addEventListener("resize", atualizarMenu);

menuButton.addEventListener("click", () => {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});
