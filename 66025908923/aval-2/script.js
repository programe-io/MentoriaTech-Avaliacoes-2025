// Seleciona os elementos
const fileInput = document.getElementById("file");
const sendButton = document.getElementById("sendButton");

// Ação ao clicar no botão
sendButton.addEventListener("click", function () {
    if (fileInput.files.length === 0) {
        alert("Por favor, selecione um arquivo antes de enviar.");
    } else {
        const fileName = fileInput.files[0].name;
        alert("Arquivo \"" + fileName + "\" enviado com sucesso!");
    }
});
