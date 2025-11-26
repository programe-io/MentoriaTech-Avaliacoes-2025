function calculateImpact() {
    const cigarettesPerDay = document.getElementById('cigarros').value;
    const resultElement = document.getElementById('result-message');

    if (cigarettesPerDay > 0) {
        // Estima-se que cada cigarro reduz a expectativa de vida em cerca de 11 minutos.
        const minutesPerCigarette = 11;
        const totalMinutesLostPerDay = cigarettesPerDay * minutesPerCigarette;
        const totalHoursLostPerDay = (totalMinutesLostPerDay / 60).toFixed(2);
        const totalDaysLostPerDay = (totalHoursLostPerDay / 24).toFixed(2);

        resultElement.innerHTML = `Fumar ${cigarettesPerDay} cigarros por dia pode custar aproximadamente ${totalHoursLostPerDay} horas (ou ${totalDaysLostPerDay} dias) da sua vida a cada dia fumado. Pense nisso.`;
    } else if (cigarettesPerDay == 0) {
        resultElement.innerHTML = "Parabéns por não fumar! Sua saúde agradece.";
    } else {
        resultElement.innerHTML = "Por favor, insira um número válido de cigarros.";
    }
}
