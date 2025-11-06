// Função para exibir mensagens personalizadas
function showMessage(text) {
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    
    messageText.textContent = text;
    messageBox.classList.remove('hidden');

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        messageBox.classList.add('hidden');
    }, 3000);
}

// Evento do botão principal
document.getElementById('callToAction').addEventListener('click', function() {
    showMessage("Ação disparada! O frontend (HTML/CSS/JS) enviaria dados para um servidor Java aqui.");
});

// Configuração opcional (simulação)
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

if (Object.keys(firebaseConfig).length > 0) {
    // console.log("Firebase está configurado.");
}
