<script>
    // 1. Seleciona o elemento que queremos manipular
    const tituloPrincipal = document.querySelector('h1');
    
    // Lista de cores vibrantes para alternar
    const cores = ['#E91E63', '#9C27B0', '#FFC107', '#00BCD4'];
    let corAtualIndex = 0;

    // 2. Define a função que será executada no evento de clique
    function mudarCorTitulo() {
        // Altera para a próxima cor da lista
        corAtualIndex = (corAtualIndex + 1) % cores.length;
        
        // Aplica a nova cor ao estilo do elemento
        tituloPrincipal.style.color = cores[corAtualIndex];
        
        // Adiciona uma pequena animação de rotação temporária
        tituloPrincipal.style.transition = 'color 0.5s ease, transform 0.1s';
        tituloPrincipal.style.transform = 'rotate(2deg)';
        
        // Remove a rotação logo em seguida para que o efeito seja um 'soco' visual
        setTimeout(() => {
            tituloPrincipal.style.transform = 'rotate(0deg)';
        \}, 100);
        
        console.log(`Cor do título alterada para: \${cores[corAtualIndex]\}`);
    \}

    // 3. Adiciona um "ouvinte de evento" (event listener) ao título
    // Quando o evento 'click' ocorrer, a função 'mudarCorTitulo' é chamada
    tituloPrincipal.addEventListener('click', mudarCorTitulo);
</script>$0