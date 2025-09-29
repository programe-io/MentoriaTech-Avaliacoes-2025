```javascript
// Exemplo de interação simples no menu
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alert("Você clicou em " + link.textContent);
  });
});
```
