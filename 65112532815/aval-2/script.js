function updateClock() {
    const clockElement = document.getElementById('clock');
    const timezoneSelect = document.getElementById('timezone');
    const offset = parseInt(timezoneSelect.value);

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const localTime = new Date(utc + (3600000 * offset));

    let hours = localTime.getHours();
    let minutes = localTime.getMinutes();
    let seconds = localTime.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    clockElement.setAttribute('datetime', `${hours}:${minutes}:${seconds}`);
}

// Atualiza a cada segundo
setInterval(updateClock, 1000);
window.onload = updateClock;
