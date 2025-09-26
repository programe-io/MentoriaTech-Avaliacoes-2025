// Alerta de boas-vindas
window.onload = function() {
    alert("Bem-vinda ao site, Milena!");
    atualizarDataHora();
};

// Mostrar/ocultar bio
function toggleBio() {
    const bio = document.getElementById('bio');
    if (bio.style.display === 'none') {
        bio.style.display = 'block';
    } else {
        bio.style.display = 'none';
    }
}

// Atualizar data e hora
function atualizarDataHora() {
    const agora = new Date();
    const dataHoraFormatada = agora.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'short'
    });

    document.getElementById('dataHora').textContent = `Data e hora atual: ${dataHoraFormatada}`;
}
