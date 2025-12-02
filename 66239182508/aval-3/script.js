function toggleLike(btn) {
  btn.classList.toggle("liked");
  if (btn.classList.contains("liked")) {
    btn.textContent = "💖 Curtido";
  } else {
    btn.textContent = "❤️ Curtir";
  }
}

function openComment() {
  document.getElementById("composer-input").focus();
}

function sharePost() {
  alert("Link copiado!");
}

function sendPost() {
  const input = document.getElementById("composer-input");
  if (input.value.trim() === "") return alert("Digite algo");

  alert("Post enviado!");
  input.value = "";
}

