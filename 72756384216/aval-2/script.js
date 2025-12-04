/* PRODUTOS */
{nome:"Camiseta Dry Fit Max",cat:"camiseta",img:"https://images.unsplash.com/photo-1528701800489-20be1c40c2d0?auto=format&fit=crop&w=900&q=80"},
{nome:"Shorts FlexMove",cat:"shorts",img:"https://images.unsplash.com/photo-1539889721560-47a6b5ad7d5e?auto=format&fit=crop&w=900&q=80"}
];


const lista=document.getElementById("listaProdutos");
function render(cat="all"){
lista.innerHTML="";
produtos.filter(p=>cat=="all"||p.cat==cat).forEach((p,i)=>{
lista.innerHTML+=`
<div class='card' onclick='abrirProduto(${i})'>
<img src='${p.img}' />
<h3>${p.nome}</h3>
<button>Ver detalhes</button>
</div>`;
});
}
render();


/* FILTROS */
document.querySelectorAll('.filtros button').forEach(btn=>{
btn.onclick=()=>{
document.querySelector('.filtros .active').classList.remove('active');
btn.classList.add('active');
render(btn.dataset.cat);
};
});


/* MODAL */
let produtoAtual;
function abrirProduto(i){
produtoAtual=produtos[i];
modalImg.src=produtoAtual.img;
modalNome.innerText=produtoAtual.nome;
modalCat.innerText="Categoria: "+produtoAtual.cat;
modalProduto.style.display='flex';
}
function fecharProduto(){modalProduto.style.display='none';}


/* CARRINHO */
let carrinho=[];
addCarrinho.onclick=()=>{
carrinho.push(produtoAtual);
atualizarCarrinho();
fecharProduto();
};
function atualizarCarrinho(){
cartContent.innerHTML="";
carrinho.forEach(p=>{
cartContent.innerHTML+=`<div class='carrinho-item'>${p.nome}</div>`;
});
}
function toggleCarrinho(){cartPanel.classList.toggle('open');}
cartBtn.onclick=toggleCarrinho;


/* LOGIN */
loginBtn.onclick=()=>loginModal.style.display='flex';


/* MENU MOBILE */
menuMobile.onclick=()=>menuNav.classList.toggle('open');


/* TEMA */
temaBtn.onclick=()=>{
document.documentElement.classList.toggle('light');
};
```}