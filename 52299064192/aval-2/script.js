const footer = document.querySelector("footer p"); 
const ano = new Date().getFullYear(); 
footer.innerHTML = `&copy; ${ano} - Todos os Direitos Reservados - Mentoria Tech | Blog 
pessoal desenvolvido em ${ano}`;