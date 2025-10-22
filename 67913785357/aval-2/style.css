/* ======= ESTILO GERAL ======= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Arial, sans-serif;
}

body {
  background: #f9f9f9;
  color: #333;
  line-height: 1.6;
}

/* ======= CABEÇALHO ======= */
header {
  background: linear-gradient(90deg, #0078d7, #00a6ff);
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
}

header h1 {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

/* ======= MENU ======= */
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.2s;
}

nav a:hover {
  opacity: 0.7;
}

/* ======= CONTEÚDO ======= */
.container {
  display: flex;
  gap: 2rem;
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
}

/* ======= POSTS ======= */
main {
  flex: 3;
}

article {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

article:hover {
  transform: translateY(-4px);
}

article img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}

article h2 {
  color: #0078d7;
  margin-bottom: 0.5rem;
}

article .data {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
}

/* ======= BOTÃO CURTIR ======= */
.like-btn {
  background: #0078d7;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s, transform 0.2s;
}

.like-btn:hover {
  background: #005fa3;
}

.like-btn.curtido {
  background: #e63946;
  transform: scale(1.05);
}

.like-btn.curtido .like-text {
  color: #fff;
}

.like-btn.curtido::before {
  content: "💖";
  animation: pulse 0.6s ease;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

/* ======= SIDEBAR ======= */
aside {
  flex: 1;
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

aside h3 {
  margin-bottom: 0.8rem;
  color: #0078d7;
}

aside ul {
  list-style: none;
  margin-bottom: 1.5rem;
}

aside li {
  margin: 0.5rem 0;
}

aside a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

aside a:hover {
  color: #0078d7;
}

/* ======= RODAPÉ ======= */
footer {
  background: #222;
  color: #ccc;
  text-align: center;
  padding: 1.5rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

/* ======= RESPONSIVIDADE ======= */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  nav ul {
    flex-direction: column;
    gap: 0.8rem;
  }

  article, aside {
    width: 100%;
  }
}