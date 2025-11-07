const images = [
    "https://source.unsplash.com/600x400/?soccer,goal",
    "https://source.unsplash.com/600x400/?football,stadium",
    "https://source.unsplash.com/600x400/?soccer,match",
    "https://source.unsplash.com/600x400/?football,team"
];

const highlightImg = document.getElementById('highlightImg');
const button = document.getElementById('changeImage');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    highlightImg.src = images[randomIndex];
});
