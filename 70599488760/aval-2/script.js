document.addEventListener('DOMContentLoaded', () => {
    // Array de Curiosidades
    const curiosidades = [
        "O avião mais rápido do mundo (SR-71 Blackbird) pode voar a Mach 3.2 (mais de 3.500 km/h).",
        "A maioria dos aviões comerciais não voa em linha reta, mas sim seguindo rotas que otimizam o consumo de combustível e evitam mau tempo.",
        "A 'caixa preta' dos aviões é, na verdade, laranja brilhante para facilitar a localização após um acidente.",
        "Um Boeing 747 consome cerca de 4 litros de combustível por segundo."
    ];

    const btnCuriosidade = document.getElementById('mostrarCuriosidade');
    const curiosidadeTexto = document.getElementById('curiosidade-texto');
    const btnAlternarTema = document.getElementById('alternarTema');
    const body = document.body;

    // Função para mostrar uma curiosidade aleatória
    btnCuriosidade.addEventListener('click', () => {
        const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
        curiosidadeTexto.textContent = curiosidades[indiceAleatorio];
    });

    // Função para alternar entre Tema Claro e Tema Escuro
    btnAlternarTema.addEventListener('click', (e) => {
        e.preventDefault(); // Impede que o link navegue
        body.classList.toggle('tema-escuro');
        
        // Altera o texto do botão
        if (body.classList.contains('tema-escuro')) {
            btnAlternarTema.textContent = 'Tema Claro';
        } else {
            btnAlternarTema.textContent = 'Tema Escuro';
        }
    });

    // Adiciona interatividade aos cartões (cards)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const modelo = card.getAttribute('data-modelo');
            alert(`Você clicou no ${modelo}! Aqui você poderia carregar uma página ou modal com mais detalhes.`);
        });
    });
});