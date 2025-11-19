// script.js - Funcionalidades JS para o site da Imobiliária Premium

document.addEventListener('DOMContentLoaded', ()=>{
  // Elementos
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close');
  const propertyButtons = document.querySelectorAll('[data-property-id]');
  const propertyTitle = document.getElementById('modal-title');
  const propertyDesc = document.getElementById('modal-desc');
  const propertyImg = document.getElementById('modal-img');

  // Dados de exemplo (poderia vir do servidor via fetch)
  const PROPERTIES = {
    'p1':{
      title: 'Casa Moderna',
      desc: 'Casa ampla com 3 quartos, 2 suítes, cozinha planejada, área gourmet e quintal. Localização próxima a escolas e comércios.',
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=80'
    },
    'p2':{
      title: 'Apartamento Luxo',
      desc: 'Apartamento no 10º andar com vista, 2 quartos sendo 1 suíte, varanda gourmet e 2 vagas na garagem.',
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1500&q=80'
    },
    'p3':{
      title: 'Casa de Campo',
      desc: 'Imóvel espaçoso com 4 quartos, piscina, área verde ampla e ambiente ideal para descanso.',
      img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1500&q=80'
    }
  };

  // Abrir modal preenchendo dados
  propertyButtons.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = btn.dataset.propertyId;
      const data = PROPERTIES[id];
      if(!data) return;
      propertyTitle.textContent = data.title;
      propertyDesc.textContent = data.desc;
      propertyImg.src = data.img;
      modalOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    })
  })

  // Fecha modal
  const closeModal = ()=>{
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
  }
  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e)=>{ if(e.target === modalOverlay) closeModal(); });

  // Busca simples
  const searchInput = document.getElementById('search');
  searchInput && searchInput.addEventListener('input', ()=>{
    const q = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('.card').forEach(card=>{
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      card.style.display = title.includes(q) ? '' : 'none';
    })
  })

  // Validação do formulário de contato
  const contactForm = document.getElementById('contact-form');
  contactForm && contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nome = contactForm.querySelector('[name="nome"]').value.trim();
    const email = contactForm.querySelector('[name="email"]').value.trim();
    const mensagem = contactForm.querySelector('[name="mensagem"]').value.trim();
    if(!nome || !email || !mensagem){
      alert('Por favor preencha todos os campos antes de enviar.');
      return;
    }
    // Simula envio
    alert('Mensagem enviada! Em breve nossa equipe entrará em contato.');
    contactForm.reset();
  })

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#') { e.preventDefault(); return }
      const el = document.querySelector(href);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
    })
  })

})
