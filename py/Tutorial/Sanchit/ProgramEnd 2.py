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


# COME
# DOWN
# HERE
# please

# See here this is a calculator
print("This is a Calculator")

# This is a while loop
while True:
    # Taking the inputs
    a = int(input("Val1~> "))
    op = input("Val2~> ")
    b = int(input("Val3~> "))

    if op == "quit":
        # We checking if the operator is quit
        # I know this is not the most efficient way but..
        break
        # Now we break out of the loop
        # Go down and read the further lines before coming back up here
        # Now you are so I have guessed you have read the below lines so now..
        # To end the program even if there is code after it..
        # The command is :-
        quit()
        # Have a nice day

    print(operate(a, b, op))

# After the loop ends then there is no code left but..
# Just pretend there was
# Well there is

inputt = input("Enter this flippin' input here: ")
if (inputt == "LOL"):
    print("LOL")
    # Something like that
    # There is some code down here
    # So if the loop breaks out this code will be executed
    # if you don't want that then just in the loop type "quit()" after break and it will break out of the loop
