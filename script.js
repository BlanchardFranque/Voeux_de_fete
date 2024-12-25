// Textes et fichiers audio pour chaque langue
const messages = {
    "fr": {
        "greeting": "🎄 Joyeux Noël 2024 et Bonne Année 2025 à tous! 🎉",
        "message": "Avec tout mon cœur, je vous souhaite des fêtes remplies de joie et de bonheur, Votre Serviteur Franque Blanchard.",
        "buttonText": "Cliquez Ici Pour Écouter Le Message",
        "audioSrc": "voeux.mp3", // Fichier audio en français
        "circleMessage": "Mes vœux les meilleurs pour vous"
    },
    "en": {
        "greeting": "🎄 Merry Christmas 2024 and Happy New Year 2025, Dear All! 🎉",
        "message": "With all my heart, I wish you holidays full of joy and happiness! All the best in your life.",
        "buttonText": "Click Here To Listen To The Message",
        "audioSrc": "voeu.mp3", // Fichier audio en anglais
        "circleMessage": "My Wishings to you"
    }
};

// Initialisation de la langue par défaut
document.addEventListener("DOMContentLoaded", () => {
    const defaultLanguage = "fr"; // Français par défaut
    setLanguage(defaultLanguage);
    document.getElementById('lang').value = defaultLanguage;
});

// Fonction pour changer la langue
function changeLanguage() {
    const selectedLanguage = document.getElementById('lang').value;
    setLanguage(selectedLanguage);
}

// Fonction pour mettre à jour le contenu selon la langue
function setLanguage(language) {
    document.getElementById('greeting').innerText = messages[language].greeting;
    document.getElementById('message').innerText = messages[language].message;
    document.getElementById('playAudio').innerText = messages[language].buttonText;

    // Mettre à jour la source de l'audio
    const audioElement = document.getElementById('voeuxAudio');
    audioElement.src = messages[language].audioSrc;

    // Mettre à jour le message circulaire
    document.getElementById('circle-message').innerText = messages[language].circleMessage;
}
