/* ======================================
    JAVASCRIPT DA ARLEQUINA: Efeito de Cor
    ======================================
*/

// 1. Array com as cores temáticas da Arlequina (vermelho, azul e rosa/branco)
const coresArlequina = [
    '#E91E63', // Rosa/Vermelho claro (Harley Pink)
    '#2196F3', // Azul (Harley Blue)
    '#FFEB3B', // Amarelo/Dourado (Caos)
    '#FFFFFF', // Branco
    '#F44336'  // Vermelho
];

// 2. Função para escolher uma cor aleatória do array
function escolherCorAleatoria() {
    const indice = Math.floor(Math.random() * coresArlequina.length);
    return coresArlequina[indice];
\}

// 3. Função principal que aplica o estilo caótico
function aplicarEstiloCaotico() {
    // Tenta obter o elemento HTML pelo ID
    const bloco = document.getElementById('arlequina-bloco');

    if (bloco) {
        // Aplica a cor de fundo aleatória
        bloco.style.backgroundColor = escolherCorAleatoria();
        
        // Opcional: Altera a cor do texto para garantir contraste
        if (bloco.style.backgroundColor === '#FFFFFF') {
            bloco.style.color = '#333333'; // Se for branco, o texto é escuro
        \} else {
            bloco.style.color = '#FFFFFF'; // Se for colorido, o texto é branco
        \}
        
        // Adiciona um efeito de sombra que simula um "splash" visual
        bloco.style.boxShadow = `0 0 15px 5px \${escolherCorAleatoria()\}`;
        
    \} else {
        console.error("Erro: Elemento com ID 'arlequina-bloco' não encontrado.");
    \}
\}

// 4. Configura o script para rodar a cada 1.5 segundos (1500 milissegundos)
// Isso cria um efeito interativo e imprevisível.
setInterval(aplicarEstiloCaotico, 1500);

Como Usar no Seu HTML:$0