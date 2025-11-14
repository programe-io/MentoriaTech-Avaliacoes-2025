const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    // cores aleatórias
    const cores = ["#ffdddd", "#ddffdd", "#ddeeff", "#fff0b3", "#e0ccff"];
    const corEscolhida = cores[Math.floor(Math.random() * cores.length)];

    document.body.style.backgroundColor = corEscolhida;
    mensagem.textContent = "Cor alterada!";
});
