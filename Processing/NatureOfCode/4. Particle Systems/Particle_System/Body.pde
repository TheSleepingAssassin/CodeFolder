class Body {
  PVector pos, vel, acc;

  float r, life;
  Body() {
    pos = new PVector(width / 2, 50);
    vel = PVector.random2D();
    acc = new PVector();
    r = 4;
    life = 255;
  }

  boolean dead() {
    return life == 0;
  }

  void run() {
    update();
    render();
  }

  void applyForce(PVector force) {
    acc.add(force);
  }

  void update() {
    vel.add(acc);
    pos.add(vel);
    life -= 1.5;
    acc.mult(0);
  }

  void render() {
    fill(255, life);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
