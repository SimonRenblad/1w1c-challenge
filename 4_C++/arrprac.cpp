// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>
#include <cmath>

using namespace std;

int main(int argc, char const *argv[]) {

  int numbers[] = {2, 3, 5, 1, 2, 9, 15};
//                 0  1  2  3  4  5  6
  cout << numbers[3] << endl; // 1

  numbers[3] += 5;
  cout << numbers[3] << endl; // 6

  //create empty Arrays
  char characters[10] = {}; //creates array size 10
  characters[5] = 'B';
  characters[4] = 'A';

  cout << characters[4] << characters[5] << endl;



  return 0;
}
