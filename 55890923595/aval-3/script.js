document.addEventListener('DOMContentLoaded', function() {
    const mudarCorBtn = document.getElementById('mudarCorBtn');
    const body = document.body;
    
    // Array de cores fofas
    const coresFofas = [
        '#FFF0F5', // Lavender Blush
        '#F0FFF0', // Honeydew
        '#FAFAD2', // Light Goldenrod Yellow
        '#E0FFFF'  // Light Cyan
    ];
    
    let corAtualIndex = 0;

    mudarCorBtn.addEventListener('click', function() {
        // Altera a cor de fundo do body
        body.style.backgroundColor = coresFofas[corAtualIndex];
        
        // Vai para a próxima cor no array (loop)
        corAtualIndex = (corAtualIndex + 1) % coresFofas.length;

        // Feedback no console
        console.log('Cor de fundo alterada para: ' + body.style.backgroundColor);
    });
});