import { createPeople } from "./cls.mjs";
// Practice using switch/case and eventually loops.
// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT
// to run, use: node --experimental-modules menu.mjs


var answerStr = "You chose: ";

var input = 2;

switch (input) {
  case 1:
    console.log(answerStr + 1);
    break;
  case 2:
    console.log(answerStr + 2);
    break;
  default:
    console.log("You chose nothing.")
}

const myObject = {
  "name": "Simon",
  "age": 18,
  kill(reason) { console.log(reason); } //method of object
};

myObject.kill("do it");

// const myObject = (name, age, gender) => ( { name, age, gender} ). Will return object with argument variables as keys and values as values.

const { "name": name, "age": age} = myObject; //destructuring

console.log(age);
console.log("above ^");

var copyObj = JSON.parse(JSON.stringify(myObject))

delete myObject.age;

console.log(answerStr + myObject["name"]);
console.log(myObject.hasOwnProperty("age")); // false
console.log(copyObj.hasOwnProperty("age")); // true

Object.freeze(copyObj);

try {
  copyObj.age = 16;
} catch (e) {
  console.log(e);
}

var i = 0;
while(i < 5) {
  console.log(++i); // ++ in front evaluates prior to passing along.
}
// can also use do..while

var arrow = (arg) => console.log(arg);

arrow(5);

const Person = createPeople();

const hermod = new Person("hermod");
console.log(hermod.getName);
