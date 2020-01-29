# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON
def operator(x, y):
    if x > y:
        return operator(x - y, y)
    else:
        return x
print(operator(12,5))
print(12 % 5)
