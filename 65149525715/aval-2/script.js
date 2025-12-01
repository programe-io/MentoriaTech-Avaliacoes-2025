// placar simples com botões
let golsA = 0;
let golsB = 0;

const g1 = document.getElementById('g1');
const g2 = document.getElementById('g2');
const btnA = document.getElementById('golA');
const btnB = document.getElementById('golB');
const btnR = document.getElementById('reset');

btnA.addEventListener('click', () => {
  golsA++;
  g1.textContent = golsA;
  destaquePlacar();
});

btnB.addEventListener('click', () => {
  golsB++;
  g2.textContent = golsB;
  destaquePlacar();
});

btnR.addEventListener('click', () => {
  golsA = 0; golsB = 0;
  g1.textContent = golsA;
  g2.textContent = golsB;
  removerDestaque();
});

function destaquePlacar(){
  [g1, g2].forEach(el => el.style.transition = 'all 180ms ease');
  if (golsA > golsB){
    g1.style.transform = 'scale(1.06)';
    g2.style.transform = 'none';
  } else if (golsB > golsA){
    g2.style.transform = 'scale(1.06)';
    g1.style.transform = 'none';
  } else {
    g1.style.transform = g2.style.transform = 'none';
  }
}

function removerDestaque(){
  g1.style.transform = g2.style.transform = 'none';
}

// animação leve ao carregar artigos
window.addEventListener('load', () => {
  const arts = document.querySelectorAll('article');
  arts.forEach((a, i) => {
    a.style.opacity = 0;
    a.style.transform = 'translateY(6px)';
    setTimeout(() => {
      a.style.transition = 'all 360ms ease';
      a.style.opacity = 1;
      a.style.transform = 'none';
    }, 100 * i);
  });
});
