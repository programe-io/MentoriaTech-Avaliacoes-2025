/* ============================
   Slider de Posts em Destaque
============================ */
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider .slide");
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); // muda a cada 5s

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    function prevSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Se houver botões
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
    }
});

/* ============================
   Botão "Voltar ao Topo"
============================ */
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑ Topo";
backToTopButton.classList.add("back-to-top");
document.body.appendChild(backToTopButton);

backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #ff6f61;
    color: white;
    border: none;
    padding: 12px 18px;
    border-radius: 50px;
    cursor: pointer;
    display: none;
    font-size: 16px;
    z-index: 1000;
    transition: background-color 0.3s, transform 0.2s;
`;

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

/* ============================
   Carregamento Suave de Posts
============================ */
const posts = document.querySelectorAll("article");

posts.forEach(post => {
    post.style.opacity = 0;
    post.style.transform = "translateY(20px)";
});

function revealPosts() {
    posts.forEach(post => {
        const postTop = post.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(postTop < screenHeight - 50) {
            post.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            post.style.opacity = 1;
            post.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealPosts);
window.addEventListener("load", revealPosts);

/* ============================
   Menu Lateral Interativo (Opcional)
============================ */
const sidebarLinks = document.querySelectorAll("aside ul li a");

sidebarLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#ff8576";
        link.style.fontWeight = "bold";
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "#333";
        link.style.fontWeight = "normal";
    });
});
