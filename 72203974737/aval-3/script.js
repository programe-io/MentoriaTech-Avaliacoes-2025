function mostrarAgenda() {
    const agendaDiv = document.getElementById("resultadoAgenda");

    agendaDiv.innerHTML = `
        <h3>Próximos Shows</h3>
        <p>📍 São Paulo - 12/12/2025</p>
        <p>📍 Brasília - 18/12/2025</p>
        <p>📍 Goiânia - 20/12/2025</p>
    `;
}