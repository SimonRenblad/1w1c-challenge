// C:\Users\simon\Documents\Programming_Challenge\4_C++
#include <iostream>

using namespace std;

void ex(int * value) {
  *value = 5;
}

void sort(int arrName[], int arrSize) {
  int i = 0;
  while(i < arrSize) {
    int j = i;
    while(j < arrSize) {
      if(arrName[i] > arrName[j]) {
        int temp = arrName[i];
        arrName[i] = arrName[j];
        arrName[j] = temp;
      }
      j++;
    }
    i++;
  }
}

int main() {

  int exampleInt = 4;

  int *pointToExampleInt = &exampleInt; //declaring a pointer variable and
                                        //storing address of exampleInt using
                                        // & operator.

  cout << pointToExampleInt << endl; // returns the stored point in memory
  cout << *pointToExampleInt << endl; // returns the value

  *pointToExampleInt += 2; //adding value to the pointer

  cout << exampleInt << endl; //will add value to the variable

  ex(&exampleInt);

  cout << exampleInt << endl;

  int arr[5] = {2, 1, 3, 2, 4};

  sort(arr, 5);

  cout << arr[0] << arr[1] << arr[2] << arr[3] << arr[4] << endl;

  int newArr[6] = {0, 1, 2, 3, 4, 5};

  int * arrPoint;
  arrPoint = newArr;

  int index = 0;

  while(index < 6) {
    cout << *(arrPoint + index) << ": " << arrPoint + index << endl;
    index++;
  }


  return 0;
}
