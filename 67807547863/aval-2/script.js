const navLinks = document.querySelectorAll('nav a');

function ativarLink() {
  let scrollPos = window.scrollY || window.pageYOffset;

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= scrollPos + 60 &&
      section.offsetTop + section.offsetHeight > scrollPos + 60
    ) {
      link.classList.add('ativo');
    } else {
      link.classList.remove('ativo');
    }
  });
}

window.addEventListener('scroll', ativarLink);