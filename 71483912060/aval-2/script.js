/* ----------------------------------------------------------
   Funções sobre pilotagem de moto
----------------------------------------------------------- */

/* Lista de dicas simples */
const dicasPilotagem = [
  "Olhe para onde quer ir — o olhar guia a trajetória.",
  "Mantenha velocidade suave ao entrar em curvas.",
  "Use freio dianteiro e traseiro de forma progressiva.",
  "Mantenha postura relaxada e braços levemente flexionados.",
  "Treine em local seguro antes de ir ao trânsito."
];

/* Exibir dicas */
function mostrarDicas() {
  let mensagem = "Dicas rápidas de pilotagem:\n\n";
  dicasPilotagem.forEach((dica, i) => {
    mensagem += `${i + 1}. ${dica}\n`;
  });
  alert(mensagem);
}

/* Simples checklist de segurança */
function checklistSeguranca() {
  const itens = [
    "Capacete afivelado?",
    "Luvas colocadas?",
    "Calçados adequados?",
    "Faróis e setas funcionando?",
    "Pneus calibrados?"
  ];

  let pendentes = [];

  itens.forEach((item) => {
    const ok = confirm(item + " (OK = Sim | Cancelar = Não)");
    if (!ok) pendentes.push(item);
  });

  if (pendentes.length === 0) {
    alert("Tudo pronto! Segurança em dia.");
  } else {
    alert(
      "Atenção! Faltam itens:\n\n" +
      pendentes.join("\n") +
      "\n\nResolva antes de pilotar."
    );
  }
}

/* Ativar modo estudo (exibe info ao rolar a página) */
function modoEstudo() {
  alert("Modo estudo ativado! Role a página para receber lembretes.");
  document.addEventListener("scroll", () => {
    const pos = window.scrollY;
    if (pos > 200 && pos < 350) {
      console.log("Lembrete: mantenha olhar à frente, não no chão.");
    }
    if (pos > 650 && pos < 800) {
      console.log("Lembrete: freio dianteiro é mais forte — use com cuidado.");
    }
  });
}

/* Atalhos de teclado
   Ctrl + D → dicas
   Ctrl + C → checklist
   Ctrl + E → modo estudo
*/
document.addEventListener("keydown", (e) => {
  const ctrl = e.ctrlKey || e.metaKey;

  if (ctrl && e.key === "d") {
    e.preventDefault();
    mostrarDicas();
  }
  if (ctrl && e.key === "c") {
    e.preventDefault();
    checklistSeguranca();
  }
  if (ctrl && e.key === "e") {
    e.preventDefault();
    modoEstudo();
  }
});

/* Botões (se existirem no HTML) */
const btnDicas = document.getElementById("js-dicas");
if (btnDicas) btnDicas.onclick = mostrarDicas;

const btnChecklist = document.getElementById("js-check");
if (btnChecklist) btnChecklist.onclick = checklistSeguranca;

const btnEstudo = document.getElementById("js-estudo");
if (btnEstudo) btnEstudo.onclick = modoEstudo;
