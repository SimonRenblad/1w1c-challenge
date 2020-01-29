#include <iostream>

using namespace std;

struct person {
  string name;
  int age;
} john, peter;

int main() {
  peter.name = "Peter";
  john.name = "John";

  peter.age = 50;
  john.age = peter.age + 10;
  cout << john.age << endl;
}
