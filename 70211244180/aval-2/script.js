// Função para atualizar o relógio e o bloco de estudo ativo
function updateTimeAndSchedule() {
    const now = new Date();
    // Formata o horário (ex: 09:51:37)
    const timeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    // Exibe o horário atual no header
    document.getElementById('time-display').textContent = `Horário Atual: ${timeString}`;

    // Calcula o tempo atual em minutos totais desde a meia-noite
    const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();

    const studyBlocks = document.querySelectorAll('.study-block');
    
    // 1. Remove a classe de todos os blocos
    studyBlocks.forEach(block => {
        block.classList.remove('active-block');
    });
    
    // 2. Verifica qual bloco está ativo
    studyBlocks.forEach(block => {
        const startTime = block.getAttribute('data-start'); // Ex: "08:00"
        const endTime = block.getAttribute('data-end');     // Ex: "09:30"
        
        // Converte HH:MM para minutos totais desde a meia-noite
        const startMinutes = parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
        const endMinutes = parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);
        
        // Se o horário atual estiver dentro do intervalo (start <= current < end)
        if (currentTimeMinutes >= startMinutes && currentTimeMinutes < endMinutes) {
            block.classList.add('active-block');
        }
    });
}

// --- Lógica do Toggle (Dicas) ---
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);
        
        // Verifica se está oculto ou sem estilo inicial (que o CSS define como none)
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            this.textContent = 'Ocultar Detalhes';
        } else {
            content.style.display = 'none';
            this.textContent = 'Mostrar Detalhes';
        }
    });
});


// Chama a função imediatamente para carregar o estado inicial
updateTimeAndSchedule(); 

// Chama a função a cada 1 segundo para atualizar o relógio e o cronograma
setInterval(updateTimeAndSchedule, 1000);