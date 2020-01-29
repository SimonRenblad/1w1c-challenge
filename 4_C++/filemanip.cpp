// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  ofstream file ("test.csv");
  if(file.is_open()) {
    file << "new content, new cont, new cont2\n";
    file << "more new conten, new, candy";
    file.close();
  }
  // ifstream filein ("test.txt");
  // string line;
  // if(filein.is_open()) {
  //   while(getline(filein, line)) {
  //     cout << line << endl;
  //   }
  // }
  return 0;
}
