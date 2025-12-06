function mudarCor() {
    const motoImg = document.getElementById('moto-img');
    const descricao = document.getElementById('moto-descricao');
    const cores = ['grayscale(100%)', 'sepia(100%)', 'hue-rotate(180deg)', 'none'];
    const descricoes = ['Moto em preto e branco.', 'Moto com efeito sépia.', 'Moto com tom azulado.', 'Cor original da moto.'];
    
    let corAtual = motoImg.style.filter || 'none';
    let index = cores.indexOf(corAtual);
    
    if (index === -1 || index === cores.length - 1) {
        index = 0;
    } else {
        index++;
    }
    
    motoImg.style.filter = cores[index];
    descricao.textContent = descricoes[index];
}