inp = int(input('Enter weight of the parcel: '))

if (inp < 10):
    print(f"Cost is {inp * 15}")
elif (inp > 10 and < 30):
    print(f"Cost is {inp * 25}")
elif (inp > 30):
    print(f"Cost is {inp * 35}")
