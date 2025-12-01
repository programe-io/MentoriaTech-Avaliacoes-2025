// script.js

// Ajusta quantidades conforme o controle de porções
const servingsInput = document.getElementById('servings');
const servingsLabel = document.getElementById('servingsLabel');
const qtyEls = document.querySelectorAll('.qty');

function updateServings(n){
  servingsLabel.textContent = n;
  // cada qty tem atributo data-base com quantidade para 2 porções por exemplo.
  qtyEls.forEach(el=>{
    const base = parseFloat(el.dataset.base); // número base
    if (isNaN(base)) return;
    // Assumimos que o base é para 2 porções. Ajuste se quiser outra referência.
    const adjusted = (base / 2) * n;
    // formata: se for inteiro, sem casas; senão com 1 casa
    el.textContent = Number.isInteger(adjusted) ? String(adjusted) : adjusted.toFixed(1);
  });
  // atualizar algumas infos simples (calorias estimadas)
  const calEl = document.getElementById('calorias');
  const perPortion = 600; // estimativa
  calEl.textContent = `${Math.round(perPortion * (2 / n))} kcal/porção`;
}

servingsInput.addEventListener('input', ()=> updateServings(Number(servingsInput.value)) );
updateServings(Number(servingsInput.value));

// Salvar favorita (localStorage)
const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', ()=>{
  const recipe = {
    title: document.querySelector('.hero h2').textContent,
    servings: Number(servingsInput.value),
    timestamp: Date.now()
  };
  localStorage.setItem('favRecipe', JSON.stringify(recipe));
  saveBtn.textContent = '✔ Favorita salva';
  setTimeout(()=> saveBtn.textContent = '♥ Salvar favorita', 1800);
});

// Imprimir receita
document.getElementById('printBtn').addEventListener('click', ()=> window.print());

// Pequeno efeito: trocar imagem ao clicar (exemplo)
const pizzaImg = document.getElementById('pizzaImg');
pizzaImg.addEventListener('click', ()=>{
  const alt = pizzaImg.alt;
  pizzaImg.classList.add('blink');
  setTimeout(()=> pizzaImg.classList.remove('blink'), 300);
});

// acessibilidade: tecla P -> print
window.addEventListener('keydown', (e)=>{
  if((e.key === 'p' || e.key === 'P') && (e.ctrlKey || e.metaKey)){
    e.preventDefault();
    window.print();
  }
});
