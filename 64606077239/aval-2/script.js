// Mensagem no console ao carregar a página
console.log("Página de exemplo com muitas tags HTML carregada.");

// Desenhar no canvas
(function() {
  var c = document.getElementById('meuCanvas');
  if (!c) return;
  var ctx = c.getContext('2d');
  ctx.fillStyle = '#e0e0ff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = '#334';
  ctx.font = '16px sans-serif';
  ctx.fillText('Canvas: desenho via JS', 10, 30);
})();

// Clonar template e adicionar no documento
(function() {
  var tpl = document.getElementById('tpl');
  if (tpl && tpl.content) {
    var clone = tpl.content.cloneNode(true);
    document.getElementById('sec-extras').appendChild(clone);
  }
})();

// Atualizar saída do <output> conforme muda o <input range>
document.addEventListener('input', function(e) {
  var r = document.getElementById('range');
  var o = document.querySelector('output[for="range"]') || document.querySelector('output');
  if (r && o) o.textContent = r.value;
});
