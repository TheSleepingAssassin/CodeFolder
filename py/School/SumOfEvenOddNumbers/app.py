print("Enter a range like this: '2-10' ")
problem = input("~> ")
problems = problem.split("-")

a = int(problems[0])
b = int(problems[1])

eve = odd = 0

for i in range(a, b + 1):
    if i % 2 == 0:
        eve += i
        print(f"EVE: {eve}")
    else:
        odd += i
        print(f"ODD: {odd}")
else:
    print(f"The sum of all even numbers is: {eve}")
    print(f"The sum of all odd numbers is: {odd}")
