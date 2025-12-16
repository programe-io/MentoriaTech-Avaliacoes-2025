// Seleciona todos os cards de receita
const cards = document.querySelectorAll('article');

// Função para mostrar alerta com informações
function mostrarInfo(event) {
    const titulo = this.querySelector('h2').innerText;
    const tempo = this.querySelector('.tempo').innerText;
    const descricao = this.querySelector('p').innerText;
    
    alert(`${titulo}\nTempo de preparo: ${tempo}\nDescrição: ${descricao}`);
}

// Adiciona evento de clique em cada card
cards.forEach(card => {
    card.addEventListener('click', mostrarInfo);
});
