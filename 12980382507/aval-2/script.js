const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  document.body.style.backgroundColor = randomColor;
});
