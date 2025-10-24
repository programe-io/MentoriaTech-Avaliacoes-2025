// Botão "Leia mais"
const btnLeiaMais = document.getElementById('btnLeiaMais');
const maisTexto = document.getElementById('mais-texto');
const resumo = document.getElementById('resumo');

btnLeiaMais.addEventListener('click', () => {
  if (maisTexto.style.display === 'none') {
    maisTexto.style.display = 'block';
    resumo.style.display = 'none';
    btnLeiaMais.textContent = 'Leia menos';
  } else {
    maisTexto.style.display = 'none';
    resumo.style.display = 'block';
    btnLeiaMais.textContent = 'Leia mais';
  }
});

// Contador de curtidas
let contadorLikes = 0;
const btnLike = document.getElementById('btnLike');
const likeCount = document.getElementById('likeCount');

btnLike.addEventListener('click', () => {
  contadorLikes++;
  likeCount.textContent = contadorLikes;
});

// Sistema simples de comentários
const btnComentar = document.getElementById('btnComentar');
const inputComentario = document.getElementById('inputComentario');
const listaComentarios = document.getElementById('listaComentarios');

btnComentar.addEventListe