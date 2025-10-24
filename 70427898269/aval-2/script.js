/* Reset Básico e Tipografia */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Paleta Cupcake/Confeitaria: Rosa Pastel, Creme e Menta Suave */
  --cor-principal: #ffb7c5; /* Rosa Pastel (Cobertura) */
  --cor-secundaria: #a2e8c2; /* Verde Menta Pastel (Detalhes) */
  --cor-fundo: #fefefe; /* Fundo Muito Claro (Branco de Açúcar) */
  --cor-texto: #5d4037; /* Marrom Escuro (Chocolate/Base) */
  --cor-borda: #fff3e0; /* Creme Claro (Massa) */
}

body {
  font-family: 'Georgia', serif; /* Fonte Clássica e elegante */
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  line-height: 1.6;
  padding-top: 50px; /* Espaço para o cabeçalho fixo */
}

/* --- Layout Principal --- */
main {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 15px;
}

article,
section,
aside {
  background-color: #fff; /* Fundo branco para os blocos */
  padding: 25px;
  border: 1px solid #ffccbc; /* Borda cor Pêssego Suave */
  border-radius: 15px; /* Bordas bem arredondadas, como um cupcake */
  margin-bottom: 30px;
  /* Sombra suave com um toque de cor */
  box-shadow: 3px 3px 0px rgba(255, 183, 197, 0.5); 
}

p {
  margin-bottom: 15px;
  text-align: justify;
}

/* --- Cabeçalho e Títulos --- */
header {
  background-color: var(--cor-principal); /* Rosa Pastel */
  color: var(--cor-texto); /* Marrom Escuro */
  padding: 15px 0;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

header h1 {
  font-size: 2.4em;
  text-shadow: 1px 1px 0px #fff; /* Efeito de açúcar */
}

h2 {
  color: var(--cor-secundaria); /* Verde Menta Pastel */
  border-bottom: 3px solid var(--cor-principal); /* Linha Rosa Pastel */
  padding-bottom: 5px;
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 1.8em;
}

h3 {
  color: var(--cor-texto); /* Marrom Escuro */
  font-size: 1.4em;
  margin-bottom: 10px;
}

/* --- Navegação --- */
nav {
  display: flex;
  justify-content: center;
  background-color: #f7f3e9; /* Cor Creme/Baunilha */
  position: sticky;
  top: 50px;
  z-index: 90;
  border-bottom: 2px solid var(--cor-principal);
}

nav a {
  color: var(--cor-texto); /* Marrom Escuro */
  text-decoration: none;
  padding: 12px 20px;
  transition: background-color 0.3s;
  font-weight: bold;
}

nav a:hover,
nav a.active {
  background-color: var(--cor-secundaria); /* Fundo Menta Pastel */
  color: var(--cor-texto);
}

/* --- Imagens e Listas --- */
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 15px 0;
  display: block;
  border: 4px dotted var(--cor-principal); /* Borda tracejada suave */
  transition: transform 0.3s;
}

img:hover {
    transform: scale(1.02); /* Leve zoom ao passar o mouse */
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  padding: 10px 0;
  border-bottom: 1px dotted var(--cor-borda);
}

ul li:before {
    content: "🧁"; /* Ícone de Cupcake */
    margin-right: 8px;
    color: var(--cor-principal);
}

ul li:last-child {
  border-bottom: none;
}

strong {
  color: var(--cor-principal); /* Destaque Rosa Pastel */
  font-weight: 700;
}

/* --- Aside --- */
aside {
  background-color: #fff8e1; /* Amarelo Pálido (Massa) */
  border-left: 5px solid var(--cor-secundaria); /* Destaque lateral Menta */
  padding: 20px;
  font-style: italic;
}

/* --- Rodapé --- */
footer {
  background-color: var(--cor-texto); /* Marrom Escuro */
  color: #fff;
  text-align: center;
  padding: 15px;
  margin-top: 30px;
  font-size: 0.85em;
}

/* --- Links de Contato (Destaque Menta) --- */
#contato a {
  color: var(--cor-secundaria); /* Link na cor Menta Pastel */
  text-decoration: none;
  font-weight: bold;
  border-bottom: 1px solid var(--cor-secundaria);
}

#contato a:hover {
  color: var(--cor-principal); /* Fica Rosa no hover */
  border-bottom-color: var(--cor-principal);
}


/* --- Responsividade Básica --- */
@media (max-width: 600px) {
  nav {
    flex-direction: column;
  }
  nav a {
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  body {
    padding-top: 100px;
  }
  nav {
    top: 50px;
  }
}