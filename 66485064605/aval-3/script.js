document.getElementById("btnDica").addEventListener("click", mostrarDica);

function mostrarDica() {
  const tipo = document.getElementById("tipoCabelo").value;
  const resultado = document.getElementById("resultado");
  let dica = "";

  switch (tipo) {
    case "liso":
      dica = "🧴 Cabelos lisos tendem a ficar oleosos facilmente. Lave com shampoo leve, evite passar condicionador na raiz e finalize com produtos sem óleo.";
      break;
    case "ondulado":
      dica = "🌊 Cabelos ondulados precisam de hidratação semanal e finalizadores leves para definir as ondas sem pesar.";
      break;
    case "cacheado":
      dica = "💧 Cabelos cacheados amam hidratação! Use cremes com óleos naturais e evite pentear seco. Aposte na fitagem para definição.";
      break;
    case "crespo":
      dica = "🌿 Cabelos crespos precisam de nutrição profunda. Use manteigas e óleos vegetais e evite o uso excessivo de calor.";
      break;
    default:
      dica = "Por favor, selecione um tipo de cabelo para ver as dicas.";
  }

  resultado.innerHTML = `<p>${dica}</p>`;
}