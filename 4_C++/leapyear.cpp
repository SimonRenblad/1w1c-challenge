#include <iostream>
using namespace std;

bool is_leap_year(int year) {
    if(year < 1752) {
        return false;
    } else if(year % 400 == 0) {
        return true;
    } else if(year % 100 == 0) {
        return false;
    } else if(year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

int main() {
    
    int year;
    cin >> year;
    string isThisYearLeap = is_leap_year(year) ? "Yes this is a leap year" : "No not a leap year";
    cout << isThisYearLeap << endl;

    return 1;
}
