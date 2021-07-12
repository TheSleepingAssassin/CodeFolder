class Ball:
    def __init__(self, width, height):
        self.pos = PVector(width / 2, height / 2)
        self.vel = PVector.random2D()
        self.vel.mult(5)
        self.r = 16


    def bounce(self):
        if self.pos.x > width - self.r or self.pos.x < self.r:
            self.vel.x *= -1
        if self.pos.y > height - self.r or self.pos.y < self.r:
            self.vel.y *= -1


    def update(self):
        self.pos.add(self.vel)


    def render(self):
        noStroke();
        fill(255);
        circle(self.pos.x, self.pos.y, self.r * 2)
