// --- Mostrar / Ocultar Dicas ---
function toggleDicas() {
    const dicas = document.getElementById("dicas");
        if (dicas.style.display === "none") {
                dicas.style.display = "block";
                    } else {
                            dicas.style.display = "none";
                                }
                                }

                                // --- Alerta rápido ao clicar em métodos ---
                                function avisarMetodo() {
                                    alert("Siga o passo a passo com atenção para um bolo perfeito!");
                                    }

                                    // --- Cronômetro do forno (40 minutos) ---
                                    let tempo = 40 * 60; // 40 minutos em segundos
                                    let timerAtivo = false;

                                    function iniciarCronometro() {
                                        if (timerAtivo) return; // evita iniciar duas vezes

                                            timerAtivo = true;

                                                const display = document.getElementById("cronometro");

                                                    const intervalo = setInterval(() => {
                                                            let minutos = Math.floor(tempo / 60);
                                                                    let segundos = tempo % 60;

                                                                            segundos = segundos < 10 ? "0" + segundos : segundos;

                                                                                    display.textContent = `${minutos}:${segundos}`;

                                                                                            if (tempo <= 0) {
                                                                                                        clearInterval(intervalo);
                                                                                                                    display.textContent = "Pronto!";
                                                                                                                                alert("⏰ O bolo terminou de assar!");
                                                                                                                                        }

                                                                                                                                                tempo--;
                                                                                                                                                    }, 1000);
                                                                                                                                                    }

                                                                                                                                                    // Mensagem de boas-vindas
                                                                                                                                                    document.addEventListener("DOMContentLoaded", () => {
                                                                                                                                                        console.log("Página carregada! Boa receita! 🍰");
                                                                                                                                                        });