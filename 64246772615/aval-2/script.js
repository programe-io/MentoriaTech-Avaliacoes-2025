// Dados iniciais
const dadosIniciais = [
  {disciplina: "Português", prof: "Cláudio", notas: [9,8,10,9]},
  {disciplina: "Matemática", prof: "Luciana", notas: [7,6,7,8]},
  {disciplina: "História", prof: "José", notas: [8,7,8,7]},
  {disciplina: "Geografia", prof: "Maria", notas: [6,7,6,7]},
  {disciplina: "Ciências", prof: "Fernanda", notas: [8,8,9,8]},
  {disciplina: "Inglês", prof: "Bruno", notas: [9,9,10,10]},
  {disciplina: "Educação Física", prof: "Ana", notas: [7,8,8,7]}
];

const tabelaCorpo = document.querySelector("#tabela-notas tbody");

function calculaMedia(notas) {
  const soma = notas.reduce((a,b) => a+b, 0);
  return soma / notas.length;
}

function atualizaTabela() {
  tabelaCorpo.innerHTML = "";
  dadosIniciais.forEach((disciplina, idx) => {
    const tr = document.createElement("tr");

    // Disciplina e professor
    const tdDisc = document.createElement("td");
    tdDisc.textContent = disciplina.disciplina;
    tdDisc.style.textAlign = "left";
    tdDisc.style.paddingLeft = "10px";
    tr.appendChild(tdDisc);

    const tdProf = document.createElement("td");
    tdProf.textContent = disciplina.prof;
    tr.appendChild(tdProf);

    // Notas inputs
    for(let i=0; i<4; i++) {
      const tdNota = document.createElement("td");
      const input = document.createElement("input");
      input.type = "number";
      input.min = 0;
      input.max = 10;
      input.step = 0.1;
      input.value = disciplina.notas[i];
      input.classList.add("nota-input");
      input.dataset.disciplinaIdx = idx;
      input.dataset.notaIdx = i;
      input.addEventListener("input", onNotaChange);
      tdNota.appendChild(input);
      tr.appendChild(tdNota);
    }

    // Média
    const media = calculaMedia(disciplina.notas);
    const tdMedia = document.createElement("td");
    tdMedia.textContent = media.toFixed(2);
    tdMedia.style.fontWeight = "700";
    tr.appendChild(tdMedia);

    // Situação
    const tdSituacao = document.createElement("td");
    tdSituacao.textContent = media >= 7 ? "Aprovado" : "Reprovado";
    tdSituacao.className = media >= 7 ? "aprovado" : "reprovado";
    tr.appendChild(tdSituacao);

    // Editar (simbólico)
    const tdEditar = document.createElement("td");
    const editSpan = document.createElement("span");
    editSpan.innerHTML = "&#9998;";
    editSpan.title = "Editar";
    editSpan.className = "action-btn edit";
    tdEditar.appendChild(editSpan);
    tr.appendChild(tdEditar);

    // Excluir
    const tdExcluir = document.createElement("td");
    const delSpan = document.createElement("span");
    delSpan.innerHTML = "&#10060;";
    delSpan.title = "Excluir";
    delSpan.className = "action-btn delete";
    delSpan.style.cursor = "pointer";
    delSpan.addEventListener("click", () => {
      if(confirm(`Excluir a disciplina "${disciplina.disciplina}"?`)) {
        dadosIniciais.splice(idx, 1);
        atualizaTabela();
      }
    });
    tdExcluir.appendChild(delSpan);
    tr.appendChild(tdExcluir);

    tabelaCorpo.appendChild(tr);
  });
}

function onNotaChange(e) {
  const input = e.target;
  const discIdx = Number(input.dataset.disciplinaIdx);
  const notaIdx = Number(input.dataset.notaIdx);
  let val = parseFloat(input.value);
  if(isNaN(val) || val < 0) val = 0;
  if(val > 10) val = 10;
  input.value = val.toFixed(1);

  dadosIniciais[discIdx].notas[notaIdx] = val;
  atualizaTabela();
}

// Botão adicionar disciplina
document.getElementById("adicionar-disciplina").addEventListener("click", () => {
  const novaDisciplina = prompt("Nome da nova disciplina:");
  if(novaDisciplina && novaDisciplina.trim() !== "") {
    const novoProf = prompt("Nome do professor:");
    if(novoProf && novoProf.trim() !== "") {
      dadosIniciais.push({disciplina: novaDisciplina.trim(), prof: novoProf.trim(), notas: [0,0,0,0]});
      atualizaTabela();
    } else {
      alert("Nome do professor inválido!");
    }
  } else {
    alert("Nome da disciplina inválido!");
  }
});

// Inicializa tabela
atualizaTabela();
