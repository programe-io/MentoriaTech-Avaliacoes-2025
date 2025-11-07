const jogos=[
{titulo:"Hogwarts Legacy",descricao:"Mais de 30 milhões de cópias vendidas mundialmente.",imagem:"https://via.placeholder.com/100"},
{titulo:"Elden Ring",descricao:"Premiado como Jogo do Ano e com vendas recordes.",imagem:"https://via.placeholder.com/100"},
{titulo:"Monster Hunter Wilds",descricao:"Novo sucesso de vendas da Capcom em 2025.",imagem:"https://via.placeholder.com/100"},
{titulo:"Final Fantasy VII Rebirth",descricao:"Um dos RPGs mais aguardados e vendidos do ano.",imagem:"https://via.placeholder.com/100"},
{titulo:"Spider-Man 2",descricao:"Sucesso absoluto de vendas no PlayStation 5.",imagem:"https://via.placeholder.com/100"}
];

const lista=document.getElementById("lista-jogos");

jogos.forEach(jogo=>{
const div=document.createElement("div");
div.className="game";

const img=document.createElement("img");
img.src=jogo.imagem;
img.alt=jogo.titulo;

const info=document.createElement("div");
info.className="game-info";

const h3=document.createElement("h3");
h3.textContent=jogo.titulo;

const p=document.createElement("p");
p.textContent=jogo.descricao;

info.appendChild(h3);
info.appendChild(p);
div.appendChild(img);
div.appendChild(info);
lista.appendChild(div);
});