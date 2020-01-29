// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>
#include <cmath>

using namespace std;

string revString(string inString) {
  string outString = inString;
  int rev = inString.length() - 1;
  for (int i = 0; i < inString.length(); i++) {
    outString[i] = inString[rev];
    rev--;
  }
  return outString;
}

// int compress(int inputArr) {
//   int max_row = size(inputArr);
//   cout << max_row << endl;
//   int max_col = size(inputArr[0]);
//   cout << max_col << endl;
//   int outputArr[5] = {};
//   //for each row in input arr
//   return outputArr;
// } wont work without pointers.


int main(int argc, char const *argv[]) {

  int matrix[][] = {
    {2, 3, 4, 5},
    {3, 4, 2, 1},
    {5, 2, 1, 1}
  }

  

  // string str;
  // getline(cin, str);
  //
  // cout << revString(str) << endl;

  return 0;
}
