const buttons = document.querySelectorAll('.toggle-comments');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const comments = button.nextElementSibling;
        if(comments.style.display === 'block') {
            comments.style.display = 'none';
            button.textContent = 'Mostrar Comentários';
        } else {
            comments.style.display = 'block';
            button.textContent = 'Ocultar Comentários';
        }
    });
});
