// Alterna entre tema claro e escuro
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
