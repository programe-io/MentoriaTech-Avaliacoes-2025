// =======================
// SCRIPT DE CURTIDAS
// =======================
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const likeCountElement = button.nextElementSibling;
    let count = parseInt(likeCountElement.textContent);
    count++;

    likeCountElement.textContent = `${count} curtida${count > 1 ? 's' : ''}`;
    button.style.backgroundColor = '#e63946';
    button.textContent = '💖 Curtido!';
    button.disabled = true;
  });
});
