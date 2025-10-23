// ===== Menu ativo =====
const sections = document.querySelectorAll('main article, main section');
const navLinks = document.querySelectorAll('nav a');

function setActiveMenu() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
}

window.addEventListener('scroll', setActiveMenu);
setActiveMenu();

// ===== Smooth scroll =====
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== Atualizar ano no footer =====
document.querySelector('.year').textContent = new Date().getFullYear();

// ===== Accordion com slide suave =====
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
    acc.addEventListener('click', () => {
        acc.classList.toggle('active');
        const panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = "0 20px";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = "12px 20px";
        }
    });
});

// ===== Modal com fade-in e fade-out =====
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll('main img');
const closeModal = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modal.style.opacity = 0;
        modalImg.src = img.src;
        captionText.textContent = img.alt;
        // animação fade-in
        let op = 0;
        const fadeIn = setInterval(() => {
            if (op >= 1) clearInterval(fadeIn);
            modal.style.opacity = op;
            op += 0.1;
        }, 30);
    });
});

function hideModal() {
    let op = 1;
    const fadeOut = setInterval(() => {
        if (op <= 0) {
            clearInterval(fadeOut);
            modal.style.display = "none";
        }
        modal.style.opacity = op;
        op -= 0.1;
    }, 30);
}

closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', e => {
    if (e.target === modal) hideModal();
});

// ===== Fade-in suave das seções com IntersectionObserver =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
