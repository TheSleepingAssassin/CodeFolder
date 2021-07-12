print("Write a list of nums without any spaces.")
arr_ = input("> ")
arr = arr_.split(",")
uniq = []
for a in arr:
    if a not in uniq:
        uniq.append(a)
print(uniq)
