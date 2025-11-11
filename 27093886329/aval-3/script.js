const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let score = 0;

let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

let direction = "RIGHT";

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if(event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    if(event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
    if(event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    if(event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function collision(head, array) {
    for(let i=0; i<array.length; i++){
        if(head.x === array[i].x && head.y === array[i].y){
            return true;
        }
    }
    return false;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // desenhar cobrinha
    for(let i=0; i<snake.length; i++){
        ctx.fillStyle = i === 0 ? "lime" : "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "#000";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // desenhar comida
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // posição da cabeça
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // mover cobrinha
    if(direction === "LEFT") snakeX -= box;
    if(direction === "RIGHT") snakeX += box;
    if(direction === "UP") snakeY -= box;
    if(direction === "DOWN") snakeY += box;

    // comer comida
    if(snakeX === food.x && snakeY === food.y){
        score++;
        document.getElementById("score").innerText = score;
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    // verificar colisões
    if(
        snakeX < 0 || snakeY < 0 ||
        snakeX >= canvas.width || snakeY >= canvas.height ||
        collision(newHead, snake)
    ){
        clearInterval(game);
        alert("Fim de jogo! Pontuação: " + score);
        return;
    }

    snake.unshift(newHead);
}

// atualizar o jogo a cada 100ms
let game = setInterval(draw, 100);
