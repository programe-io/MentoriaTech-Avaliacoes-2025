// ================== GALERIA ==================
const carros = [
    { nome: "Mustang GT", imagem: "https://source.unsplash.com/500x300/?mustang" },
        { nome: "Nissan GTR", imagem: "https://source.unsplash.com/500x300/?gtr" },
            { nome: "Lamborghini Huracan", imagem: "https://source.unsplash.com/500x300/?lamborghini" },
                { nome: "Toyota Supra", imagem: "https://source.unsplash.com/500x300/?supra" },
                    { nome: "Ferrari F8", imagem: "https://source.unsplash.com/500x300/?ferrari" }
                    ];

                    const container = document.getElementById("carrosContainer");
                    const somSelecionar = document.getElementById("somSelecionar");

                    carros.forEach(carro => {
                        const card = document.createElement("div");
                            card.className = "card";

                                card.innerHTML = `
                                        <img src="${carro.imagem}">
                                                <h2>${carro.nome}</h2>
                                                        <button onclick="selecionar('${carro.nome}')">Selecionar</button>
                                                            `;

                                                                container.appendChild(card);
                                                                });

                                                                function selecionar(nome) {
                                                                    somSelecionar.play();
                                                                        alert("Você selecionou: " + nome);
                                                                        }



                                                                        // ================== MINI GAME ==================
                                                                        let gameStarted = false;
                                                                        let player = document.getElementById("playerCar");
                                                                        let gameArea = document.getElementById("gameArea");
                                                                        let somGame = document.getElementById("somGame");

                                                                        document.addEventListener("keydown", mover);

                                                                        function mover(e) {
                                                                            if (!gameStarted) return;

                                                                                let pos = player.offsetLeft;

                                                                                    if (e.key === "ArrowLeft" && pos > 0) {
                                                                                            player.style.left = pos - 20 + "px";
                                                                                                }
                                                                                                    if (e.key === "ArrowRight" && pos < 240) {
                                                                                                            player.style.left = pos + 20 + "px";
                                                                                                                }
                                                                                                                }

                                                                                                                function startGame() {
                                                                                                                    if (gameStarted) return;
                                                                                                                        gameStarted = true;

                                                                                                                            somGame.play();
                                                                                                                                somGame.loop = true;

                                                                                                                                    gerarObstaculos();
                                                                                                                                    }

                                                                                                                                    function gerarObstaculos() {
                                                                                                                                        if (!gameStarted) return;

                                                                                                                                            const obstaculo = document.createElement("div");
                                                                                                                                                obstaculo.classList.add("obstaculo");

                                                                                                                                                    obstaculo.style.left = Math.floor(Math.random() * 250) + "px";

                                                                                                                                                        gameArea.appendChild(obstaculo);

                                                                                                                                                            let check = setInterval(() => {
                                                                                                                                                                    let obstTop = obstaculo.offsetTop;
                                                                                                                                                                            let obstLeft = obstaculo.offsetLeft;

                                                                                                                                                                                    let playerLeft = player.offsetLeft;
                                                                                                                                                                                            let playerTop = player.offsetTop;

                                                                                                                                                                                                    if (
                                                                                                                                                                                                                obstTop > 380 &&
                                                                                                                                                                                                                            obstLeft > playerLeft - 40 &&
                                                                                                                                                                                                                                        obstLeft < playerLeft + 60
                                                                                                                                                                                                                                                ) {
                                                                                                                                                                                                                                                            alert("🏁 Game Over!");
                                                                                                                                                                                                                                                                        somGame.pause();
                                                                                                                                                                                                                                                                                    gameStarted = false;
                                                                                                                                                                                                                                                                                                obstaculo.remove();
                                                                                                                                                                                                                                                                                                            clearInterval(check);
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                            if (obstTop > 520) {
                                                                                                                                                                                                                                                                                                                                        obstaculo.remove();
                                                                                                                                                                                                                                                                                                                                                    clearInterval(check);
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                }, 50);

                                                                                                                                                                                                                                                                                                                                                                    setTimeout(gerarObstaculos, 1500);
                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                    