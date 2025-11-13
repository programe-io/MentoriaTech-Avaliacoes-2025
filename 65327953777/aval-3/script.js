document.addEventListener('DOMContentLoaded', function() {
    const elementoSaudacao = document.getElementById('saudacao');
    const horaAtual = new Date().getHours();
    let saudacao = 'Olá! Bem-vindo(a) ao mundo doce!';

    // Define a saudação baseada na hora do dia
    if (horaAtual >= 6 && horaAtual < 12) {
        saudacao = '☀️ Bom Dia! Comece o dia com um toque de doçura!';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = '☕ Boa Tarde! Que tal uma sobremesa depois do almoço?';
    } else {
        saudacao = '🌙 Boa Noite! Adoce seu fim de dia!';
    }

    // Altera o conteúdo do elemento H2
    elementoSaudacao.textContent = saudacao;
});