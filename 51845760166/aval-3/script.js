/* Fade-in da página */
document.body.style.opacity = "0";
setTimeout(() => {
    document.body.style.transition = "2s";
        document.body.style.opacity = "1";
        }, 200);

        /* Neve animada */
        const canvas = document.querySelector('.snow');
        const ctx = canvas.getContext('2d');

        canvas.width = innerWidth;
        canvas.height = innerHeight;

        let flakes = [];
        for (let i = 0; i < 200; i++) {
            flakes.push({
                    x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                                    r: Math.random() * 3 + 1,
                                            d: Math.random() + 1
                                                });
                                                }

                                                function drawSnow() {
                                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                        ctx.fillStyle = "white";

                                                            flakes.forEach(f => {
                                                                    ctx.beginPath();
                                                                            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                                                                                    ctx.fill();
                                                                                        });

                                                                                            moveSnow();
                                                                                            }

                                                                                            function moveSnow() {
                                                                                                flakes.forEach(f => {
                                                                                                        f.y += f.d;
                                                                                                                if (f.y > canvas.height) f.y = -10;
                                                                                                                    });
                                                                                                                    }

                                                                                                                    setInterval(drawSnow, 35);

                                                                                                                    /* Runas caindo */
                                                                                                                    const runes = ["ᚠ","ᚢ","ᚦ","ᚨ","ᚱ","ᚲ","ᛟ","ᛞ"];

                                                                                                                    for (let i = 0; i < 20; i++) {
                                                                                                                        const r = document.createElement("div");
                                                                                                                            r.className = "rune";
                                                                                                                                r.textContent = runes[Math.floor(Math.random() * runes.length)];
                                                                                                                                    r.style.left = Math.random() * 100 + "vw";
                                                                                                                                        r.style.animationDuration = (5 + Math.random() * 5) + "s";
                                                                                                                                            r.style.fontSize = (24 + Math.random() * 20) + "px";
                                                                                                                                                document.body.appendChild(r);}