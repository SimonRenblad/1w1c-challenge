// C:\Users\simon\Documents\Programming_Challenge\5_SWIFT

// Making use of the built in unicode handling system to get the unicode of chars


let strInp: String? = readLine()
func getUnicode(inp: String?) -> Bool {
  if(inp == nil) {
    return false
  }
  for char in inp! {
    let code_8 = String(char).utf8
    for cd8 in code_8 {
      print("\(char) - UTF8: \(cd8)", terminator: " ")
    }
  }
  return true
}
getUnicode(inp: strInp)
