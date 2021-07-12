print('Type quit to quit.')


def fizz_buzz(input):
    ip = 0
    if input != "quit":
        ip = int(input)
        x5 = ip % 5
        x3 = ip % 3
        if x5 == 0 and x3 == 0:
            return "FizzBuzz"
        elif x5 == 0:
            return "Fizz"
        elif x3 == 0:
            return "Buzz"
    elif input == "quit":
        return input
    else:
        return ip


while True:
    inp = input('Enter a number:> ')
    fb = fizz_buzz(inp)
    if fb == "quit":
        break
    elif fb != "quit":
        print(fb)
