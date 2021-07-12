ntl = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,

    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
}


def checkKey(dict, key):
    if key in dict.keys():
        return True
    else:
        return False


print('Enter any number(1 - 9) in letters.')
print('Type quit to terminate the program.')
while True:
    inp = input('> ')
    if inp.isdigit():
        print(ntl.get(inp))
    elif inp.isdigit() == False:
        if inp == "quit":
            break
        elif checkKey(ntl, inp):
            print(ntl.get(inp))
        else:
            print("That is not in the dictionary.")

    else:
        print("I don't understand that.")
