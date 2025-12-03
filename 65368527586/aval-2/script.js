// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Interatividade com o botão 'Saiba Mais'
    const btnSaibaMais = document.getElementById('btn-saiba-mais');

    // Adiciona um "ouvinte" de evento de clique ao botão
    btnSaibaMais.addEventListener('click', function() {
        // Exibe um alerta simples ao usuário
        alert('Bem-vindo(a) ao Ret Inesgotável! Role a página para ver as últimas notícias.');
        
        // Ou você pode rolar a página para uma seção específica:
        // document.getElementById('noticias').scrollIntoView({ behavior: 'smooth' });
    });

    // 2. Efeito visual simples ao rolar a página
    const cabecalho = document.getElementById('cabecalho');

    window.addEventListener('scroll', function() {
        // Verifica se o usuário rolou mais de 100 pixels
        if (window.scrollY > 100) {
            // Adiciona uma classe CSS ao cabeçalho (para mudar a cor, sombra, etc.)
            cabecalho.style.opacity = '0.95'; // Deixa o cabeçalho semi-transparente
        } else {
            // Remove a classe se estiver no topo da página
            cabecalho.style.opacity = '1';
        }
    });
    
    // 3. Ideias Futuras com JavaScript
    /*
    * - **Carrossel de Imagens:** Mostrar as melhores fotos do Ret.
    * - **Formulário de Contato:** Validar os campos antes de enviar os dados.
    * - **Filtro de Posts:** Permitir que o usuário filtre as notícias por categoria (Música, Show, Entrevista, etc.).
    * - **Modo Noturno (Dark Mode):** Alternar entre temas claro e escuro.
    */
});