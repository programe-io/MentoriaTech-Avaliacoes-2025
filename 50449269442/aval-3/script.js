/*
  Nome da Função: mudarTexto
  Objetivo: Encontrar um elemento HTML por seu ID e modificar seu conteúdo.
*/
function mudarTexto() {
    // 1. Encontra o elemento 'p' com o ID 'paragrafo-alvo'
    const elemento = document.getElementById('paragrafo-alvo');

    // 2. Verifica se o elemento foi encontrado (boa prática)
    if (elemento) {
        // 3. Modifica a propriedade 'innerHTML' (o conteúdo visível)
        elemento.innerHTML = '🎉 **O texto foi mudado com sucesso pelo JavaScript!** 🎉';

        // 4. (Opcional) Modifica o estilo do elemento
        elemento.style.backgroundColor = '#d4edda'; // Fundo verde claro
        elemento.style.color = '#155724';           // Texto verde escuro
        elemento.style.padding = '10px';
        elemento.style.border = '1px solid #c3e6cb';
    \} else {
        // Se o ID estiver errado
        console.error("Elemento com ID 'paragrafo-alvo' não foi encontrado.");
    \}
\}$0