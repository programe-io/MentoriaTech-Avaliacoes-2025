// 1. Função para carregar e iniciar as funcionalidades do JS
document.addEventListener('DOMContentLoaded', () => {
    // A função garante que o código só será executado DEPOIS que todo o HTML for carregado.
    
    destacarNoticiaPrincipal();
    atualizarRodapeComData();
    adicionarInteratividadeAArtigos();
});

// 2. Funcionalidade: Destacar a Notícia Principal
function destacarNoticiaPrincipal() {
    const featuredStory = document.querySelector('.featured-story');
    
    if (featuredStory) {
        // Adiciona uma classe CSS para aplicar um efeito sutil ao carregar a página
        featuredStory.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        featuredStory.style.opacity = '0';
        featuredStory.style.transform = 'translateY(10px)';
        
        // Timeout para aplicar o efeito após a página ser renderizada
        setTimeout(() => {
            featuredStory.style.opacity = '1';
            featuredStory.style.transform = 'translateY(0)';
            console.log("Notícia principal destacada com sucesso!");
        }, 100); 
    }
}

// 3. Funcionalidade: Atualizar o Rodapé com Data e Hora Atuais
function atualizarRodapeComData() {
    const footerP = document.querySelector('footer p');
    
    if (footerP) {
        const dataAtual = new Date();
        const dataFormatada = dataAtual.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Atualiza o conteúdo do parágrafo no rodapé
        footerP.innerHTML = `&copy; 2025 Seu Esporte. Atualizado em ${dataFormatada}. Todos os direitos reservados.`;
    }
}

// 4. Funcionalidade: Adicionar Efeito de Mouse-Over aos Artigos Secundários
function adicionarInteratividadeAArtigos() {
    const newsArticles = document.querySelectorAll('.news-article');
    
    newsArticles.forEach(article => {
        // Evento quando o mouse entra no artigo
        article.addEventListener('mouseover', () => {
            article.style.backgroundColor = '#f0f0f0'; // Cor de fundo mais clara
            article.style.transform = 'translateY(-3px)'; // Leve elevação
            article.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            article.style.transition = 'all 0.3s ease';
        });

        // Evento quando o mouse sai do artigo
        article.addEventListener('mouseout', () => {
            article.style.backgroundColor = 'white';
            article.style.transform = 'translateY(0)';
            article.style.boxShadow = 'none';
        });
    });
}