// Submitted by Simon Renblad
// SID: 20645923

/**
 * Exercise for lesson 2 ASCII To Emoji
 * 
 * The program reads some text and convert the emoji letters to emojis.
 *
 * For each character in the text, do the following:
 *    If c equals to 'h' or 'H', change it to a happy emoji
 *    If c equals to 'a' or 'A', change it to an angry emoji
 *    If c equals to 's' or 'S', change it to a sad emoji 
 *    Otherwise, keep it unchanged
 */

import java.util.Scanner;

public class AsciiToEmoji {
            
    public static void main(String[] args) {
                
        // Task 1.1: Prepare a scanner for user input handling 
        Scanner scanner = new Scanner(System.in);
        
        // The input line
        String line = "";       
        
        // A temporary character as buffer
        char ch = ' ';
        
        // Keep asking for the input until it is equal to "bye"
        do {
            System.out.print("Please enter a line of text (enter 'bye' to quit the program): ");
            
            // Task 1.2: Read a line from the scanner object
            line = scanner.nextLine();
            
            // Task 2: Convert the emoji letters to emojis

            for(int i = 0; i < line.length(); i++) { // iterate through line scanned
                
                ch = line.charAt(i);                 // store character at index 'i' in variable 'ch'
                
                                                     // checks whether 'ch' is an emojii character
                if(ch == 'h' || ch == 'H') 
                    System.out.print(":-)");         // character is happy emojii, print happy emojii
                else if(ch == 'a' || ch == 'A')
                    System.out.print("*^*");         // character is angry emojii, print angry emojii
                else if(ch == 's' || ch == 'S')
                    System.out.print(":-(");         // character is sad emojii, print sad emojii
                else
                    System.out.print(ch);            // character is not emojii, print character as is

            }
            System.out.println();                    // print new line for line input
            
        } while (!line.equals("bye"));               // exit program on user input string "bye"
    }
}
