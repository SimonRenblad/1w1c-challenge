# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

# Functions as a one time use buffer, can only be returned once and must be immediately replaced

class Buffer:
    value = 0
    def __init__ (self, init_value):
        self.value = init_value

    def __lt__ (self, other):
        temp = self.value
        self.value = other
        return temp

# bff = Buffer(4)
#
# print(bff < "any string") # 4
# print(bff < 5) # any string
# print(bff < [0, 1]) # 5
#
# hobo = bff < 4 # [0, 1]
# print(hobo)
#
# for n in (bff < 4):
#     print(n) # 0, 1
