document.addEventListener("DOMContentLoaded", () => {
  const btnTheme = document.getElementById("btnTheme");
  const root = document.documentElement;
  const THEME_KEY = "site-theme";

  function applyTheme(theme) {
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }

  // Aplica tema salvo
  applyTheme(localStorage.getItem(THEME_KEY) || "dark");

  btnTheme.addEventListener("click", () => {
    const next = root.classList.contains("light") ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
});

