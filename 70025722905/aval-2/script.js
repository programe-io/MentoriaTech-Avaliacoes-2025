const btnMudarCor = document.getElementById('btnMudarCor');
const body = document.body;
let cores = ['#e9ecef', '#fffbe6', '#d6f5d6', '#e6f0ff', '#ffe6f2'];
let indice = 0;

btnMudarCor.addEventListener('click', () => {
indice = (indice + 1) % cores.length;
body.style.backgroundColor = cores[indice];
});