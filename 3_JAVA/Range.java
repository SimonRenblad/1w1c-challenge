package toolbox;
/*
===============================================================================
                          T O O L B O X : R A N G E
===============================================================================

  toolbox.Range is the java equivalent of the popular python range(), reverse()
  functions.

  Range:
   - given a min (inc), max (exc) and a step, create an array
   - allows for a reverse using the .reverse() method
*/
public class Range {

  // declare the underlying array
  private double[] range_array;

  //Constructors
  public Range(double min, double max, double step) {
    createRange(min, max, step);
  }
  public Range(double min, double max) {
    createRange(min, max, 1.0);
  }

  public Range(double[] rng) {

    //validates the inputted array
    if(rng.length > 2) {

      // assume step as distance between first two values
      double step = rng[1] - rng[0];

      // iterate through remaining elements
      for (int i = 2; i < rng.length; i++) {

        // nullify if step is inconsistent
        if(rng[i] - rng[i-1] != step) {
          System.out.println("Not a range, returns null.");
          this.range_array = null;
        }
      }
    }

    // set the underlying array as the validated input array
    this.range_array = rng;
  }

  //Output Modes
  public double[] out() {
    return this.range_array;
  }

  // function reverses the array and returns it
  public double[] reverse() {

    //empty array with same length
    int len = this.range_array.length;
    double[] temp_array = new double[len];

    //add elements in reverse
    for (int i = 0; i < len; i++) {
      temp_array[i] = this.range_array[len - (1 + i)];
    }
    return temp_array;
  }

  // underlying function responsible for creating range
  private double[] createRange(double min, double max, double step) {

    //catch error
    if(step < 0 || max < min) {
      System.out.println("Error: Please use .reverse() for this kind of functionality!");
      return null;
    }

    // determine number of elements in range
    int num_elems = (int) Math.floor(Math.abs(max - min) / step) + 1;

    // create empty array
    double[] temp_array = new double[num_elems];

    // set iterator to minimum value
    double iterator = min;

    // create range by filling array
    for (int index = 0; index < temp_array.length; index++) {
      temp_array[index] = iterator;
      iterator += step;
    }

    // set as underlying array and return
    this.range_array = temp_array;
    return this.range_array;
  }
}
