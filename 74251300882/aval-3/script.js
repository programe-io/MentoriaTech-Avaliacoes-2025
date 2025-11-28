// Acessa o elemento H1 pelo seu ID
const titulo = document.getElementById('tituloPrincipal');

// Acessa o link 'Sobre' pelo seu ID
const linkSobre = document.getElementById('linkSobre');

// Altera o texto interno (innerHTML) e a cor do elemento H1
titulo.innerHTML = '✨ Olá, JavaScript em Ação! ✨';
titulo.style.color = '#e17055'; 

// Adiciona um 'ouvinte de evento' (event listener) que espera o clique no link
linkSobre.addEventListener('click', function(evento) {
    // previne o comportamento padrão do link
    evento.preventDefault(); 
    
    // Mostra uma caixa de alerta no navegador
    alert('Você clicou no link Sobre! Isso foi feito com JavaScript.');
});

console.log('O script.js foi carregado com sucesso.');