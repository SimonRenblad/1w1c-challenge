// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
// In order to run Java, first do javac <filename>.java, then java <main class>
public class MethodMadness {
  public static void main(String[] args) {
    System.out.println(rvrString("reverse")); // esrever
    System.out.println(rvrInt(34) + 2); // 45
    System.out.println(rvrDouble(23.45) + rvrDouble(-23.12)); //54.32 - 21.32 = 33.0
  }
  static String rvrString(String str) {
    String returnString = "";
    for (int c = str.length() - 1; c >= 0; c--) {
      returnString += str.charAt(c);
    }
    return returnString;
  }
  static int rvrInt(int int_in) {
    if(int_in >= 0) {
      String tempString = Integer.toString(int_in); // primitive to non-primitive conversions are complicated
      return Integer.parseInt(rvrString(tempString));
    } else {
      String tempString = Integer.toString(Math.abs(int_in));
      int int_out_pos = Integer.parseInt(rvrString(tempString));
      return -int_out_pos;
    }
  }
  static double rvrDouble(double dbl_in) {
    if(dbl_in >= 0) {
      String tempString = Double.toString(dbl_in); // primitive to non-primitive conversions are complicated
      return Double.parseDouble(rvrString(tempString));
    } else {
      String tempString = Double.toString(Math.abs(dbl_in));
      double dbl_out_pos = Double.parseDouble(rvrString(tempString));
      return -dbl_out_pos;
    }
  }
}
