function mostrarMensagem() {
    const curiosidades = [
        "A moto mais rápida do mundo já passou dos 600 km/h!",
        "A primeira motocicleta foi criada em 1885 por Gottlieb Daimler.",
        "Motores de motos esportivas podem girar mais de 14.000 RPM.",
        "As Harley-Davidson são famosas pelo som único do seu motor V-Twin."
    ];

    const aleatorio = Math.floor(Math.random() * curiosidades.length);

    document.getElementById("mensagem").innerText = curiosidades[aleatorio];
}
