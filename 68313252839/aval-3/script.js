// Galeria: Ampliar imagem ao clicar
const imagens = document.querySelectorAll('.vestido img');
const modal = document.getElementById('modal');
const imgAmpliada = document.getElementById('img-ampliada');
const close = document.querySelector('.close');

imagens.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        imgAmpliada.src = img.src;
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target !== imgAmpliada) {
        modal.style.display = 'none';
    }
});

// Formulário: Validação simples e alerta de envio
const form = document.getElementById('form-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    form.reset();
});