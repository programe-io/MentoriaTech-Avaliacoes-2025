// 1. Espera que o documento HTML esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Seleciona o elemento da imagem
    // O seletor '.container img' procura a tag <img> dentro da div com classe 'container'
    const imagemGordi = document.querySelector('.container img');

    // Verifica se a imagem foi encontrada no HTML
    if (imagemGordi) {
        
        // 3. Define o bordão do meme
        const bordao = "Joga a sandália não, Gordinho Jaguatirica! É bom demais, junior!";
        
        // 4. Adiciona um "ouvinte de evento" (event listener) de clique à imagem
        imagemGordi.addEventListener('click', function() {
            
            // 5. Função que será executada ao clicar na imagem
            
            // Exibe um pop-up (alerta) com a frase de efeito
            alert(bordao);

            // Opcional: Loga a ação no console do navegador para fins de depuração
            console.log('Bordão disparado: ' + bordao);
        \});
    \} else {
        // Mensagem de erro caso a imagem não seja encontrada
        console.error('Erro: A imagem do Gordinho Jaguatirica não foi encontrada no HTML.');
    \}
\});$0