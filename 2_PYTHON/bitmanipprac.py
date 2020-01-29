import matplotlib.pyplot as plt
import numpy as np

# integerValue = 45 #0b101101
#
# integerValue = 45 >> 2 #0b1011 = 11 is equivalent to 45 // 2^2
#
# integerValue = 45 << 2 #0b10110100 = 180 is equivalent to 45 * 4

# binaryValue = bin(integerValue)
#
# stringBinary = str(binaryValue)[2:] # removes 0b

# what happens if you shift every char in the string? 180 turns into 75

x = np.arange(0, 1000, 1)
y = []

for val_x in x:
    binary_x = bin(val_x)
    string_binary_x = str(binary_x)[2:]

    string_binary_y = ''
    for chr in string_binary_x:
        if chr == '0':
            string_binary_y += '1'
        elif chr == '1':
            string_binary_y += '0'
    y.append(int(string_binary_y,2))

plt.plot(x, np.array(y))
plt.show()
