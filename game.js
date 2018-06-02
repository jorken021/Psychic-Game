<script src="game.js">
    
    /* First we need an array with all of the letters of the alphabet 
    so that the machine can generate a random letter.  */
var letterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

/* We also need to create variables so that we can keep track of the games progress: */
var wins = 0
var losses = 0
var guessesLeft = 9
var guessesSoFar = ""

/* We need a function that will:
-  assign a randomly generated letter from the letter options 
        array and store it in the userChoice variable
- Assign the character that the user typed and 
        store it in the userChoice variable. */

        document.onKeyUp = function() {

            var userChoice = String.fromCharCode(event.keycode).
            toLowerCase();


            var machineChoice = options[Math.floor(Math.random()*letterOptions.length)];

        }

var machineChoice = ""
var userChoice = ""


/* Next we need to compare the two guesses and have 
a boolean value returned so that we know whether the user has chosen 
a letter that matches the randomly generated letter.  */
if (userChoice == machineChoice) {
wins += 1
} else {
guessesLeft -= 1
guessesSoFar + " "userChoice", "
}

/* In the event that the number of reserve guesses have been 
exhausted after comparing the two choices
we need to increase the number of losses by 1, then reset the guessesSoFar field. */

else if (guessesLeft == 0) {
    losses += 1
    guessesSoFar = ""
}

    </script>