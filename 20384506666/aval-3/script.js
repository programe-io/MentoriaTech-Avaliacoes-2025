// Cadastro do formulário
const form = document.getElementById('estudoForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio tradicional

        const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
                const materia = document.getElementById('materia').value;

                    alert(`Obrigado, ${nome}! Seu cadastro para ${materia} foi recebido.\nEnviaremos informações para ${email}.`);

                        form.reset();
                        });

                        // Pesquisa de matérias
                        const pesquisaInput = document.getElementById('pesquisaInput');
                        pesquisaInput.addEventListener('keyup', function() {
                            const filtro = pesquisaInput.value.toLowerCase();
                                const materias = document.querySelectorAll('.materia');

                                    materias.forEach(function(materia) {
                                            const texto = materia.textContent.toLowerCase();
                                                    if(texto.includes(filtro)) {
                                                                materia.style.display = '';
                                                                        } else {
                                                                                    materia.style.display = 'none';
                                                                                            }
                                                                                                });
                                                                                                });
                                                                                                