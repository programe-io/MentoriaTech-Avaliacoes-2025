document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Funcionalidade MODO DIA/NOITE ---
    const toggleBtn = document.getElementById('toggle-theme-btn');
    const body = document.body;
    const themeKey = 'minecraft-theme'; 

    function applyTheme(isNight) {
        if (isNight) {
            body.classList.add('night-mode');
            toggleBtn.textContent = '🌑 Noite';
            localStorage.setItem(themeKey, 'night');
        } else {
            body.classList.remove('night-mode');
            toggleBtn.textContent = '🌞 Dia';
            localStorage.setItem(themeKey, 'day');
        }
    }

    const savedTheme = localStorage.getItem(themeKey);
    applyTheme(savedTheme === 'night');
    
    toggleBtn.addEventListener('click', () => {
        applyTheme(!body.classList.contains('night-mode'));
    });

    // --- 2. Funcionalidade BLOCO ALEATÓRIO DO DIA ---
    const generateBtn = document.getElementById('generate-block-btn');
    const blockOutput = document.getElementById('block-output');

    const blocks = [
        { name: "Bloco de OBSIDIAN", detail: "Extremamente resistente, necessário para o portal do Nether. Dica: Use um balde de água para minerar lava e criá-lo!", color: "darkviolet" },
        { name: "Bloco de ESPONJA", detail: "Essencial para drenar Monumentos Oceânicos. Bônus: Seca no Nether!", color: "#ffeb3b" }, // Glowstone light
        { name: "BLOCO DE COBRE OXIDADO", detail: "Beleza estética única. Pode ser raspado com um machado e receber 'cera' com um favo de mel para preservá-lo.", color: "darkcyan" },
        { name: "Pedra do END", detail: "Monótono, mas ideal para grandes construções que precisam de durabilidade e tons neutros claros. Direto da dimensão final.", color: "white" },
        { name: "DEEPSLATE ESCULPIDO", detail: "Um bloco decorativo raro, perfeito para detalhes finos em castelos subterrâneos. Requer uma bigorna para ser feito.", color: "lightgray" },
    ];

    function generateRandomBlock() {
        const randomIndex = Math.floor(Math.random() * blocks.length);
        const block = blocks[randomIndex];
        
        blockOutput.innerHTML = `
            <h3 style="color:${block.color}; font-size: 1.5em; margin: 0; text-shadow: 1px 1px black;">${block.name}</h3>
            <p style="margin-top: 5px;">${block.detail}</p>
        `;
    }

    generateBtn.addEventListener('click', generateRandomBlock);
    
    // Gera um bloco automaticamente ao carregar para já ter um conteúdo
    generateRandomBlock(); 
});