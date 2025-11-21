document.addEventListener("DOMContentLoaded", function () {
  // Ao clicar em imagens da galeria, abrir em nova aba
  document.querySelectorAll(".galeria img").forEach(function(img){
    img.addEventListener("click", function(){
      // se a src for válida, abre em nova aba
      if (img.src) window.open(img.src, "_blank");
    });
  });
});