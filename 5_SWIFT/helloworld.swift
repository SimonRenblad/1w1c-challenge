// C:\Users\simon\Documents\Programming_Challenge\5_SWIFT

var str: String = "Hello World" // : type is used to define the type, optionally, ccLLed type annotation
print(str, terminator: "!\n") // : is used when passing arguments to specify which parameter

var name: String = "John"
var age: Int = 42
print("My name is \(name) and I am \(age) years old!")

/* Optionals
Can hold either a value of a type or "nil"
*/

var maybeInt: Int?

maybeInt = 15

if maybeInt != nil {
  print(maybeInt!) // must unwrap optional with !
} else {
  print("takes a nil value")
}

if let someInt = maybeInt { // optional binding on an optional
  print("SomeInt takes a value: \(someInt)")
}
