const curiosidades = [
  "Mario foi criado por Shigeru Miyamoto e apareceu pela primeira vez no jogo Donkey Kong em 1981.",
  "O nome original do Mario era 'Jumpman' antes de ser renomeado.",
  "Mario tem um irmão chamado Luigi, que também é um personagem famoso.",
  "Super Mario Bros. para NES, lançado em 1985, é um dos jogos mais vendidos da história.",
  "Mario é um encanador italiano, e seu visual com bigode ajuda a distinguir seus movimentos no jogo.",
];

const btnCuriosidade = document.getElementById('btn-curiosidade');
const textoCuriosidade = document.getElementById('texto-curiosidade');

btnCuriosidade.addEventListener('click', () => {
  // Escolhe uma curiosidade aleatória
  const indice = Math.floor(Math.random() * curiosidades.length);
  textoCuriosidade.textContent = curiosidades[indice];
});
