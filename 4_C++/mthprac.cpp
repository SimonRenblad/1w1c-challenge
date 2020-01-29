// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>
#include <cmath>

using namespace std;

int main(int argc, char const *argv[]) {

  //init
  int x = 3;
  int y = 6;

  //add subtract
  cout << x + y << "||" << y - x << endl; //9||3 works as expected

  //multiply divide
  cout << x * y << endl; // 18 as expected

  cout << y / x << endl; // int / int outputs int when round

  cout << x / y << endl; // int / int outputs floored int...

  cout << (double) x / y << endl; // double / int outputs double 0.5

  cout << (int) x / (double) y << endl; // int / double outputs double 0.5

  //modulus
  cout << "modulus: ";
  cout << x % y << endl; // mod = 3 since 3 / 6 is 0 with a remainder of 3

  //pow and sqrt

  cout << pow(y, x) << endl; // 6 ^ 3 = 216

  cout << sqrt(36) << endl; // 6

  return 0;
}
