/* script.js */

// Navegação ao clicar no post na index
function openPost(url){
  window.location.href = url;
}

// Formulário de contato: simula envio e limpa campos
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        alert('Preencha todos os campos antes de enviar.');
        return;
      }
      // Simulação de envio (em produção, enviar ao servidor via fetch)
      alert('Mensagem enviada! Obrigado, ' + name + '. Em breve entraremos em contato.');
      form.reset();
      // Opcional: rolar para o topo
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // Realça o link do menu conforme a página
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(a => {
    // marcar ativo se href bate com pathname (simples)
    if(window.location.pathname.endsWith(a.getAttribute('href')) || (a.getAttribute('href') === 'index.html' && window.location.pathname.endsWith('/'))){
      a.classList.add('active');
    }
  });
});
