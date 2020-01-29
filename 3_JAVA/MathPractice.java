// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
// In order to run Java, first do javac <filename>.java, then java <main class>
public class MathPractice {
  public static void main(String[] args) {
   int x = 4;
   int y = 5;
   int prod_x_y = x*y;

   System.out.println(prod_x_y);

   double div_x_y = x / y; // floor division
   div_x_y = (double) x / (double) y; // float division
   div_x_y = x / (double) y; // float division
   div_x_y = (double) x / y; // float division

   System.out.println(div_x_y);

   boolean bool = true;
   boolean otherbool = false;

   boolean orBool = bool || otherbool; // true
   boolean andBool = bool && otherbool; // false

   if(orBool) {
     System.out.println("Or is true");
   }
   if(andBool) {
     System.out.println("And is true");
   }
   System.out.println(Math.max(x,y) + " is larger than " + Math.min(x,y)); // Math class is built-in
   System.out.println((int) Math.pow(x, 2)); //to the power of .sqrt() does square root
  }
}
