# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

def nextSquare(num):
    result = num
    while True:
        result **= 2
        yield result # returns a generator, stops here and will cont when next() is called


nex = nextSquare(2) # creates generator object

for _ in range(10):
    print(next(nex))
