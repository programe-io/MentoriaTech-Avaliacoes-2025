// Efeito simples de fogo com partículas 🔥
const fire = document.querySelector('.fire');

for (let i = 0; i < 60; i++) {
  const spark = document.createElement('div');
  spark.style.position = 'absolute';
  spark.style.bottom = '0';
  spark.style.left = Math.random() * 100 + '%';
  spark.style.width = '3px';
  spark.style.height = Math.random() * 30 + 'px';
  spark.style.background = `rgba(255, ${Math.floor(Math.random() * 150)}, 0, 0.6)`;
  spark.style.animation = `rise ${2 + Math.random() * 3}s linear infinite`;
  fire.appendChild(spark);
}

// Animação das fagulhas
const style = document.createElement('style');
style.innerHTML = `
  @keyframes rise {
    0% { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-200px) scale(0); opacity: 0; }
  }
`;
document.head.appendChild(style);