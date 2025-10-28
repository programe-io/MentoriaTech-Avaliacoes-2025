/* =======================================
   🚀 SCRIPT PRINCIPAL DO SITE
   Autor: Você 😎
   Data: 2025
======================================= */

// Executa o código assim que o documento for carregado
document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Página carregada com sucesso!");

    // Chama as funções iniciais
    mostrarSaudacao();
    ativarScrollAnimado();
    configurarFormulario();
    ativarModoEscuro();
});

/* =======================================
   🕒 SAUDAÇÃO AUTOMÁTICA
======================================= */
function mostrarSaudacao() {
    const hora = new Date().getHours();
    const saudacaoElemento = document.querySelector("#saudacao");
    let mensagem = "";

    if (hora < 12) mensagem = "Bom dia! 🌅";
    else if (hora < 18) mensagem = "Boa tarde! ☀️";
    else mensagem = "Boa noite! 🌙";

    if (saudacaoElemento) {
        saudacaoElemento.textContent = mensagem;
    }
}

/* =======================================
   📋 FORMULÁRIO DE CONTATO
======================================= */
function configurarFormulario() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const mensagem = document.querySelector("#mensagem");

        // Validação simples
        if (!nome.value.trim() || !email.value.trim() || !mensagem.value.trim()) {
            alert("⚠️ Por favor, preencha todos os campos!");
            return;
        }

        if (!validarEmail(email.value)) {
            alert("📧 O e-mail informado não é válido!");
            return;
        }

        alert(`✅ Obrigado, ${nome.value}! Sua mensagem foi enviada com sucesso.`);
        form.reset();
    });
}

function validarEmail(email) {
    const padrao = /^[\\w.-]+@[a-zA-Z\\d.-]+\\.[a-zA-Z]{2,}$/;
    return padrao.test(email);
}

/* =======================================
   🌙 MODO ESCURO / CLARO
======================================= */
function ativarModoEscuro() {
    const botao = document.querySelector("#modo-escuro");
    if (!botao) return;

    botao.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botao.textContent = "☀️ Modo Claro";
            localStorage.setItem("modo", "escuro");
        } else {
            botao.textContent = "🌙 Modo Escuro";
            localStorage.setItem("modo", "claro");
        }
    });

    // Lê a preferência salva
    const modoSalvo = localStorage.getItem("modo");
    if (modoSalvo === "escuro") {
        document.body.classList.add("dark-mode");
        botao.textContent = "☀️ Modo Claro";
    }
}

/* =======================================
   ✨ ANIMAÇÃO AO ROLAR A PÁGINA
======================================= */
function ativarScrollAnimado() {
    const elementos = document.querySelectorAll(".animar");

    function verificarVisibilidade() {
        const alturaTela = window.innerHeight * 0.85;

        elementos.forEach(el => {
            const posicao = el.getBoundingClientRect().top;

            if (posicao < alturaTela) {
                el.classList.add("visivel");
            } else {
                el.classList.remove("visi
