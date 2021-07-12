import re

from morse import *

while True:
    inp = input("> ")
    if inp == "quit":
        break
    else:
        print(code(inp))
