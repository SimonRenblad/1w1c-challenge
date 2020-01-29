// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
// Must compile both Student.java and School.java
abstract class Building {
  public abstract void destroy();
}
interface Entity {
  public void create();
  public void identify();
}
public class School extends Building implements Entity { // extends = inherits, implements = interface
  public static void main(String[] args) {
   Student george = new Student("George", 18);
   Student ari = new Student("Ari", 17);
   Student[] students = {george, ari};
   Student.graduate(students);
  }
  public void destroy() { // Overriden from building...
    System.out.println("School destroyed");
  }
  public void create() { // Overriden from entity
    System.out.println("Created");
  }
  public void identify() { // Overriden from entity
    System.out.println("This is a School");
  }
}
