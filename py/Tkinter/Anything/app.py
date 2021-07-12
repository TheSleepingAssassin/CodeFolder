# imports
# all of them

from tkinter import *


# FunCTIONS
# clasSes
# And StuFF

class Circle:
    def __init__(self, x, y, r):
        self.x = x
        self.y = y
        self.r = r

    def render(self):
        canvas.create_oval(self.x - self.r, self.y -
                           self.r, self.x + self.r, self.y + self.r)


# Main
# Code


root = Tk()

wWidth = 400
wHeight = 400
root.geometry(f"{wWidth}x{wHeight}")
canvas = Canvas(width=wWidth, height=wHeight)

c = Circle(wWidth / 2, wHeight / 2, 50)
c.render()

canvas.pack()
root.mainloop()
