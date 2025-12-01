document.getElementById("botao").addEventListener("click", function() {
    const curiosidade = document.getElementById("curiosidade");
    curiosidade.textContent = "A aurora pode durar de alguns minutos até várias horas!";
    curiosidade.classList.remove("oculto");
});
