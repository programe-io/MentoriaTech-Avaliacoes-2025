// Variáveis de controle para a posição do robô
let robot = document.getElementById('robot');
let posX = 0;
let posY = 0;
const step = 20; // Quantidade de pixels a mover por clique

function moveRobot(direction) {
    const areaWidth = 400; // Deve corresponder ao .robot-area width no CSS
    const areaHeight = 300; // Deve corresponder ao .robot-area height no CSS
    const robotSize = 50; // Deve corresponder ao .robot width/height no CSS

    switch (direction) {
        case 'up':
            if (posY > 0) posY -= step;
            break;
        case 'down':
            if (posY < areaHeight - robotSize) posY += step;
            break;
        case 'left':
            if (posX > 0) posX -= step;
            break;
        case 'right':
            if (posX < areaWidth - robotSize) posX += step;
            break;
    }
    
    updateRobotPosition();
}

function updateRobotPosition() {
    robot.style.top = posY + 'px';
    robot.style.left = posX + 'px';
}

function resetPosition() {
    posX = 0;
    posY = 0;
    updateRobotPosition();
}

// Inicializa a posição quando a página carrega
document.addEventListener('DOMContentLoaded', (event) => {
    updateRobotPosition();
});
