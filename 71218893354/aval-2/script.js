/* ==========================================================
   VARIÁVEIS BÁSICAS
   ========================================================== */
let contadorVisitas = 0;
const mensagemBoasVindas = "Bem-vindo ao site!";
const alunos = ["Maria", "João", "Pedro", "Ana"];

/* ==========================================================
   FUNÇÃO DE INICIALIZAÇÃO
   ========================================================== */
function iniciarPagina() {
    contadorVisitas++;
    console.log("Página carregada com sucesso!");
    console.log("Visitas:", contadorVisitas);

    // Atualiza mensagem de boas-vindas
    document.getElementById("boasVindas").textContent = mensagemBoasVindas;

    // Preenche lista de alunos
    listarAlunos();
}

/* ====================================================*
