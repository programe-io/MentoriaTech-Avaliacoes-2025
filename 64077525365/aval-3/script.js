// Efeito ao clicar nos cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`Você abriu informações sobre: ${card.querySelector('h3').innerText}`);
    });
});

// Rolagem suave no nav
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" });
    });
});



