/* DICAS */
const dicas = [
    "Pesquise o clima antes de viajar.",
    "Leve bateria extra.",
    "Aprenda frases básicas.",
    "Coma a comida local.",
    "Tenha cópias digitais dos documentos."
];

document.getElementById("btnDica").onclick = () => {
    const rand = Math.floor(Math.random() * dicas.length);
    document.getElementById("dicaTexto").textContent = dicas[rand];
};

/* MENU */
document.getElementById("menuBtn").onclick = () => {
    document.getElementById("menu").classList.toggle("show");
};

/* MODO ESCURO */
document.getElementById("darkModeBtn").onclick = () => {
    document.body.classList.toggle("dark");
    document.getElementById("darkModeBtn").textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* CARROSSEL */
const imgs = document.getElementById("carrosselImgs");
const total = imgs.children.length;
let index = 0;

document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % total;
    imgs.style.transform = `translateX(${-index * 100}%)`;
};

document.getElementById("prevBtn").onclick = () => {
    index = (index - 1 + total) % total;
    imgs.style.transform = `translateX(${-index * 100}%)`;
};
