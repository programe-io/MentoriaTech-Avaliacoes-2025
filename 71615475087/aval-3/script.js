// Espera a página carregar
document.addEventListener("DOMContentLoaded", function() {
  
  // Exemplo 1: mudar o texto dentro de um <span>
  const destaque = document.querySelector("span");
  if (destaque) {
    destaque.addEventListener("mouseover", function() {
      destaque.style.color = "red";
      destaque.textContent = "Texto alterado com JavaScript!";
    });
    destaque.addEventListener("mouseout", function() {
      destaque.style.color = "green";
      destaque.textContent = "Texto dentro do span";
    });
  }

  // Exemplo 2: mostrar uma mensagem ao clicar em um botão
  const botao = document.createElement("button");
  botao.textContent = "Clique aqui";
  document.body.appendChild(botao);

  botao.addEventListener("click", function() {
    alert("Você clicou no botão! 🎉");
  });

  // Exemplo 3: destacar o menu de navegação ao rolar a página
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "#4CAF50";
      nav.style.color = "white";
    } else {
      nav.style.backgroundColor = "";
      nav.style.color = "";
    }
  });
});