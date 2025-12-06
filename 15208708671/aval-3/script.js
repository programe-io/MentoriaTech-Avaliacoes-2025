function mostrarCuriosidade() {
    const curiosidades = [
        "Macacos conseguem aprender comandos e usar ferramentas!",
        "Alguns macacos conseguem reconhecer seus rostos no espelho.",
        "Eles vivem em grupos chamados 'tropas'.",
        "O menor macaco do mundo é o Sagui Pigmeu.",
        "Macacos usam sons diferentes para avisar de perigos."
    ];

    const indice = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("texto-curiosidade").innerText = curiosidades[indice];
}
