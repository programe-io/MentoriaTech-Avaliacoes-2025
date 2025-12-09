// 1. Selecionar os elementos que vamos manipular
const botaoTema = document.getElementById('btn-tema');
const body = document.body;

// 2. Adicionar um "ouvinte de eventos" (Event Listener)
// O computador ficará esperando o clique neste botão
botaoTema.addEventListener('click', () => {

    // 3. Alternar a classe 'dark-mode' no corpo do site
    // O comando 'toggle' adiciona a classe se não existir, e remove se existir
    body.classList.toggle('dark-mode');

    // 4. (Opcional) Mudar o texto do botão dependendo do tema
    if (body.classList.contains('dark-mode')) {
        botaoTema.innerText = 'Mudar para Modo Claro ☀️';
    \} else {
        botaoTema.innerText = 'Mudar para Modo Escuro 🌙';
    \}

\});$0