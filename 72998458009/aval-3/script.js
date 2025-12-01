
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fla Cube - Flamengo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            flamengoRed: '#C8102E',
            flamengoYellow: '#FFC72C',
            flamengoDark: '#000000',
          },
          fontFamily: {
            heading: ['Montserrat', 'sans-serif'],
            body: ['Roboto', 'sans-serif'],
          },
          boxShadow: {
            '3xl': '0 20px 30px rgba(0,0,0,0.4)',
            'inner-lg': 'inset 0 10px 15px rgba(0,0,0,0.1)',
          },
        }
      }
    }
  </script>
</head>
<body class="bg-gray-100 font-body text-gray-800">

  <!-- Header -->
  <header class="fixed top-0 left-0 w-full z-50 bg-flamengoRed shadow-3xl">
    <div class="container mx-auto flex justify-between items-center py-5 px-4 md:px-0">
      <h1 class="text-3xl md:text-4xl font-heading font-extrabold text-white tracking-wider">Fla Cube</h1>
      <nav class="space-x-6 text-lg font-medium">
        <a href="#sobre" class="text-white hover:text-flamengoYellow transition-all duration-300 ease-in-out font-semibold tracking-wide">Sobre</a>
        <a href="#jogadores" class="text-white hover:text-flamengoYellow transition-all duration-300 ease-in-out font-semibold tracking-wide">Jogadores</a>
        <a href="#noticias" class="text-white hover:text-flamengoYellow transition-all duration-300 ease-in-out font-semibold tracking-wide">Notícias</a>
        <a href="#depoimentos" class="text-white hover:text-flamengoYellow transition-all duration-300 ease-in-out font-semibold tracking-wide">Depoimentos</a>
        <a href="#contato" class="text-white hover:text-flamengoYellow transition-all duration-300 ease-in-out font-semibold tracking-wide">Contato</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="pt-28 bg-white rounded-b-3xl shadow-3xl p-10 mx-4 md:mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-10">
    <div class="md:w-1/2">
      <h2 class="text-5xl md:text-6xl font-heading font-extrabold text-flamengoRed mb-6 leading-tight tracking-tight">
        Bem-vindo ao <span class="text-flamengoYellow">Fla Cube</span>
      </h2>
      <p class="text-gray-700 mb-4 text-lg leading-relaxed font-body">
        O <span class="font-bold text-flamengoRed">Fla Cube</span> conecta torcedores com experiências exclusivas, produtos licenciados e conteúdo oficial do Flamengo.
      </p>
      <p class="text-gray-700 mb-6 text-lg leading-relaxed font-body">
        Associados têm benefícios únicos, eventos VIP, ingressos antecipados e promoções exclusivas.
      </p>
      <button class="bg-flamengoRed text-white px-10 py-4 rounded-xl shadow-lg hover:bg-red-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold">
        <span class="uppercase">Associe-se Agora</span>
      </button>
    </div>
    <div class="md:w-1/2">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Clube_de_Regatas_do_Flamengo_logo.svg" alt="Logo Flamengo" class="rounded-3xl shadow-3xl w-full border-4 border-flamengoRed">
    </div>
  </section>

  <!-- Conteúdo Principal -->
  <main class="container mx-auto px-4 md:px-0 mt-14 flex flex-col lg:flex-row gap-10">

    <!-- Seções Principais -->
    <section class="flex-1 space-y-14">

      <!-- Sobre -->
      <article id="sobre" class="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-all duration-300">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-flamengoRed mb-6 tracking-wide">Sobre o <span class="text-flamengoYellow">Fla Cube</span></h2>
        <p class="text-gray-700 mb-6 leading-relaxed font-body text-lg">O <span class="font-bold text-flamengoRed">Fla Cube</span> foi criado para unir torcedores, oferecendo conteúdo exclusivo, produtos oficiais, experiências VIP e acesso antecipado a novidades do Flamengo.</p>
        <p class="text-gray-700 mb-6 leading-relaxed font-body text-lg">Além de promover a interação entre os fãs, o <span class="text-flamengoRed font-semibold">Fla Cube</span> garante que os associados vivam a paixão pelo clube de forma única, com promoções e eventos especiais.</p>
        <p class="text-gray-700 leading-relaxed font-body text-lg">O projeto também inclui ações sociais, vídeos, transmissões exclusivas e benefícios em ingressos para jogos do Flamengo.</p>
      </article>

      <!-- Jogadores -->
      <section id="jogadores" class="space-y-10">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-flamengoRed text-center mb-8 tracking-wide">Jogadores em Destaque</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

          <article class="bg-white rounded-3xl shadow-xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Gabigol.jpg" alt="Gabigol" class="rounded-3xl mb-4 shadow-lg border-2 border-flamengoRed">
            <h3 class="text-2xl font-heading font-semibold text-flamengoRed mb-3">Gabigol</h3>
            <p class="text-gray-700 leading-relaxed font-body">Atacante habilidoso e referência do Flamengo, famoso pelos gols <span class="font-bold text-flamengoYellow">decisivos</span> e liderança em campo.</p>
          </article>

          <article class="bg-white rounded-3xl shadow-xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Arrascaeta_2020.jpg" alt="Arrascaeta" class="rounded-3xl mb-4 shadow-lg border-2 border-flamengoRed">
            <h3 class="text-2xl font-heading font-semibold text-flamengoRed mb-3">Arrascaeta</h3>
            <p class="text-gray-700 leading-relaxed font-body">Meio-campista criativo, responsável por <span class="text-flamengoYellow font-semibold">assistências e jogadas de efeito</span> que encantam os torcedores.</p>
          </article>

          <article class="bg-white rounded-3xl shadow-xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Diego_Ribas_2019.jpg" alt="Diego Ribas" class="rounded-3xl mb-4 shadow-lg border-2 border-flamengoRed">
            <h3 class="text-2xl font-heading font-semibold text-flamengoRed mb-3">Diego Ribas</h3>
            <p class="text-gray-700 leading-relaxed font-body">Veterano de experiência internacional, exerce <span class="text-flamengoYellow font-bold">liderança</span> e visão de jogo no meio-campo do Flamengo.</p>
          </article>

        </div>
      </section>

      <!-- Notícias -->
      <section id="noticias" class="space-y-10">
        <h2 class="text-4xl md:text-5xl font-heading font-bold text-flamengoRed text-center mb-8 tracking-wide">Últimas Notícias</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

          <article class="bg-white rounded-3xl shadow-xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <h3 class="text-2xl font-heading font-semibold text-flamengoRed mb-3">Fla Cube Lança Novos <span class="text-flamengoYellow">Benefícios</span></h3>
            <p class="text-gray-700 leading-relaxed font-body">Associados do <span class="text-flamengoRed font-bold">Fla Cube</span> agora têm acesso a conteúdos exclusivos e promoções especiais para jogos do Flamengo.</p>
          </article>

          <article class="bg-white rounded-3xl shadow-xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <h3 class="text-2xl font-heading font-semibold text-flamengoRed mb-3">Evento Exclusivo para <span class="text-flamengoYellow">Torcedores</span></h3>
            <p class="text-gray-700 leading-relaxed font-body">O Flamengo realiza evento presencial com experiências VIP e encontros com jogadores para membros do Fla Cube.</p>
          </article>

        </div>
      </section>

    </section>

    <!-- Aside -->
    <aside class="lg:w-1/3 bg-white rounded-3xl shadow-2xl p-6 space-y-8 sticky top-32">
      <h3 class="text-2xl font-heading font-bold text-flamengoRed">Destaques & Links</h3>
      <ul class="space-y-3 text-gray-700 font-body text-lg">
        <li><a href="#sobre" class="hover:text-flamengoRed transition-all duration-300 font-semibold"><span>História do Fla Cube</span></a></li>
        <li><a href="#jogadores" class="hover:text-flamengoRed transition-all duration-300 font-semibold"><span>Jogadores em Evidência</span></a></li>
        <li><a href="#noticias" class="hover:text-flamengoRed transition-all duration-300 font-semibold"><span>Últimas Notícias</span></a></li>
        <li><a href="#depoimentos" class="hover:text-flamengoRed transition-all duration-300 font-semibold"><span>Depoimentos</span></a></li>
        <li><a href="#contato" class="hover:text-flamengoRed transition-all duration-300 font-semibold"><span>Fale Conosco</span></a></li>
      </ul>
      <div class="bg-flamengoRed/10 rounded-3xl p-6 text-center">
        <h4 class="text-flamengoRed font-heading font-bold mb-2 text-xl">Associe-se ao <span class="text-flamengoYellow">Fla Cube</span>!</h4>
        <p class="text-gray-700 mb-4 font-body">Aproveite benefícios exclusivos para torcedores apaixonados.</p>
        <button class="bg-flamengoRed text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 font-semibold"><span>Saiba Mais</span></button>
      </div>
    </aside>
  </main>

  <!-- Rodapé -->
  <footer class="bg-flamengoDark text-gray-200 py-10 mt-16">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
      <p>&copy; 2025 <span class="font-bold">Fla Cube - Flamengo</span>. Todos os direitos reservados.</p>
      <div class="flex space-x-6 mt-4 md:mt-0 text-lg">
        <a href="#" class="hover:text-flamengoYellow transition-all duration-300 font-semibold"><span>Facebook</span></a>
        <a href="#" class="hover:text-flamengoYellow transition-all duration-300 font-semibold"><span>Twitter</span></a>
        <a href="#" class="hover:text-flamengoYellow transition-all duration-300 font-semibold"><span>Instagram</span></a>
      </div>
    </div>
  </footer>

</body>
</html>
