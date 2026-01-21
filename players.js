const xhr = new XMLHttpRequest();

xhr.onload = function () {

    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const players = data.players;
        const container = document.getElementById("cards");

        players.forEach(player => {
            const card = document.createElement("card");
            //add a className "card" to the card variable

            let statsHTML = "";
            let teamsHTML = "";
            let awardsHTML = "";

            // the for loop below is looping through an object 
            // the syntax is different when you look through arrays
            for (let stat in player.careerStats) {
                statsHTML += "<li>" + stat + ": " + player.careerStats[stat] + "</li>";
            }

            // teams and awards are both arrays, so these for loops should look the same
            for (let i = 0; i < player.teams.length; i++) {
                teamsHTML += "<li>" + player.teams[i] + "</li>";
            }

            for (let i = 0; i < player.awards.length; i++) {
                awardsHTML += "<li>" + player.awards[i] + "</li>";
            }

            card.innerHTML = `
                <h2>
                ${player.name}
                </h2>
                <p><span class="label">Position:</span>
               ${player.position}
                </p>
                <p><span class="label">Primary Team:</span> 
                ${player.team}
                </p>
                <p><span class="label">Jersey Number:</span> #
                ${player.number}
                </p>
                <p><span class="label">Born:</span>
                ${player.birthDate}
                </p>
                <p><span class="label">Throws:</span>
                ${player.throws}
                </p>
                <p><span class="label">Hall of Fame:</span>
                ${player.hallOfFame}
                </p>

                <p class="label">Career Stats:</p>
                <ul>
                statsHTML
                </ul>

                <p class="label">Teams:</p>
                <ul>
                teamsHTML
                </ul>

                <p class="label">Awards:</p>
                <ul>
               awardsHTML
                </ul>`;

            container.appendChild(card); //variables go into those spots
        });
    }
};

xhr.open("GET", "players.json"); //make sure your json file is named player.json in VSCode
xhr.send();