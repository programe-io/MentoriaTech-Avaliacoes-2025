/*
    script.js - Interatividade para a página HTML sobre Roblox
*/

// Função principal que é executada quando o HTML está completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Alterar dinamicamente o título do cabeçalho
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        // Altera o texto H1 depois que o DOM é carregado
        headerTitle.textContent = "⭐ Bem-vindo ao Universo Roblox! ⭐";
    \}

    // 2. Adicionar interatividade a um link específico
    const robloxLink = document.querySelector('a[href="https://www.roblox.com/"]');
    
    if (robloxLink) {
        // Previne a navegação imediata e adiciona um alerta
        robloxLink.addEventListener('click', function(event) {
            
            // Impede o comportamento padrão do link (que é navegar para o URL)
            event.preventDefault(); 
            
            // Exibe uma caixa de diálogo de alerta
            const confirma = confirm("Você está prestes a sair desta página e visitar o site oficial do Roblox. Continuar?");
            
            // Se o usuário clicar em 'OK' no alerta
            if (confirma) {
                // Navega para o URL do link
                window.location.href = event.target.href;
            \} else {
                // Caso contrário (se clicar em 'Cancelar'), mostra uma mensagem
                alert("Navegação cancelada. Fique mais um pouco!");
            \}
        \});
    \}

    console.log("Script JavaScript carregado e pronto para a interatividade Roblox.");
\});$0