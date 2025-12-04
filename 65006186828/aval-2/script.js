// Abre/filtra produtos
document.getElementById("filtroTipo").addEventListener("change", filtrar);
document.getElementById("filtroOrdenar").addEventListener("change", ordenar);

function filtrar() {
  const tipo = document.getElementById("filtroTipo").value;
  const produtos = document.querySelectorAll(".produto");

  produtos.forEach(p => {
    p.style.display = (tipo === "todos" || p.dataset.tipo === tipo) ? "block" : "none";
  });
}

function ordenar() {
  const tipo = document.getElementById("filtroOrdenar").value;
  const lista = document.getElementById("listaProdutos");
  const itens = Array.from(lista.children);

  itens.sort((a, b) => {
    let pa = parseInt(a.dataset.preco);
    let pb = parseInt(b.dataset.preco);

    if (tipo === "cresc") return pa - pb;
    if (tipo === "decresc") return pb - pa;
    return 0;
  });

  itens.forEach(i => lista.appendChild(i));
}

// carrossel
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

document.querySelector(".next").addEventListener("click", () => mover(1));
document.querySelector(".prev").addEventListener("click", () => mover(-1));

function mover(num) {
  slideIndex = (slideIndex + num + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// formulário
document.getElementById("formContato").addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});
