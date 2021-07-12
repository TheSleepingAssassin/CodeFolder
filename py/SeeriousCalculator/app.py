def operate(a, b, op):
    if op == "/":
        return a / b
    elif op == "*":
        return a * b
    elif op == "+":
        return a + b
    elif op == "-":
        return a - b
    else:
        return "Not Valid"


print("This is a Calculator: ")

while True:
    problem = input("~> ")

    if problem == "quit":
        break

    problems = problem.split()

    a = int(problems[0])
    b = int(problems[2])
    op = problems[1]

    print(operate(a, b, op))
