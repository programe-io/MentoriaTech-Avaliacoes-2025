// Mostrar / Ocultar músicas
const showMusicBtn = document.getElementById("showMusicList");
const musicList = document.getElementById("musicList");

showMusicBtn.addEventListener("click", () => {
    musicList.classList.toggle("hidden");
});

// Alternar tema
const toggleThemeBtn = document.getElementById("toggleTheme");

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});