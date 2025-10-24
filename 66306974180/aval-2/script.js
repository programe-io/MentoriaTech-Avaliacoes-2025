//login
    function login() {
        const email = document.querySelector('input[placeholder="Email"]').value;
        const senha = document.querySelector('input[placeholder="Senha"]').value;

        if (email.trim() === "" || senha.trim() === "") {
            alert("Preencha todos os campos.");
            return;
        }

        alert("Login realizado com sucesso!");
        window.location.href = "quiz.html"; 
    }
//registro
     function registrar() {
    
         alert("Registrado com sucesso!");
         window.location.href = "index.html";
}
//apenas simulçoes acima