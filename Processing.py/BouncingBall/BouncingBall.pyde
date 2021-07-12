from Ball import *
width = 600
height = 600

def setup():
    size(600, 600)


ball = Ball(width, height)


def draw():
    background(0)
    ball.render()
    ball.update()
    ball.bounce()
