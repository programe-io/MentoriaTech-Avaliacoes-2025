// Função para mostrar alerta ao clicar no botão
function mostrarMensagem() {
    alert("Você clicou no botão! 😊");
}

// Função para atualizar o relógio em tempo real
function atualizarRelogio() {
    const relogio = document.getElementById("relogio");
    if (relogio) {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, "0");
        const minutos = String(agora.getMinutes()).padStart(2, "0");
        const segundos = String(agora.getSeconds()).padStart(2, "0");
        relogio.textContent = `${horas}:${minutos}:${segundos}`;
    }
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Inicializa o relógio ao carregar a página
window.onload = atualizarRelogio;
