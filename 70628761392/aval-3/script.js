// ====== MODO DARK / LIGHT ======
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    }



    // ====== ALERTA DE MOTIVAÇÃO ======
    function motivar() {
        alert("Você consegue! Só mais um pouco de estudo hoje! 💪📚");
        }



        // ====== MOSTRAR / ESCONDER DICAS ======
        function alternarDicas() {
            const dicas = document.getElementById("caixa-dicas");

                if (dicas.style.display === "none") {
                        dicas.style.display = "block";
                            } else {
                                    dicas.style.display = "none";
                                        }
                                        }



                                        // ====== RELÓGIO EM TEMPO REAL ======
                                        function atualizarRelogio() {
                                            const clock = document.getElementById("relogio");
                                                const agora = new Date();

                                                    let horas = agora.getHours().toString().padStart(2, "0");
                                                        let minutos = agora.getMinutes().toString().padStart(2, "0");
                                                            let segundos = agora.getSeconds().toString().padStart(2, "0");

                                                                clock.textContent = `${horas}:${minutos}:${segundos}`;
                                                                }

                                                                setInterval(atualizarRelogio, 1000);