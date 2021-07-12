def check(inp):
    if inp % 5 == 0:
        if inp % 3 == 0:
            return "FizzBuzz"
        return "Fizz"
    elif inp % 3 == 0:
        return "Buzz"


print("If a number is divisible by 5 then it will show fizz, by 3 then buzz, by both then fizzbuzz")
while True:
    inp = input("~> ")
    if inp == "quit":
        break
    print(check(int(inp)));
