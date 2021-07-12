arr = [1, 5, 3, 5, 3, 5, 6, 4, 7, 8, 5, 4, 6]
uniq = []
for a in arr:
    if a not in uniq:
        uniq.append(a)
print(uniq)
