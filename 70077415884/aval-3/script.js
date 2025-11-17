/* Alternar tema escuro */
function toggleTema() {
    document.body.classList.toggle("dark");
}

/* Troca de foto do corte */
function trocarCorte() {
    const img = document.getElementById("fotoModelo");
    const selecao = document.getElementById("corteSelect").value;

    const cortes = {
        padrao: "https://i.imgur.com/vxH6J6b.png",
        curto: "https://i.imgur.com/mI4WgSl.png",
        medio: "https://i.imgur.com/lFh7tq3.png",
        longo: "https://i.imgur.com/wwqXsz7.png"
    };

    img.src = cortes[selecao];
}

/* Formulário */
function enviarFormulario(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;

    alert("Obrigado, " + nome + "! Seu horário foi agendado.");
}
