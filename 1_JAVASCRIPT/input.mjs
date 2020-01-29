//require doesnt work in .mjs

const inquirer = require('inquirer');

var question = [{
  type: 'input',
  name: 'name',
  message: "what's your name?"
}]

inquirer.prompt(question).then(answer => {
  console.log(answer);
})
