// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT

numbers = [0, 3, 4, 5, -4, -6, 2, 3, -4, 3, -2];

const squarePositives = arr => {
  let squares = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squares;
};

let squares = squarePositives(numbers);

console.log(squares);
