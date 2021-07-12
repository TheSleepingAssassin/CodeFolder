inp = input("Enter the range separated by a comma: ")

a = 0
b = 0

if "," in inp:
    str = inp.split(",")
    a = int(str[0])
    b = int(str[1])
elif ", " in inp:
    str = inp.split(", ")
    a = int(str[0])
    b = int(str[1])

evenTotal = 0
oddTotal = 0

for i in range(a, b + 1):
    if i % 2 == 0:
        evenTotal += i
    else:
        oddTotal += i

print(f"Even Total is {evenTotal}")
print(f"Odd Total is {oddTotal}")
