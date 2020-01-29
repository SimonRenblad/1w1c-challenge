//Normal Old Function
function normalFunction(arg) {
  return arg;
}
console.log(normalFunction("normal"));

//Assigned Anonymous Function
const assignedFunction = function (arg) {
  return arg;
}
console.log(assignedFunction("assigned"));

//Arrow function
const arrowFunction = arg => {
  return arg;
}
console.log(arrowFunction("arrow"));

//Asynchronous Function, Evaluated Parallel to Script.
async function asyncFunction(arg) {
  return arg;
}

//Asynchronous Arrow function
const arrowAsyncFunction = async arg => {
  return arg;
}

//Passing Function as Parameter
function parentFunction(arg) {
  console.log(arg("Passed"));
}
function childFunction(arg) {
  return arg;
}
parentFunction(childFunction);

//Passing Anonymous Function as Parameter
function parentFunction(arg) {
  console.log(arg("Passed"));
}
const childFunction = function (arg) {
  return arg;
}
parentFunction(childFunction);

// OR
function parentFunction(arg) {
  console.log(arg("Passed"));
}
parentFunction(function (arg) {return arg});

// Passing Arrow Function as Parameter
function parentFunction(arg) {
  console.log(arg("Passed"));
}
const childFunction = (arg) => {
  return arg;
}
parentFunction(childFunction);

// OR
function parentFunction(arg) {
  console.log(arg("Passed"));
}
parentFunction((arg) => {return arg});

//Pass a block of code using the arrow function
