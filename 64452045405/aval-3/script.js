// ===============================
// LOJA ATLETA — ESTILOS EM JAVASCRIPT
// ===============================

// Cria um elemento <style>
const style = document.createElement("style");
style.textContent = `
:root {
  --accent: #1f8ef1;
  --dark: #0f1724;
  --muted: #9aa4b2;
  --card: #ffffff;
  --bg: #f6f8fa;
  --glass: rgba(255, 255, 255, 0.6);
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg);
  color: var(--dark);
  line-height: 1.45;
}

header {
  background: linear-gradient(90deg, var(--accent), #c70101);
  color: white;
  padding: 18px 20px;
  position: sticky;
  top: 0;
  z-index: 40;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 800;
  letter-spacing: 0.3px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-weight: 600;
}

nav a:hover {
  text-decoration: underline;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 460px;
  gap: 28px;
  padding: 44px 0;
  align-items: center;
}

.hero h1 {
  font-size: clamp(28px, 4vw, 44px);
  margin: 0 0 12px;
}

.hero p {
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 18px;
}

.cta {
  background: white;
  color: var(--accent);
  padding: 12px 18px;
  border-radius: 9px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.cta:hover {
  background: var(--accent);
  color: white;
}

.searchbar {
  display: flex;
  margin-top: 14px;
}

.searchbar input {
  flex: 1;
  padding: 10px;
  border-radius: 8px 0 0 8px;
  border: none;
  outline: none;
}

.searchbar button {
  padding: 10px 14px;
  border: none;
  border-radius: 0 8px 8px 0;
  background: rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: 0.2s;
}

.searchbar button:hover {
  background: var(--accent);
  color: white;
}

main {
  padding: 28px 0;
}

.section {
  margin: 36px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.card {
  background: var(--card);
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.06);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(16, 24, 40, 0.1);
}

.product-img {
  width: 100%;
  height: 200px;
  background: #eee;
  border-radius: 10px;
  object-fit: cover;
}

.price {
  font-weight: 800;
  color: var(--accent);
  margin-top: 8px;
}

.small {
  font-size: 14px;
  color: var(--muted);
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.pill {
  background: white;
  padding: 8px 10px;
  border-radius: 999px;
  box-shadow: 0 4px 10px rgba(16, 24, 40, 0.04);
  cursor: pointer;
  transition: 0.3s;
}

.pill:hover {
  background: var(--accent);
  color: white;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 20px;
  align-items: start;
}

footer {
  padding: 28px 0;
  border-top: 1px solid #e6eef7;
  margin-top: 34px;
  text-align: center;
}

.btn {
  background: var(--accent);
  color: white;
  padding: 10px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #1478c5;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(4, 8, 14, 0.45);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal.open {
  display: flex;
}

.modal-card {
  background: white;
  border-radius: 12px;
  padding: 18px;
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 18px;
}

.badge {
  display: inline-block;
  padding: 6px 8px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
}

.row {
  display: flex;
  gap: 10px;
  align-items: center;
}

.muted {
  color: var(--muted);
}

.chip {
  padding: 6px 9px;
  border-radius: 8px;
  background: #f3f7fb;
  font-weight: 600;
}

input,
textarea {
  font-family: inherit;
  border: 1px solid #e6eef7;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  margin: 6px 0;
  outline: none;
}

input:focus,
textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(31, 142, 241, 0.2);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
}

td {
  padding: 6px 0;
}

td.small.muted {
  font-weight: 600;
}

@media (max-width: 880px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .two-col {
    grid-template-columns: 1fr;
  }
  .modal-card {
    grid-template-columns: 1fr;
  }
  header nav {
    display: none;
  }
  .container {
    padding: 0 12px;
  }
}
`;

// Adiciona o estilo no <head>
document.head.appendChild(style);
