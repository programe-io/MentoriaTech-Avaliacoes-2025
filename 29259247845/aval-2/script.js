// Espera o DOM carregar antes de executar
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o botão (assumindo que ele tem id="meuBotao")
  const botao = document.getElementById('meuBotao');

  // Adiciona um evento de clique ao botão
  botao.addEventListener('click', function() {
    alert('Você clicou no botão!');
  });
});
