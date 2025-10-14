document.getElementById('contatoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Obrigado pelo contato! Responderemos em breve.');
  this.reset();
});
