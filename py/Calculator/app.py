from functions import *

print("Type help to see the list of functions.")

while True:
    op = input("Function~> ")
    if op == "quit":
        break
    elif op == "help":
        print("""
'+': To add.
'-': To subtract.
'*': To multiply.
'/': To divide.
'**': Exponent.
'//': Divide without floats.
'quit': To quit.
'help': To see this page.
        """)
    else:
        try:
            val = int(input("Val1~> "))
            val1 = int(input("Val2~> "))
        except ValueError:
            print("That is not a definite number.")
        print(calc(val, val1, op))
