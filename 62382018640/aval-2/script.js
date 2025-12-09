// --- Variáveis Globais (Nossa "Despensa") ---
let carrinho = [];
let total = 0;

// --- Função Principal: Adicionar Bolo ---
function adicionarAoCarrinho(nomeBolo, precoBolo) {
    // 1. Adiciona o item ao array (nossa lista interna)
    carrinho.push({ nome: nomeBolo, preco: precoBolo });
    
    // 2. Atualiza o preço total
    total += precoBolo;
    
    // 3. Atualiza o visual do carrinho flutuante
    atualizarCarrinhoVisual();
    
    // 4. Mostra a mensagem de sucesso
    mostrarNotificacao(nomeBolo);
}

// --- Atualiza os números na tela ---
function atualizarCarrinhoVisual() {
    const contador = document.getElementById('contador-itens');
    const valorTotal = document.getElementById('total-valor');
    
    // Animação simples de "pulo" no número
    contador.style.transform = "scale(1.5)";
    setTimeout(() => contador.style.transform = "scale(1)", 200);

    contador.innerText = carrinho.length;
    
    // Formata o dinheiro para o padrão brasileiro (R$ 0,00)
    valorTotal.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// --- Cria a Notificação "Toast" (Mensagem Doce) ---
function mostrarNotificacao(nomeBolo) {
    const container = document.getElementById('toast-container');
    
    // Cria o elemento HTML da notificação
    const notificacao = document.createElement('div');
    notificacao.classList.add('toast');
    
    // Mensagens aleatórias para dar charme
    const mensagens = [
        "Ótima escolha! 🍰",
        "Hum... parece delicioso! 😋",
        "Adicionado com amor! ❤️",
        "Vai ficar incrível na mesa! 🎉"
    ];
    const msgAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    notificacao.innerHTML = `
        <div style="font-size: 20px;">🍰</div>
        <div>
            <strong>${nomeBolo}</strong><br>
            <small>${msgAleatoria}</small>
        </div>
    `;

    // Adiciona à tela
    container.appendChild(notificacao);

    // Remove o elemento do HTML após 3 segundos (tempo da animação CSS)
    setTimeout(() => {
        notificacao.remove();
    }, 3000);
}

// --- Efeito Extra: Scroll Suave para Links Internos ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});