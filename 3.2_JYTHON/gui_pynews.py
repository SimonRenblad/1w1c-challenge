from javax.swing import JFrame
from javax.swing import JButton
from javax.swing import JLabel
from javax.swing import JTextField
from javax.swing import JCheckBox
from java.awt import GridLayout
import pynews as pn
import time

# discontinued due to netty issues

class PyNewsGUI:
    def __init__(self):
        self.guiFrame()

    articles = []

    def pyNewsSearch(self, event):
        self.articles = pn.googleNews(self.input_field.getText())
        print("got through search")
        #self.exp_button.setEnabled(True)
        #self.opn_button.setEnabled(True)
        #self.wrt_button.setEnabled(True)
        time.sleep(2000)

    def expandNews(self):
        pass

    def openNews(self):
        pass

    def openHTML(self):
        pass

    def writeToCSV(self):
        #if .isSelected():
        pass

    def guiFrame(self):

        frame = JFrame("PyNews")
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)
        frame.setLocationRelativeTo(None)
        frame.setSize(600, 200)
        frame.setResizable(False)


        frame.setLayout(GridLayout(5, 3, 10, 10))

        # logo
        self.logo = JLabel("  PyNews")

        # query input
        self.input_field = JTextField(30)

        # search button
        self.src_button = JButton("Search!", actionPerformed=self.pyNewsSearch)

        # expand button
        self.exp_button = JButton("Expand!", actionPerformed=self.expandNews)
        self.exp_button.setEnabled(False)

        # open button
        self.opn_button = JButton("Open!", actionPerformed=self.openNews)
        self.opn_button.setEnabled(False)

        # open html button
        self.htm_button = JButton("HTML-Open!", actionPerformed=self.openHTML)
        self.htm_button.setEnabled(False)

        # write to file button
        self.wrt_button = JButton("CSV-Write!", actionPerformed=self.writeToCSV)
        self.wrt_button.setEnabled(False)

        # checkboxes
        self.categories = ["authors", "publish_date", "top_image", "movies", "text", "article_html", "summary", "keywords"]
        self.checkboxes = []

        for cat in self.categories:
            self.checkboxes.append(JCheckBox(cat))

        # add to frame

        frame.add(self.logo)
        frame.add(self.input_field)
        frame.add(self.src_button)
        frame.add(self.exp_button)
        for cb in self.checkboxes[:2]:
            frame.add(cb)
        frame.add(self.opn_button)
        for cb in self.checkboxes[2:4]:
            frame.add(cb)
        frame.add(self.htm_button)
        for cb in self.checkboxes[4:6]:
            frame.add(cb)
        frame.add(self.wrt_button)
        for cb in self.checkboxes[6:8]:
            frame.add(cb)
        print("got to end ")
        frame.setVisible(True)

PyNewsGUI()

print("end")
