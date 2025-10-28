document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletter-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigada por assinar! 💌');
    form.reset();
  });
});
