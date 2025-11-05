document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    const trailerBtn = document.getElementById('trailerBtn');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    trailerBtn.addEventListener('click', () => {
        window.open('https://www.youtube.com/watch?v=-rK-zGhrxxI', '_blank');
    });
});
