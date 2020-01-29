// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT

function randomFraction() {
  return Math.random();
}

function randomWholeNumber(low, high) { //low inclusive, high exclusive
  return (low + Math.floor(Math.random() * (high - low)));
}

console.log(randomWholeNumber(4, 8))
