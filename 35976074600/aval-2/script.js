document.getElementById('botao-acao').addEventListener('click', () => {
  alert('Você clicou no botão! 😄');
});

document.getElementById('form-contato').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
});
