// 1. GARANTE QUE O CÓDIGO SÓ RODE DEPOIS QUE O SITE CARREGAR
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. MUDANDO UM TÍTULO DINAMICAMENTE
    // Seleciona o elemento h1 dentro do header
    const tituloPrincipal = document.querySelector('header h1');
    
    // Verifica se o elemento existe antes de tentar mudar
    if (tituloPrincipal) {
        console.log("Título original:", tituloPrincipal.textContent);
        
        // Mudar o texto do título principal
        tituloPrincipal.textContent = "Programadora: O Arco-Íris do Mercado Tech!";
    }

    // 3. ADICIONANDO UM EVENTO DE CLIQUE AO BOTÃO
    // Seleciona o botão usando o ID que definimos no HTML
    const botao = document.getElementById('meuBotao');

    if (botao) {
        // Adiciona um 'ouvinte' para o evento de clique
        botao.addEventListener('click', function() {
            // Executa uma função quando o botão é clicado
            alert('Parabéns! Você clicou no botão e ativou o JavaScript.');
        });
    }

    // 4. (EXTRA) MOSTRANDO MENSAGEM NO CONSOLE
    console.log("O site foi carregado e o JavaScript está funcionando!");
});