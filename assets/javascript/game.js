var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var wins = 0;
var losses = 0;

var userGuessArray = [];
var numberGames = 10;

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var userGuessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuessOptions.indexOf(userGuess) > -1) {
        if (userGuess === computerGuess) {
            wins++;
            userGuessArray.push(userGuess);
        } else {
            losses++;
            numberGames--;
            userGuessArray.push(userGuess);
            console.log(userGuessArray);
            console.log(numberGames);
            if (numberGames === 0) {
                var gameover = "<h3> Game is over! Refresh you browser to start again.</h3>";
                document.querySelector("#gameover").innerHTML = gameover;
                
            }
        }
    }
    var html =
        "<p> Winns : " + wins + "</p>" +
        "<p> Looses : " + losses + "</p>" +
        "<p> Guesses Left : " + numberGames + "</p>" +
        "<p> Your Guesses so Far : " + userGuessArray + "   " + "</p>";

    document.querySelector("#game").innerHTML = html;
};

