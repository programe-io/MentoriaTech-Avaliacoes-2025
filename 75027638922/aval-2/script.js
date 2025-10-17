const membros = [
  "RM (Kim Namjoon)",
  "Jin (Kim Seokjin)",
  "SUGA (Min Yoongi)",
  "J-Hope (Jung Hoseok)",
  "Jimin (Park Jimin)",
  "V (Kim Taehyung)",
  "Jungkook (Jeon Jungkook)"
];

const musicas = [
  "Dynamite",
  "Butter",
  "Boy With Luv",
  "Fake Love",
  "Blood Sweat & Tears",
  "Spring Day",
  "DNA"
];

function carregarMembros() {
  const listaMembros = document.getElementById("lista-membros");
  membros.forEach(membro => {
    const li = document.createElement("li");
    li.textContent = membro;
    listaMembros.appendChild(li);
  });
}

function carregarMusicas() {
  const listaMusicas = document.getElementById("lista-musicas");
  musicas.forEach(musica => {
    const li = document.createElement("li");
    li.textContent = musica;
    listaMusicas.appendChild(li);
  });
}

window.onload = function() {
  carregarMembros();
  carregarMusicas();
};
