# To print the Fibonnaci series

n = int(input("Number of levels: "))

a = 0
b = 1

print(f"""
{a}
{b}
        """)

for i in range(0, n):
    c = a + b
    print(c)
    a = b
    b = c
