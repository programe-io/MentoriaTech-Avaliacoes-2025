// 1. Defina seus dados em um objeto JavaScript
const meuPerfil = {
    nome: "Antônio Marcos",
    saudacao: "Olá! Seja bem-vindo à minha página de perfil.",
    gostos: [
        "Mexer no celular (explorar novos apps, notícias e tecnologia)",
        "Aprender coisas novas (em geral, através de cursos e leitura)",
        "Assistir a documentários e filmes de ficção científica",
        "Praticar exercícios físicos leves"
    ],
    diaADia: [
        "Estudar e aprimorar minhas habilidades em programação (JavaScript e mais)",
        "Organizar a rotina e planejar as próximas tarefas",
        "Cuidar das atividades domésticas",
        "Navegar na internet para buscar inspiração e conhecimento"
    ]
};

// 2. Função para construir o conteúdo da página
function construirPerfil(perfil) {
    // Começa com a saudação
    let htmlContent = `
        <p>${perfil.saudacao}</p>
        
        <h2>👤 Sobre Mim</h2>
        <p>Meu nome é <strong>${perfil.nome}</strong>.</p>
    `;
    
    // Adiciona a lista de Gostos
    htmlContent += `
        <h2>👍 O que Eu Gosto de Fazer</h2>
        <ul>
    `;
    perfil.gostos.forEach(item => {
        htmlContent += `<li>${item}</li>`;
    });
    htmlContent += `</ul>`;

    // Adiciona a lista do Dia a Dia
    htmlContent += `
        <h2>🗓️ Meu Dia a Dia</h2>
        <ul>
    `;
    perfil.diaADia.forEach(item => {
        htmlContent += `<li>${item}</li>`;
    });
    htmlContent += `</ul>`;

    // Retorna o HTML completo como uma string
    return htmlContent;
}

// 3. Insira o conteúdo no elemento da página
document.addEventListener('DOMContentLoaded', () => {
    // 3.1. Encontra o elemento 'main' pelo ID 'perfil'
    const elementoPerfil = document.getElementById('perfil');
    
    // 3.2. Gera o HTML com base nos dados
    const novoConteudo = construirPerfil(meuPerfil);
    
    // 3.3. Insere o novo HTML dentro do elemento 'perfil'
    elementoPerfil.innerHTML = novoConteudo;
});