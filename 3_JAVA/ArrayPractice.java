// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
// In order to run Java, first do javac <filename>.java, then java <main class>
public class ArrayPractice {
  public static void main(String[] args) {
   int[] arrayInt = {2, 3, 4, 5};
   int[] cumulativeInt = {0, 0, 0, 0};

   for(int a = 0 ; a < arrayInt.length; a++) {
    cumulativeInt[a] = (a == 0) ? arrayInt[0] : cumulativeInt[a - 1] + arrayInt[a];
   }
   for (int b : cumulativeInt) {
     System.out.println(b);
   }
  }
}
