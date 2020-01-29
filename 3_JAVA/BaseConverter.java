// C:\Users\simon\Documents\Programming_Challenge\3_JAVA
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JComboBox;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import java.awt.BorderLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import toolbox.ToolBox; // Custom

// Class launches GUI that allows conversion between hex, dec and bin
public class BaseConverter {

  // enumberator for determining to and from base conversion
  enum Base {
    DEC,
    BIN,
    HEX
  }

  //main method
  public static void main(String[] args) {

    // initialize GUI
    new BaseConverter();
  }

  // constructor method for creating the GUI using swing
  public BaseConverter() {

    // create new JFrame
    JFrame frame = new JFrame();

    // set properties of JFrame
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setTitle("Base Converter");
    frame.setSize(650, 150);
    frame.setResizable(false);

    //This will center the JFrame in the middle of the screen
    frame.setLocationRelativeTo(null);

    // Text Fields
    JTextField dec_field = new JTextField(32);
    JTextField bin_field = new JTextField(32);
    JTextField hex_field = new JTextField(32);

    // Buttons
    JButton dec_button = new JButton("CONVERT FROM DEC");
    JButton bin_button = new JButton("CONVERT FROM BIN");
    JButton hex_button = new JButton("CONVERT FROM HEX");

    // Labels
    JLabel dec_label = new JLabel("Decimal: ");
    JLabel bin_label = new JLabel("Binary: ");
    JLabel hex_label = new JLabel("Hexadecimal: ");

    // Button Listener
    dec_button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent event) {

        // initialize a string for conversion based on corresponding JTextField
        String input_string = dec_field.getText();

        // set the text of the other fields to the conversion using convert()
        bin_field.setText(convert(input_string, Base.DEC, Base.BIN));
        hex_field.setText(convert(input_string, Base.DEC, Base.HEX));
      }
    });
    bin_button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent event) {
        String input_string = bin_field.getText();
        dec_field.setText(convert(input_string, Base.BIN, Base.DEC));
        hex_field.setText(convert(input_string, Base.BIN, Base.HEX));
      }
    });
    hex_button.addActionListener(new ActionListener() {
      @Override
      public void actionPerformed(ActionEvent event) {
        String input_string = hex_field.getText();
        bin_field.setText(convert(input_string, Base.HEX, Base.BIN));
        dec_field.setText(convert(input_string, Base.HEX, Base.DEC));
      }
    });

    //Create 3 Panels: Hex, Dec, Bin
    JPanel dec_panel = new JPanel();
    JPanel bin_panel = new JPanel();
    JPanel hex_panel = new JPanel();

    //Add elements to panels
    dec_panel.add(dec_label);
    bin_panel.add(bin_label);
    hex_panel.add(hex_label);
    dec_panel.add(dec_field);
    bin_panel.add(bin_field);
    hex_panel.add(hex_field);
    dec_panel.add(dec_button);
    bin_panel.add(bin_button);
    hex_panel.add(hex_button);

    //Add elements to frame
    frame.add(dec_panel, BorderLayout.NORTH);
    frame.add(bin_panel, BorderLayout.CENTER);
    frame.add(hex_panel, BorderLayout.SOUTH);

    //Show JFrame on screen
    frame.setVisible(true);
  }

  // Function takes in input string, enums for base conversion, and returns the
  // appropriate base representation
  private static String convert(String in, Base from, Base to) {

    // initialize output strings
    String bin_output = "";
    String hex_output = "";
    String dec_output = "";

    // find two other representations (from is given)
    switch(from) {
      case DEC:

        // Convert decimal to binary
        bin_output = ToolBox.decToBin(Integer.parseInt(in));

        // Convert binary to hexadecimal
        hex_output = ToolBox.binToHex(bin_output);
        break;
      case BIN:

        // Convert binary to decimal
        dec_output = Integer.toString(ToolBox.binToDec(in));

        // Convert binary to hexadecimal
        hex_output = ToolBox.binToHex(in);
        break;
      case HEX:

        //Convert hexadecimal to binary
        bin_output = ToolBox.hexToBin(in);

        // Convert binary to decimal
        dec_output = Integer.toString(ToolBox.binToDec(bin_output));;
        break;
    }

    // return appropriate value asked by function
    switch(to) {
      case DEC:
        return dec_output;
      case BIN:
        return bin_output;
      case HEX:
        return hex_output;
    }

    return in; // this line of code will never execute, but required for javac
  }
}
/*
 1. Create bin to dec, bin to hex and hex to bin funcs x
 2. Comment ToolBox x, Range x, BaseConverter x, pynews.py x
 3. Finish BaseConverter x
 4. Develop pynews.py
 5. Sweden Abroad x
*/
