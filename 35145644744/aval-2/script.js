// Botão da seção principal que mostra curiosidades
document.getElementById("botaoHero").addEventListener("click", () => {
  const curiosidades = [
    "A primeira motocicleta do mundo foi criada em 1885 por Gottlieb Daimler.",
    "Motos consomem até 60% menos combustível que carros.",
    "A moto mais cara do mundo custa mais de 3 milhões de dólares.",
    "No Brasil, existem mais de 30 milhões de motos registradas!",
    "As motos esportivas podem acelerar de 0 a 100 km/h em menos de 3 segundos."
  ];

  const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
  alert("🏍️ Curiosidade: " + aleatoria);
});
