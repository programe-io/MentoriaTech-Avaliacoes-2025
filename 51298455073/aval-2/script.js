function criarBalao() {
    const balao = document.createElement("div");
    balao.classList.add("balao");

    // cores aleatórias
    const cores = ["#ff4d4d", "#ff9933", "#ffff66", "#66ff66", "#66ccff", "#cc66ff"];
    balao.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];

    // posição horizontal aleatória
    balao.style.left = Math.random() * window.innerWidth + "px";

    // velocidade aleatória
    const duracao = Math.random() * 5 + 4; // entre 4 e 9 segundos
    balao.style.animationDuration = duracao + "s";

    // corda do balão
    const corda = document.createElement("div");
    corda.classList.add("corda");
    balao.appendChild(corda);

    document.body.appendChild(balao);

    // remover após a animação
    setTimeout(() => balao.remove(), duracao * 1000);
}

// cria balões continuamente
setInterval(criarBalao, 600);
