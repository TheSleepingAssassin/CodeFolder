while True:
    char = input("Enter a character: ")

    if char.isdigit():
        print("That is a number you fool. I said something from A-Z.")
        continue

    if char == "Quit":
        break

    if char.isupper():
        print("It is uppercase.")
    else:
        print("It is lowercase.")
