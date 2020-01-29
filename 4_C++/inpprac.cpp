// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>
#include <cmath>

using namespace std;

int main(int argc, char const *argv[]) {

  string name;

  cout << "Hello Stranger!" << endl;
  cout << "What is your name?" << endl;
  getline(cin, name); //gets entire line

  cout << "Hello, " << name << "!" << endl;

  int age;

  cout << "What is your age?" << endl;
  cin >> age;

  if (age < 18) {
    cout << "You need to be 18 to enter this program." << endl;
  } else if (age > 120) {
    cout << "You need to be alive to enter this program" << endl;
  } else {
    cout << "Welcome!" << endl;
  }

  return 0;
}
