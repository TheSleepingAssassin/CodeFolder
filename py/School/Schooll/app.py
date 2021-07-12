print("This program finds the sum of all even numbers in the range you provide.")
print("Enter 2 numbers below split by a , like '2, 10'.")
while True:
    rang_ = input("Enter: ")

    if (rang_.upper() == "QUIT"):
        break

    rang = rang_.split(", ")

    try:
        a = int(rang[0])
        b = int(rang[1])
    except:
        print("Invalid range")
        continue

    summ = 0;

    for i in range(a, b + 1):
        if i % 2 == 0:
            summ += i

    print(summ)
