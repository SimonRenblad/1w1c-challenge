// C:\Users\simon\Documents\Programming_Challenge\5_SWIFT

// Tuples

var me = (name: "Simon", age: 18)
print(me.name, terminator: ", ")
print(me.age)

//  Constants
let constA: Int = 42

// Literals

  // Integer
  let decimalInt = 17
  let binaryInt = 0b10001
  let octalInt = 0o21
  let hexInt = 0x11

  // Float
  let decDbl = 12.6
  let expDbl = 1.26e1
  let hexDbl = 0xC.3p0

// Bitwise Operators

var exNum = 0b10001
var exNum2 = 0b11010

print(exNum&exNum2) // 10000 bitwise AND
print(exNum|exNum2) // 11011 bitwise OR
print(exNum^exNum2) // 01011 bitwise XOR

// Range Operators

for i in (1...5) { //prints in range, inclusively
  print(i)
}

for a in (1..<5) { //prints in range, exclusively
  print(a)
}

// fallthrough keyword

var nutty = 3

switch(nutty) {
  case 3 :
    print("it's 3 alright")
    fallthrough
  case 4 :
    print("it fell through")
  default:
    print("default")
}
