document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPassphrase = document.getElementById('passphrase').value;
    const messageElement = document.getElementById('message');

    // Vérification de la phrase secrète
    if (inputPassphrase === 'Lhde#2026!') {
        messageElement.style.color = '#22c55e';
        messageElement.textContent = 'Accès autorisé ! Bienvenue sur le portail Tortu17 Security.';
    } else {
        messageElement.style.color = '#ef4444';
        messageElement.textContent = 'Mot de passe incorrect. Accès refusé.';
    }
});
