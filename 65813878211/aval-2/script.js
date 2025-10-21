let golsA = 0;
let golsB = 0;

const botaoA = document.getElementById('botaoA');
const botaoB = document.getElementById('botaoB');
const placarA = document.getElementById('golA');
const placarB = document.getElementById('golB');

botaoA.addEventListener('click', () => {
    golsA++;
    placarA.textContent = golsA;
});

botaoB.addEventListener('click', () => {
    golsB++;
    placarB.textContent = golsB;
});
