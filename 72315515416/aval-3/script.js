// script.js
// Novo script JavaScript separado

// Função para mostrar uma mensagem de "comentário enviado"
function enviarComentario(usuario) {
    alert(`Comentário enviado por ${usuario}!`);
}

// Adiciona eventos aos botões "Comentar"
document.addEventListener('DOMContentLoaded', () => {
    const commentButtons = document.querySelectorAll('.btn-action');

    commentButtons.forEach(btn => {
        if (btn.innerText === 'Comentar') {
            btn.addEventListener('click', () => {
                enviarComentario('Usuário');
            });
        }
    });
});
