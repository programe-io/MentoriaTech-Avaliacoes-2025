// Menu mobile
const mobileBtn = document.getElementById("mobileBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Lista de posts (você pode adicionar quantos quiser)
const postsData = [
    {
        nome: "FroJho",
        perfil: "images/profile_01.jpg",
        foto: "images/post_01.png",
        texto: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod beatae quas nihil sed fugit voluptatibus repellat
                delectus ut tempora debitis est dolorum deserunt
                blanditiis temporibus dicta iste praesentium atque aliquid!`,
        tempo: "há 10 minutos"
    }
];

// Renderizar posts na tela
const postsContainer = document.getElementById("posts");

function renderPosts() {
    postsData.forEach(post => {

        const card = document.createElement("div");
        card.className = "bg-gray-800 py-4 rounded-lg shadow-md";

        card.innerHTML = `
            <!-- HEADER -->
            <div class="flex items-center gap-3 px-4">
                <img src="${post.perfil}" class="w-12 h-12 rounded-full" alt="">
                <h2 class="font-bold text-lg">${post.nome}</h2>
            </div>

            <!-- IMAGEM -->
            <img src="${post.foto}" class="w-full mt-3" alt="">

            <!-- TEXTO -->
            <div class="pt-4 px-4 pb-2">
                <p class="text-sm text-justify mb-2">
                    ${post.texto}
                </p>
                <span class="opacity-75 text-xs">${post.tempo}</span>
            </div>
        `;

        postsContainer.appendChild(card);
    });
}

renderPosts();