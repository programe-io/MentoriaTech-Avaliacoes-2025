document.getElementById("btnYoutube").addEventListener("click", function() {
      window.open("https://m.youtube.com/watch?v=XX3dmVrSRA4&pp=ygUMYXlydG9uIHNlbm5h", "_blank");
      });

      function atualizarRelogio() {
        const agora = new Date();
          document.getElementById("relogio").innerText =
              "⏰ Horário atual: " + agora.toLocaleTimeString();
              }
              setInterval(atualizarRelogio, 1000);
              atualizarRelogio();

              const frases = [
                "Se você quer ser bem-sucedido, precisa ter dedicação total.",
                  "O medo faz parte da vida da gente. Algumas pessoas não sabem como enfrentá-lo.",
                    "Vencer é o que importa. O resto é a consequência."
                    ];

                    function mostrarFrase() {
                      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
                        document.getElementById("frase").innerText = "💬 " + fraseAleatoria;
                        }

                        mostrarFrase();
