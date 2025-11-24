// script para interagir com a página de Eren

document.addEventListener("DOMContentLoaded", () => {
  // Quando clicar no título principal h1, mostrar um alerta
  const titulo = document.querySelector("header h1");
  titulo.addEventListener("click", () => {
    alert("Você clicou no nome de Eren Yeager!");
  });

  // Adicionar dinamicamente uma pequena curiosidade extra
  const curiosidades = document.getElementById("curiosidades");
  const novoParagrafo = document.createElement("p");
  novoParagrafo.innerHTML = "<span>Sabia que?</span> Eren também luta para entender sua própria identidade e os sacrifícios que vem com seus poderes.";
  curiosidades.appendChild(novoParagrafo);
});