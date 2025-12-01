// Dados estatísticos básicos sobre o jogador Flávio Caça-Rato (Baseado em informações públicas)
const dadosCaçaRato = {
    nome: "Flávio Augusto do Nascimento",
    posicao: "Atacante (Centroavante / Ponta)",
    clubeIdolo: "Santa Cruz Futebol Clube",
    golsCarisma: 20, // Exemplo de estatística folclórica
    jogosCarisma: 80, // Exemplo de estatística folclórica
    frasesFolcloricas: [
        "A mão que aplaude é a mesma mão que vaia!",
        "Um ídolo do futebol nordestino, com certeza!",
        "Ele tem o faro de gol de um rato... Caça-Rato!",
        "O homem que faz o gol do acesso!",
        "CR7 do Nordeste (como a torcida brincava)!"
    ]
\};

// =========================================================
// FUNÇÃO 1: EXIBE FRASE FOLCLÓRICA
// =========================================================
function exibirFraseCaçaRato() {
    // 1. Seleciona o elemento onde a frase será exibida
    const fraseElement = document.getElementById('frase-carisma');
    
    // 2. Garante que o elemento existe
    if (!fraseElement) {
        console.error("Elemento 'frase-carisma' não encontrado no HTML.");
        return;
    \}

    // 3. Seleciona uma frase aleatória
    const frases = dadosCaçaRato.frasesFolcloricas;
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseSelecionada = frases[indiceAleatorio];

    // 4. Exibe a frase com um pequeno efeito
    fraseElement.textContent = `"\${fraseSelecionada\}"`;
    fraseElement.style.opacity = 0;
    setTimeout(() => {
        fraseElement.style.opacity = 1;
        fraseElement.style.transition = 'opacity 0.8s ease-in-out';
    \}, 10);
\}

// =========================================================
// FUNÇÃO 2: ALTERNA TEMA VISUAL (Exemplo: Futebol vs. Jogo)
// =========================================================
function alternarTema() {
    const body = document.body;
    const header = document.querySelector('header');
    
    // Alterna a classe 'tema-alternativo' no body
    body.classList.toggle('tema-alternativo');

    // Altera o texto do botão para refletir o próximo tema
    const botaoTema = document.getElementById('botao-tema');
    if (body.classList.contains('tema-alternativo')) {
        header.style.backgroundColor = '#fbc02d'; // Amarelo
        header.style.borderBottom = '5px solid #004d40'; // Verde Escuro
        botaoTema.textContent = 'Voltar ao Tema ⚽ Futebol';
    \} else {
        header.style.backgroundColor = '#d32f2f'; // Vermelho
        header.style.borderBottom = '5px solid #212121'; // Preto
        botaoTema.textContent = 'Mudar para Tema 🧀 Jogo';
    \}
\}

// =========================================================
// FUNÇÃO 3: CARREGA DADOS NA PÁGINA (Ao carregar o HTML)
// =========================================================
function carregarDadosJogador() {
    // Exibe estatística dinâmica
    const elementoEstatistica = document.getElementById('estatistica-dinamica');
    if (elementoEstatistica) {
        elementoEstatistica.innerHTML = `
            <p><strong>Clube do Coração:</strong> \${dadosCaçaRato.clubeIdolo\}</p>
            <p><strong>Estatística de Carisma:</strong> Aproximadamente \${dadosCaçaRato.golsCarisma\} gols em \${dadosCaçaRato.jogosCarisma\} jogos (Carreira folclórica).</p>
        `;
    \}
\}


// Adiciona um Event Listener que espera o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os dados do jogador logo que a página é carregada
    carregarDadosJogador();

    // Adiciona o listener para o botão de frase
    const botaoFrase = document.getElementById('botao-frase');
    if (botaoFrase) {
        botaoFrase.addEventListener('click', exibirFraseCaçaRato);
    \}

    // Adiciona o listener para o botão de tema
    const botaoTema = document.getElementById('botao-tema');
    if (botaoTema) {
        botaoTema.addEventListener('click', alternarTema);
    \}
\});$0