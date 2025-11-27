function showInfo(name) {
    const info = {
        Dallas: "Dallas é o líder estratégico do grupo, responsável por coordenar o caos.",
        Hoxton: "Hoxton atua como especialista tático e segurança dos pontos críticos.",
        Chains: "Chains é o tanque da equipe — força e defesa na linha de frente.",
        Wick: "Wick cuida de eletrônicos, sistemas e hacking."
    };

    document.getElementById("infoName").innerText = name;
    document.getElementById("infoText").innerText = info[name];
    document.getElementById("infoBox").classList.remove("hidden");
}
