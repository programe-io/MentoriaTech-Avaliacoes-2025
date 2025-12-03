const hamburger = document.getElementById('hamburger')
const menu = document.querySelector('.menu')

hamburger.onclick = () => menu.classList.toggle('active')

const elements = document.querySelectorAll('.fade-up')
function reveal() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 80) el.classList.add('visible')
    })
}
window.addEventListener('scroll', reveal)
reveal()

const thumbs = document.querySelectorAll('.thumb')
const lightbox = document.getElementById('lightbox')
const lbImg = document.getElementById('lbImg')
const closeLb = document.getElementById('closeLb')

thumbs.forEach(img => {
    img.onclick = () => {
        lbImg.src = img.src
        lightbox.style.display = 'flex'
    }
})

closeLb.onclick = () => lightbox.style.display = 'none'
lightbox.onclick = e => { if (e.target === lightbox) lightbox.style.display = 'none' }
