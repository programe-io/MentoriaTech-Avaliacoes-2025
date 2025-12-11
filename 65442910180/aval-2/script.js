/* --- 1. VARIÁVEIS GLOBAIS --- */
let totalCarrinho = 0;
let itensNoCarrinho = 0;

/* --- 2. FUNÇÃO DE ADICIONAR AO CARRINHO --- */
// Esta função "ouve" quando a página carrega completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os botões que dizem "Encomendar"
    const botoesEncomendar = document.querySelectorAll('.card-info .btn');

    botoesEncomendar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault(); // Evita que a página pule para o topo

            // Encontra o cartão do bolo onde o botão foi clicado
            const card = botao.closest('.card-bolo');
            
            // Pega o nome e o preço de dentro desse cartão
            const nomeBolo = card.querySelector('h3').innerText;
            const textoPreco = card.querySelector('.preco').innerText;
            
            // Limpa o texto do preço para pegar só o número (Ex: "R$ 85,00" vira 85.00)
            const preco = parseFloat(textoPreco.replace('R$', '').replace(',', '.').replace('/kg', ''));

            // Atualiza o carrinho
            atualizarCarrinho(nomeBolo, preco);
        });
    });
});

function atualizarCarrinho(nome, preco) {
    itensNoCarrinho++;
    totalCarrinho += preco;

    // Formata o preço para o padrão brasileiro (R$ 00,00)
    const totalFormatado = totalCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Chama a nossa notificação personalizada
    mostrarNotificacao(`Que delícia! ${nome} adicionado. Total: ${totalFormatado}`);
}

/* --- 3. NOTIFICAÇÃO "TOAST" (Avisinho doce no canto da tela) --- */
function mostrarNotificacao(mensagem) {
    // Cria o elemento HTML da notificação na hora
    const notif = document.createElement('div');
    notif.classList.add('notificacao-doce');
    notif.innerText = `🍰 ${mensagem}`;

    // Adiciona na tela
    document.body.appendChild(notif);

    // Faz aparecer suavemente
    setTimeout(() => {
        notif.classList.add('visivel');
    }, 100);

    // Remove da tela depois de 3 segundos
    setTimeout(() => {
        notif.classList.remove('visivel');
        setTimeout(() => {
            notif.remove();
        }, 500); // Espera a animação de saída terminar
    }, 3000);
}