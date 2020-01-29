// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT
inq = require('inquirer');
question = [{
  type: 'number',
  name: 'ans',
  message: 'Guess: '
}];

//Define a random number between 1 and 100
const number = Math.floor(Math.random()*100 + 1);
var tries = 1;

async function loop(q) {
  while(true) {
    var guess = await inq.prompt(q);
    if(guess['ans'] == number) {
      break;
    } else if (guess['ans'] > number) {
      console.log(`Number is smaller than ${guess['ans']}`);
    } else if (guess['ans'] < number) {
      console.log(`Number is greater than ${guess['ans']}`);
    }
    tries++;
  }
  console.log(`Congrats! You guessed the number in ${tries} tries!`);
}

loop(question);
