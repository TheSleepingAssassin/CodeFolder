# This is a program to calculate the Factorial of a number

print("This is a program to calculate the Factorial of a number")
print("Type help to see this list of commands.")

while (True):
    inp = input("Enter a number: ")

    if (inp.upper() == "QUIT"):
        break
    elif (inp.upper() == "HELP"):
        print("""
        quit: To quit
        help: To see this screen
        """)
        continue

    inp = int(inp)

    f = 1

    for i in range(1, inp + 1):
        f *= i

    print(f)
