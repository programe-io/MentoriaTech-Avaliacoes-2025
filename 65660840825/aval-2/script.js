const imagens = [
    "https://images.unsplash.com/photo-1508615070457-7baeba4003ab",
    "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1508261303786-0c326fabbf64"
];

// Carregar imagens na galeria
const galeria = document.getElementById("galeria");

imagens.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.addEventListener("click", () => abrirLightbox(src));
    galeria.appendChild(img);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

function abrirLightbox(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
}

closeBtn.onclick = () => {
    lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};
