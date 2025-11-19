// -------- Fade-in das seções ao rolar -------- //
const elements = document.querySelectorAll(".fade-in");

function reveal() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// -------- Avatar clicável -------- //
document.getElementById("avatar").addEventListener("click", () => {
    alert("Diga olá para o meu amiguinho! 😎🔫");
});
