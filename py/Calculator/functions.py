def calc(val, val1, inp):
    if inp == "+":
        return val + val1
    elif inp == "-":
        return val - val1
    elif inp == "*":
        return val * val1
    elif inp == "/":
        return val / val1
    elif inp == "**":
        return val ** val1
    elif inp == "//":
        return val // val1
    else:
        return """
That is not a valid operator.
'+': To add.
'-': To subtract.
'*': To multiply.
'/': To divide.
'**': Exponent.
'//': Divide without floats.
'quit': To quit.
'help': To see this page.
        """
