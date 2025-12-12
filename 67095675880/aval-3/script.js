// 1. Acessa o elemento HTML usando seu ID
const tituloElemento = document.getElementById('titulo');

// 2. Cria uma mensagem de saudação
const saudacao = "👋 Olá! O JavaScript está funcionando!";

// 3. Muda o texto (o conteúdo) do elemento <h1>
tituloElemento.textContent = saudacao;

// 4. Exibe uma mensagem no console do navegador (útil para debug)
console.log('O título foi alterado com sucesso!');

// Podemos também adicionar um evento de clique a um item da lista, por exemplo:
const listaItens = document.querySelectorAll('li');

listaItens.forEach(item => {
    item.addEventListener('click', () => {
            alert(`Você clicou no: ${item.textContent}`);
                    // Mudar a cor de fundo do item clicado para verde claro
                            item.style.backgroundColor = '#d4edda'; 
                                });
                                });
                                