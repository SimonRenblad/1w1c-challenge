// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT
var myName = "Simon \"The Dog\" Renblad";

console.log(`Watch out for ${myName}, he is crazy dude!`);

/*
ESCAPE CHARACTERS
\\ = backslash
\' = single quote
\" = double quote
\n = newline
\r = carriage return
\t = tab
\b = backspace
\f = form feed
*/

var endString = "\n\t\\AKA the best shooter in the west";
var output = myName + endString;
console.log(output);
console.log(output.length);

var firstLetter = output[0];
var lastLetter = output[output.length - 1];

console.log(firstLetter + lastLetter + "rong");


// function that extracts first character from each word and returns it.
function get3LetterAcronym(word1, word2, word3) {
  return word1[0] + word2[0] + word3[0];
}

console.log(get3LetterAcronym("pussy", "popping", "kurds"));

function toInt(str1) {
  return parseInt(str1);
}

console.log(toInt("456")); // 456

toInt("456") === 456 ? console.log("yes") : console.log("no"); // Ternary operator, can be nested like else if statement.
