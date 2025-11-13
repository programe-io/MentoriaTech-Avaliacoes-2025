// =======================================================
// DADOS DO SITE (Simulação de uma API ou Banco de Dados)
// =======================================================

const siteData = {
    topBarMessage: "FRETE GRÁTIS nas compras acima de R$ 199,90 | Parcele em até 10x sem juros!",
    mainNavLinks: [
        { name: "Tênis", url: "#" },
        { name: "Roupas", url: "#" },
        { name: "Futebol", url: "#" },
        { name: "Academia", url: "#" },
        { name: "Suplementos", url: "#" },
        { name: "Outros Esportes", url: "#" },
        { name: "Outlet", url: "#", class: "accent-color" },
    ],
    sidebarCategories: [
        { title: "Categorias", links: ["Lançamentos", "Corrida", "Caminhada", "Casual", "Chuteiras", "Meias e Acessórios"] },
        { title: "Filtrar por Marca", links: ["Nike (150)", "Adidas (120)", "Olympikus (85)", "Puma (50)"] }
    ],
    products: [
        {
            name: "Camisa Nike Brasil I 2024/25 Torcedor Pro Masculina",
            img: "https://imgnike-a.akamaihd.net/1920x1920/0285640LA15.jpg",
            oldPrice: "R$ 399,99",
            currentPrice: "R$ 379,99 no Pix"
        },
        {
            name: "Camisa Santos I 25/26 Neymar N° 10 Torcedor Umbro Masculina",
            img: "https://static.netshoes.com.br/produtos/camisa-santos-i-2526-neymar-n-10-torcedor-umbro-masculina/58/2IB-1669-158/2IB-1669-158_zoom1.jpg?ts=1763004227&ims=1088x",
            oldPrice: "R$ 399,99",
            currentPrice: "R$ 142,49 no Pix"
        },
        {
            name: "Bicicleta Caloi Explorer Comp Sl 2025 Freio Hidráulico 9vel- Azul",
            img: "https://caloi.com/wp-content/uploads/2023/11/Explorer-Comp_Angulada_Azul-scaled.jpg",
            oldPrice: "R$ 4.290,00",
            currentPrice: "R$ 3.359,00"
        }
    ],
    footerLinks: {
        Institucional: ["Quem Somos", "Trabalhe Conosco", "Sustentabilidade"],
        Atendimento: ["Central de Ajuda", "Status do Pedido", "Trocas e Devoluções", "Política de Privacidade"]
    }
};

// =======================================================
// FUNÇÕES DE RENDERIZAÇÃO
// =======================================================

// 1. Renderiza a barra de informações superior
function renderTopBar() {
    const topBarElement = document.getElementById('top-info-bar');
    if (!topBarElement) return;

    topBarElement.classList.add('top-info-bar');
    topBarElement.innerHTML = `
        <div class="container">
            ${siteData.topBarMessage}
        </div>
    `;
}

// 2. Renderiza o cabeçalho principal
function renderHeader() {
    const headerElement = document.getElementById('main-header');
    if (!headerElement) return;

    headerElement.innerHTML = `
        <div class="container main-header-content">
            <a href="#" class="logo primary-color"><span class="accent-color">SPORT</span>STORE</a>
            <div class="search-bar">
                <input type="text" placeholder="Busque seu produto, marca ou esporte...">
            </div>
            <div class="user-actions">
                <a href="#">❤️ Favoritos</a>
                <a href="#">👤 Minha Conta</a>
                <a href="#">🛒 Carrinho</a>
            </div>
        </div>
    `;
}

// 3. Renderiza a navegação de categorias principal
function renderNavBar() {
    const navElement = document.getElementById('main-nav');
    if (!navElement) return;

    const navLinksHTML = siteData.mainNavLinks.map(link => 
        `<li><a href="${link.url}" class="${link.class || ''}">${link.name}</a></li>`
    ).join('');

    navElement.innerHTML = `
        <div class="container">
            <ul>${navLinksHTML}</ul>
        </div>
    `;
}

// 4. Renderiza o Banner Principal
function renderHeroBanner() {
    const heroElement = document.getElementById('hero-banner-section');
    if (!heroElement) return;

    heroElement.innerHTML = `
        <section class="hero-banner container">
            <div class="hero-text">
                <h2>A NOVA COLEÇÃO CHEGOU!</h2>
                <p>Os melhores artigos esportivos com 30% OFF.</p>
            </div>
        </section>
    `;
}

// 5. Renderiza a Sidebar de Categorias/Filtros
function renderSidebar() {
    const sidebarElement = document.getElementById('sidebar-content');
    if (!sidebarElement) return;

    let sidebarHTML = '';

    siteData.sidebarCategories.forEach(section => {
        const linksHTML = section.links.map(linkName => 
            `<li><a href="#">${linkName}</a></li>`
        ).join('');
        
        sidebarHTML += `
            <h3>${section.title}</h3>
            <ul>${linksHTML}</ul>
        `;
    });

    sidebarElement.classList.add('sidebar');
    sidebarElement.innerHTML = sidebarHTML;
}

// 6. Renderiza os Cards de Produtos
function renderProductList() {
    const mainElement = document.getElementById('main-catalog-content');
    if (!mainElement) return;

    // Constrói o HTML dos cards de produtos
    const productsHTML = siteData.products.map(product => `
        <article class="product-card">
            <img src="${product.img}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <p class="product-name">${product.name}</p>
                <span class="old-price">${product.oldPrice}</span>
                <span class="current-price">${product.currentPrice}</span>
                <button class="cta-button cta-bg">Adicionar ao Carrinho</button>
            </div>
        </article>
    `).join('');

    // Injeta o cabeçalho do catálogo e a lista de produtos
    mainElement.innerHTML = `
        <div class="catalog-header">
            <h2>Lançamentos Imperdíveis</h2>
        </div>
        <div class="product-list">
            ${productsHTML}
        </div>
    `;
    
    // Adiciona interatividade aos botões (Ação de Clique)
    addCartButtonListeners();
}

// 7. Renderiza o Rodapé
function renderFooter() {
    const footerElement = document.getElementById('main-footer');
    if (!footerElement) return;
    
    let linksHTML = '';

    // Constrói as colunas de links
    for (const title in siteData.footerLinks) {
        const linkList = siteData.footerLinks[title].map(linkName => 
            `<li><a href="#">${linkName}</a></li>`
        ).join('');

        linksHTML += `
            <div>
                <h4>${title}</h4>
                <ul>${linkList}</ul>
            </div>
        `;
    }

    // Colunas extras (Pagamento e Assinatura)
    linksHTML += `
        <div>
            <h4>Formas de Pagamento</h4>
            <p style="font-size: 14px;">.........</p>
            <img src="https://cdn.awsli.com.br/1000x5000/1312/1312825/arquivos/Forma%20de%20Pagamento.png" alt="Formas de pagamento">
        </div>
        <div>
            <h4>Fique por Dentro</h4>
            <p>Receba ofertas exclusivas por e-mail:</p>
            <input type="email" placeholder="Seu e-mail" style="padding: 8px; width: 100%; border-radius: 4px; border: none; margin-bottom: 10px;">
            <button class="cta-button cta-bg" style="width: 100%;">Assinar</button>
        </div>
    `;
    
    footerElement.innerHTML = `
        <div class="container footer-links">
            ${linksHTML}
        </div>
        <div class="footer-bottom container">
            <p>&copy; 2025 SportStore Pro. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX.</p>
        </div>
    `;
}

// 8. Adiciona a interatividade dos botões de 'Adicionar ao Carrinho'
function addCartButtonListeners() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const card = button.closest('.product-card');
            const productName = card ? card.querySelector('.product-name').textContent : 'Item';

            alert(`"${productName}" adicionado ao carrinho!`);
        });
    });
}


// =======================================================
// INICIALIZAÇÃO DA PÁGINA
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza todas as seções dinamicamente
    renderTopBar();
    renderHeader();
    renderNavBar();
    renderHeroBanner();
    renderSidebar();
    renderProductList();
    renderFooter();
});