// C# .NET
//
// DocString
//
// author: Simon Renblad
// version: 0.1.0
// license: MIT

using System;

namespace Sorting {

    class MainSorter {
        
        public static void Main(string[] args) {

            // create array
           int[] arr = {2,4,6,3,5,11,10}; 
            // sort array sel sort
            arr = Qsort(arr);
            ArrayPrint(arr);
            // sort array ins sort

        }

        public static int[] Ssort(int[] arr) {
            
           int n = arr.Length;

           int i = 0;

           int min_index;

           while(i < n-1) {

               min_index = i;

               int j = i+1;

               while(j < n) {

                   min_index = arr[j] < arr[min_index] ? j : min_index;

                   j++;

               }

               int temp = arr[min_index];

               arr[min_index] = arr[i];

               arr[i] = temp;

               i++;

            }

           return arr;

        }

        public static int[] Isort(int[] arr){
            // insertion sort

            // set length = n, i = 1
            int n = arr.Length;
            int i = 1;

            // loop through each i (except i = 0)
            while(i < n){

                // start at i
                int j = i;

                // move down from i until hitting either 0th index or no longer bigger
                // ie correct position (inserted)
                while(j > 0 && arr[j - 1] > arr[j]){

                    // shuffle value down one index (through swap)
                    int temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;

                    j--;
                }

                i++;
            }

            return arr;

        }

        public static int[] Qsort(int[] arr){
            // quick sort

            return Qsort(arr, 0, arr.Length - 1);

        }

        public static int[] Qsort(int[] arr, int low, int high){
            //recursive quick sort algorithm with partition not as separated function
            
            // as soon as low == high, then stop recursion since fully sorted in branch
            if(low < high) {

                //partitioning
                int pivot = arr[high];

                // swapper indices
                int i = low - 1; //lower
                int j = low; //upper

                while(j < high){

                    //swap with lower swapper index if upper swapper is less than pivot
                    if(arr[j] < pivot){

                        // increase index of lower swapper
                        i++;

                        //swap arr[j] and arr[i]
                        int temp = arr[j];
                        arr[j] = arr[i];
                        arr[i] = temp;
                    }

                    j++;
                }

                //place pivot at correct position thru swap
                int temp2 = arr[i+1];
                arr[i+1] = arr[high];
                arr[high] = temp2;

                // store pivot index as variable
                int p = i+1;

                //recursion
                arr = Qsort(arr, low, p - 1); // before pivot point
                arr = Qsort(arr, p + 1, high); // after pivot point
            }
            return arr;
        }
            

        public static void ArrayPrint(int[] arr){
            // prints an array to the console as if declared in C#

            Console.Write("{");
            for(int i = 0; i < arr.Length - 1; i++){
                
                Console.Write(Convert.ToString(arr[i]));
                Console.Write(", ");

            }
            
            Console.Write(Convert.ToString(arr[arr.Length - 1]));
            Console.WriteLine("}");

            return;

        }

    }

}

