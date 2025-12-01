<script>
    // 1. Obter referências aos elementos do HTML pelo ID
    const botao = document.getElementById('btnCuriosidade');
    const areaCuriosidade = document.getElementById('curiosidadeArea');

    // O fato que queremos revelar
    const fatoCurioso = "🚀 Recorde: Cristiano Ronaldo é o único jogador na história a marcar pelo menos um gol em 5 Copas do Mundo diferentes (2006, 2010, 2014, 2018, 2022)!";

    // 2. Definir o que acontece quando o botão é clicado
    botao.addEventListener('click', function() {
        // Verifica se a área de curiosidade está escondida
        if (areaCuriosidade.style.display === 'none') {
            // Se estiver escondida, exibe a área e insere o texto
            areaCuriosidade.textContent = fatoCurioso;
            areaCuriosidade.style.display = 'block';
            botao.textContent = 'Esconder Curiosidade'; // Muda o texto do botão
            
        \} else {
            // Se estiver visível, esconde a área
            areaCuriosidade.style.display = 'none';
            botao.textContent = 'Clique para um Fato Rápido de CR7!'; // Volta o texto original
        \}
    \});

    // Função opcional para dar um estilo legal ao botão via JS
    botao.style.padding = '10px 20px';
    botao.style.fontSize = '1.1em';
    botao.style.backgroundColor = 'var(--cor-destaque)'; /* Dourado */
    botao.style.color = 'var(--cor-juventus)'; /* Preto */
    botao.style.border = 'none';
    botao.style.borderRadius = '5px';
    botao.style.cursor = 'pointer';
    botao.style.transition = 'background-color 0.3s';

    botao.onmouseover = function() {
        this.style.backgroundColor = '#ffc107'; /* Laranja/Amarelo mais claro */
    \};
    botao.onmouseout = function() {
        this.style.backgroundColor = 'var(--cor-destaque)';
    \};

</script>$0