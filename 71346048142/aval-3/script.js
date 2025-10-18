document.addEventListener('DOMContentLoaded',()=>{

  const createModal=(imgSrc,title,text)=>{
    document.querySelector('.modal')?.remove();
    const modal=document.createElement('div');
    modal.className='modal';
    modal.innerHTML=`
      <div class="card" role="dialog" aria-modal="true">
        <div class="top">
          <img src="${imgSrc}" alt="${title}">
          <div class="info">
            <h3>${title}</h3>
            <p>${text}</p>
            <div style="margin-top:12px;">
              <button id="modalClose" style="margin-left:8px;padding:10px 12px;border-radius:8px;border:1px solid #ccc;background:#fff;cursor:pointer;">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('modalClose').addEventListener('click',()=>modal.remove());
  };

  // Clicar em qualquer post abre modal
  document.querySelectorAll('.animal').forEach(card=>{
    card.addEventListener('click',()=>{
      const img=card.querySelector('img')?.src||'';
      const title=card.querySelector('strong')?.innerText||'Notícia';
      const text=card.querySelector('p')?.innerText||'';
      createModal(img,title,text);
    });
  });

  // Loja — botão comprar
  const cart=[];
  const addProductToCart=(product)=>{
    cart.push(product);
    alert(`${product.name} adicionado ao carrinho!`);
  };

  document.querySelectorAll('.loja .produto button').forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
      const prod=btn.parentElement;
      const name=prod.querySelector('p').innerText;
      const img=prod.querySelector('img').src;
      addProductToCart({id:i,name,img,price:99});
    });
  });

});
