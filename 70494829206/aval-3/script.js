const body = document.body;

const header = document.createElement('header');
const titulo = document.createElement('h1');
titulo.textContent = 'Cronograma de Estudos';
const status = document.createElement('span');
status.textContent = 'Ativo';
header.appendChild(titulo);
header.appendChild(status);

const nav = document.createElement('nav');
const menu = document.createElement('div');
menu.innerHTML = '<a href="#">Home</a> | <a href="#">Configurações</a>';
nav.appendChild(menu);

const main = document.createElement('main');

const section = document.createElement('section');
const divTabela = document.createElement('div');
divTabela.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Hora</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>08:00</td>
                <td>Lógica</td>
                <td>Algoritmos</td>
                <td>Estruturas</td>
            </tr>
        </tbody>
    </table>
`;
section.appendChild(divTabela);

const article = document.createElement('article');
const subtopico = document.createElement('h3');
subtopico.textContent = 'Anotações';
const p = document.createElement('p');
p.textContent = 'Focar em manipulação de DOM hoje.';
article.appendChild(subtopico);
article.appendChild(p);

main.appendChild(section);
main.appendChild(article);

const aside = document.createElement('aside');
const img = document.createElement('img');
img.src = 'https://picsum.photos/100';
const infoProgresso = document.createElement('span');
infoProgresso.textContent = 'Progresso: 40%';
aside.appendChild(img);
aside.appendChild(infoProgresso);

const footer = document.createElement('footer');
footer.innerHTML = '<p>2025 - Estudo JS</p>';

body.appendChild(header);
body.appendChild(nav);
body.appendChild(main);
body.appendChild(aside);
body.appendChild(footer);