/* MundoVet — script.js
   - modal article detail
   - loja: adicionar ao carrinho, drawer, persistência localStorage
   - controle de quantidade, remover, checkout simulado
*/

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Modal para abrir artigo/animal ---------- */
  const createModal = (imgSrc, title, text) => {
    // if modal exists remove
    const existing = document.querySelector('.modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.innerHTML = `
      <div class="card" role="dialog" aria-modal="true">
        <div class="top">
          <img src="${imgSrc}" alt="${title}">
          <div class="info">
            <h3>${title}</h3>
            <p>${text}</p>
            <div style="margin-top:12px;">
              <button id="modalAddToCart" style="background:#4e937a;color:#fff;padding:10px 12px;border-radius:8px;border:0;cursor:pointer;font-weight:600;">Adicionar item da loja</button>
              <button id="modalClose" style="margin-left:8px;padding:10px 12px;border-radius:8px;border:1px solid #ccc;background:#fff;cursor:pointer;">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('modalClose').addEventListener('click', () => modal.remove());

    // optional hook: add a default product when user clicks "Adicionar item da loja"
    document.getElementById('modalAddToCart').addEventListener('click', () => {
      addProductToCart({
        id: 'promo-sample',
        name: `${title} - Checkup`,
        price: 39.90,
        img: imgSrc
      });
      modal.remove();
      openCartDrawer();
    });
  };

  // click handler for animal cards (.animal)
  document.querySelectorAll('.animal').forEach(card => {
    card.addEventListener('click', (e) => {
      const img = card.querySelector('img')?.src || '';
      const title = card.querySelector('strong')?.innerText || 'Animal';
      const text = card.querySelector('p')?.innerText || '';
      createModal(img, title, text);
    });
  });

  /* ---------- LOJA + CARRINHO ---------- */

  // sample price map for products in the HTML (fallback)
  const productPriceMap = {
    'Ração SuperDog': 89.90,
    'Areia GatoFeliz': 39.90,
    'Brinquedo PetBall': 24.90
  };

  // cart state - load from localStorage
  let cart = JSON.parse(localStorage.getItem('mundovet_cart') || '[]');

  // create cart drawer UI
  const cartDrawer = document.createElement('div');
  cartDrawer.class
