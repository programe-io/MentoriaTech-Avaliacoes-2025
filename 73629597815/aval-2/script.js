blog-verde/
│
├── index.html
├── style.css
└── script.js
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Verde 🌱</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <h1>Blog Verde 🌿</h1>
    <p id="mensagem-boas-vindas">Dicas, curiosidades e cuidados com suas plantas</p>
  </header>

  <nav>
    <a href="#">Início</a>
    <a href="#">Dicas</a>
    <a href="#">Tipos de Plantas</a>
    <a href="#">Contato</a>
  </nav>

  <main>
    <article>
      <h2>Como cuidar de suculentas</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Succulent_plants.jpg" alt="Suculentas">
      <p>As suculentas são plantas incríveis, conhecidas por armazenarem água em suas folhas. Elas precisam de pouca rega e bastante luz solar indireta.</p>
      <p><strong>Dica:</strong> Evite molhar as folhas diretamente e use substrato bem drenado!</p>
    </article>

    <aside>
      <h3>Sobre o Blog</h3>
      <p>O Blog Verde é feito para amantes da natureza que querem aprender mais sobre o cultivo e cuidados com plantas.</p>

      <h3>Plantas Populares</h3>
      <ul>
        <li>Jiboia</li>
        <li>Samambaia</li>
        <li>Lírio-da-paz</li>
        <li>Cactos</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>🌿 Blog Verde — Feito com amor pelas plantas © 2025</p>
    <button id="botao-tema">🌞 Alternar tema</button>
  </footer>

  <button id="voltar-topo">⬆️</button>

  <script src="script.js"></script>
</body>
</html>
/* Botão de alternar tema */
#botao-tema {
  background-color: white;
  color: #388e3c;
  border: none;
  padding: 10px 15px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

#botao-tema:hover {
  background-color: #c8e6c9;
}

/* Botão de voltar ao topo */
#voltar-topo {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #388e3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 18px;
  cursor: pointer;
  display: none;
  transition: 0.3s;
}

#voltar-topo:hover {
  background-color: #2e7d32;
}

/* Tema escuro */
.dark-mode {
  background-color: #1e1e1e;
  color: #e8f5e9;
}

.dark-mode header {
  background-color: #2e7d32;
}

.dark-mode nav {
  background-color: #1b5e20;
}

.dark-mode article,
.dark-mode aside {
  background-color: #333;
  color: #e8f5e9;
}

.dark-mode footer {
  background-color: #2e7d32;
}
// Mensagem de boas-vindas dinâmica
window.addEventListener("DOMContentLoaded", () => {
  const mensagem = document.getElementById("mensagem-boas-vindas");
  const hora = new Date().getHours();

  if (hora < 12) {
    mensagem.textContent = "Bom dia 🌞! Que tal cuidar das suas plantas hoje?";
  } else if (hora < 18) {
    mensagem.textContent = "Boa tarde 🌿! Suas plantas estão bem regadas?";
  } else {
    mensagem.textContent = "Boa noite 🌙! Lembre-se de cuidar das suas plantinhas amanhã.";
  }
});

// Alternar entre modo claro e escuro
const botaoTema = document.getElementById("botao-tema");
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const modoEscuro = document.body.classList.contains("dark-mode");
  botaoTema.textContent = modoEscuro ? "🌙 Modo Claro" : "🌞 Modo Escuro";
});

// Botão de voltar ao topo
const botaoTopo = document.getElementById("voltar-topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});