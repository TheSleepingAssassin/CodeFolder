import pygame
pygame.init()

WIDTH = 400
HEIGHT = 400

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)


def update():
    render()


def render():
    x = WIDTH / 2
    y = HEIGHT / 2
    w = 50
    h = 50
    pygame.draw.rect(
        screen, RED, [x - w/2, y - h/2, w, h], 0)


size = (WIDTH, HEIGHT)
screen = pygame.display.set_mode(size)
pygame.display.set_caption("My first Pygame Game")

carryOn = True
clock = pygame.time.Clock()

while carryOn:

    for event in pygame.event.get():
        if (event.type == pygame.QUIT):
            carryOn = False

    screen.fill(WHITE)

    update()

    pygame.display.flip()

    clock.tick(60)

pygame.quit()
