// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT
function f1() {
  globalVar = 0; // global
  var globalVar = 1; // local
}

function checkScope() {
  if (typeof globalVar != "undefined") { // typeof gives type of a variable
    console.log(globalVar);
  }
}

checkScope();
