function mostrarMensagens() {
    const tipo = document.getElementById('tipo-motivacao').value;
    const dicasContainer = document.getElementById('dicas');

    // Limpar as dicas anteriores (exceto o artigo fixo de exemplo)
    dicasContainer.innerHTML = '';

    let mensagens = [];

    if (tipo === 'pessoal') {
        mensagens = [
            { titulo: "Acredite em você", mensagem: "O primeiro passo para alcançar seus objetivos é acreditar em sua capacidade de realizá-los." },
            { titulo: "Aceite os desafios", mensagem: "Os desafios não são obstáculos, mas oportunidades de crescimento pessoal." },
            { titulo: "Você é capaz", mensagem: "Nunca subestime o seu poder. Você pode fazer mais do que imagina." }
        ];
    } else if (tipo === 'trabalho') {
        mensagens = [
            { titulo: "Trabalhe com paixão", mensagem: "O sucesso vem para aqueles que amam o que fazem. Trabalhe com entusiasmo." },
            { titulo: "Persistência é chave", mensagem: "O caminho para o sucesso é longo, mas a persistência sempre traz resultados." },
            { titulo: "Nunca pare de aprender", mensagem: "No trabalho, nunca pare de aprender. Cada dia é uma chance de melhorar." }
        ];
    } else if (tipo === 'estudo') {
        mensagens = [
            { titulo: "Estude com foco", mensagem: "O segredo do sucesso nos estudos está em manter o foco no objetivo final." },
            { titulo: "Acredite no seu potencial", mensagem: "Você tem a capacidade de aprender qualquer coisa. Confie em seu potencial." },
            { titulo: "Cada passo é uma vitória", mensagem: "Cada página lida e cada conceito aprendido é uma vitória na sua jornada acadêmica." }
        ];
    }

    mensagens.forEach(dica => {
        const article = document.createElement('article');
        article.classList.add('dica');
        article.innerHTML = `
            <h3>${dica.titulo}</h3>
            <p>${dica.mensagem}</p>
        `;
        dicasContainer.appendChild(article);
    });
}
