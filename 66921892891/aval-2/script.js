const valor = document.getElementById("valor");
const origem = document.getElementById("origem");
const resultado = document.getElementById("resultado");

function converter() {
  const v = parseFloat(valor.value);
  if (isNaN(v)) {
    resultado.textContent = "Digite um valor válido...";
    return;
  }

  let c, f, k;

  if (origem.value === "C") {
    c = v;
    f = (v * 9/5) + 32;
    k = v + 273.15;
  } else if (origem.value === "F") {
    c = (v - 32) * 5/9;
    f = v;
    k = (v - 32) * 5/9 + 273.15;
  } else if (origem.value === "K") {
    c = v - 273.15;
    f = (v - 273.15) * 9/5 + 32;
    k = v;
  }

  resultado.innerHTML = `
    <div>${c.toFixed(2)} °C</div>
    <div>${f.toFixed(2)} °F</div>
    <div>${k.toFixed(2)} K</div>
  `;
}

valor.addEventListener("input", converter);
origem.addEventListener("change", converter);