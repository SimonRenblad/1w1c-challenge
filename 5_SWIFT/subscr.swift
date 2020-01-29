// C:\Users\simon\Documents\Programming_Challenge\5_SWIFT

struct PowerTable {
  var base: Int
  subscript(index: Int) -> Int {
    if index == 0 {
      return 1
    }
    var temp = base
    var iter = 1
    while(iter < index) {
      temp *= base
      iter += 1
    }
    return temp
  }
}
var table3 = PowerTable(base: 1)
print("Base:")
if let base_inp_str = readLine() {
  if let base_inp = Int(base_inp_str) {
    table3.base = base_inp
  }
}
print("Power:")
if let pow_inp_str = readLine() {
  if let pow_inp = Int(pow_inp_str) {
    print(table3[pow_inp])
  }
}
