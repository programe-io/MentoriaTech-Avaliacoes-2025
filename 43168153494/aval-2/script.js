function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let escala = document.getElementById("escala").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.innerHTML = "⚠️ Digite um número válido!";
        return;
    \}

    let c, f, k;

    if (escala === "c") {
        c = valor;
        f = c * 9/5 + 32;
        k = c + 273.15;
    \} else if (escala === "f") {
        f = valor;
        c = (f - 32) * 5/9;
        k = c + 273.15;
    \} else {
        k = valor;
        c = k - 273.15;
        f = c * 9/5 + 32;
    \}

    resultado.innerHTML =
        `Celsius: \${c.toFixed(2)\}°C<br>
         Fahrenheit: \${f.toFixed(2)\}°F<br>
         Kelvin: \${k.toFixed(2)\}K`;
\}$0