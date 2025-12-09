<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Galactic Bazaar</title>

  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="styles.css" />
</head>

<body class="bg-black text-green-100 min-h-screen flex flex-col">

  <nav class="bg-green-900/20 border-b border-green-700/40 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <img src="https://i.ibb.co/6D7K2CC/ufo.png" class="w-10" alt="logo">
        <span class="font-extrabold text-xl text-green-300">Galactic Bazaar</span>
      </a>

      <ul class="flex items-center gap-6 text-sm">
        <li><a href="#produtos" class="hover:text-green-300">Produtos</a></li>
        <li><a href="#info" class="hover:text-green-300">Origem</a></li>
        <li><a href="#contato" class="hover:text-green-300">Contato</a></li>
      </ul>

      <button id="botao-carrinho"
        class="relative px-4 py-1 border border-green-400 rounded-full text-sm hover:bg-green-300 hover:text-black transition">
        🛒 Carrinho
        <span id="contador-carrinho"
          class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-300 text-black ml-2 font-bold text-xs">0</span>
      </button>
    </div>
  </nav>

  <header class="bg-[url('https://i.ibb.co/SfrqPYq/alien-planet.jpg')] bg-cover bg-center">
    <div class="bg-black/70">
      <div class="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
        <section>
          <h1 class="text-4xl font-extrabold text-green-300 mb-4">Artefatos Alienígenas Autênticos</h1>
          <p class="text-green-100 mb-6 leading-relaxed">
            Diretamente de galáxias desconhecidas, reunimos relíquias raras encontradas em expedições interplanetárias.
          </p>

          <h3 class="text-lg font-semibold mb-2">Itens Energizados</h3>
          <ul class="list-disc list-inside text-sm text-green-200 space-y-1">
            <li>Tecnologia extraterrestre</li>
            <li>Relíquias de civilizações antigas</li>
            <li>Artefatos com energia cósmica</li>
          </ul>

          <div class="mt-6 flex gap-3">
            <a href="#produtos"
              class="px-4 py-2 bg-green-400 text-black rounded-md font-semibold text-sm hover:bg-green-300">Explorar catálogo</a>
            <a href="#info"
              class="px-4 py-2 border border-green-300 rounded-md text-sm hover:bg-green-700/40">Origem</a>
          </div>
        </section>

        <aside class="bg-black/50 border border-green-700 rounded-xl p-5 shadow-lg">
          <h2 class="text-xl font-bold text-green-300 mb-3">Zona Interestelar</h2>
          <p class="text-sm text-green-200 mb-3">
            Nosso sinal foi detectado no seu setor. Esteja pronto para encontrar o inesperado.
          </p>

          <div class="flex items-center gap-4">
            <img src="https://i.ibb.co/pPtbzrj/alien-head.png" class="w-16" alt="alien">
            <p class="text-sm">Presenças não-humanas próximas. Sensores ativados.</p>
          </div>
        </aside>
      </div>
    </div>
  </header>

  <main class="flex-1">
    <div class="max-w-7xl mx-auto px-4 py-10 grid gap-8 lg:grid-cols-[2fr_1fr]">

      <!-- LISTA DE PRODUTOS -->
      <section id="produtos" class="space-y-6">
        <header>
          <h2 class="text-2xl font-bold text-green-300 mb-2">Artefatos Galácticos</h2>
        </header>

        <!-- PRODUTO 1 -->
        <article class="produto bg-black border border-green-800 rounded-xl p-5 flex flex-col md:flex-row gap-4"
          data-nome="Esfera de Energia Nebular" data-preco="499.90">

          <img src="https://i.ibb.co/Ns4TDnv/nebulaball.jpg"
            class="w-full md:w-48 h-40 object-cover rounded-lg" alt="Esfera Nebular">

          <div class="flex-1">
            <h3 class="text-xl font-semibold text-green-300 mb-1">Esfera de Energia Nebular</h3>
            <p class="text-sm text-green-200 mb-2">
              Núcleo condensado de uma nebulosa viva, pulsando energia cósmica.
            </p>

            <div class="flex items-center justify-between mt-2">
              <span class="text-lg font-bold text-green-300">R$ 499,90</span>
              <button class="botao-adicionar bg-green-400 text-black px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-300">
                Adicionar
              </button>
            </div>
          </div>
        </article>

        <!-- PRODUTO 2 -->
        <article class="produto bg-black border border-green-800 rounded-xl p-5 flex flex-col md:flex-row gap-4"
          data-nome="Relíquia Zetan" data-preco="799.90">

          <img src="https://i.ibb.co/dtB2pZ0/alienrelic.jpg"
            class="w-full md:w-48 h-40 object-cover rounded-lg" alt="Relíquia Zetan">

          <div class="flex-1">
            <h3 class="text-xl font-semibold text-green-300 mb-1">Relíquia Zetan</h3>
            <p class="text-sm text-green-200 mb-2">
              Artefato cristalino encontrado nas ruínas de uma civilização extinta.
            </p>
            <ul class="list-disc list-inside text-sm text-green-200 mb-2">
              <li>Emite sinais desconhecidos</li>
              <li>Reage à presença humana</li>
            </ul>

            <div class="flex items-center justify-between mt-2">
              <span class="text-lg font-bold text-green-300">R$ 799,90</span>
              <button class="botao-adicionar bg-green-400 text-black px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-300">
                Adicionar
              </button>
            </div>
          </div>
        </article>

        <!-- PRODUTO 3 -->
        <article class="produto bg-black border border-green-800 rounded-xl p-5 flex flex-col md:flex-row gap-4"
          data-nome="Fragmento de Meteorito Vivo" data-preco="349.90">

          <img src="https://i.ibb.co/7ybSnjx/livingmeteor.jpg"
            class="w-full md:w-48 h-40 object-cover rounded-lg" alt="Meteorito Vivo">

          <div class="flex-1">
            <h3 class="text-xl font-semibold text-green-300 mb-1">Fragmento de Meteorito Vivo</h3>
            <p class="text-sm text-green-200 mb-2">
              Pedra espacial com atividade orgânica microscópica.
            </p>

            <div class="flex items-center justify-between mt-2">
              <span class="text-lg font-bold text-green-300">R$ 349,90</span>
              <button class="botao-adicionar bg-green-400 text-black px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-300">
                Adicionar
              </button>
            </div>
          </div>
        </article>

        <!-- PRODUTO 4 -->
        <article class="produto bg-black border border-green-800 rounded-xl p-5 flex flex-col md:flex-row gap-4"
          data-nome="Semente Estelar" data-preco="199.90">

          <img src="https://i.ibb.co/y5HJPTK/starseed.jpg"
            class="w-full md:w-48 h-40 object-cover rounded-lg" alt="Semente Estelar">

          <div class="flex-1">
            <h3 class="text-xl font-semibold text-green-300 mb-1">Semente Estelar</h3>
            <p class="text-sm text-green-200 mb-2">
              Uma semente luminosa capaz de gerar vida interestelar.
            </p>

            <div class="flex items-center justify-between mt-2">
              <span class="text-lg font-bold text-green-300">R$ 199,90</span>
              <button class="botao-adicionar bg-green-400 text-black px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-green-300">
                Adicionar
              </button>
            </div>
          </div>
        </article>

      </section>

      <!-- SIDEBAR -->
      <aside id="info" class="space-y-6">

        <section class="bg-black border border-green-800 rounded-xl p-5">
          <header><h3 class="text-lg font-semibold text-green-300 mb-2">Origem</h3></header>
          <p class="text-sm text-green-200 mb-3">
            Cada artefato é catalogado após expedições em sistemas como Orion, Vega e Nébula L-42.
          </p>
        </section>

        <section class="bg-black border border-green-800 rounded-xl p-5">
          <header class="mb-3"><h3 class="text-lg font-semibold text-green-300">Carrinho</h3></header>
          <ul id="lista-carrinho"
            class="text-xs text-green-300 space-y-1 border border-green-800 rounded-md p-2 max-h-40 overflow-y-auto bg-black/40">
            <li>Nenhum item no carrinho.</li>
          </ul>
          <p class="text-sm mt-3">
            Total:
            <span id="total-carrinho" class="font-bold text-green-300">R$ 0,00</span>
          </p>
        </section>

      </aside>

    </div>
  </main>

  <footer id="contato" class="bg-black border-t border-green-800 mt-8">
    <div class="max-w-7xl mx-auto px-4 py-6 grid gap-4 md:grid-cols-3 text-sm">
      <div>
        <h3 class="font-semibold text-green-300 mb-2">Localização</h3>
        <p class="text-green-200">Setor 9 • Braço Nebuloso Externo</p>
      </div>

      <div>
        <h3 class="font-semibold text-green-300 mb-2">Navegação</h3>
        <ul class="space-y-1">
          <li><a href="#produtos" class="hover:text-green-300">Catálogo</a></li>
          <li><a href="#info" class="hover:text-green-300">Origem</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold text-green-300 mb-2">Contato</h3>
        <p class="text-green-200 text-xs">
          Frequência intergaláctica: 88.7hz<br>
          Operador: Unidade Alfa-ZX
        </p>
      </div>
    </div>

    <div class="text-center text-xs text-green-600 pb-4">© 2025 Galactic Bazaar</div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

