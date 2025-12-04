<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  
  <link rel="stylesheet" href="styles/mobile.css">
  <link rel="stylesheet" href="styles/global.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/219293821?s=96&v=4" type="image/x-icon">
</head>
<body>
  <header>
    <nav>
      <h3><a class="nav-logo" href="#">Evelen Rodrigues</a></h3>
      <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <ul id="my-div" class="nav-list">
        <li><a href="#">Início</a></li>
        <li><a href="#about-me-section">Sobre Mim</a></li>
        <li><a href="#project-section">Projetos</a></li>
        <li><a href="#contact-section">Contato</a></li>
      </ul>
    </nav>
  </header>
  <!-------------------- Home -------------------->
  <div class="box"></div>
  <h2></h2><h3></h3> <aside> </aside> <main> </main> <article> </article> <span></span>
  <section class="home" id="home-section">
      <div class="home-container">
        <img class="home-my-img" src="https://avatars.githubusercontent.com/u/219293821?s=96&v=4" alt="Photo">
      </div>
      <div class="home-container">
        <h1 class="hr">Evelen</h1>
        <p>Estudante do Ensino Médio</p>
        <ul>
          <li><a class="home-icon" href="mailto:evelen.alvarenga@aluno.edu.pi.gov.br" target="_blank"><img src="assets/icons/email-white.png" title="E-mail" alt="E-mail"></a></li>
          <li><a class="home-icon" href="https://github.com/Eviee26" target="_blank"><img src="assets/icons/github-white-0.png" title="GitHub" alt="GitHub"></a></li>
          <!-- <li><a class="home-icon" href="https://www.linkedin.com/in/" target="_blank"><img src="assets/icons/linkedin-white.png" title="LinkedIn" alt="LinkedIn"></a></li> -->
        </ul>
        <a class="download-cv" href="assets/Student CV Example.pdf" download>Curriculum Vitae</a>
      </div>
  </section>
  <!-------------------- About me -------------------->
  <section id="about-me-section">
      <h1 class="title-section">Sobre Mim</h1>
      <div class="about-me-container">
        <div class="about-me-text">
          Estudante do curso técnico em Desenvolvimento de Sistemas do CETI Professor Milton Aguiar, atualmente no 1º ano. Apaixonada por tecnologia e programação, busco constantemente aprimorar minhas habilidades e conhecimentos na área de desenvolvimento web. Tenho experiência com HTML, CSS e JavaScript, e estou sempre aberta a novos desafios e oportunidades de aprendizado.
        </div>
        <img class="about-me-img" src="assets/imgs/binary-code.png">
      </div>
  </section>
  <!-------------------- Projects -------------------->
  <section id="project-section">
    <h1 class="title-section">Projetos</h1>
    <div class="project-container">
      <div class="project-single">
        <img class="project-img" src="assets/imgs/coin-conv-logo.png"  alt="Projeto 1">
        <div class="project-icon-container">
          <a class="project-icon" target="_blank" href="https://github.com/Eviee26/currency-converter"><img src="assets/icons/github-white.png" title="GitHub" alt="GitHub"></a>
          <a class="project-icon" target="_blank" href="https://currency-converter-pi-woad.vercel.app/"><img src="assets/icons/site-white.png" title="Site do projeto"></a>
        </div>
        <p>
          Conversor de moedas desenvolvido em JavaScript, HTML e CSS. Permite converter valores entre diferentes moedas utilizando taxas de câmbio atualizadas.
        </p>
      </div>
      <div class="project-single">
        <img class="project-img" src="assets/imgs/passwd-gen-logo.png" alt="Projeto 2">
        <div class="project-icon-container">
          <a class="project-icon" target="_blank" href="https://github.com/Eviee26/password-generator"><img src="assets/icons/github-white.png" title="GitHub" alt="GitHub"></a>
          <a class="project-icon" target="_blank" href="https://password-generator-five-omega-63.vercel.app/"><img src="assets/icons/site-white.png" title="Site do projeto"></a>
        </div>
        <p>
          Gerador de senhas aleatórias criado com JavaScript, HTML e CSS. Permite aos usuários criar senhas seguras personalizadas com base em critérios selecionados, como comprimento e tipos de caracteres.
        </p>
      </div>
      <div class="project-single">
        <img class="project-img" src="assets/imgs/breve.png" alt="Projeto 3">
        <div class="project-icon-container">
          <a class="project-icon" href=""><img src="assets/icons/github-white.png" title="GitHub" alt="GitHub"></a>
          <a class="project-icon" href=""><img src="assets/icons/site-white.png" title="Site do projeto"></a>
        </div>
        <p>
          [Descrição do projeto]
        </p>
      </div>
    </div>
  </section>
  
  <!-------------------- Contacts -------------------->
  <section id="contact-section" >
    <h1 class="title-section">Contato</h1>
    <div class="contact-container">
      <div class="my-contact">
        <a href="" target="_blank">
          <img src="assets/icons/email-white.png" alt="E-mail">
        </a>
      </div>
      <p>evelen.alvarenga@aluno.edu.pi.gov.br</p>
      <div class="my-contact">
        <a href="https://github.com/" target="_blank">
          <img src="assets/icons/github-white-0.png" alt="GitHub">
        </a>
      </div>
      <p>Eviee26</p>
      <!-- 
      <div class="my-contact">
        <a href="https://www.linkedin.com/" target="_blank">
          <img src="assets/icons/linkedin-white.png" alt="LinkedIn">
        </a>
      </div>
      <p>user linkedin</p>
      -->
    </div>
    
  </section>
  <footer class="footer">
    <div class="footer-cr">
      Icons designed by <a target="_blank" href="https://icons8.com">Icons8</a>.
      Images designed by <a target="_blank" href="https://freepik.com/">Freepik</a>.
    </div>
  </footer>
<script src="scripts/mobile.navbar.js"></script>
</body>
</html>$0