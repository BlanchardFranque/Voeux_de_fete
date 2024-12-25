function changeLanguage() {
    var language = document.getElementById('lang').value;
    
    // Texte en français
    var messages = {
        "fr": {
            "greeting": "🎄 Joyeux Noël 2024 et Bonne Année 2025 à tous! 🎉",
            "message": "Avec tout mon cœur, je vous souhaite des fêtes remplies de joie et de bonheur, Votre Serviteur Franque Blanchard.",
            "buttonText": "Écouter mon message"
        },
        // Texte en anglais
        "en": {
            "greeting": "🎄 Merry Christmas 2024 and Happy New Year 2025, Dears All! 🎉",
            "message": "With all my heart, I wish you holidays full of joy and happiness ! All the best in your Live",
            "buttonText": "Listen to my message"
        }
    };

    // Change le texte selon la langue
    document.getElementById('greeting').innerText = messages[language].greeting;
    document.getElementById('message').innerText = messages[language].message;
    document.getElementById('playAudio').innerText = messages[language].buttonText;
}

// Fonction pour jouer/pause l'audio
const playButton = document.getElementById('playAudio');
const audio = document.getElementById('voeuxAudio');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "Pause";
    } else {
        audio.pause();
        playButton.textContent = "Cliquez Ici Pour Écouter Le Message";
    }
});
