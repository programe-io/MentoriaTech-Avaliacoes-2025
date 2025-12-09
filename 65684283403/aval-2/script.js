function alterarDados() {
        const nome = prompt("Digite seu nome:");
            const idade = prompt("Digite sua idade:");
                const cidade = prompt("Digite sua cidade:");
                    const hobby = prompt("Digite seu hobby favorito:");
                        const bio = prompt("Digite uma breve biografia sobre você:");

                            if (nome) document.getElementById("nomeTitulo").textContent = nome;
                                if (bio) document.getElementById("textoBio").textContent = bio;

                                    const lista = document.getElementById("listaInfo");
                                        lista.innerHTML = `
                                                <li><strong>Idade:</strong> ${idade} anos</li>
                                                        <li><strong>Cidade:</strong> ${cidade}</li>
                                                                <li><strong>Hobby:</strong> ${hobby}</li>
                                                                    `;
                                                                    }
                                                                    
}