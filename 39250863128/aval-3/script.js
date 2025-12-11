// Slider
let slideIndex=0;
const slides=document.querySelectorAll(".slides img");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");

function showSlides(){
    slides.forEach(s=>s.style.display="none");
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1;}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,4000);
}
showSlides();

prev.addEventListener("click",()=>{slideIndex-=2;showSlides();});
next.addEventListener("click",()=>{showSlides();});

// Scroll header effect
const header=document.getElementById("header");
window.addEventListener("scroll",()=>{if(window.scrollY>50){header.classList.add("scrolled");}else{header.classList.remove("scrolled");}});

// Tabs
const tabButtons=document.querySelectorAll(".tab-buttons button");
const tabContents=document.querySelectorAll(".tab-content");
tabButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        tabButtons.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        const tabId="tab-"+btn.dataset.tab;
        tabContents.forEach(tc=>tc.classList.remove("active"));
        document.getElementById(tabId).classList.add("active");
    });
});

// Scroll reveal notícias
const newsCards=document.querySelectorAll(".news-card");
window.addEventListener("scroll",()=>{
    newsCards.forEach(card=>{
        const rect=card.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            card.classList.add("visible");
        }
    });
});
