print("Type Yes or No")

# This is in a while loop.
while True:
    inp = input("Do you want this program to keep going?: ")
    # We take the input
    inp = inp.upper()
    # We convert it to uppercase so it can be applicable even if the user writes YeS

    if inp == "YES":
        # We check if input == YES
        print("OK we'll keep going")
        # We keep going
    elif inp == "NO":
        # Check if input == NO
        print("OK Bye")
        # BYE
        break
        # We use break here to break out of the loop
# As now there is no code at the end the program will end
# If you have code at the end open the other file I sent you
