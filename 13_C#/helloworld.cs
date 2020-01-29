// C:\Users\simon\Documents\Programming_Challenge\13_C#
// use C# compiler in NET framework C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe

using System;

namespace HelloWorld {
	class MainClass {
		static void Main(string[] args) {
			Console.WriteLine("Hello World!");
			string myname = "Simon Renblad";
			Console.WriteLine(string.Concat("Hello, ", myname));
			string interpAsNum = "34";
			int asNum = Convert.ToInt32(interpAsNum);
			int output = asNum * 2;


			int num1 = 4;
			int num2 = 12;

			int num3 = someFunction(num1);
			int num4 = someFunction(num2); 
			Console.WriteLine(Convert.ToString(output));

			//writing more stylish code below
			CallMyFunc(22);

			int x = CallMyFunc(43);
		}

		//ambigiously named function that nevertheless returns the product of itself and its first digit
		static int CallMyFunc(int input) {

			// Convert input to string type
			string inString = Convert.ToString(input);

			// Find the first digit as string type
			string firstChar = inString.Substring(0,1);

			// convert first digit back to int type
			int firstDigit = Convert.ToInt32(firstChar);

			// multiply input by it's first digit
			int output = input * firstDigit;

			// write output to console
			Console.WriteLine(Convert.ToString(output));

			// return output from function
			return output;

		}
	}
}
