import random

print("This is a rock paper scissor game")
print("Enter 1 for rock, 2 for paper and 3 for scissors")
while True:
    if (input("Play?: ").upper() == "NO"):
        break
    inp = int(input("Enter: "))

    print("You: ")

    if inp == 1:
        print("""
Rock
                """)
    elif inp == 2:
        print("""
Paper
                """)
    elif inp == 3:
        print("""
Scissors
                """)

    choice = random.randint(1, 3)

    print("Computer: ")
    if choice == 1:
        print("Rock")
        if inp == 1:
            print("Tie")
        elif inp == 2:
            print("Win")
        elif inp == 3:
            print("Lose")
        else:
            print("Not Valid")
    elif choice == 2:
        print("Paper")
        if inp == 1:
            print("Lose")
        elif inp == 2:
            print("Tie")
        elif inp == 3:
            print("Win")
    elif choice == 3:
        print("Scissors")
        if inp == 1:
            print("Win")
        elif inp == 2:
            print("Lose")
        elif inp == 3:
            print("Tie")
    print("")
