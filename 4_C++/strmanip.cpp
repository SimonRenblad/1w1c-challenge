// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>
#include "toolbox.h"

using namespace std;

int main(int argc, char const *argv[]) {

  string exampleString = "string34"; // define and assign to variable
//                        01234567

  string revString = reverseString(exampleString);
  cout << revString << endl;
  cout << exampleString << endl; // print output to console

  int lengthOfString = exampleString.length(); //assign length of string

  cout << lengthOfString << endl; //print length

  //strings are mutable...
  exampleString[6] = '4';

  cout << "new string: " << exampleString << endl; //string44

  // finding the index using find()

  int index = exampleString.find("g44", 0); // look for substring from 0th pos

  cout << index << endl; // returns 5, first position of substring

  // getting the substring

  string subString = exampleString.substr(2, 4); // (index of first char, length)

  cout << subString << endl; //ring

  return 0;
}
