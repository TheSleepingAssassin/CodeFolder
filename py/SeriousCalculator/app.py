import functions

print("This is a calculator.")
print("You can type:- 2 + 2 OR 2 + 2 * 3 etc.")

while True:
    problem = input("~> ")
    if (problem == "quit"):
        break
    problems = problem.split()
    a = problems[0]
    b = problems[2]
    op = problems[1]
    print(functions.operate(int(a), int(b), op))
