/**
 * URLs de imagens encontradas para o CETI Joel Ribeiro:
 * 1. Fachada (img-escola)
 * 2. Atividades/Alunos (img-mapa)
 * 3. Logo/Brasão (img-logo)
 */
const imgUrls = {
    // IMAGEM 1: Fachada da escola
    escola: 'http://googleusercontent.com/image_collection/image_retrieval/5436342638211624937_0', 
    // IMAGEM 2: Atividades dos alunos (substitui o mapa)
    mapa: 'http://googleusercontent.com/image_collection/image_retrieval/5824351556568672712_0', 
    // IMAGEM 3: Brasão ou Logo da escola
    logo: 'http://googleusercontent.com/image_collection/image_retrieval/14715961526957360494_0' 
};

/**
 * Função que exibe uma mensagem de regras gerais ao usuário.
 */
function mostrarMensagem() {
    const outputElement = document.getElementById('resultado-js');
    
    // Regra simples de exemplo
    const mensagem = "As matrículas para 2026 dependem de edital da SEDUC-PI. Fique atento ao site oficial do governo para datas e requisitos específicos.";
    
    // 1. Exibe a mensagem no console
    console.log("Mensagem de Regras:", mensagem);
    
    // 2. Atualiza o conteúdo do elemento <output>
    outputElement.textContent = `⚠️ INFORMAÇÃO: ${mensagem}`;
}

/**
 * Evento que carrega as imagens (3 IMGs) e adiciona interatividade ao carregar a página.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Injeta as URLs nas tags <img> (As 3 imagens)
    const imgFachada = document.getElementById('img-escola');
    const imgMapa = document.getElementById('img-mapa');
    const imgLogo = document.getElementById('img-logo');
    
    if (imgFachada) imgFachada.src = imgUrls.escola;
    if (imgMapa) imgMapa.src = imgUrls.mapa;
    if (imgLogo) imgLogo.src = imgUrls.logo;

    // 2. Exemplo de interatividade: Alerta ao passar o mouse sobre o título
    const titulo = document.getElementById('nome-escola');
    
    titulo.addEventListener('mouseover', () => {
        titulo.style.textShadow = '0 0 10px #ffc107'; // Brilho amarelo
    });

    titulo.addEventListener('mouseout', () => {
        titulo.style.textShadow = 'none'; // Remove brilho
    });
});