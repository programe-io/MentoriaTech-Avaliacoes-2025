// === VLOG DE PENTEADOS INFANTIS ===
// Criado para deixar sua página interativa, divertida e cheia de amor 💖

// Exibe uma mensagem de boas-vindas ao visitante
window.addEventListener("load", () => {
    alert("✨ Bem-vindo(a) ao Vlog de Penteados Infantis! ✨\nAprenda, divirta-se e inspire-se!");
});

// === BOTÃO DE TROCA DE TEMA ===
// Cria um botão que alterna entre tema claro e tema rosa
const botaoTema = document.createElement("button");
botaoTema.textContent = "🌈 Mudar Tema";
botaoTema.style.position = "fixed";
botaoTema.style.bottom = "20px";
botaoTema.style.right = "20px";
botaoTema.style.backgroundColor = "#ffb6c1";
botaoTema.style.border = "none";
botaoTema.style.padding = "12px 18px";
botaoTema.style.borderRadius = "30px";
botaoTema.style.color = "white";
botaoTema.style.fontWeight = "bold";
botaoTema.style.cursor = "pointer";
botaoTema.style.boxShadow = "0 3px 6px rgba(0,0,0,0.2)";
botaoTema.style.transition = "0.3s";
document.body.appendChild(botaoTema);

// Muda o tema ao clicar
let temaRosa = true;
botaoTema.addEventListener("click", () => {
    if (temaRosa) {
        document.body.style.backgroundColor = "#fefefe";
        document.body.style.color = "#444";
        botaoTema.style.backgroundColor = "#f48fb1";
        botaoTema.textContent = "🌸 Tema Rosa";
    } else {
        document.body.style.backgroundColor = "#fff8f0";
        document.body.style.color = "#333";
        botaoTema.style.backgroundColor = "#ffb6c1";
        botaoTema.textContent = "☀️ Tema Claro";
    }
    temaRosa = !temaRosa;
});

// === CORAÇÕES ANIMADOS AO CLICAR ===
document.addEventListener("click", (e) => {
    const coracao = document.createElement("span");
    coracao.textContent = "💖";
    coracao.style.position = "absolute";
    coracao.style.left = e.pageX + "px";
    coracao.style.top = e.pageY + "px";
    coracao.style.fontSize = "24px";
    coracao.style.pointerEvents = "none";
    coracao.style.animation = "subir 1.5s ease-out forwards";
    document.body.appendChild(coracao);

    setTimeout(() => coracao.remove(), 1500);
});

// === ANIMAÇÃO DOS CORAÇÕES ===
const estilo = document.createElement("style");
estilo.textContent = `
@keyframes subir {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100px); opacity: 0; }
}
`;
document.head.appendChild(estilo);

// === MENSAGEM DE INCENTIVO ===
function mostrarMensagem() {
    const mensagens = [
        "🌸 Você é incrível!",
        "💫 Continue espalhando beleza e alegria!",
        "🎀 O sorriso é o melhor penteado!",
        "✨ Cada criança é uma estrela brilhante!"
    ];
    const random = Math.floor(Math.random() * mensagens.length);
    alert(mensagens[random]);
}

// Mostra uma mensagem positiva a cada 30 segundos
setInterval(mostrarMensagem, 30000);
