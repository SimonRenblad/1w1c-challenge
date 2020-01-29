// C:\Users\simon\Documents\Programming_Challenge\12_KOTLIN

import kotlin.text.*
import kotlin.math.*

fun main(args: Array<String>){

	println("Hello World!")
	var array = arrayOf(10,3,5,2,1,11,6)
	array = ssort(array)
	printarr(array)
	println(bsearch(array, 5))
	println(bsearch(array, 11))
	println(bsearch(array, 20))

}

fun ssort(arr: Array<Int>): Array<Int>{

	//read the length of array in n and the array in arr
	var n: Int = arr.size
	//set i=0
	var i = 0
	var min_index: Int
	//while loop as long as i < n-1
	while(i < n-1) {

		//set min_index = i
		min_index = i
		//set j = i+1
		var j: Int = i+1
		//while loop as long as j < n
		while(j < n){

			//if arr[j] < arr[min_index] then min_index = j
			min_index = if (arr[j] < arr[min_index]) j else min_index
			//j++
			j++			

		}

		//swap(arr[min_index] and arr[i]
		val temp: Int = arr[min_index]
		arr[min_index] = arr[i]
		arr[i] = temp
		//i++
		i++

	}

	return arr

}

fun printarr(arr: Array<Int>) {

	val last = arr[arr.size - 1]
	var list = arr.dropLast(1)
	print("{")
	for(item in list){

		print(item)
		print(", ")

	}	
	print(last)
	print("}")

}

fun bsearch(arr: Array<Int>, num: Int): Int {

	//define min and max indices
	var min = 0
	var max = arr.size - 1
	//loop until found
	do {
	
		//guess is the rounded down of halfway between min and max
		var guess: Int = (max + min) / 2 
		//when statement to handle case ==, lesser than and larger than
		when{
		
			arr[guess] == num -> return guess
			arr[guess] < num -> min = guess + 1
			arr[guess] > num -> max = guess - 1 

		}	
	
	}while(min <= max)
	
	return -1
}















