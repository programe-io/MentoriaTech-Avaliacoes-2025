function mostrarDetalhes(modelo) {
    const detalhesFerrari = "A Ferrari F8 Tributo acelera de 0 a 100 km/h em apenas 2,9 segundos e tem velocidade máxima de 340 km/h.";
    const detalhesLamborghini = "O Lamborghini Aventador atinge 100 km/h em 2,8 segundos, com velocidade máxima de 350 km/h.";

    if (modelo === "ferrari") {
        document.getElementById("detalhes-ferrari").textContent = detalhesFerrari;
    } else if (modelo === "lamborghini") {
        document.getElementById("detalhes-lamborghini").textContent = detalhesLamborghini;
    }
}
