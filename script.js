document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Merci Titouan ! Votre message a bien été envoyé (démo).');
    
    this.reset();
});

console.log("Portfolio de Titouan Genève chargé avec succès.");