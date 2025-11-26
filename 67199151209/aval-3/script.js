const player = document.getElementById("player");
let x = 135;
let y = 135;


window.addEventListener("keydown", (e) => {
if(e.key === "ArrowUp") y -= 10;
if(e.key === "ArrowDown") y += 10;
if(e.key === "ArrowLeft") x -= 10;
if(e.key === "ArrowRight") x += 10;


player.style.top = y + "px";
player.style.left = x + "px";
});