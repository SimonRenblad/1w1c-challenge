#include <iostream>
#include <fstream>

using namespace std;

int main(int argc, char const *argv[]) {
  if(argc == 2){
    string filename = argv[1];
    cout << "Reading CSV from: " << filename << endl;
    ifstream infile (filename);
    string line;
    if(infile.is_open()) {
      while(getline(infile, line)) {
        cout << line << endl;
      }
      infile.close();
    }
  }
  return 0;
}
