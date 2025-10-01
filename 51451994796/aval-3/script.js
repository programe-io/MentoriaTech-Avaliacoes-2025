// Configuração do canvas
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ajuste de resolução interna (para nitidez)
const VIEW_W = 800;
const VIEW_H = 450;
canvas.width = VIEW_W;
canvas.height = VIEW_H;

// HUD (divs)
const scoreEl = document.getElementById("score");
const statusEl = document.getElementById("status");

// Mundo e física
const gravity = 0.65;
const moveSpeed = 3.2;
const maxRunSpeed = 4.6;
const jumpVelocity = -10.5;
const friction = 0.82;

// Jogador
const player = {
  x: 80,
  y: 0,
  w: 28,
  h: 40,
  vx: 0,
  vy: 0,
  onGround: false,
  color: "#2efc72"
};

// Plataformas (x, y, w, h)
const platforms = [
  { x: 0,   y: 400, w: 300, h: 30 },
  { x: 320, y: 360, w: 180, h: 30 },
  { x: 540, y: 330, w: 200, h: 30 },
  { x: 150, y: 300, w: 140, h: 30 },
  { x: 20,  y: 250, w: 100, h: 30 },
  { x: 480, y: 250, w: 140, h: 30 },
  { x: 680, y: 210, w: 100, h: 30 }
];

// Moedas
let coins = [
  { x: 360, y: 320, r: 7, collected: false },
  { x: 560, y: 290, r: 7, collected: false },
  { x: 200, y: 260, r: 7, collected: false },
  { x: 40,  y: 210, r: 7, collected: false },
  { x: 710, y: 175, r: 7, collected: false }
];

// Pontuação e estado
let score = 0;
let gameOver = false;

// Entrada
const keys = {};
document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;
  keys[e.key] = true; // para ArrowLeft/ArrowRight/Space
});
document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
  keys[e.key] = false;
});

// Utilitários de colisão AABB
function aabbRect(ax, ay, aw, ah, bx, by, bw, bh) {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by;
}

// Movimento e física
function updatePlayer() {
  // Horizontal
  const left = keys["arrowleft"] || keys["a"];
  const right = keys["arrowright"] || keys["d"];

  if (left) player.vx = Math.max(player.vx - 0.6, -maxRunSpeed);
  if (right) player.vx = Math.min(player.vx + 0.6, maxRunSpeed);
  if (!left && !right) player.vx *= friction;

  // Pulo
  const jump = keys[" "] || keys["space"];
  if (jump && player.onGround) {
    player.vy = jumpVelocity;
    player.onGround = false;
  }

  // Gravidade
  player.vy += gravity;

  // Aplicar velocidades
  player.x += player.vx;
  player.y += player.vy;

  // Limites laterais
  if (player.x < 0) { player.x = 0; player.vx = 0; }
  if (player.x + player.w > VIEW_W) { player.x = VIEW_W - player.w; player.vx = 0; }

  // Checar colisões com plataformas
  player.onGround = false;
  for (const p of platforms) {
    if (aabbRect(player.x, player.y, player.w, player.h, p.x, p.y, p.w, p.h)) {
      const prevBottom = player.y + player.h - player.vy;
      const prevRight = player.x + player.w - player.vx;

      if (prevBottom <= p.y && player.vy >= 0) {
        player.y = p.y - player.h;
        player.vy = 0;
        player.onGround = true;
      } else if (prevRight <= p.x && player.vx > 0) {
        player.x = p.x - player.w;
        player.vx = 0;
      } else if (player.x - player.vx >= p.x + p.w && player.vx < 0) {
        player.x = p.x + p.w;
        player.vx = 0;
      } else if (player.y - player.vy >= p.y + p.h && player.vy < 0) {
        player.y = p.y + p.h;
        player.vy = 0.1;
      }
    }
  }

  // Game over: caiu do cenário
  if (player.y > VIEW_H + 80) {
    gameOver = true;
    statusEl.textContent = "Game Over";
  }
}

// Coleta de moedas
function updateCoins() {
  for (const c of coins) {
    if (!c.collected) {
      const cx = c.x - c.r;
      const cy = c.y - c.r;
      const cw = c.r * 2;
      const ch = c.r * 2;
      if (aabbRect(player.x, player.y, player.w, player.h, cx, cy, cw, ch)) {
        c.collected = true;
        score += 10;
        scoreEl.textContent = score;
      }
    }
  }
}

// Renderização
function drawBackground() {
  ctx.fillStyle = "#6ab04c";
  ctx.fillRect(0, VIEW_H - 8, VIEW_W, 8);
}

function drawPlatforms() {
  for (const p of platforms) {
    ctx.fillStyle = "#3b3b45";
    ctx.fillRect(p.x, p.y, p.w, p.h);
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 2;
    ctx.strokeRect(p.x, p.y, p.w, p.h);
  }
}

function drawCoins() {
  for (const c of coins) {
    if (c.collected) continue;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = "#ffd54f";
    ctx.fill();
    ctx.strokeStyle = "#c9a032";
    ctx.stroke();
  }
}

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  ctx.fillStyle = "#103b2b";
  ctx.fillRect(player.x + player.w - 8, player.y + 8, 4, 4);
}

function drawHUDCanvasOverlay() {
  // Mantém um leve overlay, opcional (mas score principal está no div HUD)
  if (gameOver) {
    ctx.fillStyle = "#00000099";
    ctx.fillRect(0, 0, VIEW_W, VIEW_H);
    ctx.fillStyle = "#fff";
    ctx.font = "28px Arial";
    ctx.fillText("Game Over", VIEW_W / 2 - 80, VIEW_H / 2 - 10);
    ctx.font = "16px Arial";
    ctx.fillText("Pressione R para reiniciar", VIEW_W / 2 - 100, VIEW_H / 2 + 20);
  }
}

// Loop principal
function loop() {
  ctx.clearRect(0, 0, VIEW_W, VIEW_H);

  if (!gameOver) {
    updatePlayer();
    updateCoins();
    statusEl.textContent = "Em jogo";
  }

  drawBackground();
  drawPlatforms();
  drawCoins();
  drawPlayer();
  drawHUDCanvasOverlay();

  requestAnimationFrame(loop);
}
loop();

// Reiniciar
document.addEventListener("keydown", (e) => {
  if (gameOver && e.key.toLowerCase() === "r") {
    resetGame();
  }
});

function resetGame() {
  gameOver = false;
  score = 0;
  scoreEl.textContent = score;
  statusEl.textContent = "Em jogo";
  player.x = 80;
  player.y = 0;
  player.vx = 0;
  player.vy = 0;
  player.onGround = false;
  coins.forEach((c) => (c.collected = false));
}
