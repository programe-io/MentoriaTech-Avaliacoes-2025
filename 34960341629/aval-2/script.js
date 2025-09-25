// script.js - interatividade simples
document.addEventListener('DOMContentLoaded', function () {
  console.log('script carregado');

  // destacar link do menu clicado
  document.querySelectorAll('.site-nav a').forEach(function(a) {
    a.addEventListener('click', function(e) {
      document.querySelectorAll('.site-nav a').forEach(function(x){ x.classList.remove('active'); });
      a.classList.add('active');
    });
  });

  // trocar imagem principal ao clicar na miniatura
  document.querySelectorAll('.gallery .thumb').forEach(function(thumb, idx) {
    thumb.addEventListener('click', function() {
      var main = document.getElementById('main-image');
      main.src = 'https://picsum.photos/seed/thumb' + idx + '/800/300';
    });
  });

  // clique no rodapé
  var footer = document.querySelector('.site-footer');
  if (footer) {
    footer.addEventListener('click', function(){ alert('Você clicou no rodapé!'); });
  }
});
