// Apenas valores fictícios animados
let dados = {
roubos: 12500,
furtos: 18900,
homicidios: 4300
};


function animarValor(id, valorFinal) {
let atual = 0;
let incremento = Math.ceil(valorFinal / 100);


let intervalo = setInterval(() => {
atual += incremento;
if (atual >= valorFinal) {
atual = valorFinal;
clearInterval(intervalo);
}
document.getElementById(id).textContent = atual;
}, 20);
}


animarValor("roubos", dados.roubos);
animarValor("furtos", dados.furtos);
animarValor("homicidios", dados.homicidios);