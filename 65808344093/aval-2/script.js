document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('.main-nav a');
  links.forEach(a => a.addEventListener('click', () => {
    links.forEach(x => x.classList.remove('active'));
    a.classList.add('active');
  }));
});
