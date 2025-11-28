<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MakeUp House </title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> 
</head>

<body class="bg-gradient-to-b from-pink-50 to-pink-200 h-full min-h-screen text-gray-800">
    
    <header class="shadow-lg p-5 flex bg-white">
        </header>

    <main class="py-10 px-4 flex flex-col gap-6 md:flex-row md:justify-center md:items-start">
 
        <div class="bg-white py-6 px-4 rounded-xl shadow-2xl max-w-sm w-full md:w-1/3 product-card" data-product-name="Blush Líquido Rare">
            <div class="flex items-center pb-4 gap-3">
                <img class="h-12 w-12 rounded-full border-2 border-rose-500 object-cover" src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwd28e73cf/images/Color%20BR/RARE%20BEAUTY/soft_pinch_blush/BLUSH-RARE%20BEAUTY-SOFT%20PINCH%20-%20DEWY%20LIQUID%20BLUSH%20-%20LUCKY840122900020_1500px.jpg?sw=556&sh=680&sm=fit" alt="Gloss Kiko">
                <h2 class="text-xl font-bold text-rose-600">blush liquido  rare </h2>
            </div>
            <img class="w-full rounded-t-lg object-cover" src="https://www.sephora.com.br/dw/image/v2/BFJC_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/pt_BR/dwd28e73cf/images/Color%20BR/RARE%20BEAUTY/soft_pinch_blush/BLUSH-RARE%20BEAUTY-SOFT%20PINCH%20-%20DEWY%20LIQUID%20BLUSH%20-%20LUCKY840122900020_1500px.jpg?sw=556&sh=680&sm=fit">
            <div class="pt-4">
                <p class="text-sm text-justify leading-relaxed text-gray-700 mb-4">blush liquido</p>
                <span class="text-xs text-gray-400 text-right block">há 10 minutos</span>
            </div>
        </div>

        <div class="bg-white py-6 px-4 rounded-xl shadow-2xl max-w-sm w-full md:w-1/3 product-card" data-product-name="Máscara de Cílios Melu">
            <div class="flex items-center pb-4 gap-3">
                <img class="h-12 w-12 rounded-full border-2 border-rose-500 object-cover" src="https://a-static.mlcdn.com.br/420x420/kit-maquiagem-melu-by-ruby-rose-base-po-mascara-para-cilios-delineador-balm-labial-gloss/supervaidosacosmeticos/mlb4580591528e/1c12d1be5f257bf9dfdd630d10e71056.jpeg">
                <h2 class="text-xl font-bold text-rose-600">mascara de cilios </h2>
            </div>
            <img class="w-full rounded-t-lg object-cover" src="https://a-static.mlcdn.com.br/420x420/kit-maquiagem-melu-by-ruby-rose-base-po-mascara-para-cilios-delineador-balm-labial-gloss/supervaidosacosmeticos/mlb4580591528e/1c12d1be5f257bf9dfdd630d10e71056.jpeg" alt="Foto do Gloss LipHoney">
            <div class="pt-4">
                <p class="text-sm text-justify leading-relaxed text-gray-700 mb-4">mascara de cilios melu</p>
                <span class="text-xs text-gray-400 text-right block">há 25 minutos</span>
            </div>
        </div>

        <div class="bg-white py-6 px-4 rounded-xl shadow-2xl max-w-sm w-full md:w-1/3 product-card" data-product-name="Lip Tint">
            <div class="flex items-center pb-4 gap-3">
                <img class="h-12 w-12 rounded-full border-2 border-rose-500 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhmO0JPkB7viaEIW_US1LDXXNXRtUWK_i1Q&s" alt="Gloss Carmed">
                <h2 class="text-xl font-bold text-rose-600">lip tint</h2>
            </div>
            <img class="w-full rounded-t-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhmO0JPkB7viaEIW_US1LDXXNXRtUWK_i1Q&salt=">
            <div class="pt-4">
                <p class="text-sm text-justify leading-relaxed text-gray-700 mb-4">lip tint</p>
                <span class="text-xs text-gray-400 text-right block">há 7 minutos</span>
            </div>
        </div>

    </main>

    <script>
        // Função que será executada quando o DOM (a página HTML) estiver carregado.
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Alerta de Boas-Vindas
            alert('Bem-vinda à MakeUp House! Explore nossos produtos.');

            // 2. Interatividade dos Cards de Produto
            
            // Seleciona todos os elementos com a classe 'product-card'
            const productCards = document.querySelectorAll('.product-card');

            // Itera sobre cada card encontrado
            productCards.forEach(card => {
                // Adiciona um 'ouvinte de evento' para o clique em cada card
                card.addEventListener('click', (event) => {
                    // Previne o comportamento padrão (se o card fosse um link, por exemplo)
                    event.preventDefault();
                    
                    // Obtém o nome do produto do atributo 'data-product-name' no HTML
                    const productName = card.getAttribute('data-product-name');
                    
                    if (productName) {
                        alert(`Você clicou no produto: ${productName}. Em breve, mais detalhes estarão disponíveis!`);
                    } else {
                        alert('Você clicou em um produto!');
                    }
                });
            });
        });
    </script>

</body>
</html>