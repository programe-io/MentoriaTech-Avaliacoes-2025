function mostrarInfo(jogo) {
    let info;
    if (jogo === 'prbf2') {
        info = "Project Reality Battlefield 2 é referência mundial em simulação tática, ideal para jogadores exigentes. Comunidade ativa e evolução constante.";
    } else if (jogo === 'arma2') {
        info = "Arma 2 revolucionou os jogos militares abertos, oferecendo realismo e liberdade sem igual.";
    } else if (jogo === 'insurgency') {
        info = "Insurgency é intenso e estratégico, perfeito para partidas rápidas sem perder profundidade.";
    }
    alert(info);
}
