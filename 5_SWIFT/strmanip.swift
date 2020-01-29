// C:\Users\simon\Documents\Programming_Challenge\5_SWIFT


var testStr: String = "Hello Old Friend"

for c in testStr { // iterates through each character in a string
  print(c, terminator: ", ")
}

if testStr.count > 5 { // .count is equivalent to length
  print("String is longer than 5")
}

//get unicode values

for code in testStr.utf8 {
  print("\(code)")
}

// loop through both unicode value and string value

for char in testStr {
  let code = String(char).utf8
  for cd in code {
    print("\(char): \(cd)")
  }
}
