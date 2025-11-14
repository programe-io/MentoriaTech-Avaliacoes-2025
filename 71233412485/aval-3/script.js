<script>
// compute next year where (year - baseYear) % interval === 0 and >= current year
let offset = (year - baseYear) % interval;
if(offset < 0) offset += interval;
const next = offset === 0 ? year : year + (interval - offset);
// if this year is an appearance but date already passed this year's apparition date, move to next
// we'll use a fictional apparition date: Nov 30 of that year
const apparitionDate = new Date(next,10,30);
const final = (apparitionDate >= now) ? next : next + interval;
return final;
}


const next = yearsUntilNext();
document.getElementById('nextAppearance').textContent = next + ' (próxima aparição estimada)';


const monster = document.getElementById('monster');
const eyes = monster.querySelectorAll('.eye');


function revealMonster(){
monster.classList.add('visible','specter');
monster.style.transform = 'scale(1)';
// pulse eyes
eyes.forEach((e,i)=>{ setTimeout(()=> e.style.boxShadow = '0 0 18px var(--accent)', 200 * i); });
// small floating
monster.animate([
{transform:'translateY(0) scale(1)'},
{transform:'translateY(-12px) scale(1.02)'},
{transform:'translateY(0) scale(1)'}
],{duration:2800,iterations:Infinity});
}


function hideMonster(){
monster.classList.remove('visible');
eyes.forEach(e=>e.style.boxShadow='none');
}


// If current year is an appearance year, reveal the monster
if((year - baseYear) % interval === 0){
// If it's the appearance year, slowly reveal
setTimeout(revealMonster, 600);
} else {
hideMonster();
}


// Card interactivity
const cards = document.querySelectorAll('.card');
cards.forEach(c => {
c.addEventListener('click', ()=>{
const inner = c.querySelector('.card-inner');
// flip
inner.style.transform = inner.style.transform === 'rotateY(180deg) translateY(-6px)' ? '' : 'rotateY(180deg) translateY(-6px)';
// reveal a short rune whisper
const sigil = c.dataset.sigil || '?';
whisper(sigil + ' — uma promessa das sombras.');
// if you reveal the central card, the monster flinches and may show
if(sigil === '⚚'){
revealMonster();
setTimeout(()=>{ hideMonster(); }, 4500);
}
});
});


function whisper(text){
// temporary toast
const t = document.createElement('div');
t.textContent = text;
Object.assign(t.style,{position:'fixed',left:'50%',transform:'translateX(-50%)',bottom:'22px',background:'var(--glass)',color:'#eae8f5',padding:'10px 14px',borderRadius:'10px',fontSize:'13px',boxShadow:'0 8px 30px rgba(0,0,0,0.6)',zIndex:999});
document.body.appendChild(t);
setTimeout(()=> t.style.opacity = '0',2400);
setTimeout(()=> t.remove(),3000);
}


// small ambient flicker loop to keep it alive
setInterval(()=>{
const glow = document.querySelectorAll('.sigil');
glow.forEach((g,i)=> g.style.transform = 'translateY(' + (Math.sin(Date.now()/800 + i) * 3).toFixed(2) + 'px)');
},120);


