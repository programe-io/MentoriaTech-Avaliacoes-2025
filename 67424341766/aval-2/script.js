// Scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const id = link.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if(section) {
      window.scroll({
        top: section.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Formulário simples: alerta ao enviar e limpa campos
const form = document.getElementById('contato-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  alert('Mensagem enviada com sucesso! Obrigado pelo contato.');

  form.reset();
});
