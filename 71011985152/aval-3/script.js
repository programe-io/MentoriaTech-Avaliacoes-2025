// Saudação dinâmica no rodapé
const greetingElement = document.getElementById("greeting");
if (greetingElement) {
  const hour = new Date().getHours();
  let message = "Olá!";

  if (hour >= 5 && hour < 12) {
    message = "Bom dia!";
  } else if (hour >= 12 && hour < 18) {
    message = "Boa tarde!";
  } else {
    message = "Boa noite!";
  }

  greetingElement.textContent = message;
}

// Botão "Ver projetos em destaque" rola até a seção de projetos
const btnHero = document.getElementById("btn-hero");
const sectionProjects = document.getElementById("projetos");

if (btnHero && sectionProjects) {
  btnHero.addEventListener("click", () => {
    sectionProjects.scrollIntoView({ behavior: "smooth" });
  });
}
