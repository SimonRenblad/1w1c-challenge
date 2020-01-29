// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT
//
// Promise.resolve().then(() => { //Automatically executes at the end
//   console.log("D");
// })
//
//
// console.log("A");
//
// var promise = new Promise((resolve, reject) => { //executes after 5000 secs
//   setTimeout(() => {
//     resolve("B");
//   }, 5000);
// })
// promise.then((success) => { // handles promise
//   console.log(success);
// }, (err) => {
//   console.log(err);
// })
//
// //async Function
// function thisIsAsync() { //Executes only once!!!
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("A+");
//     }, 5000);
//     setTimeout(() => {
//       resolve("B+");
//     }, 1000);
//   })
// }
//
// thisIsAsync().then((suc) => {
//   console.log(suc);
// })
//
// console.log("C");

async function randomTime() {
  promise = new Promise(function (resolve, reject) {
    var time = Math.floor(Math.random()*5000);
    setTimeout(() => {
      resolve(time);
    }, time);
  });
  let result = await promise;
  console.log(result);
}
randomTime();
console.log("Doesn't hold up the stack");















// randomTime().then((suc) => {
//   console.log(suc);
// });
