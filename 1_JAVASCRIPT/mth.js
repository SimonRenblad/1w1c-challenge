// C:\Users\simon\Documents\Programming_Challenge\1_JAVASCRIPT

var a = 5;

b = a + 10; // 15

c = a * 2; // 10

c -= 3; // 7

quotient = c / 2; // float division, not floor division = 3.5

quotient++; // 4.5

remainder = b % 4; // 3

var all = [a, b, c, quotient, remainder];
all.push(3);

console.log(all[1] + all[all.length - 1]); // 18
console.log(all.pop() + all.shift()); // 8
console.log(all[1] + all[all.length - 1]); // 10
console.log(JSON.stringify(all));

if (a == "6") {
  console.log("a = 5");
} else if (b === "15") {
  console.log("b = '15'");
} else if (a == 5 && b == 15) { // and AND
  console.log("log this");
}
if (a == 5 || b === "15") { // inclusive or OR
  console.log("dont log this, before the above");
}

for (var i = 0; i < all.length; i++) {
  all[i] += 1;
  console.log(all[i]);
}

//unshift adds element at beginning

//make copy of array

all2 = [...all]; // ... operator can also be used to take in any number of arguments.


// Comment
/*
This is comment

 */

 var name = 5;
 let name1 = 5;
 const namec = 6; //constant
 name = 5;

var str = 'enter text single';

var arry = [4, 3, 2, 1];

arry[0] = arry[0] + namec; // 10
arry[0] += namec; //10

arry[0] = arry[0] - namec; // -2
arry[0] -= namec; //-2

arry[0] = arry[0] * namec; // 24
arry[0] *= namec; //24

arry[0] = arry[0] / namec; // Python: 0 JS: .6666
arry[0] /= namec; //.6666
