A = input()
B = input()
str_B = str(B)

a = int(A) * int(str_B[-1])
b = int(A) * int(str_B[-2])
c = int(A) * int(str_B[-3])
print(a)
print(b)
print(c)
print(a + b * 10 + c * 100)