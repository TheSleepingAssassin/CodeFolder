while True:
    inp_ = input("~> ")
    if inp_ == "quit":
        break
    inp = int(inp_)

    if inp % 5 == 0:
        if inp % 3 == 0:
            print("FizzBuzz")
        else:
            print("Fizz")
    elif inp % 3 == 0:
        print("Buzz")
    else:
        print(inp)
