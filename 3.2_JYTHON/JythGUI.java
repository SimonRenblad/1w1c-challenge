import org.python.util.PythonInterpreter;
import org.python.core;

public class JythGUI {
  public static void main(String[] args) throws PyException {
   PythonInterpreter pyIntr = new PythonInterpreter();
   pyIntr.execfile("junderlying.py");
  }
  public JythGUI(){

  }
}
