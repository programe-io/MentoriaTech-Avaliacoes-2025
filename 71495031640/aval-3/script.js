function mostrarDetalhes(modelo) {
    const detalhes = {
        yamaha: "A Yamaha YZF-R1 chega a 299 km/h e possui controle eletrônico de tração, modos de pilotagem e quickshifter.",
        ducati: "A Ducati Panigale V4 alcança 305 km/h e traz tecnologia derivada da MotoGP, com aerodinâmica ativa.",
        harley: "A Harley-Davidson Fat Boy é perfeita para longas viagens, com torque alto e estilo retrô inconfundível."
    };

    const elementoId = `detalhes-${modelo}`;
    document.getElementById(elementoId).textContent = detalhes[modelo];
}
