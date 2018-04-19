var html = "";

var game = {
    computerChoices: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ],
    wins: 0,
    losses: 0,
    userOutput: "",
    userGuessArray: [],
    numberGames: 10,
    lengthCompChoicesArray: function() {
        this.computerChoices.length;
    },

}

function startGame() {
    game.wins = 0;
    game.losses = 0;
    game.userOutput = "";
    game.userGuessArray = [];
    game.numberGames = 10;

    document.querySelector("#game").innerHTML = "";

    document.querySelector("#gameover").innerHTML = "";

};

function printScreen(arr, wins, losses, numberGames) {
    game.userOutput = arr.join(', '); // output spaces between array elemtns

    html =
        "<p> Wins : " + wins + "</p>" +
        "<p> Looses : " + losses + "</p>" +
        "<p> Guesses Left : " + numberGames + "</p>" +
        "<p> Your Guesses so Far : " + game.userOutput + "</p>";

    document.querySelector("#game").innerHTML = html;
}

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    var userGuessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
    var computerGuess = game.computerChoices[Math.floor(Math.random() * game.lengthCompChoicesArray)];

    if (userGuessOptions.indexOf(userGuess) > -1) { //check if userGuessOptions is a letter
        if (userGuess === computerGuess) {
            game.wins++;
            // create an array to output user selected leltters on the screen
            game.userGuessArray.push(userGuess);
            printScreen(game.userGuessArray, game.wins, game.losses, game.numberGames);

        } else {
            game.losses++;
            game.numberGames--;
            game.userGuessArray.push(userGuess);
            printScreen(game.userGuessArray, game.wins, game.losses, game.numberGames);

            if (game.numberGames === 0) {
                var gameover = "<h3> Game is over! Refresh you browser to start again.</h3>";
                document.querySelector("#gameover").innerHTML = gameover;

                startGame();

            }
        }
    }

};

