// Botão "Voltar ao Topo"
const btnTopo = document.getElementById("btnTopo");

// Mostrar botão quando o usuário rolar
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Ao clicar, volta ao topo
btnTopo.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
