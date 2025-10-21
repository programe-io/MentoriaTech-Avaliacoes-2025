/**
 * =======================================================
 * JAVASCRIPT PARA O SITE SIMPLES COM IMAGEM
 * =======================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mensagem simples ao carregar a página (Boas-vindas)
    console.log("Olá! O site foi carregado com sucesso. Bem-vindo(a)!");

    // 2. Funcionalidade de troca de imagem ao clicar
    const imagemElemento = document.querySelector('img');

    // Verifica se a imagem foi encontrada no HTML
    if (imagemElemento) {
        // Define as URLs das imagens que serão alternadas
        const imagemOriginalSrc = imagemElemento.src; // Pega o caminho original
        // ATENÇÃO: Você precisa criar (ou encontrar) este segundo arquivo de imagem!
        const imagemAlternativaSrc = "minha_imagem_alternativa.jpg"; 
        
        let estaAlternativa = false;

        // Adiciona um "ouvinte" de evento de clique na imagem
        imagemElemento.addEventListener('click', () => {
            
            if (estaAlternativa) {
                // Se estiver na alternativa, volta para a original
                imagemElemento.src = imagemOriginalSrc;
                imagemElemento.alt = "Descrição da imagem original.";
                console.log("Imagem trocada: Voltou para a original.");
            } else {
                // Se estiver na original, troca para a alternativa
                imagemElemento.src = imagemAlternativaSrc;
                imagemElemento.alt = "Descrição da imagem alternativa, após o clique.";
                console.log("Imagem trocada: Exibindo a alternativa.");
            }
            
            // Inverte o estado da variável de controle
            estaAlternativa = !estaAlternativa;
            
            // Opcional: Efeito visual simples (só para mostrar o JS funcionando)
            alert("Você clicou na imagem!");
        });
    } else {
        console.error("Erro: O elemento <img> não foi encontrado. Verifique se o seletor está correto.");
    }
});