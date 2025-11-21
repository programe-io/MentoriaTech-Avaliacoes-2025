document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona os links de navegação e as seções correspondentes
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main article, main section');

    // 2. Função para adicionar/remover a classe 'active' no link de navegação
    function setActiveLink() {
        let current = '';

        // Determina qual seção está mais próxima do topo da viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // O 150 é um offset para que a mudança ocorra antes de a seção tocar o topo
            if (window.scrollY >= sectionTop - 150) {
                // Captura o ID da última seção visível
                current = section.getAttribute('id');
            }
        });

        // Remove a classe 'active' de todos os links e a adiciona ao link da seção atual
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    }

    // 3. Adiciona um event listener para o evento de scroll
    window.addEventListener('scroll', setActiveLink);

    // Chama a função uma vez no carregamento para definir o estado inicial
    setActiveLink();


    // 4. Efeito de interação: Alerta ao clicar no link de contato
    const contatoSection = document.getElementById('contato');
    if (contatoSection) {
        const contatoLinks = contatoSection.querySelectorAll('a');
        contatoLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                // Apenas demonstra a interação, não impede a navegação real
                console.log(`Você está acessando: ${link.textContent}`);
                // Exibe uma mensagem de cortesia
                // alert(`Ótima escolha! Você será redirecionado para o canal oficial da Música Brasileira.`);
            });
        });
    }
});

// Nota: Você precisaria adicionar o estilo 'active' no seu CSS para este script funcionar visualmente.
/* Exemplo de estilo 'active' a ser adicionado no CSS:
nav a.active {
    background-color: #FFD700; 
    color: #333;
    font-weight: bold;
}
*/