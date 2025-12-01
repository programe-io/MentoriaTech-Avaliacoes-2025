const toggle = document.getElementById('toggleTheme');


toggle.addEventListener('click', () => {
const root = document.documentElement;
if(root.style.getPropertyValue('--bg') === 'black'){
root.style.setProperty('--bg','#fff6fb');
root.style.setProperty('--card','#fff');
root.style.setProperty('--text','#333');
root.style.setProperty('--muted','#666');
} else {
root.style.setProperty('--bg','black');
root.style.setProperty('--card','#111');
root.style.setProperty('--text','#eee');
root.style.setProperty('--muted','#bbb');
}
});


const modal = document.getElementById('modal');
document.getElementById('openRecipe').addEventListener('click',()=> modal.classList.add('open'));
document.getElementById('closeModal').addEventListener('click',()=> modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});


document.getElementById('sendMsg').addEventListener('click',()=>{
const nome = document.getElementById('name').value.trim();
const msg = document.getElementById('msg').value.trim();
const status = document.getElementById('msgStatus');


if(!nome || !msg){
status.textContent = 'Preencha nome e mensagem.';
return;
}


status.textContent = `Obrigado, ${nome}! Mensagem enviada.`;
});