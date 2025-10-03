const btnFato = document.getElementById('btnFato');
const fatoCurioso = document.getElementById('fatoCurioso');

btnFato.addEventListener('click', () => {
  if (fatoCurioso.style.display === 'none' || fatoCurioso.style.display === '') {
    fatoCurioso.style.display = 'block';
    btnFato.textContent = 'Esconder Fato Curioso';
  } else {
    fatoCurioso.style.display = 'none';
    btnFato.textContent = 'Mostrar Fato Curioso';
  }
});
