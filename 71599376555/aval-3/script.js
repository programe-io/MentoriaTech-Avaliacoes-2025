function mostrarInfo(id) {
    let info;
    if (id === 'prbf2' || id === 'artigo1') {
        info = "Neste conteúdo, exploramos técnicas essenciais para clareza e objetividade na escrita.";
    } else if (id === 'arma2' || id === 'artigo2') {
        info = "Aprenda a estruturar textos longos com organização e fluidez.";
    } else if (id === 'insurgency' || id === 'artigo3') {
        info = "Dicas para tornar a leitura mais agradável e confortável, mesmo em textos extensos.";
    } else {
        info = "Conteúdo disponível para leitura.";
    }
    alert(info);
}
