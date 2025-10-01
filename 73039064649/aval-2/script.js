document.addEventListener("DOMContentLoaded", function() {
    const vehicleCards = document.querySelectorAll('.vehicle-card');

    vehicleCards.forEach(card => {
        card.addEventListener('click', function() {
            alert("Você clicou em um veículo!");
        });
    });
});
