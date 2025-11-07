const comidas = [
  {titulo:"Pizza Margherita",descricao:"Clássico italiano com molho de tomate, mussarela e manjericão.",imagem:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg"},
  {titulo:"Sushi Japonês",descricao:"Combinação perfeita de arroz, peixe fresco e algas marinhas.",imagem:"https://upload.wikimedia.org/wikipedia/commons/6/60/Sushi_platter.jpg"},
  {titulo:"Taco Mexicano",descricao:"Tortilha crocante recheada com carne, queijo e vegetais frescos.",imagem:"https://upload.wikimedia.org/wikipedia/commons/4/4b/Tacos_de_carnitas.jpg"},
  {titulo:"Feijoada Brasileira",descricao:"Um prato tradicional feito com feijão preto e carnes defumadas.",imagem:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Feijoada_01.jpg"}
];

const lista = document.getElementById("lista-comidas");

comidas.forEach(comida => {
  const article = document.createElement("article");
  article.className = "comida";

  const img = document.createElement("img");
  img.src = comida.imagem;
  img.alt = comida.titulo;

  const info = document.createElement("div");
  info.className = "comida-info";

  const h3 = document.createElement("h3");
  h3.textContent = comida.titulo;

  const p = document.createElement("p");
  p.textContent = comida.descricao;

  info.appendChild(h3);
  info.appendChild(p);
  article.appendChild(img);
  article.appendChild(info);
  lista.appendChild(article);
});
