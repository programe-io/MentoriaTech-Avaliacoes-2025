/**
 * Array de objetos contendo receitas simples do Minecraft.
 */
const receitasMinecraft = [
    { nome: "Tocha", ingredientes: "1 Vara, 1 Carvão" },
    { nome: "Picareta de Madeira", ingredientes: "3 Tábuas, 2 Varas" },
    { nome: "Pão", ingredientes: "3 Trigos" },
    { nome: "Baú", ingredientes: "8 Tábuas" },
    { nome: "Fornalha", ingredientes: "8 Pedregulhos" }
];

/**
 * Função que escolhe uma receita aleatória do array e a exibe
 * no console e no elemento <output>.
 */
function mostrarReceita() {
    // 1. Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * receitasMinecraft.length);
    
    // 2. Seleciona a receita
    const receitaSelecionada = receitasMinecraft[indiceAleatorio];
    
    // 3. Obtém o elemento <output> do HTML
    const outputElement = document.getElementById('resultado-receita');
    
    // 4. Cria a string de saída
    const mensagem = `Receita: ${receitaSelecionada.nome}\nIngredientes: ${receitaSelecionada.ingredientes}`;
    
    // 5. Exibe a mensagem no console (para fins de debug/log)
    console.log("--- Receita Gerada ---");
    console.log(mensagem);
    
    // 6. Atualiza o conteúdo do elemento <output>
    outputElement.textContent = `⭐ Receita do Dia: ${receitaSelecionada.nome}\n(Ingredientes: ${receitaSelecionada.ingredientes})`;
}

// Opcional: Adiciona um evento para o título, demonstrando manipulação de DOM
document.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo-principal');
    
    // Altera a cor do título ao passar o mouse
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = '#ff8800'; // Laranja
    });

    // Restaura a cor do título ao remover o mouse
    titulo.addEventListener('mouseout', () => {
        // Usa a cor original definida no CSS
        titulo.style.color = '#ffffff'; 
    });
});