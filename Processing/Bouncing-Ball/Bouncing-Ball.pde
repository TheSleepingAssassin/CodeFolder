Ball ball;

void setup() {
  size(600, 600);
  ball = new Ball(new PVector(random(width), random(height)), 16);
}

void draw() {
  background(0);
  ball.render();
  ball.update();
  ball.bounce();
}

class Ball {
  PVector pos, vel;

  float r;
  Ball(PVector pos_, float r_) {
    pos = pos_;
    vel = PVector.random2D();
    r = r_;
  }

  bounce() {
    if (pos.x > width - r) {
      pos.x = width - r;
      vel.x *= -1;
    }
    if (pos.x < r) {
      pos.x = r;
      vel.x *= -1;
    }
    if (pos.y > height - r) {
      pos.y = height - r;
      vel.y *= -1;
    }
    if (pos.y < r) {
      pos.y = r;
      vel.y *= -1;
    }
  }

  void update() {
    pos.add(vel);
  }

  void render() {
    noStroke();
    fill(127);
    circle(pos.x, pos.y, r * 2);
  }
}
