// 1. Acessa elementos do HTML usando seus IDs
const botaoMatricula = document.getElementById('btn-matricula');
const secaoMensagem = document.getElementById('mensagem-js');

// 2. Define uma função que será executada no evento
function lidarComCliqueMatricula(evento) {
    // Previne que o link vá para outra página
    evento.preventDefault(); 
    
    // Texto que será exibido
    const mensagem = document.createElement('p');
    mensagem.innerHTML = '🎉 **Sucesso!** O link de matrícula foi ativado. Entraremos em contato em breve!';
    
    // Estilo básico para a mensagem
    mensagem.style.backgroundColor = '#d4edda'; // Fundo verde claro
    mensagem.style.color = '#155724'; // Texto verde escuro
    mensagem.style.padding = '15px';
    mensagem.style.border = '1px solid #c3e6cb';
    mensagem.style.borderRadius = '5px';
    
    // Limpa a seção e insere a nova mensagem
    secaoMensagem.innerHTML = '<h3>Ação Realizada!</h3>';
    secaoMensagem.appendChild(mensagem);

    // Desabilita o link após o primeiro clique (opcional)
    botaoMatricula.onclick = function() {
        alert("O processo de matrícula já foi iniciado!");
    };
}

// 3. Adiciona um "ouvinte de evento" (Event Listener) ao botão
// Quando o botão for clicado, a função 'lidarComCliqueMatricula' será chamada.
botaoMatricula.addEventListener('click', lidarComCliqueMatricula);

console.log("JavaScript da Escola Carregado!");