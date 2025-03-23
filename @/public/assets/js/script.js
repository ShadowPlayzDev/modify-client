let currentGame;
let isDarkMode = true;
const clientVersion = "v1.0.0";

function openTab(tabName) {
    let tabs = document.getElementsByClassName('tab-content');
    for (let tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';

    let tabButtons = document.getElementsByClassName('tab-button');
    for (let button of tabButtons) {
        button.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-tab');
}

function launchGame(game) {
    currentGame = game;
    document.getElementById('launchModal').style.display = 'block';
}

function launchWith(platform) {
    let gameMode, gameType;

    if (currentGame === 'overwatch') {
        gameMode = document.getElementById('gameMode').value;
        gameType = document.getElementById('gameType').value;
        console.log(`Launching Overwatch: ${gameType} ${gameMode} via ${platform}`);
        alert(`Launching Overwatch: ${gameType} ${gameMode} via ${platform}`);
    } else if (currentGame === 'marvel') {
        console.log(`Launching Marvel Rivals via ${platform}`);
        alert(`Launching Marvel Rivals via ${platform}`);
    }

    closeModal();
}

function closeModal() {
    document.getElementById('launchModal').style.display = 'none';
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    if (isDarkMode) {
        document.getElementById('themeIcon').textContent = 'dark_mode';
    } else {
        document.getElementById('themeIcon').textContent = 'light_mode';
    }
}

function login() {
    alert("Login functionality not implemented.");
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'block';
    document.getElementById('footerDisplay').textContent = `MODIFY Client ${clientVersion}`;
    document.getElementById('footerDisplay').style.textAlign = 'center';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

// Hide Modals on load.
document.addEventListener('DOMContentLoaded', function() {
    closeModal();
    closeSettings();
});
