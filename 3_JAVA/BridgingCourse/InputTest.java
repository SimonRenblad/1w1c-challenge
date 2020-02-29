import java.util.Scanner;

public class InputTest {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        String input_string = scanner.next();
        System.out.println(input_string);
        String input_string_line = scanner.nextLine();
        System.out.println(input_string_line);

    }

}
