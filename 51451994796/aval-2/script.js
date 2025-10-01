const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 600;

// Nave
const ship = {
  x: canvas.width / 2 - 20,
  y: canvas.height - 60,
  width: 40,
  height: 40,
  speed: 5
};

// Tiros
let bullets = [];
const bulletSpeed = 7;

// Inimigos
let enemies = [];
const enemySpeed = 2;

// Controles
let keys = {};

document.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  if (e.key === " ") {
    bullets.push({ x: ship.x + ship.width / 2 - 2, y: ship.y });
  }
});

document.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

// Função para desenhar nave
function drawShip() {
  ctx.fillStyle = "cyan";
  ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
}

// Função para desenhar tiros
function drawBullets() {
  ctx.fillStyle = "yellow";
  bullets.forEach((bullet, index) => {
    bullet.y -= bulletSpeed;
    ctx.fillRect(bullet.x, bullet.y, 4, 10);

    if (bullet.y < 0) bullets.splice(index, 1);
  });
}

// Função para desenhar inimigos
function drawEnemies() {
  ctx.fillStyle = "red";
  enemies.forEach((enemy, eIndex) => {
    enemy.y += enemySpeed;
    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);

    // Colisão com nave
    if (
      enemy.x < ship.x + ship.width &&
      enemy.x + enemy.width > ship.x &&
      enemy.y < ship.y + ship.height &&
      enemy.y + enemy.height > ship.y
    ) {
      alert("Game Over!");
      document.location.reload();
    }

    // Colisão com tiros
    bullets.forEach((bullet, bIndex) => {
      if (
        bullet.x < enemy.x + enemy.width &&
        bullet.x + 4 > enemy.x &&
        bullet.y < enemy.y + enemy.height &&
        bullet.y + 10 > enemy.y
      ) {
        enemies.splice(eIndex, 1);
        bullets.splice(bIndex, 1);
      }
    });

    if (enemy.y > canvas.height) enemies.splice(eIndex, 1);
  });
}

// Criar inimigos aleatórios
function spawnEnemy() {
  const x = Math.random() * (canvas.width - 40);
  enemies.push({ x: x, y: 0, width: 40, height: 40 });
}

setInterval(spawnEnemy, 2000);

// Atualizar posição da nave
function moveShip() {
  if (keys["ArrowLeft"] && ship.x > 0) ship.x -= ship.speed;
  if (keys["ArrowRight"] && ship.x < canvas.width - ship.width)
    ship.x += ship.speed;
}

// Loop do jogo
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  moveShip();
  drawShip();
  drawBullets();
  drawEnemies();

  requestAnimationFrame(gameLoop);
}

gameLoop();
