import math

print('''기초대사량 판정 프로그램 입니다. 
성별을 입력하세요.
남자: m, 여자: f''')
sex = input()
print('키와 몸무게를 입력해주세요')
print('키:')
height = input()
print('몸무게:')
weight = input()
print('나이를 입력해 주세요:')
age = int(input())
print('당신의 생활은 활동적인가요?\n 활동적이지 않다: 1\n 보통이다: 2\n 활동적이다: 3')
activity = input()
print('일주일에 운동을 몇회 하나요? \n 주 0회: 0\n 주 1~3회: 1\n 주 4~6회: 2\n 주 7회: 3')
workout = input()

if activity == 1:
    actco = 1.2
if activity == 2: 
    actco = 1.4
if activity == 3:
    actco = 1.6
    
if

if sex == 'm':
    result = (88.4+13.4*int(weight))+(4.8*int(height))-(5.68*int(age))
else:
    result = (447.6+9.25*int(weight)+(3.1*int(height))-(4.33*int(age)))


print(f'기초대사량:{math.trunc(result)}kcal')