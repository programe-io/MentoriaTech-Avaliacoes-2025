// script.js
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("body, h1, h2, p, li");
  elements.forEach(el => {
    el.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    el.style.color = "black";
  });
});