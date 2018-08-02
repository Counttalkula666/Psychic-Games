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

var alphabet = ['a','b', 'c','d','e','f','g','h','i','j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u','v','w','x','y','z'];

// this picks our random letter (comp pick)
console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);

console.log(Math.floor(Math.random() * alphabet.length));
console.log(alphabet.length)

