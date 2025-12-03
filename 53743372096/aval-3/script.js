// script.js
// Arquivo JavaScript separado
// Esse JS segue a mesma estrutura simples do HTML e CSS fornecidos
// Aqui você pode adicionar interações básicas, caso deseje.

// Exemplo: mostrar alerta quando clicar no botão de "LIVE NOW"
document.addEventListener("DOMContentLoaded", function () {
    var liveButton = document.getElementById("live-button");

    if (liveButton) {
        liveButton.addEventListener("click", function () {
            alert("🔴 Você está AO VIVO!");
        });
    }

    // Exemplo: trocar a miniatura da webcam quando clicar
    var webcamThumb = document.getElementById("webcam-thumb");

    if (webcamThumb) {
        webcamThumb.addEventListener("click", function () {
            alert("📷 Mini webcam clicada!");
        });
    }
});
