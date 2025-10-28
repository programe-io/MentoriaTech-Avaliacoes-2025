const waveBtn = document.getElementById("waveBtn");
const rightArm = document.querySelector(".arm.right");

waveBtn.addEventListener("click", () => {
  rightArm.classList.toggle("wave");

  // Mensagem do robô
  if (rightArm.classList.contains("wave")) {
    alert("🤖 Olá humano! Tudo bem?");
  }
});