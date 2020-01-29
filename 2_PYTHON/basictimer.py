# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

import threading
import time

def notify(note, in_time):
    time.sleep(in_time)
    print(note)

notice = input("What is the notice? ")
tme = int(input("what number of seconds delay? "))

timer1 = threading.Thread(target=notify, args=(notice, tme))

timer1.start()

print("running timer")

input("hold")

timer1.join()
