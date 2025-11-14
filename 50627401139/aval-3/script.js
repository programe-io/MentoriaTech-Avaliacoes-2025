<script>
// ======= CONFIGURAÇÃO DO CANVAS =======
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

// ===== VARIÁVEIS PRINCIPAIS =====
let gameRunning = true;
let score = 0;

// ===== JOGADOR =====
const player = {
    x: 100,
    y: 380,
    width: 55,
    height: 55,
    dy: 0,
    gravity: 1,
    jumpForce: -18,
    jumping: false
};

// ===== OBSTÁCULOS =====
let obstacles = [];
function spawnObstacle() {
    obstacles.push({
        x: canvas.width,
        y: 400,
        width: 40,
        height: 40,
        speed: 8
    });
}
setInterval(spawnObstacle, 1700);

// ===== CONTROLES =====
document.addEventListener("keydown", e => {
    if (e.code === "Space" || e.code === "ArrowUp") {
        jump();
    }
});

function jump() {
    if (!player.jumping) {
        player.dy = player.jumpForce;
        player.jumping = true;
    }
}

// ===== GAME LOOP =====
function update() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Player physics
    player.y += player.dy;
    player.dy += player.gravity;

    if (player.y > 380) {
        player.y = 380;
        player.jumping = false;
    }

    // Draw player neon cube
    ctx.fillStyle = "#00e5ff";
    ctx.shadowBlur = 20;
    ctx.shadowColor = "#00e5ff";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw ground
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 450, canvas.width, 4);

    // Obstacles
    obstacles.forEach((o, i) => {
        o.x -= o.speed;

        ctx.fillStyle = "#ff2d95";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#ff2d95";
        ctx.fillRect(o.x, o.y, o.width, o.height);

        // Remove off-screen
        if (o.x + o.width < 0) obstacles.splice(i, 1);

        // Collision
        if (
            player.x < o.x + o.width &&
            player.x + player.width > o.x &&
            player.y < o.y + o.height &&
            player.y + player.height > o.y
        ) {
            gameOver();
        }
    });

    // Score
    score++;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#fff";
    ctx.font = "22px Inter";
    ctx.fillText("Score: " + score, 20, 30);

    requestAnimationFrame(update);
}

function gameOver() {
    gameRunning = false;
    ctx.shadowBlur = 0;
    ctx.fillStyle = "#fff";
    ctx.font = "40px Inter";
    ctx.fillText("GAME OVER", canvas.width / 2 - 130, canvas.height / 2);
}

update();
</script>
