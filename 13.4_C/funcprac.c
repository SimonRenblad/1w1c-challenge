#include <stdio.h>

// C
//
// DocString
//
// author: Simon Renblad
// version: 0.1.0
// license: MIT
void swap(int *xp, int *yp) {

    int temp = *xp;
    *xp = *yp;
    *yp = temp;

}

void ssort(int arr[], int n) {
    int i, j, min_index;
    
    i = 0;

    while(i < n - 1) {
        min_index = i;
        j = i + 1;
        while(j < n) {
            min_index = arr[j] < arr[min_index] ? j : min_index;
            j++;
        }
        swap(&arr[min_index], &arr[i]);
        i++;
    }
} 

void printArray(int arr[], int n) {

    printf("{");
    int i = 0;
    while(i < n - 1) {
        printf("%d, ", arr[i]);
        i++;
    }
    printf("%d}\n", arr[n - 1]);

}

int main(int argc, char **argv) {

    int array[5] = {5, 4, 3, 2, 1};

    ssort(array, 5);

    printArray(array, 5);

    return 0;
}
