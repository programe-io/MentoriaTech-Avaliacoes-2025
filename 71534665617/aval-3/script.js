const tulip = document.getElementById('tulip');

// Array de paletas de cores para as tulipas (Flor, Caule)
const colorPalettes = [
    { flower: '#e53935', stem: '#4caf50' }, // Vermelho
    { flower: '#ec407a', stem: '#4caf50' }, // Rosa
    { flower: '#ffeb3b', stem: '#4caf50' }, // Amarelo
    { flower: '#9c27b0', stem: '#4caf50' }  // Roxo
];

let currentColorIndex = 0;

function changeTulipColor() {
    // Avança para a próxima paleta
    currentColorIndex = (currentColorIndex + 1) % colorPalettes.length;
    const newColors = colorPalettes[currentColorIndex];

    // Aplica as novas variáveis CSS
    tulip.style.setProperty('--tulip-color', newColors.flower);
    tulip.style.setProperty('--stem-color', newColors.stem);
}

// Inicia com a primeira cor (vermelho)
document.addEventListener('DOMContentLoaded', (event) => {
    changeTulipColor(); // Chama uma vez para garantir que as variáveis CSS estejam configuradas
    currentColorIndex = -1; // Reseta o índice para que o primeiro clique mude para a próxima cor
});
