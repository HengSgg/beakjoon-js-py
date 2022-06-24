activity, workout = input().split()


if activity == 1:
    actco = 1.2
elif activity == 2: 
    actco = 1.4
elif activity == 3:
    actco = 1.6
    
if workout == 1:
    actco = actco + 0.1
elif workout == 2:
    actco = actco + 0.2    
elif workout == 3:
    actco = actco + 0.3 
    
print(actco)