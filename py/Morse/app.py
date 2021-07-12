from functions import *

inp = input("~> ").upper()
mort = input("To((M)orse OR (T)ext):~>").upper()

if mort == 'M':
    print(encrypt(inp))
elif mort == 'T':
    print(decrypt(inp))
else:
    print(f"{mort} is not a language you can transate to right now.")
