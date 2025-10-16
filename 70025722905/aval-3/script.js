const btnMudarCor = document.getElementById('btnMudarCor');
const body = document.body;
let cores = ['#f0f8ff', '#ffe066', '#ffcccb', '#ccffcc', '#d0e0ff'];
let indice = 0;

btnMudarCor.addEventListener('click', () => {
  indice = (indice + 1) % cores.length;
  body.style.backgroundColor = cores[indice];
});
