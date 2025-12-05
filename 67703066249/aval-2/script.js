// Lista de imagens do Papai Noel
const imagens = [
    "https://source.unsplash.com/800x600/?santa",
    "https://source.unsplash.com/800x600/?christmas-santa",
    "https://source.unsplash.com/800x600/?santa-claus",
    "https://source.unsplash.com/800x600/?santa-smile",
    "https://source.unsplash.com/800x600/?santa-holiday",
    "https://source.unsplash.com/800x600/?santa-gifts"
];

const gallery = document.querySelector(".gallery");

// Criar cards dinamicamente
imagens.forEach(url => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = url;

    card.appendChild(img);
    gallery.appendChild(card);
});
