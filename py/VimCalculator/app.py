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
        return "Invalid Operator"


print("This is a calculator")
print("Type help to see the list of commands.")

while True:
    problem_ = input("Enter: ")

    try:
        problems = problem_.split()
        a = int(problems[0])
        b = int(problems[2])
        op = problems[1]
    except:
        problem = problem_.upper()

        if (problem == "QUIT"):
            break
        elif problem == "HELP":
            print("""
help:- To see this page.
quit:- To quit the program.
                    """)
            continue
        else:
            print(f"{problem_} is not a valid command, try again")
            continue

    print(operate(a, b, op))
