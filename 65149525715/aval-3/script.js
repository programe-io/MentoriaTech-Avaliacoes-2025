let total = 0;

function curtir(){
  total++;
  document.getElementById("contador").innerText = total;
}

function resetar(){
  total = 0;
  document.getElementById("contador").innerText = total;
}
