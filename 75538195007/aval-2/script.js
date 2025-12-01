// script.js

// Quando a página carregar
window.onload = function() {

    // Criar o elemento de imagem
    const imagem = document.createElement("img");

    // Adicionar o link da imagem (bicicleta modificada)
    imagem.src = "https://upload.wikimedia.org/wikipedia/commons/3/3d/Lowrider_bicycle_-_custom_bike.jpg";

    // Adicionar uma descrição alternativa
    imagem.alt = "Bicicleta modificada estilo lowrider";

    // Definir largura e bordas
    imagem.width = 500;
    imagem.style.borderRadius = "10px";
    imagem.style.display = "block";
    imagem.style.margin = "30px auto";
    imagem.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";

    // Escolher onde inserir — por exemplo, dentro da seção “inicio”
    const secaoInicio = document.getElementById("inicio");

    // Inserir a imagem no final da seção
    secaoInicio.appendChild(imagem);
};
