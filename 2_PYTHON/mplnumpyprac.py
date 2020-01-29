# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

import numpy as np
import matplotlib.pyplot as plt

#compute points
x = np.arange(0, 3*np.pi, 0.1)
y_sin = np.sin(x)
y_sinsquare = y_sin**2

#plot them
plt.plot(x, y_sin) #takes in a numpy array of x-coords and y-coords
plt.plot(x, y_sinsquare)
plt.xlabel('x axis label')
plt.ylabel('y axis label')
plt.title('Sine and its square')
plt.legend(['Sine', 'Sine^2'])
plt.show()
