(function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const themeBtn = document.getElementById('themeBtn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.animate([{opacity:0.9},{opacity:1}], {duration:250});
  });
})();