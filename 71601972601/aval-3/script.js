// Dados da receita
const receita = {
  nome: "Bolo de Chocolate",
  imagem: "https://images.pexels.com/photos/4109995/pexels-photo-4109995.jpeg",
  descricao: "Bolo de chocolate fofinho com cobertura cremosa."
};

// Pegando o container
const container = document.getElementById("container");

// Criando elementos
const img = document.createElement("img");
img.src = receita.imagem;
img.alt = receita.nome;
img.style.width = "350px";
img.style.borderRadius = "12px";

const titulo = document.createElement("h2");
titulo.textContent = receita.nome;

const texto = document.createElement("p");
texto.textContent = receita.descricao;

// Colocando no HTML
container.appendChild(img);
container.appendChild(titulo);
container.appendChild(texto);
