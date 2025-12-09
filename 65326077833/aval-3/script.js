document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidade do Slider de Preço
    const precoInput = document.getElementById('preco');
    const valorPrecoSpan = document.getElementById('valor-preco');

    // Atualiza o texto do preço ao mover o slider
    precoInput.addEventListener('input', () => {
        // Formata o valor com separador de milhar
        const valorFormatado = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0
        }).format(precoInput.value);
        
        valorPrecoSpan.textContent = valorFormatado;
    });


    // 2. Funcionalidade de Filtro Simples
    const formularioFiltros = document.querySelector('.botao-secundario').closest('#filtros');
    const catalogo = document.querySelector('.catalogo-carros');
    const cardsCarro = catalogo.querySelectorAll('.carro-card');

    formularioFiltros.querySelector('.botao-secundario').addEventListener('click', () => {
        
        const marcaSelecionada = formularioFiltros.querySelector('#marca').value;
        const precoMaximo = parseInt(precoInput.value);

        cardsCarro.forEach(card => {
            const cardMarca = card.getAttribute('data-marca');
            const cardPreco = parseInt(card.getAttribute('data-preco'));

            let mostrar = true;

            // Filtro por Marca
            if (marcaSelecionada && cardMarca !== marcaSelecionada) {
                mostrar = false;
            }

            // Filtro por Preço Máximo
            if (cardPreco > precoMaximo) {
                mostrar = false;
            }

            // Exibe ou oculta o card
            if (mostrar) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        alert("Filtros Aplicados!");
    });
});