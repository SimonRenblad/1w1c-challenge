// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
// Must compile both Student.java and School.java

public class Student {
  private String fname;
  private int age;

  public Student(String fname, int age) {
    this.fname = fname;
    this.age = age;
  }

  public static void graduate(Student[] students) {
    for (Student graduate : students) {
      System.out.println("Congratulations, " + graduate.getFname() + "!");
    }
  }

  // Getters and Setters
	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
}
