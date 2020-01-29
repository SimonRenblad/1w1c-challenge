# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

import time
import threading

# Timer List
timers = []



def notify(note, in_time):
    time.sleep(in_time)
    print(note)

while len(timers) < 10:
    note = input("What is the notice:\n")
    in_time = int(input("What is the delay:\n"))
    timers.append(threading.Thread(target=notify, args=(note, in_time)))
    timers[-1].start()
    print(len(timers))
    for t in timers:
        if not t.is_alive():
            t.join()
            print(len(timers))

for t in timers:
    t.join()

print("Too many timers running at the same time, shutting down.")
