from functions import *
from tkinter import *

root = Tk()

root.geometry("600x400")
root.title("Labels and Buttons")

label = Label(text="This is a Label.")
label.pack()

button = Button(text="CLICK ME", command=createLabel)
button.pack()

root.mainloop()
