const titles = document.querySelectorAll('article.entry h2');
titles.forEach(titleEl => {
  titleEl.style.cursor = 'pointer';
  titleEl.addEventListener('click', () => {
    alert(`Você clicou no post: "${titleEl.textContent}"`);
  });
});
