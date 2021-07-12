def operate(a, b, op):
    if (op == "/"):
        return a / b
    elif (op == "*"):
        return a * b
    elif (op == "+"):
        return a + b
    elif (op == "-"):
        return a - b
    return 0


print("You can type help to see the list of commands")
print(" OR ")
print("Enter a problem like this: '2 + 2'")

while (True):
    problem = input("Enter a problem: ")

    if (problem.upper() == "QUIT"):
        break
    elif (problem.upper() == "HELP"):
        print("""
quit: To quit
help: To see this screen
""")
        continue

    problems = problem.split()

    a = int(problems[0])
    b = int(problems[2])
    op = problems[1]

    print(operate(a, b, op))
