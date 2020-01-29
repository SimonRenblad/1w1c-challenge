#include <iostream>
using namespace std;

std::string reverseString(std::string const in) {
  std::string outstring = in;
  for(int i = 0, rev = in.size() - 1; in[i]; i++, rev--) {
    outstring[i] = in[rev];
  }
  return outstring;
}
