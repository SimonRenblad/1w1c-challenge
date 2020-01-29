// C:\Users\simon\Documents\Programming_Challenge\6_GO
package main
import "fmt"

func FirstFactorial(num int) int {
  var product int
  product = num
  for num > 1 {
    num -= 1
    product *= num
  }

  return product;

}

func main() {

  // do not modify below here, readline is our function
  // that properly reads in the input for you
  fmt.Println(FirstFactorial(readline()))

}
