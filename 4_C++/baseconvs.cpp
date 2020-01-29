// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>
#include <sstream>
#include <cmath>

using namespace std;

string toString(int in) {
  stringstream stream;
  stream << in;
  string returnString;
  stream >> returnString;
  if(stream.fail()) {
    cout << "Failed Conversion to String" << endl;
  }
  return returnString;
}

int toInt(string in) {
  stringstream stream;
  stream << in;
  int returnInt;
  stream >> returnInt;
  if(stream.fail()) {
    cout << "failed to convert string: '" << in << "' to integer value" << endl;
    return 0;
  }
  return returnInt;
}

int addressToInt(string in) {
  int length = 6;
  int index = 0;
  int value = 0;
  while(index < length) {
    char t = in[index];
    if(t > 57) {
      //a-f
      cout << t << t - 87 << endl;
      value += (t - 87) * pow(16, 5 - index);
    } else {
      //0-9
      cout << t << t - 48 << endl;
      value += (t - 48) * pow(16, 5 - index);
    }
    index++;
  }
  return value;
}

int main() {

  int i = 50;
  int h = 0x32; //declaring a hexadecimal
  //int b = 0b10110001;
  cout << hex << i << endl;
  cout << dec << h << endl; // 50
//  cout << dec << b << endl; // 177

  //convert the hex values to a stream

  stringstream ss;

  ss << hex << i; //inputs 32 into the string (doesnt include 0x)
  ss << dec << h; //inputs 50 into the string

  // string s;
  // ss >> s;
  // cout << s << endl;

  int in;
  ss >> in;

  cout << toString(1234) << endl;
  cout << toInt("32")*2 << endl;

  // outputting the adress of pointer in decimal or binary

  int someinteger = 45;
  int * somepointer = &someinteger;
  stringstream somestream;
  somestream << &(*somepointer) << endl;
  string output;
  somestream >> output;
  int index = 2;
  while (index < 8) {
    somestream << output[index];
    index++;
  }
  somestream >> output;

  cout << addressToInt(output) + 4 << " here <--" << output << endl;

  char a = '1';
  int aa = a;

  char b = '6';
  int bb = b;

  char c = '4';
  int cc = c;
  //cout << toInt(output) << endl;
  // 2 - 7
  cout << aa << endl;
  cout << bb << endl;
  cout << cc << endl;

  return 0;
}
