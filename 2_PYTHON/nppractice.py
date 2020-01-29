# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

import numpy as np

a = np.array([[1, 2, 3], [2, 3, 4], [3, 4, 5]], dtype=np.float64)

# a =
# [1 2 3]
# [2 3 4]
# [3 4 5]

b = np.sqrt(a) # Sqrt, can also add, divide or multiply, per element

# b =
# [1.         1.41421356 1.73205081]
# [1.41421356 1.73205081 2.        ]
# [1.73205081 2.         2.23606798]

c = np.dot(a, b) # Dot Product

# c =
# [ 9.02457955 10.87831518 12.44025474]
# [13.17084392 16.02457955 18.40837353]
# [17.31710829 21.17084392 24.37649231]

d = c.T # transposing a matrix

# d =
# [ 9.02457955 13.17084392 17.31710829]
# [10.87831518 16.02457955 21.17084392]
# [12.44025474 18.40837353 24.37649231]

# Performing row addition across all rows (Broadcasting)
v = np.array([1, 0, 1])
vv = np.tile(v, (3, 1))

# vv =
# [1 0 1]
# [1 0 1]
# [1 0 1]

e = d + vv #adding elements in matrices
f = d + v #broadcasting

print(f)

# e == f =
# [10.02457955 13.17084392 18.31710829]
# [11.87831518 16.02457955 22.17084392]
# [13.44025474 18.40837353 25.37649231]
