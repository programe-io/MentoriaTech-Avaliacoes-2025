// A lista de 'posts' e a função 'renderizarPosts' foram removidas, 
// pois as postagens agora estão no HTML.

// Função para simular o "curtir" (ainda precisa ser acessível globalmente)
function curtirPost(button) {
    let likesText = button.textContent;
    let match = likesText.match(/\((\d+)\)/);
    let likes = match ? parseInt(match[1]) : 0;
    
    if (button.dataset.curtido !== 'true') {
        likes++;
        button.textContent = `Curtir (${likes})`;
        button.dataset.curtido = 'true';
        console.log(`Você curtiu o post de ${likes - 1} para ${likes} likes.`);
    } else {
        likes--;
        button.textContent = `Curtir (${likes})`;
        delete button.dataset.curtido;
        console.log(`Você descurtiu o post de ${likes + 1} para ${likes} likes.`);
    }
}

// Função para mudar a cor principal do CSS
const mudarCorBtn = document.getElementById('mudarCor');
let corAtual = 'rosa';

if (mudarCorBtn) {
    mudarCorBtn.addEventListener('click', () => {
        if (corAtual === 'rosa') {
            document.documentElement.style.setProperty('--cor-primaria', '#8a2be2'); // Azul violeta
            document.documentElement.style.setProperty('--cor-secundaria', '#e6e6fa'); // Lavanda
            mudarCorBtn.textContent = 'Trocar Cor para Rosa';
            corAtual = 'roxo';
        } else {
            document.documentElement.style.setProperty('--cor-primaria', '#ff69b4'); // Rosa Choque
            document.documentElement.style.setProperty('--cor-secundaria', '#ffc0cb'); // Rosa Claro
            mudarCorBtn.textContent = 'Trocar Cor de Destaque';
            corAtual = 'rosa';
        }
    });
}