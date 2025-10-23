document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================
    // 1. Menu de Navegação Responsivo (Mobile)
    //    Faz o menu de hambúrguer funcionar.
    // =========================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        
        // Função para alternar o estado do menu (abrir/fechar)
        const toggleMenu = () => {
            mainNav.classList.toggle('active');
            const isExpanded = mainNav.classList.contains('active');
            
            // Alterna o ícone de hambúrguer (☰) para fechar (✕)
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.textContent = isExpanded ? '✕' : '☰'; 
        };

        menuToggle.addEventListener('click', toggleMenu);

        // Fecha o menu ao clicar em um link (melhora a UX no mobile)
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                // Checa se o menu está ativo para garantir que ele feche
                if (mainNav.classList.contains('active')) {
                    toggleMenu(); 
                }
            });
        });
    }


    // =========================================================
    // 2. Animação de Entrada ao Scroll (Intersection Observer)
    //    Faz elementos com a classe .fade-in-up aparecerem suavemente.
    // =========================================================
    
    // Seleciona todos os elementos que têm a classe de animação
    const animatedElements = document.querySelectorAll('.fade-in-up');

    // Configurações do observador
    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px 0px -50px 0px', // Aciona quando o elemento estiver a 50px do fim da tela
        threshold: 0.1 // 10% do elemento precisa estar visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'is-visible' (definida no CSS)
                entry.target.classList.add('is-visible'); 
                observer.unobserve(entry.target); // Para de observar após a animação
            }
        });
    }, observerOptions);

    // Inicia a observação em todos os elementos
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    

    // =========================================================
    // 3. Simulação de Filtro de Busca (UX)
    //    Filtra os cards de caminhões na página com base nos inputs do usuário.
    // =========================================================
    const searchForm = document.querySelector('.search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // 1. Captura dos valores do formulário
            const keyword = document.querySelector('input[name="keyword"]').value.toLowerCase().trim();
            const type = document.querySelector('select[name="type"]').value.toLowerCase().trim();
            // Preço máximo: se vazio, usa 'Infinity'
            const priceMax = parseFloat(document.querySelector('input[name="price-max"]').value) || Infinity;

            const truckCards = document.querySelectorAll('.truck-card');
            let foundCount = 0;

            truckCards.forEach(card => {
                // 2. Captura de dados do card para comparação
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.description').textContent.toLowerCase();
                
                // Extrai o preço do texto (removendo R$, pontos e vírgulas)
                const priceText = card.querySelector('.price').textContent.replace(/[R$\.\,]/g, '');
                const price = parseFloat(priceText) || 0; 

                let isVisible = true;

                // 3. Lógica de Filtro

                // FILTRO 1: Palavra-chave
                if (keyword && !(title.includes(keyword) || description.includes(keyword))) {
                    isVisible = false;
                }
                
                // FILTRO 2: Tipo de Caminhão (Compara o valor do select com o texto do título)
                if (type && !title.includes(type)) {
                    isVisible = false;
                }
                
                // FILTRO 3: Preço Máximo
                if (price > priceMax) {
                    isVisible = false;
                }

                // 4. Exibe ou esconde o card
                if (isVisible) {
                    card.style.display = 'flex'; // Mostra (retorna ao display: flex)
                    foundCount++;
                } else {
                    card.style.display = 'none'; // Esconde
                }
            });

            // Feedback visual e rolagem
            console.log(`Busca concluída. ${foundCount} caminhão(ões) encontrado(s).`);
            
            // Rola a tela suavemente para a seção de estoque após a busca
            document.getElementById('estoque').scrollIntoView({ behavior: 'smooth' });
        });
    }

});