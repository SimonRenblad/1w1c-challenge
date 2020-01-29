# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

import threading
import time

def timerThread (name, delytme):
    time.sleep(delytme)
    str = f"{name}: {time.ctime(time.time())}"
    print(str)

try:
    t1 = threading.Thread(target=timerThread, args=('Thread-1', 2))
    t2 = threading.Thread(target=timerThread, args=('Thread-2', 4))
    t1.start()
    t2.start()
except:
    print("unable to thread properly")

print("will print before finishing threads.")

t1.join()
t2.join()

print("finished threading")
