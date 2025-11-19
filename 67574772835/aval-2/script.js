// Botão que rola até a galeria
document.getElementById("btnGaleria").addEventListener("click", () => {
  document.getElementById("galeria").scrollIntoView({ behavior: "smooth" });
});

// Efeito simples: alerta ao clicar em uma imagem
const imagens = document.querySelectorAll(".galeria img");
imagens.forEach(img => {
  img.addEventListener("click", () => {
    alert("Você clicou em: " + img.alt);
  });
});
