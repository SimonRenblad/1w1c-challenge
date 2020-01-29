// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
import java.util.Scanner;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class InputOutput {
  public static void main(String[] args) {

    int bin_length = 13;
    int new_length = 4 * (bin_length / 4 + 1);
    System.out.println(new_length);
    System.out.println(new_length - bin_length);

    Scanner scan = new Scanner(System.in);

   //Output
   System.out.println("What's your name?");

   //Input
   String fname = scan.nextLine();
   System.out.println("Greetings, " + fname);

   //Dates & time
   LocalDate nw = LocalDate.now();
   System.out.println("Today's Date is: " + nw);

   LocalTime tm = LocalTime.now();
   System.out.println("The currrent time is: " + tm);

   //Formatting dates and times
   LocalDateTime dnt = LocalDateTime.now();
   DateTimeFormatter frmt = DateTimeFormatter.ofPattern("dd-MMM-yy HH:mm");
   String str = dnt.format(frmt);
   System.out.println("After Formatting: " + str);
  }
}
