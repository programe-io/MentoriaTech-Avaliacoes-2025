/* MENU LATERAL */
const sideMenu = document.getElementById("sideMenu");
const menuBtn = document.getElementById("menuBtn");

menuBtn.onclick = () => {
    sideMenu.classList.toggle("open");
};


/* CARROSSEL 3D */

let angle = 0;
const spinner = document.getElementById("spinner");

document.getElementById("next3d").onclick = () => {
    angle -= 72;
    spinner.style.transform = `rotateY(${angle}deg)`;
};

document.getElementById("prev3d").onclick = () => {
    angle += 72;
    spinner.style.transform = `rotateY(${angle}deg)`;
};
