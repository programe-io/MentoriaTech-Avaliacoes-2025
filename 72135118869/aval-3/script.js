<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GTA V - Página Oficial</title>

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Fonte estilo GTA -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Oswald', sans-serif;
        }
    </style>
</head>

<body class="bg-gray-900 text-white">

    <!-- ======================= CABEÇALHO ======================= -->
    <header class="bg-black/70 backdrop-blur sticky top-0 shadow-lg">
        <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            
            <h1 class="text-3xl font-bold text-yellow-400 drop-shadow">
                <span class="text-yellow-500">G</span>TA V
            </h1>

            <ul class="hidden md:flex gap-6 text-lg">
                <li><a href="#" class="hover:text-yellow-400 transition">Início</a></li>
                <li><a href="#" class="hover:text-yellow-400 transition">Personagens</a></li>
                <li><a href="#" class="hover:text-yellow-400 transition">Missões</a></li>
                <li><a href="#" class="hover:text-yellow-400 transition">Contato</a></li>
            </ul>

            <button class="md:hidden text-yellow-400 text-2xl">☰</button>
        </nav>
    </header>

    <!-- ======================= HERO ======================= -->
    <section class="relative">
        <img src="https://wallpapercave.com/wp/wp1815903.jpg" 
             class="w-full h-[350px] object-cover opacity-70">

        <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h2 class="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Bem-vindo a <span class="text-yellow-400">Los Santos</span>
            </h2>

            <p class="max-w-xl text-lg md:text-xl text-gray-200">
                A cidade onde tudo pode acontecer — ação, velocidade e liberdade total.
            </p>
        </div>
    </section>

    <!-- ======================= CONTEÚDO PRINCIPAL ======================= -->
    <main class="max-w-6xl mx-auto px-4 py-12">

        <h2 class="text-3xl font-bold mb-8 text-yellow-400">Personagens Principais</h2>

        <div class="grid md:grid-cols-3 gap-8">

            <!-- Card 1 -->
            <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
                <img src="https://wallpapercave.com/wp/wp2403898.jpg" class="h-56 w-full object-cover">
                <div class="p-5">
                    <h3 class="text-2xl font-bold text-yellow-400">Michael</h3>
                    <p class="text-gray-300 mt-2">
                        Um ex-assaltante que tenta viver uma vida tranquila. 
                        <span class="text-yellow-400">Mas o crime sempre chama.</span>
                    </p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
                <img src="https://wallpapercave.com/wp/wp1822732.jpg" class="h-56 w-full object-cover">
                <div class="p-5">
                    <h3 class="text-2xl font-bold text-yellow-400">Franklin</h3>
                    <p class="text-gray-300 mt-2">
                        Ambicioso e determinado, busca subir na vida.
                    </p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
                <img src="https://wallpapercave.com/wp/wp1822711.jpg" class="h-56 w-full object-cover">
                <div class="p-5">
                    <h3 class="text-2xl font-bold text-yellow-400">Trevor</h3>
                    <p class="text-gray-300 mt-2">
                        Um caos ambulante. 
                        <span class="text-red-400">Imprevisível e explosivo.</span>
                    </p>
                </div>
            </div>

        </div>

        <!-- Seção texto -->
        <section class="mt-16">
            <h2 class="text-3xl font-bold text-yellow-400 mb-6">
                Por que GTA V se tornou um fenômeno?
            </h2>

            <div class="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 leading-relaxed text-gray-300">
                <p class="mb-4">
                    Com seu mundo aberto vibrante e liberdade total,
                    <span class="text-yellow-400">GTA V redefiniu o gênero</span> de ação.
                </p>

                <p>
                    O modo online trouxe milhões de jogadores, tornando o jogo popular até hoje.
                </p>
            </div>
        </section>

    </main>

    <!-- ======================= RODAPÉ ======================= -->
    <footer class="bg-black/80 py-6 mt-10">
        <div class="max-w-6xl mx-auto px-4 text-center text-gray-300">
            <p>
                © 2025 <span class="text-yellow-400">GTA V Fan Page</span> — Desenvolvido com Tailwind CSS
            </p>
        </div>
    </footer>

</body>
</html>
