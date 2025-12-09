document.addEventListener("DOMContentLoaded", function () {
  console.log("Página carregada com sucesso!");

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.opacity = "0.7";
    });
    link.addEventListener("mouseleave", () => {
      link.style.opacity = "1";
    });
  });
});