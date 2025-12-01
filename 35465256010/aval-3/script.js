function comprar(produto) {
    alert("Você comprou: " + produto + " 🎉");
}

// Efeito estilo Instagram Story: logo desaparece após 15 segundos
window.onload = function() {
    setTimeout(() => {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.style.opacity = 0; // some suavemente
        }
    }, 15000); // 15 segundos
};
