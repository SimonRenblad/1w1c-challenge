// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT
// uses Inquirer.js, which makes good looking inputs.
const inquirer = require('inquirer'); // other form of import, non-experimental.
const Rx = require('rxjs');

// asks two basic questions about the person.
var question = [{
  type: 'input',
  name: 'name',
  message: "what's your name?"
}, {
  type: 'input',
  name: 'age',
  message: "how old are you?"
}, {
  type: 'list',
  name: 'rating',
  message: "Rate yourself from 1 - 5:",
  choices: [1, 2, 3, 4, 5]
}, {
  type: 'checkbox',
  name: 'hobby',
  message: "Add some hobbies.",
  choices: ["biking", "running", "swimmin", "programming", "drinking"]
}]

async function ask(q) {
  while(true) {
    var answer = await inquirer.prompt(q);
    console.log(answer['name']);
    console.log(answer['age']);
    console.log(answer['rating']);
    console.log(answer['hobby']);
  }
  return answer;
}
ask(question).then((ans) => {
  console.log(ans['name']);
});



// throws the answers back at the person.
/*
inquirer.prompt(question).then(answer => {
  console.log(answer['name']);
  console.log(answer['age']);
  console.log(answer['rating']);
  console.log(JSON.stringify(answer['hobby']));
})*/
// var prompts = Rx.Subject();
// inquirer.prompt(prompts);
//
// inquirer.next({
//   type: 'input',
//   name: 'name',
//   message: "what's your name?"
// }).then(answer => {
//   console.log(answer['name']);
//   console.log(answer['age']);
//   console.log(answer['rating']);
//   console.log(JSON.stringify(answer['hobby']));
// })
//
// inquirer.complete();

// Does a basic text input using Inquirer
/*
function textin(msg) { // wont work.
  var answer;
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: msg
  }]).then(ans => {
    answer = ans['name'];
  })
  return answer;
}
*/
