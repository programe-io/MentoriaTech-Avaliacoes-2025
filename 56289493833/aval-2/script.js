// ======== MODO ESCURO / CLARO ========
const botaoModo = document.getElementById('modo-btn');
botaoModo.addEventListener('click', () => {
    document.body.classList.toggle('claro');
    botaoModo.textContent = document.body.classList.contains('claro')
        ? '🌞 Modo Claro'
        : '🌙 Modo Escuro';
});

// ======== ANIMAÇÃO AO ROLAR ========
const elementosAnimados = document.querySelectorAll('.fade-in');
function verificarVisibilidade() {
    const topoJanela = window.innerHeight;
    elementosAnimados.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        if (posicao < topoJanela - 100) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', verificarVisibilidade);
verificarVisibilidade();

// ======== TOCAR VÍDEO AUTOMATICAMENTE QUANDO VISÍVEL ========
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-principal');
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

window.addEventListener('scroll', () => {
    const video = document.getElementById('video-principal');
    const rect = video.getBoundingClientRect();
    const visible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (player && player.playVideo && visible) {
        player.playVideo();
    } else if (player && player.pauseVideo) {
        player.pauseVideo();
    }
});
