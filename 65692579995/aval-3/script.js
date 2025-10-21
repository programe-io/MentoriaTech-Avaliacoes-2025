// 1. Função que é executada quando todo o conteúdo HTML (DOM) é carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Tarefa 1: Mensagem de Boas-Vindas no Console ---
    console.log("Página carregada com sucesso! O JavaScript está ativo.");
    console.log("-------------------------------------------------------");
    console.log("Título da Página: " + document.title);
    
    // --- Tarefa 2: Adicionar um Rodapé Dinâmico ---
    
    // Cria um novo elemento de rodapé
    const footerElement = document.createElement('footer');
    
    // Define o conteúdo do rodapé
    footerElement.innerHTML = `
        <div style="padding: 15px; background-color: #343a40; color: white; margin-top: 30px; border-top: 3px solid #007bff;">
            <p>&copy; ${new Date().getFullYear()} Minha Página Simples. Todos os direitos reservados.</p>
            <p style="font-size: 0.8em; margin-top: 5px;">Conteúdo gerado dinamicamente via JavaScript.</p>
        </div>
    `;
    
    // Anexa o novo rodapé ao final do corpo do documento
    document.body.appendChild(footerElement);


    // --- Tarefa 3: Adicionar um efeito de clique na imagem (opcional) ---
    
    const imagem = document.querySelector('.container img');
    
    if (imagem) {
        imagem.addEventListener('click', function() {
            // Altera o texto alternativo (apenas para demonstração)
            const altAtual = imagem.getAttribute('alt');
            alert(`Você clicou na imagem! Alt Text: "${altAtual}"`);
            
            // Você poderia aqui, por exemplo, abrir a imagem em tela cheia.
        });
        console.log("Ouvinte de evento 'click' adicionado à imagem.");
    }

});