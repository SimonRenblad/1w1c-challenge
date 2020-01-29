# C:\Users\simon\Documents\Programming_Challenge\3.2_JYTHON

from javax.swing import JFrame
from javax.swing import JButton
import requests

def doAGetRequest():
    re = requests.get('https://www.google.com')
    print("finished")

def onClick(event):
    print("clicked")
    executor = TaskExecutor()
    executor.runBackground(doAGetRequest)



frame = JFrame("Hello World!")
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)
frame.setLocationRelativeTo(None)
frame.setSize(300,200)
frame.add(JButton("click", actionPerformed=onClick))
frame.setVisible(True)
