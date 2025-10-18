document.addEventListener('DOMContentLoaded',()=>{

  // MODAL
  const createModal = (imgSrc,title,text)=>{
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
              <button id="modalAddToCart" style="background:#00a8cc;color:#fff;padding:10px 12px;border-radius:8px;border:0;cursor:pointer;font-weight:600;">Adicionar Pacote</button>
              <button id="modalClose" style="margin-left:8px;padding:10px 12px;border-radius:8px;border:1px solid #ccc;background:#fff;cursor:pointer;">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
