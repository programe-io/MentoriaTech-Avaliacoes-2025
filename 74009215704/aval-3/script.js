// Seleciona elementos do DOM
const btnPublicar = document.getElementById('btnPublicar');
const tituloInput = document.getElementById('titulo');
const mensagemInput = document.getElementById('mensagem');
const listaTopicos = document.getElementById('lista-topicos');

// Evento de clique para criar novo tópico
btnPublicar.addEventListener('click', function() {
  const titulo = tituloInput.value.trim();
  const mensagem = mensagemInput.value.trim();

  if (titulo === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos antes de publicar!");
    return;
  }

  // Cria um novo elemento de tópico
  const topico = document.createElement('div');
  topico.classList.add('topico');

  // Adiciona conteúdo ao tópico
  topico.innerHTML = `
    <h3>${titulo}</h3>
    <p>${mensagem}</p>
    <button class="responder-btn">Responder</button>
    <div class="respostas"></div>
  `;

  // Adiciona o tópico à lista
  listaTopicos.prepend(topico);

  // Limpa os campos
  tituloInput.value = "";
  mensagemInput.value = "";

  // Adiciona evento para botão de resposta
  topico.querySelector('.responder-btn').addEventListener('click', function() {
    const resposta = prompt("Digite sua resposta:");
    if (resposta) {
      const divRespostas = topico.querySelector('.respostas');
      const novaResposta = document.createElement('p');
      novaResposta.textContent = "💬 " + resposta;
      divRespostas.appendChild(novaResposta);
    }
  });
});