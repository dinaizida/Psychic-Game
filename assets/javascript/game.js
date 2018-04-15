var computerChoices = ["a", "b", "c", "d", "e"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var userGuess = "";
var numberGames = 10;


document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
        // userGuess = userGuess.push(userGuess);

    } else {
        losses++;
        numberGames--;
        guessesLeft = numberGames;

        console.log(numberGames);
        if (numberGames === 0) {
            
            var gameover = "<h1> Game over, refresh your browser to start again</h1>";

        document.querySelector("#gameover").innerHTML = gameover;
            wins = 0;
            losses = 0;
            guessesLeft = 0;
            userGuess = "";
            numberGames = 10;

        }

    }

    var html =
        "<p> Winns : " + wins + "</p>" +
        "<p> Looses : " + losses + "</p>" +
        "<p> Guesses Left : " + guessesLeft + "</p>" +
        "<p> Your Guesses so Far : " + userGuess + "</p>";

    document.querySelector("#game").innerHTML = html;

};