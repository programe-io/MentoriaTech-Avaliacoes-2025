const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

playButton.addEventListener('click', () => {
    audio.play();
    });

    pauseButton.addEventListener('click', () => {
        audio.pause();
        });