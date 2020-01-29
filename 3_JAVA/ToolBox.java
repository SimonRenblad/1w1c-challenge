/*
  =============================================================================
                                T O O L B O X
  =============================================================================

  A package for generally useful custom functions and classes for String,
  integer or double manipulation. Current features include:

  Functions:
    - generating random integers
    - finding maximum and minimum values in arrays
    - decimal <> binary <> hexadecimal conversions
    - reversing strings
    - finding substrings of custom lengths in strings 
*/

package toolbox;
//Imports
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

//Class with static functions that have general purpose use.
public class ToolBox {

  // Constants for hexToBin and binToHex functions
  public static final int BIN_INDEX = 0;
  public static final int HEX_INDEX = 1;

  // Converting between quadbits and hexadecimal digits
  public static final String[][] hexTable = {
    {"0000", "0"},
    {"0001", "1"},
    {"0010", "2"},
    {"0011", "3"},
    {"0100", "4"},
    {"0101", "5"},
    {"0110", "6"},
    {"0111", "7"},
    {"1000", "8"},
    {"1001", "9"},
    {"1010", "A"},
    {"1011", "B"},
    {"1100", "C"},
    {"1101", "D"},
    {"1110", "E"},
    {"1111", "F"}
  };

  // Function takes a maximum and minimum integer value and returns a random
  // integer in the interval, assuming max > min
  public static int randomInt(int min, int max) {

    //Ternary operator to check for max > min, followed by generic randInt calc
    return (max > min) ? (int) Math.floor(Math.random()*(max-min) + min) : null;
  }

  // Function takes an array of doubles and returns the maximum value in the
  // array
  public static double arrayMax(double[] array) {

    // initialize maxValue as the first value in the array.
    double maxValue = array[0];

    // iterate through each value in the array
    for (int i = 1; i < array.length; i++) {

        // check if iterated value is higher
        if (array[i] > maxValue) {

            // if larger, replace as current maxValue
            maxValue = array[i];
        }
    }
    // return the maximum value found
    return maxValue;
  }

  // Function takes an array of of doubles and returns the minimum value in
  // array. See function above.
  public static double arrayMin(double[] array) {
    double minValue = array[0];
    for (int i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    return minValue;
  }

  // Function takes integer decimal value and converts it into it's binary
  // counterpart, returning it as String
  public static String decToBin(int int_value) {

    // initialize empty string
    String outString = "";

    // loop through until the int_value is less than 1
    do {

      // modulus 2 will only return 0 or 1, remainder is bit
      outString += Integer.toString(int_value % 2);

      // divide by 2 and repeat
      int_value /= 2;

    } while(int_value >= 1);

    // reverse the string to get the proper binary value
    outString = revString(outString);

    // return binary value as String
    return outString;
  }

  // Function takes String repr of a binary integer and converts it into
  // decimal integer
  public static int binToDec(String bin_value) {

    // create an array of bit characters from String input: "1" and "0"s
    char[] arr_bin_value = bin_value.toCharArray();

    // initialize decimal integer and integer version of char for bits
    int out_dec = 0;
    int bin_val = 0;

    // loop through each bit, and multiply by 2 ^ n-1 and decreasing
    for(int pow = arr_bin_value.length - 1, index = 0; pow >= 0; pow--, index++) {

      // set binary value as char in string
      bin_val = arr_bin_value[index];

      //add value times 2 ^ the appropriate power
      out_dec += (bin_val * Math.pow(2, pow));
    }

    // return the decimal integer
    return out_dec;
  }

  // Function takes a binary input and converts it into it's hex representation
  public static String binToHex(String bin_value) {

    // find the number of digits of the binary number
    int bin_length = bin_value.length();

    // check whether digits is a multiple of 4
    if(bin_length % 4 != 0) {

      // if is not multiple, increase the length to the closest bigger multiple
      int new_length = 4 * (bin_length / 4 + 1);

      // difference determines how many 0s to add
      int addZeros = new_length - bin_length;

      // iterate addZeros number of times
      for(int i = 0; i < addZeros; i++) {

        //add a 0 to the front of the binary value
        bin_value = "0" + bin_value;
      }
    }

    // split the binary string into substrings of 4 digits
    String[] quads = splitToNChar(bin_value, 4);

    // initialize output hexadecimal variable
    String hex_out = "";

    // iterate through each substring of 4 digits
    for (String s : quads) {

      // iterate through each pair in the hexTable
      for(String[] p : hexTable) {

        // check for a match
        if(s.equals(p[BIN_INDEX])) {

          // in case of match, add the corresponding hex char to the ouput
          hex_out += p[HEX_INDEX];
        }
      }
    }

    // return the hexadecimal representation
    return hex_out;
  }

  // Function takes a hexadecimal String representation and returns a binary
  // representation
  public static String hexToBin(String hex_value) {

    // ensures all characters are uppercase to match in hexTable
    hex_value = hex_value.toUpperCase();

    // Make substrings of length 1 of each hexadecimal digit
    String[] hex_chars = splitToNChar(hex_value, 1);

    // initialize binary output as empty string
    String bin_out = "";

    // iterate through each hexadecimal digit
    for (String x : hex_chars) {

      // iterate through each pair in the hexTable
      for(String[] p : hexTable) {

        // check for a match
        if(x.equals(p[HEX_INDEX])) {

          // in case of match, add binary representation to output string
          bin_out += p[BIN_INDEX];
        }
      }
    }

    // return the binary representation
    return bin_out;
  }

  // Function takes string and reverses it
  public static String revString(String inString) {

    // convert to byte array
    byte[] strAsByteArray = inString.getBytes();

    // create byte array of same length for outputting reversed string
    byte[] result = new byte[strAsByteArray.length];

    // iterate through byte in byte array
    for (int i = 0; i < strAsByteArray.length; i++) {

      // add the bytes in reverse order
      result[i] = strAsByteArray[strAsByteArray.length-i-1];
    }

    // convert back to string from byte array
    String outString = new String(result);

    // return the reversed string
    return outString;
  }

  // Function takes string and converts it into substrings of length: size
  public static String[] splitToNChar(String text, int size) {

        // initialize array list to append substrings
        List<String> parts = new ArrayList<>();

        // find length of input string
        int length = text.length();

        // iterate through index in steps of: size
        for (int i = 0; i < length; i += size) {

            // append substring of length: size unless string too small
            // in which case append the remaining chars
            parts.add(text.substring(i, Math.min(length, i + size)));
        }

        // convert array list into array
        return parts.toArray(new String[0]);
    }

}
