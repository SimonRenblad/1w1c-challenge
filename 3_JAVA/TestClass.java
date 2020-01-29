// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
import toolbox.ToolBox;
import toolbox.Range;

public class TestClass {
  public static void main(String[] args) {

    byte[] arr = new byte[4];
    byte[] arr2;
    arr[1] = 3;
    arr2 = arr;
    arr = new byte[4];
    System.out.println(arr2[1]);


    //System.out.println(ToolBox.decToBin(17));

    // int min = ToolBox.randomInt(1, 20);
    // int max = ToolBox.randomInt(21, 40);
    // int step = ToolBox.randomInt(1, 5);
    //
    // double[] dbl = new Range(min, max, step).reverse();
    // for (double d : dbl) {
    //   System.out.println((int) d);
    // }

    // System.out.println(ToolBox.randomInt(5, 10));

    // Range rng = new Range(1.0, 10.0);
    // Range rng2 = new Range(1.0, 10.0, 2.0);
    // Range rev = new Range(rng.reverse());
    // for (double d : rng.out()) {
    //   System.out.println((int) d);
    // }
    // for (double d : rev.out()) {
    //   System.out.println((int) d);
    // }
    // for (double d : rng2.out()) {
    //   System.out.println((int) d);
    // }
  }
}
