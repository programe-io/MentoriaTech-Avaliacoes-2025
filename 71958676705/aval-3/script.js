const formPostagem = document.getElementById('formPostagem');
const textoPost = document.getElementById('textoPost');
const posts = document.getElementById('posts');

formPostagem.addEventListener('submit', function (e) {
  e.preventDefault();

  const texto = textoPost.value.trim();
  if (texto === "") {
    alert("Escreva algo para postar!");
    return;
  }

  // Criar nova postagem
  const novaPostagem = document.createElement('div');
  novaPostagem.classList.add('postagem');
  novaPostagem.textContent = texto;

  // Adiciona no topo do feed
  posts.insertBefore(novaPostagem, posts.firstChild);

  // Limpa o textarea
  textoPost.value = "";
});
