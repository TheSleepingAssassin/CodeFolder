def operate(a, b, op):
    if (op == '/'):
        return a / b
    elif (op == '*'):
        return a * b
    elif (op == '+'):
        return a + b
    elif (op == '-'):
        return a - b
    elif op == '//':
        return a // b
    elif op == '**':
        return a ** b
    else:
        return "I don't understand that"
