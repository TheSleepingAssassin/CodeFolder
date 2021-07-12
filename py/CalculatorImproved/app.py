def operate(a, b, op):
    if op == '/':
        return a / b
    elif op == '*':
        return a * b
    elif op == '+':
        return a + b
    elif op == '-':
        return a - b
    else:
        return "Operator is Invalid"


print("This is a Calculator")
print("Example:- 2 + 2")
while True:
    problem = input("Enter a maths problem: ")
    if (problem == "quit"):
        break
    problems = problem.split()
    a = int(problems[0])
    op = problems[1]
    b = int(problems[2])

    print(operate(a, b, op))
