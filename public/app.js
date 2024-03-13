function toggleInputFields() {
    const tipSelect = document.getElementById('tip');
    //összes gól/több-kevessebb, mint
    const goalsInput1 = document.getElementById('goalsInput1');
    const goalsInput2 = document.getElementById('goalsInput2');
    //team1 góljai/több-kevesebb, mint
    const goalsInput3 = document.getElementById('goalsInput3');
    const goalsInput4 = document.getElementById('goalsInput4');
    //team2 góljai/több-kevesebb, mint
    const goalsInput5 = document.getElementById('goalsInput5');
    const goalsInput6 = document.getElementById('goalsInput6');
    //handicap
    const handicapInput1 = document.getElementById('handicapInput1');
    const handicapInput2 = document.getElementById('handicapInput2');
    //szögletek
    const cornersInputMore = document.getElementById('cornersInputMore');
    const cornersInputLess = document.getElementById('cornersInputLess');
    //szögletek, első félidő
    const firstHalfCornersInputMore = document.getElementById('firstHalfCornersInputMore');
    //büntetőlapok
    const cardsInputMore = document.getElementById('cardsInputMore');
    const cardsInputLess = document.getElementById('cardsInputLess');

    //összes gól/több-kevessebb, mint
    goalsInput1.style.display = tipSelect.value === 'more_than_goals' ? 'block' : 'none';
    goalsInput2.style.display = tipSelect.value === 'less_than_goals' ? 'block' : 'none';
    //team1 góljai/több-kevesebb, mint
    goalsInput3.style.display = tipSelect.value === 'team1_more_than' ? 'block' : 'none';
    goalsInput4.style.display = tipSelect.value === 'team1_less_than' ? 'block' : 'none';
    //team2 góljai/több-kevesebb, mint
    goalsInput5.style.display = tipSelect.value === 'team2_more_than' ? 'block' : 'none';
    goalsInput6.style.display = tipSelect.value === 'team2_less_than' ? 'block' : 'none';
    //handicap
    handicapInput1.style.display = tipSelect.value === 'asian_handicap_team1' ? 'block' : 'none';
    handicapInput2.style.display = tipSelect.value === 'asian_handicap_team2' ? 'block' : 'none';
    //szögletek
    cornersInputMore.style.display = tipSelect.value === 'corners_more_than' ? 'block' : 'none';
    cornersInputLess.style.display = tipSelect.value === 'corners_less_than' ? 'block' : 'none';
    //szögletek, első félidő
    firstHalfCornersInputMore.style.display = tipSelect.value === 'first_half_corners_more_than' ? 'block' : 'none';
     //büntetőlapok
    cardsInputMore.style.display = tipSelect.value === 'cards_more_than' ? 'block' : 'none';
    cardsInputLess.style.display = tipSelect.value === 'cards_less_than' ? 'block' : 'none';
} 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
   
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Extract data from the form
        const sport = document.getElementById('sport').value;
        const team1 = document.getElementById('team1').value;
        const team2 = document.getElementById('team2').value;
        let tip = document.getElementById('tip').value;
        const bet = document.getElementById('bet').value;
        const odds = document.getElementById('odds').value;

            // Check for the "Több, mint gól" option and adjust tip accordingly
       if (tip === 'more_than_goals') {
        const numberOfGoals1 = document.getElementById('numberOfGoals1').value;
        if (!numberOfGoals1.trim()) {
            alert('Add meg a gólok számát');
            return;
        }
        tip = `Több, mint ${numberOfGoals1} gól`;
       }
            // Handling "Kevesebb, mint gól" option
            else if (tip === 'less_than_goals') {
                const numberOfGoals2 = document.getElementById('numberOfGoals2').value;
                if (!numberOfGoals2.trim()) {
                    alert('Add meg a gólok számát');
                    return;
                }
                tip = `Kevesebb, mint ${numberOfGoals2} gól`;
             }
            // Handling "team 1 több, mint gól" option
            else if (tip === 'team1_more_than') {
                const numberOfGoals3 = document.getElementById('numberOfGoals3').value;
                if (!numberOfGoals3.trim()) {
                    alert('Add meg a gólok számát');
                    return;
                }
                tip = `${team1}\ntöbb, mint ${numberOfGoals3} gólt szerez`;
                }
            // Handling "team 1 kevesebb, mint gól" option
            else if (tip === 'team1_less_than') {
                const numberOfGoals4 = document.getElementById('numberOfGoals4').value;
                if (!numberOfGoals4.trim()) {
                    alert('Add meg a gólok számát');
                    return;
                }
                tip = `${team1}\nkevesebb, mint ${numberOfGoals4} gólt szerez`;
            }
            // Handling "team 2 több, mint gól" option
            else if (tip === 'team2_more_than') {
                const numberOfGoals5 = document.getElementById('numberOfGoals5').value;
                if (!numberOfGoals5.trim()) {
                    alert('Add meg a gólok számát');
                    return;
                }
                tip = `${team2}\ntöbb, mint ${numberOfGoals5} gólt szerez`;
            }
            // Handling "team 2 kevesebb, mint gól" option
            else if (tip === 'team2_less_than') {
                const numberOfGoals6 = document.getElementById('numberOfGoals6').value;
                if (!numberOfGoals6.trim()) {
                    alert('Add meg a gólok számát');
                    return;
                }
                tip = `${team2}\nkevesebb, mint ${numberOfGoals6} gólt szerez`;
            }

            // Handling "Ázsiai Handicap első csapat" option
            else if (tip === 'asian_handicap_team1') {
                const handicapNumber1 = document.getElementById('handicapNumber1').value;
                if (!handicapNumber1) {
                    alert('Add meg a Handicap értékét');
                    return;
                }
                tip = `Ázsiai Handicap:\n${team1} ${handicapNumber1}`;
            }
            // Handling "Ázsiai Handicap második csapat" option
            else if (tip === 'asian_handicap_team2') {
                const handicapNumber2 = document.getElementById('handicapNumber2').value;
                if (!handicapNumber2) {
                    alert('Add meg a Handicap értékét');
                    return;
                }
                tip = `Ázsiai Handicap:\n${team2} ${handicapNumber2}`;
            }
            // Handling "Szögletek több, mint" option
            else if (tip === 'corners_more_than') {
                const cornersMoreThan = document.getElementById('numberOfCornersMore').value;
                if (!cornersMoreThan.trim()) {
                    alert('Add meg a szögletek számát');
                    return;
                }
                tip = `Szögletek több, mint ${cornersMoreThan}`;
            }
            // Handling "Szögletek kevesebb, mint" option
            else if (tip === 'corners_less_than') {
                const cornersLessThan = document.getElementById('numberOfCornersLess').value;
                if (!cornersLessThan.trim()) {
                    alert('Add meg a szögletek számát');
                    return;
                }
                tip = `Szögletek kevesebb, mint ${cornersLessThan}`;
            }
            // Handling "Szögletek több, mint első félidő" option
            else if (tip === 'first_half_corners_more_than') {
                const firstHalfCornersMore = document.getElementById('numberOfFirstHalfCornersMore').value;
                if (!firstHalfCornersMore.trim()) {
                    alert('Add meg az első félidő szögleteinek számát');
                    return;
                }
                tip = `Első félidő szögletek több, mint ${firstHalfCornersMore}`;
            }
            // Handling "Lapok több, mint" option
            else if (tip === 'cards_more_than') {
                const cardsMoreThan = document.getElementById('numberOfCardsMore').value;
                if (!cardsMoreThan.trim()) {
                    alert('Add meg a lapok számát');
                    return;
                }
                tip = `Lapok több, mint ${cardsMoreThan}`;
            }
            // Handling "Lapok kevesebb, mint" option
            else if (tip === 'cards_less_than') {
                const cardsLessThan = document.getElementById('numberOfCardsLess').value;
                if (!cardsLessThan.trim()) {
                    alert('Add meg a lapok számát');
                    return;
                }
                tip = `Lapok kevesebb, mint ${cardsLessThan}`;
            }
            // Handling "Az első csapat nyer" option
            else if (tip === 'Az első csapat nyer') {
                tip = `${team2} nyer`;
            }
            // Handling "A második csapat nyer" option
            else if (tip === 'A második csapat nyer') {
                tip = `${team2} nyer`;
            }
            // Validate input
        if (!team1 || !team2 || !bet) {
            alert('Please fill in all fields');
            return;
        }

        // Prepare the message
        const message = `${sport}\n${team1} vs ${team2}\nTipp: ${tip}\nOdds: ${odds}\nTét: ${bet}%`;

        // Send the data to the server
        fetch('/sendToTelegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sport, team1, team2, tip, bet, odds, message }),
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
