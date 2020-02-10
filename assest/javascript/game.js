// setting up variables
// the letters
// set up arrays to keep tack of the letters the person guessed so far
// pick one of the letters
// wins, loses, guesses left,
var letters = [
"a", "b", "c", "d", "e", "f", "g",
]
var lettersguessedsofar = [

]
var wins = 0
var loses = 0
var guessesremaining = 9
// function of reseting the game, guesses remaining 
// letter to guess 
function reset () {
guessesremaining = 9
lettersguessedsofar = []

}
function GuessesRemaining (){
document.getElementById ("Guesses_left").innerHTML = guessesremaining
}

function guessesSoFar () {
document.getElementById ("Your_guesses_so_far").innerHTML = guessesSoFar
}
function letterToGuess () {
 var LetterToGuess = letters [Math.floor(Math.random() * letters.length)]

}
GuessesRemaining ()
document.onkeydown = function (event){
guessremain-- 
    var userguess = event.key
}