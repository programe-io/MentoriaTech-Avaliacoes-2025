<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MakeUp House</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
        .mobile-menu {
            display: none; /* Escondido por padrão, será mostrado pelo JS */
        }
        /* Para telas menores que 'md', o menu é exibido quando a classe 'mobile-menu-active' é adicionada pelo JS */
        @media (max-width: 767px) {
            .mobile-menu-active {
                display: flex !important;
            }
        }
    </style>
</head>

<body class="bg-gradient-to-b from-pink-50 to-pink-200 h-full min-h-screen text-gray-800">

    <header class="shadow-lg p-5 flex items-center justify-between bg-white">
        <div class="uppercase font-bold text-rose-600 text-xl tracking-widest">
            makeup house
        </div>

        <button id="menu-button" class="md:hidden text-rose-600 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <nav id="desktop-menu" class="font-semibold gap-6 hidden md:flex">
            <a href="#" class="hover:text-rose-600 transition duration-300">Início</a>
            <a href="https://imperiumbrazil.com.br/..." class="hover:text-rose-600 transition duration-300">Makes</a>
            <a href="https://www.lojafenzzamakeup.com.br/gloss" class="hover:text-rose-600 transition duration-300">Gloss</a>
        </nav>
    </header>

    <nav id="mobile-nav" class="mobile-menu font-semibold flex-col items-center bg-white shadow-md py-2 md:hidden">
        <a href="#" class="py-2 hover:text-rose-600 transition duration-300 block w-full text-center">Início</a>
        <a href="https://imperiumbrazil.com.br/..." class="py-2 hover:text-rose-600 transition duration-300 block w-full text-center">Makes</a>
        <a href="https://www.lojafenzzamakeup.com.br/gloss" class="py-2 hover:text-rose-600 transition duration-300 block w-full text-center">Gloss</a>
    </nav>

    <main class="py-10 px-4 flex flex-col gap-6 md:flex-row md:justify-center md:items-start">

        <div class="product-card bg-white py-6 px-4 rounded-xl shadow-2xl max-w-sm w-full md:w-1/3 cursor-pointer" data-product-title="Blush Líquido Rare">
            <div class="flex items-center pb-4 gap-3">
                <img class="h-12 w-12 rounded-full border-2 border-rose-500 object-cover" src="https://www.sephora.com.br/dw/image/..." alt="Gloss Kiko">
                <h2 class="text-xl font-bold text-rose-600">blush liquido  rare </h2>
            </div>
            <img class="w-full rounded-t-lg object-cover" src="https://www.sephora.com.br/dw/image/...">
            <div class="pt-4">
                <p class="text-sm text-justify leading-relaxed text-gray-700 mb-4">blush liquido</p>
                <span class="text-xs text-gray-400 text-right block">há 10 minutos</span>
            </div>
        </div>

        <div class="product-card bg-white py-6 px-4 rounded-xl shadow-2xl max-w-sm w-full md:w-1/3 cursor-pointer" data-product-title="Máscara de Cílios Melu">
            <div class="flex items-center pb-4 gap-3">
                <img class="h-12 w-12 rounded-full border-2 border-rose-500 object-cover" src="https://a-static.mlcdn.com.br/..." alt="Gloss LipHoney">
                <h2 class="text-xl font-bold text-rose-600">mascara de cilios </h2>
            </div>
            <img class="w-full rounded-t-lg object-cover" src="https://a-static.mlcdn.com.br/..." alt="Foto do Gloss LipHoney">
            <div class="pt-4">
                <p class="text-sm text-justify leading-relaxed text-gray-700 mb-4">mascara de cilios melu</p>
                <span class="text-xs text-gray-400 text-right block">há 25 minutos</span>
            </div>
        </div>

        <div class="product-card bg-white py-6 px-4 rounded-xl shadow-2xl max-w-sm w-full md:w-1/3 cursor-pointer" data-product-title="Lip Tint">
            <div class="flex items-center pb-4 gap-3">
                <img class="h-12 w-12 rounded-full border-2 border-rose-500 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhmO0JPkB7viaEIW_US1LDXXNXRtUWK_i1Q&s" alt="Gloss Carmed">
                <h2 class="text-xl font-bold text-rose-600">lip tint</h2>
            </div>
            <img class="w-full rounded-t-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhmO0JPkB7viaEIW_US1LDXXNXRtUWK_i1Q&s" alt="Foto vestido ">
            <div class="pt-4">
                <p class="text-sm text-justify leading-relaxed text-gray-700 mb-4">lip tint</p>
                <span class="text-xs text-gray-400 text-right block">há 7 minutos</span>
            </div>
        </div>

    </main>

    <script>
        // 1. Funcionalidade Menu Responsivo
        // Seleciona o botão e o menu móvel
        const menuButton = document.getElementById('menu-button');
        const mobileNav = document.getElementById('mobile-nav');

        // Adiciona um 'ouvinte de evento' de clique ao botão
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'mobile-menu-active'. 
            // Se estiver, remove; se não estiver, adiciona.
            mobileNav.classList.toggle('mobile-menu-active');
        });

        // 2. Funcionalidade Clique no Produto
        // Seleciona todos os elementos com a classe 'product-card'
        const productCards = document.querySelectorAll('.product-card');

        // Itera sobre cada card de produto
        productCards.forEach(card => {
            // Adiciona um 'ouvinte de evento' de clique a cada card
            card.addEventListener('click', () => {
                // Obtém o título do produto usando o atributo 'data-product-title'
                const productName = card.getAttribute('data-product-title');
                
                // Exibe um alerta com o nome do produto
                alert(`Você clicou no produto: ${productName}. Imagine que aqui abriria a página de detalhes!`);
            });
        });
    </script>
</body>
</html>