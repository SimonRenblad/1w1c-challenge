# C:\Users\simon\Documents\Programming_Challenge\2_PYTHON

from selenium import webdriver
from time import sleep
url = 'https://www.kayak.com/flights/HKT-DMK/2020-01-02?sort=bestflight_a'
driver = webdriver.Chrome(executable_path=r"C:\chromedriver.exe")
driver.get(url)
sleep(3)
print(driver.find_element_by_css_selector('.js-price').text)
driver.quit()
