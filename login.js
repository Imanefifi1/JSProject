   // Fonction pour valider le formulaire de login
   document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Récupérer les valeurs des champs
    var email = document.getElementById("inp2").value;
    var password = document.getElementById("inp3").value;

    // Vérification de l'email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Empêche la soumission du formulaire
        return;
    }

    // Vérification du mot de passe
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault(); // Empêche la soumission du formulaire
        return;
    }

    // Si toutes les validations passent, le formulaire est envoyé
});