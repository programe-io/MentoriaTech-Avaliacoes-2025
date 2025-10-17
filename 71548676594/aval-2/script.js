// Mensagem de carregamento
console.log("Blog Gamer carregado com sucesso!");

// Exemplo de interação: alerta ao clicar na imagem
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("article img");
  if (img) {
    img.addEventListener("click", () => {
      alert("Você clicou na imagem do Fortnite!");
    });
  }
});
