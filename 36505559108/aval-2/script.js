// Função simples para simular adicionar ao carrinho
function adicionarAoCarrinho(produto) {
  alert(`💖 Você adicionou "${produto}" ao carrinho!`);
}

// Envio do formulário
function enviarFormulario(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome && email && mensagem) {
    alert(`Obrigada, ${nome}! Sua mensagem foi enviada com sucesso 💌`);
    document.querySelector('form').reset();
  } else {
    alert('Por favor, preencha todos os campos antes de enviar.');
  }
}
