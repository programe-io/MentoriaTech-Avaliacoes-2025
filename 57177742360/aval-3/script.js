// Mensagem dinâmica de boas-vindas
const welcome = document.getElementById("welcome");

const hora = new Date().getHours();
let saudacao = "Bem-vindo(a)!";

if (hora >= 5 && hora < 12) {
  saudacao = "Bom dia, gamer!";
} else if (hora >= 12 && hora < 18) {
  saudacao = "Boa tarde, guerreiro!";
} else {
  saudacao = "Boa noite, campeão!";
}

welcome.textContent = saudacao;

// Botão de dark mode
const toggle = document.getElementById("toggle-dark");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
