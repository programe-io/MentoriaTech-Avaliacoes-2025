// Mensagem ao carregar a página
window.onload = function() {
    console.log("Página carregada com sucesso!");
};

// Função para mostrar um alerta ao clicar no botão
function mostrarMensagem() {
    alert("Você clicou no botão! 😊");
}

// Função para mudar a cor de fundo
function mudarCor() {
    const cores = ["#4CAF50", "#2196F3", "#FF5722", "#9C27B0", "#FFC107"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

// Relógio digital em tempo real
setInterval(() => {
    let agora = new Date();
    let horas = agora.getHours().toString().padStart(2, "0");
    let minutos = agora.getMinutes().toString().padStart(2, "0");
    let segundos = agora.getSeconds().toString().padStart(2, "0");
    
    const relogio = document.getElementById("relogio");
    if (relogio) {
        relogio.textContent = `${horas}:${minutos}:${segundos}`;
    }
}, 1000);

