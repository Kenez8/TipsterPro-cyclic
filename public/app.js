
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Extract data from the form
        const sport = document.getElementById('sport').value;
        const team1 = document.getElementById('team1').value;
        const team2 = document.getElementById('team2').value;
        const tip = document.getElementById('tip').value;
        const bet = document.getElementById('bet').value;

        // Validate input
        if (!team1 || !team2 || !bet) {
            alert('Please fill in all fields');
            return;
        }

        // Prepare the message
        const message = `${sport}\n${team1} vs ${team2}\nTipp: ${tip}\nTét: ${bet}%`;

        // Send the data to the server
        fetch('/sendToTelegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sport, team1, team2, tip, bet, message }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Tipp Sikeresen Elküldve!');
            // Optionally, clear the form or handle the response
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
