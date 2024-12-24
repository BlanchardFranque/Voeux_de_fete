// Cible le bouton et l'audio
const playButton = document.getElementById('playAudio');
const audio = document.getElementById('voeuxAudio');

// Ajouter un événement au clic pour jouer l'audio
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Écouter mon message";
    }
});
