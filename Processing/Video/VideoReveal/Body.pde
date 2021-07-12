class Body {
  PVector pos, vel;
  float r;
  Body() {
    pos = new PVector(width / 2, height / 2);
    vel = PVector.random2D();
    vel.mult(random(3, 7));
    r = 2;
  }

  void bounce() {
    if (pos.x > width - r) {
      pos.x = width - r;
      vel.x *= -1;
    } else if (pos.x < r) {
      pos.x = r;
      vel.x *= -1;
    } else if (pos.y > height - r) {
      pos.y = r;
      vel.y *= -1;
    } else if (pos.y < r) {
      pos.y = r;
      vel.y *= -1;
    }
  }

  void update() {
    pos.add(vel);
  }

  void render() {
    color c = video.get(int(pos.x), int(pos.y));
    fill(c);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
