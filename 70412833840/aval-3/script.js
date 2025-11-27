
let perguntas = [
    {
            pergunta: "Qual é o maior planeta do Sistema Solar?",
                    opcoes: ["Terra", "Júpiter", "Marte", "Saturno"],
                            correta: 1
                                },
                                    {
                                            pergunta: "Quem pintou a Mona Lisa?",
                                                    opcoes: ["Michelangelo", "Van Gogh", "Leonardo da Vinci", "Picasso"],
                                                            correta: 2
                                                                },
                                                                    {
                                                                            pergunta: "Quanto é 9 x 7?",
                                                                                    opcoes: ["63", "72", "56", "49"],
                                                                                            correta: 0
                                                                                                },
                                                                                                    {
                                                                                                            pergunta: "Qual país venceu a Copa do Mundo de 2002?",
                                                                                                                    opcoes: ["Alemanha", "Brasil", "Argentina", "França"],
                                                                                                                            correta: 1
                                                                                                                                },
                                                                                                                                    {
                                                                                                                                            pergunta: "Quem inventou a lâmpada elétrica?",
                                                                                                                                                    opcoes: ["Graham Bell", "Albert Einstein", "Thomas Edison", "Tesla"],
                                                                                                                                                            correta: 2
                                                                                                                                                                }
                                                                                                                                                                ];

                                                                                                                                                                let indice = 0;
                                                                                                                                                                let pontos = 0;
                                                                                                                                                                let respostaSelecionada = null;

                                                                                                                                                                let perguntaEl = document.getElementById("pergunta");
                                                                                                                                                                let opcoesEl = document.getElementById("opcoes");
                                                                                                                                                                let proximaBtn = document.getElementById("proxima");

                                                                                                                                                                carregarPergunta();

                                                                                                                                                                function carregarPergunta() {
                                                                                                                                                                    let q = perguntas[indice];

                                                                                                                                                                        perguntaEl.innerText = q.pergunta;
                                                                                                                                                                            opcoesEl.innerHTML = "";
                                                                                                                                                                                respostaSelecionada = null;
                                                                                                                                                                                    proximaBtn.disabled = true;

                                                                                                                                                                                        q.opcoes.forEach((opcao, i) => {
                                                                                                                                                                                                let btn = document.createElement("button");
                                                                                                                                                                                                        btn.innerText = opcao;

                                                                                                                                                                                                                btn.onclick = function () {
                                                                                                                                                                                                                            document.querySelectorAll("#opcoes button")
                                                                                                                                                                                                                                            .forEach(b => b.classList.remove("selecionado"));
                                                                                                                                                                                                                                                        btn.classList.add("selecionado");

                                                                                                                                                                                                                                                                    respostaSelecionada = i;
                                                                                                                                                                                                                                                                                proximaBtn.disabled = false;
                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                opcoesEl.appendChild(btn);
                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                    proximaBtn.onclick = function () {
                                                                                                                                                                                                                                                                                                        if (respostaSelecionada === perguntas[indice].correta) {
                                                                                                                                                                                                                                                                                                                pontos++;
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                        indice++;

                                                                                                                                                                                                                                                                                                                            if (indice < perguntas.length) {
                                                                                                                                                                                                                                                                                                                                    carregarPergunta();
                                                                                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                                                                                                mostrarResultado();
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                                                                    function mostrarResultado() {
                                                                                                                                                                                                                                                                                                                                                        document.getElementById("quizBox").style.display = "none";
                                                                                                                                                                                                                                                                                                                                                            document.getElementById("resultado").style.display = "block";

                                                                                                                                                                                                                                                                                                                                                                let txt = `Você acertou ${pontos} de ${perguntas.length} perguntas!`;
                                                                                                                                                                                                                                                                                                                                                                    document.getElementById("textoResultado").innerText = txt;
                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                    function reiniciar() {
                                                                                                                                                                                                                                                                                                                                                                        indice = 0;
                                                                                                                                                                                                                                                                                                                                                                            pontos = 0;

                                                                                                                                                                                                                                                                                                                                                                                document.getElementById("quizBox").style.display = "block";
                                                                                                                                                                                                                                                                                                                                                                                    document.getElementById("resultado").style.display = "none";

                                                                                                                                                                                                                                                                                                                                                                                        carregarPergunta();
                                                                                                                                                                                                                                                                                                                                                                                        }