/* Reset Básico e Melhorias de Tipografia */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Paleta de Cores Inspirada na Nintendo (Vermelho/Azul) */
  --cor-principal: #e60012; /* Vermelho Nintendo */
  --cor-secundaria: #007acc; /* Azul Acentuado */
  --cor-fundo: #eaf0f4; /* Cinza/Azul Claro MUITO Suave */
  --cor-texto: #1a1a1a;
  --cor-sombra-leve: rgba(0, 0, 0, 0.08);
  --cor-sombra-media: rgba(0, 0, 0, 0.15);
}

body {
  /* Fonte ligeiramente mais tecnológica ou familiar para interfaces */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  line-height: 1.7; /* Maior espaçamento para melhor leitura */
  font-size: 1.05em; /* Aumento sutil no tamanho base */
}

/* --- Cabeçalho e Títulos --- */
header {
  background-color: var(--cor-principal);
  color: white;
  padding: 30px 20px;
  text-align: center;
  /* Sombra mais pronunciada no cabeçalho */
  box-shadow: 0 6px 10px var(--cor-sombra-media); 
}

header h1 {
  font-size: 2.8em; /* Título mais impactante */
  font-weight: 900;
  letter-spacing: 2px; /* Mais espaçamento para um visual moderno */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Sombra no texto */
}

h2 {
  color: var(--cor-principal);
  /* Borda dupla para dar um visual mais 'gamer' */
  border-bottom: 5px solid var(--cor-secundaria); 
  padding-bottom: 8px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 2em; /* Títulos maiores */
  font-weight: 700;
}

h3 {
    color: var(--cor-secundaria);
    font-size: 1.6em; /* Títulos secundários mais visíveis */
    margin-bottom: 12px;
    font-weight: 600;
}

/* --- Navegação --- */
nav {
  display: flex;
  justify-content: center;
  background-color: var(--cor-secundaria);
  /* Linha fina e vibrante na parte superior e inferior */
  border-top: 3px solid var(--cor-principal);
  border-bottom: 3px solid var(--cor-principal);
}

nav a {
  color: white;
  text-decoration: none;
  padding: 18px 30px; /* Maior área de clique */
  transition: background-color 0.3s ease, color 0.3s;
  font-weight: 700;
  text-transform: uppercase;
}

nav a:hover {
  background-color: var(--cor-principal); 
  color: #fff; /* Garante que o texto seja branco no hover */
  /* Remove o translate para um efeito de cor mais limpo */
}

/* --- Conteúdo Principal e Layout --- */
main {
  padding: 40px 20px; /* Mais espaço interno */
  max-width: 1200px; /* Aumenta a largura máxima */
  margin: auto;
}

article, section {
  background-color: white;
  padding: 30px; /* Mais padding */
  border-radius: 16px; /* Cantos mais arredondados para um visual moderno */
  margin-bottom: 40px;
  /* Sombra suave e elegante */
  box-shadow: 0 10px 25px var(--cor-sombra-leve); 
  transition: box-shadow 0.3s ease-in-out, transform 0.2s;
}

article:hover, section:hover {
    box-shadow: 0 12px 30px var(--cor-sombra-media); /* Sombra mais intensa no hover */
    transform: translateY(-3px); /* Efeito sutil de elevação */
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 20px 0;
  display: block;
  /* Borda destacada */
  border: 4px solid var(--cor-principal); 
  box-shadow: 0 4px 8px var(--cor-sombra-leve);
}

p {
    margin-bottom: 18px;
    text-align: justify;
}

/* --- Lista de Recursos (Análise dos Recursos) --- */
ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  background-color: #fcfcfc; /* Fundo branco levemente destacado */
  padding: 18px;
  margin-bottom: 12px;
  /* Borda mais forte e moderna */
  border-left: 7px solid var(--cor-principal); 
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s, transform 0.1s;
}

ul li:hover {
    background-color: #fff2f3; /* Rosa muito suave no hover para destaque */
    transform: translateX(5px); /* Efeito de 'saindo' para a direita */
}

strong {
    color: var(--cor-principal);
    font-weight: 700;
}

/* --- Aside (Curiosidades) --- */
aside {
  background-color: #fffaf0; /* Amarelo/Creme suave para 'caixa de nota' */
  padding: 25px;
  border-radius: 12px;
  /* Borda sólida com cores contrastantes */
  border: 2px solid var(--cor-secundaria); 
  box-shadow: 0 4px 10px var(--cor-sombra-leve);
  margin-bottom: 40px;
}

/* --- Links de Contato --- */
#contato a {
    color: var(--cor-secundaria);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    padding: 2px 0;
    border-bottom: 2px dashed var(--cor-secundaria);
    transition: color 0.3s, border-bottom-color 0.3s;
}

#contato a:hover {
    color: var(--cor-principal);
    border-bottom-color: var(--cor-principal);
}

/* --- Rodapé --- */
footer {
  background-color: var(--cor-secundaria);
  color: white;
  text-align: center;
  padding: 25px;
  margin-top: 40px;
  font-size: 0.9em;
}

/* --- Responsividade --- */
@media (max-width: 800px) {
    header h1 {
        font-size: 2.2em;
    }
    
    main {
        padding: 15px;
    }

    article, section {
        padding: 20px;
    }
}

@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: stretch;
  }
  nav a {
    padding: 15px; /* Mais padding para toque fácil */
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  nav a:last-child {
      border-bottom: none;
  }
  
  header {
      padding: 25px 10px;
  }
}

