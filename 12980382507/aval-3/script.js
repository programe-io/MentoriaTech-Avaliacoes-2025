const btnColor = document.getElementById('btnColor');
const currentColor = document.getElementById('currentColor');

btnColor.addEventListener('click', () => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
  currentColor.textContent = randomColor;
});
