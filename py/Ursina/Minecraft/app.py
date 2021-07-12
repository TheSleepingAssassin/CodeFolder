from ursina import *
from ursina.prefabs.first_person_controller import FirstPersonController

class Voxel(Button):
    def __init__(self, pos = (0, 0, 0)):
        super().__init__(
                parent = scene,
                position = pos,
                model = 'cube',
                origin_y = 0.5,
                texture = 'white_cube',
                color = color.white,
                highlight_color = color.lime)


        def input(self, key):
            if self.hovered:
                if key == 'right mouse down':
                    voxel = Voxel(pos = self.pos + mouse.normal)

                if key == 'left mouse down':
                    destroy(self)

app = Ursina()

for z in range(20):
    for x in range(20):
        voxel = Voxel(pos = (x, 0, z))

player = FirstPersonController()

app.run()
