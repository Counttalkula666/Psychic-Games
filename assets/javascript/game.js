//Generate some really basic HTML that will display what our code is going to console log
//Write the Vanilla JS that would update the DOM 


//
//The game needs to choose a random letter that the user (psychic) is trying to guess
//Our 'Psychic' (user) needs to choose a random letter fromt the alphabet to try to match the random comp pick from our alphabet array
//We need to listen to the specific browser event that will allow us to get a keypress from a user
//We need to validate that the user actualy pressed a letter and not some other key that we cannot make a comparison with
//If valid => and matches user wins
//If valid => and does not match use one of five turns
//ELSE => input not valid alert that says you can only press letters
//If turns gets to zero game over user loses


//this defines the variable "alphabet" and also assigns the value of the alphabet variable as an array of all the letters in the alphabet

var alphabet = ['a','b', 'c','d','e','f','g','h','i','j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v',
'w','x','y','z'];
var wins = 0;
var losses = 0;
var guesses = 5;

var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// this picks our random letter (comp pick)
console.log('computer guess', compGuess);
var someObj = {
    someKey: 2,
    another: '3',
    someArray:[1,2,3,4,5,6],
    anotherOne: {nested: 'keys'}
}
//How do we get input from the user
//We need to access the document to access it s methods
document.onkeydown = function(event){
console.log(event.key);
//indexOf it is tagged onto an array and acts on that array by looking in the array for the value passed in
//if found it returns the vlaid index position. If not in array it returns -1.
var userGuess = event.key;
var validGuess = validateUserInput(userGuess);


if(validGuess && userGuess === compGuess) {
    wins++; //wins = wins + 1;
    guesses = 5;
    //Need to implement if else statement checking playAgain variable Y or N for playing again
   var playAgain = prompt('You guessed correctly! Want to play again? Y or N');
console.log(playAgain);

//If Y restart game ELSE iF N close window ELSE Prompt again because that is not a valid response

}
else if (validGuess && userGuess !== compGuess){
   guesses--; //guesses = guesses - 1;
   //check if guess it 0 then they lose
   alert('No that was wrong you only have ' + guesses + " guesses left! Try again");
}
else {
    //user did not give us good input
    alert('bad input')
}
};

function validateUserInput(userInput) {
    if(alphabet.indexOf(userInput) !== -1) {
        return true;
    }
    else {
        return false;
    }
}


