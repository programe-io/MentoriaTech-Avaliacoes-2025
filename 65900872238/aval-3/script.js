const form = document.querySelector('#formContato');
const dialog = document.querySelector('#dialogMsg');
const btnClose = document.querySelector('#closeDialog');


form.addEventListener('submit', (e) => {
e.preventDefault();
dialog.showModal();
});


btnClose.addEventListener('click', () => {
dialog.close();
});