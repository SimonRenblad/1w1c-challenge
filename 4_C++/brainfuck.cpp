// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>

using namespace std;

int main(int argc, char const *argv[]) {


  char memorySpace[100] = {0};
  char * pnt = memorySpace;
  string inputString;
  getline(cin, inputString);
  int depth = 0;
  int counter = 0;
  for(char const &in : inputString) {
    if(in == '[') {
      depth++;
    } else if(in == ']') {
      depth--;
    }
    counter++;
  }
  if(depth != 0) {
    cout << "Missing ]" << endl;
    return 0;
  }

  for(int i = 0; i < counter; i++) {
    char input = inputString[i];
    if(input == '+') {
      //cout << "adding 1" << endl;
      *pnt += 1;
    } else if(input == '-') {
      //cout << "subtracting 1" << endl;
      *pnt -= 1;
    } else if(input == '>') {
      //cout << "moving right" << endl;
      pnt += 1;
    } else if(input == '<') {
      //cout << "moving left" << endl;
      pnt -= 1;
    } else if(input == '[') {
      //cout << "loopstart" << endl;
      if(*pnt == 0) {
        int index2 = i + 1;
        int depth = 0;
        while(true) {
          if(inputString[index2] == '[') {
            depth++;
          } else if(inputString[index2] == ']') {
            if(depth == 0) {
              i = index2;
              break;
            }
            depth--;
          }
          index2++;
        }
      }
    } else if(input == ']') {
      //cout << "loopend" << endl;
      if(*pnt != 0) {
        int index2 = i - 1;
        int depth = 0;
        while(true) {
          if(inputString[index2] == '[') {
            if(depth == 0) {
              i = index2 - 1;
              break;
            }
            depth++;
          } else if(inputString[index2] == ']') {
            depth--;
          }
          index2--;
        }
      }
    } else if(input == '.') {
      //cout << "print" << endl;
      cout << *pnt;
    } else if(input == ',') {
      //cout << "input" << endl;
      cin >> *pnt;
    } else if(input == ';') {
      break;
    }
  }
  return 0;
}
