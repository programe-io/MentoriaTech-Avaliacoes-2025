YPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout com JavaScript Dinâmico</title>
    <!-- Carrega o Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { 
            font-family: 'Inter', sans-serif; 
            transition: background-color 0.5s, color 0.5s; /* Transição suave para mudança de tema */
        }
    </style>
    <script>
        // Configuração de cores personalizadas do Tailwind
        tailwind.config = {
            darkMode: 'class', // Habilita o modo escuro baseado na classe 'dark' no <html> ou <body>
            theme: {
                extend: {
                    colors: {
                        // Tema Escuro (Default)
                        'dark-bg': '#1f2937', 
                        'dark-card': '#374151',
                        'dark-header': '#111827',
                        // Tema Claro (Alternativo)
                        'light-bg': '#f3f4f6',
                        'light-card': '#ffffff',
                        'light-header': '#e5e7eb',
                        
                        'primary': '#3b82f6', // Azul principal
                        'secondary': '#10b981', // Verde de destaque
                    }
                }
            }
        }

        /**
         * Simula a obtenção de conteúdo de uma API para renderização.
         */
        const pageContent = {
            articleTitle: "Renderização de Conteúdo via JS",
            articleBody: "Esta seção é preenchida dinamicamente. No desenvolvimento moderno, o JavaScript é frequentemente usado para buscar dados de um backend (como um servidor Java) e construir o HTML da página em tempo real. Isso simula a estrutura de um SPA (Single Page Application).",
            sidebarTitle: "Widget Dinâmico",
            sidebarBody: "Este bloco mostra a capacidade do JS de manipular o DOM. No tema escuro, a borda é cinza. Observe a mudança ao alternar o tema."
        };

        /**
         * 1. Renderiza o conteúdo dinâmico (Artigos e Sidebar).
         */
        function renderContent() {
            document.getElementById('article-title').textContent = pageContent.articleTitle;
            document.getElementById('article-body').textContent = pageContent.articleBody;
            document.getElementById('sidebar-title').textContent = pageContent.sidebarTitle;
            document.getElementById('sidebar-body').textContent = pageContent.sidebarBody;
        }
        
        /**
         * 2. Configura a alternância de tema.
         */
        function setupThemeToggle() {
            const body = document.body;
            const toggleButton = document.getElementById('theme-toggle');
            let isDark = true; // Começa no tema escuro por padrão

            // Define as classes iniciais (Tema Escuro)
            body.className = 'bg-dark-bg text-gray-100 min-h-screen';
            document.getElementById('header').classList.add('bg-dark-header');
            
            toggleButton.addEventListener('click', () => {
                isDark = !isDark;
                
                if (isDark) {
                    // Mudar para TEMA ESCURO
                    body.className = 'bg-dark-bg text-gray-100 min-h-screen';
                    document.querySelectorAll('.card-bg').forEach(el => el.classList.replace('bg-light-card', 'bg-dark-card'));
                    document.getElementById('header').classList.replace('bg-light-header', 'bg-dark-header');
                    toggleButton.innerHTML = '🌞 Tema Claro';
                    localStorage.setItem('theme', 'dark');
                } else {
                    // Mudar para TEMA CLARO
                    body.className = 'bg-light-bg text-gray-900 min-h-screen';
                    document.querySelectorAll('.card-bg').forEach(el => el.classList.replace('bg-dark-card', 'bg-light-card'));
                    document.getElementById('header').classList.replace('bg-dark-header', 'bg-light-header');
                    toggleButton.innerHTML = '🌙 Tema Escuro';
                    localStorage.setItem('theme', 'light');
                }
            });
        }

        /**
         * 3. Configura o indicador de rolagem.
         */
        function setupScrollIndicator() {
            const scrollIndicator = document.getElementById('scroll-indicator');
            
            window.addEventListener('scroll', () => {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPosition = window.scrollY;
                const progress = (scrollPosition / totalHeight) * 100;
                
                scrollIndicator.style.width = progress + '%';
            });
        }

        // Chamada principal para iniciar o site após o carregamento do DOM
        document.addEventListener('DOMContentLoaded', () => {
            renderContent();
            setupThemeToggle();
            setupScrollIndicator();
        });
    </script>
</head>
<body class="bg-dark-bg text-gray-100 min-h-screen">

    <!-- CABEÇALHO (Header) -->
    <header id="header" class="bg-dark-header shadow-xl sticky top-0 z-50 border-b border-gray-800 transition-colors duration-500">
        <!-- Indicador de Progresso de Rolagem -->
        <div id="scroll-indicator" class="h-1 bg-secondary absolute top-0 left-0 transition-all duration-100 ease-out"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 class="text-2xl font-extrabold text-primary tracking-wider">Design <span class="text-secondary">JS</span></h1>
            
            <div class="flex space-x-4 items-center">
                <!-- Botão de Alternância de Tema -->
                <button id="theme-toggle" class="px-3 py-1 bg-secondary text-white text-sm rounded-full hover:bg-green-700 transition duration-300">
                    🌞 Tema Claro
                </button>
                
                <!-- NAVEGAÇÃO Principal (Estática para simplicidade) -->
                <nav class="hidden md:flex space-x-6 text-sm font-medium">
                    <a href="#main-content" class="text-gray-300 hover:text-secondary transition duration-300">Estrutura</a>
                    <a href="#portfolio" class="text-gray-300 hover:text-secondary transition duration-300">Galeria</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- SEÇÃO HERO (DESTAQUE PRINCIPAL) -->
    <section class="bg-gradient-to-br from-dark-bg to-gray-800 text-center py-24 md:py-32 px-4 border-b-4 border-primary/50">
        <div class="max-w-4xl mx-auto">
            <h1 class="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
                Interatividade <span class="text-primary">Total</span> com <span class="text-secondary">JavaScript</span>
            </h1>
            <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Este layout utiliza JavaScript para renderizar conteúdo, alternar temas e gerenciar interações na página.
            </p>
            <a href="#main-content" class="inline-block px-10 py-4 bg-secondary text-white font-bold text-lg rounded-full shadow-2xl hover:bg-green-700 transition duration-300 transform hover:scale-105 ring-2 ring-secondary/50">
                Ver Funcionalidades
            </a>
        </div>
    </section>

    <!-- CONTAINER PRINCIPAL (BODY) -->
    <main class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-8">
        <h2 id="main-content" class="text-3xl font-bold mb-8 text-center text-secondary border-b-2 border-secondary/30 pb-2">Área de Conteúdo Dinâmico</h2>
        
        <!-- GRID PRINCIPAL (Responsivo: 1 coluna no mobile, 3 colunas no desktop) -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <!-- COLUNA PRINCIPAL (lg:col-span-2) -->
            <div class="lg:col-span-2 space-y-6">
                
                <!-- Artigo Principal (Conteúdo injetado por JS) -->
                <article class="card-bg bg-dark-card p-8 rounded-xl border-l-8 border-primary shadow-2xl hover:shadow-primary/40 transition duration-500">
                    <h3 id="article-title" class="text-2xl mb-3 font-extrabold text-primary">Carregando...</h3>
                    <p id="article-body" class="text-gray-400 mb-4">
                        Carregando conteúdo principal do script...
                    </p>
                    <button class="text-sm font-semibold text-primary hover:text-blue-400">Ação de Artigo &rarr;</button>
                </article>

                <!-- Destaque Secundário (Estático) -->
                <div class="card-bg bg-dark-card p-8 rounded-xl border-t-4 border-secondary shadow-xl transition-colors duration-500">
                    <h4 class="text-xl mb-2 font-bold text-secondary">Secção Estática</h4>
                    <p class="text-sm font-normal text-gray-400">
                        Este bloco não é alterado pelo JavaScript de renderização.
                    </p>
                </div>
            </div>

            <!-- BARRA LATERAL (lg:col-span-1) -->
            <aside id="sidebar" class="lg:col-span-1">
                <div class="card-bg bg-dark-card p-8 rounded-xl border-r-8 border-gray-500 shadow-2xl flex flex-col items-center sticky top-20 transition-colors duration-500">
                    <h3 id="sidebar-title" class="text-xl mb-4 font-extrabold text-gray-300">Carregando...</h3>
                    <p id="sidebar-body" class="text-sm font-normal text-gray-400 mb-6 text-center">
                        Carregando conteúdo da barra lateral do script...
                    </p>
                    <a href="#" class="mt-2 px-6 py-2 bg-primary hover:bg-blue-600 rounded-lg transition duration-300 font-bold shadow-md transform hover:shadow-lg">
                        Link de Ação
                    </a>
                </div>
            </aside>
            
        </div>
    </main>

    <!-- SEÇÃO DE GALERIA/PORTFÓLIO (Estática) -->
    <section id="portfolio" class="py-16 bg-dark-card/50 border-y border-gray-700 mt-12 transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center mb-10 text-primary border-b border-primary/30 pb-2">Galeria Estática</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Card 1 -->
                <div class="bg-dark-header rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.03] transition duration-500 ring-4 ring-transparent hover:ring-primary/50">
                    <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Design+1" alt="Placeholder para Design 1" class="w-full h-48 object-cover opacity-80 hover:opacity-100 transition duration-500">
                    <div class="p-6">
                        <h4 class="text-xl font-bold mb-2 text-primary">Efeito de Hover CSS</h4>
                        <p class="text-gray-400 text-sm">O JavaScript controla a funcionalidade, o CSS o estilo.</p>
                    </div>
                </div>
                <!-- Card 2 -->
                <div class="bg-dark-header rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.03] transition duration-500 ring-4 ring-transparent hover:ring-secondary/50">
                    <img src="https://placehold.co/600x400/10b981/ffffff?text=Interativo" alt="Placeholder para Interativo" class="w-full h-48 object-cover opacity-80 hover:opacity-100 transition duration-500">
                    <div class="p-6">
                        <h4 class="text-xl font-bold mb-2 text-secondary">Layout Flexível</h4>
                        <p class="text-gray-400 text-sm">Design adaptável para todas as resoluções de tela.</p>
                    </div>
                </div>
                <!-- Card 3 -->
                <div class="bg-dark-header rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.03] transition duration-500 ring-4 ring-transparent hover:ring-gray-500/50">
                    <img src="https://placehold.co/600x400/9ca3af/ffffff?text=UX" alt="Placeholder para UX" class="w-full h-48 object-cover opacity-80 hover:opacity-100 transition duration-500">
                    <div class="p-6">
                        <h4 class="text-xl font-bold mb-2 text-gray-300">Responsividade</h4>
                        <p class="text-gray-400 text-sm">O grid de 3 colunas vira 1 coluna no celular.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- RODAPÉ (Footer) -->
    <footer id="footer" class="bg-dark-header border-t-4 border-primary mt-10 transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <h3 class="text-lg font-bold mb-2 text-primary">Rodapé (Footer)</h3>
            <p class="text-gray-500 text-sm">Obrigado por explorar a demonstração de JavaScript.</p>
            <p class="text-gray-600 text-xs mt-4">Demo de JS + Tailwind CSS.</p>
        </div>
    </footer>

</body>
</html>