// --- Formulário ---
const form = document.getElementById('formInscricao');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    mensagem.textContent = `Obrigado pela inscrição, ${nome}! Boa sorte na corrida! 🏁`;
    form.reset();
});

// --- Contagem Regressiva ---
const dataCorrida = new Date("2025-12-15T09:00:00").getTime();

const intervalo = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataCorrida - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById("countdown").textContent = "🏁 A corrida começou!";
    }
}, 1000);
