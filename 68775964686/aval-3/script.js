function buscar(){
  const termo = document.getElementById('buscar').value;
  if(!termo){
    alert("Digite algo para pesquisar");
    return;
  }
  alert("Buscando: " + termo);
}

console.log("Site CETI Joel Ribeiro carregado");