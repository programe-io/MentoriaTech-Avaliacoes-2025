document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidade do Botão de Recursos
    const recursosBtn = document.getElementById('recursos-btn');
    const recursosInfo = document.getElementById('recursos-info');

    recursosBtn.addEventListener('click', function() {
        recursosInfo.classList.toggle('hidden');
        if (recursosInfo.classList.contains('hidden')) {
            recursosBtn.textContent = 'Recursos e Materiais de Apoio';
        } else {
            recursosBtn.textContent = 'Ocultar Recursos';
        }
    });

    // 2. Funcionalidade de Simulação de Envio do Formulário
    const manifestoForm = document.getElementById('manifesto-form');
    const mensagemSucesso = document.getElementById('mensagem-manifesto');

    manifestoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário (para demonstração)

        // Limpa a mensagem anterior, se houver
        mensagemSucesso.classList.add('hidden-success');

        // Simula o processamento dos dados
        setTimeout(() => {
            // Mostra a mensagem de sucesso
            mensagemSucesso.classList.remove('hidden-success');
            
            // Limpa o formulário
            manifestoForm.reset();
            
            // Faz a mensagem sumir após 5 segundos
            setTimeout(() => {
                mensagemSucesso.classList.add('hidden-success');
            }, 5000);
            
        }, 500); // Pequeno delay para simular o envio
    });
});