def complete_factorization(num): # 15
	i = 2
	factors = []
	while i * i <= num: # 4 < 15 then 9 < 15 x2 then 16 < 15
		if num % i == 0: # 15 % 4 != 0 then 15 % 3 == 0 then 5 % 3 !=0
			factors.append(i) # [3]
			num = num // i # 5
		else:
			i += 1 # 3 then 4
	factors.append(num) # [3, 5]
	return factors
