function changeLanguage() {
    var language = document.getElementById('lang').value;

    // Textes et fichiers audio pour chaque langue
    var messages = {
        "fr": {
            "greeting": "🎄 Joyeux Noël 2024 et Bonne Année 2025 à tous! 🎉",
            "message": "Avec tout mon cœur, je vous souhaite des fêtes remplies de joie et de bonheur, Votre Serviteur Franque Blanchard.",
            "buttonText": "Cliquez Ici Pour Écouter Le Message",
            "audioSrc": "voeux.mp3" // Fichier audio en français
        },
        "en": {
            "greeting": "🎄 Merry Christmas 2024 and Happy New Year 2025, Dears All! 🎉",
            "message": "With all my heart, I wish you holidays full of joy and happiness! All the best in your life.",
            "buttonText": "Click Here To Listen To The Message",
            "audioSrc": "voeu.mp3" // Fichier audio en anglais
        }
    };

    // Mettre à jour le texte selon la langue sélectionnée
    document.getElementById('greeting').innerText = messages[language].greeting;
    document.getElementById('message').innerText = messages[language].message;
    document.getElementById('playAudio').innerText = messages[language].buttonText;

    // Mettre à jour la source de l'audio
    var audioElement = document.getElementById('voeuxAudio');
    audioElement.src = messages[language].audioSrc;
}

// Fonction pour jouer/pause l'audio
const playButton = document.getElementById('playAudio');
const audio = document.getElementById('voeuxAudio');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause"; // Change le texte du bouton
    } else {
        audio.pause();
        playButton.textContent = "Cliquez Ici Pour Écouter Le Message";
    }
});
