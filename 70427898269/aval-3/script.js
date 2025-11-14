// ===============================
//  ABRIR E FECHAR OVERLAY DE BUSCA
// ===============================
const overlay = document.querySelector('.overlay');
const searchBar = document.querySelector('.searchbar input');

searchBar.addEventListener('focus', () => {
  overlay.classList.add('show');
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") overlay.classList.remove('show');
});

// Fechar ao clicar fora do painel
overlay.addEventListener('click', (e) => {
  if (e.target.classList.contains("overlay")) {
    overlay.classList.remove("show");
  }
});


// ===============================
//  ABRIR E FECHAR PAINEL LATERAL DO PRODUTO
// ===============================
const productDetail = document.querySelector('.product-detail');

function openProductDetail(data) {
  productDetail.classList.add('show');
  
  // Exemplo de preenchimento automático (personalizar se quiser)
  productDetail.querySelector("h2").textContent = data.title ?? "Produto";
  productDetail.querySelector("p").textContent = data.desc ?? "Descrição do produto.";
  productDetail.querySelectorAll(".pd-gallery img").forEach((img, i) => {
    if (data.images && data.images[i]) {
      img.src = data.images[i];
    }
  });
}

function closeProductDetail() {
  productDetail.classList.remove('show');
}

// Fechar painel se clicar fora dele
document.addEventListener('click', (e) => {
  if (productDetail.classList.contains('show') &&
      !productDetail.contains(e.target) &&
      !e.target.closest('.result-card') &&
      !e.target.closest('.product-card')) {
    closeProductDetail();
  }
});


// ===============================
//  CLICAR EM PRODUTOS (CARD → ABRE PAINEL)
// ===============================
document.querySelectorAll(".product-card, .result-card").forEach(card => {
  card.addEventListener("click", () => {
    openProductDetail({
      title: card.querySelector("h4")?.textContent ?? "Produto",
      desc: card.querySelector(".tag")?.textContent ?? "Descrição",
      images: [
        card.querySelector("img")?.src,
        card.querySelector("img")?.src,
        card.querySelector("img")?.src
      ]
    });
  });
});


// ===============================
//  CARROSSEL SIMPLES (TROCA DE IMAGEM AUTOMÁTICA)
// ===============================
const carouselImages = [
  "https://i.imgur.com/zQZSWrt.jpeg",
  "https://i.imgur.com/7Q2Q5BO.jpeg",
  "https://i.imgur.com/8gA2H2h.jpeg",
];

let carouselIndex = 0;
const carousel = document.querySelector(".carousel img");

if (carousel) {
  setInterval(() => {
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
    carousel.style.opacity = "0";

    setTimeout(() => {
      carousel.src = carouselImages[carouselIndex];
      carousel.style.opacity = "1";
    }, 300);

  }, 3000);
}


// ===============================
//  FILTROS SIMBÓLICOS (APENAS VISUAL)
// ===============================
document.querySelectorAll(".filter").forEach(f => {
  f.addEventListener("click", () => {
    f.classList.toggle("active");
    if (f.classList.contains("active")) {
      f.style.background = "#ffeef2";
      f.style.borderColor = "#ffb3c7";
    } else {
      f.style.background = "#fff";
      f.style.borderColor = "#eef2f7";
    }
  });
});


// ===============================
//  SISTEMA DE NAVEGAÇÃO SIMPLES
// ===============================
document.querySelectorAll("a[href]").forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href") === "#") e.preventDefault();
  });
})