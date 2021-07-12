class Bird {
  PVector pos, vel, acc;
  float r, mass;
  Bird(float m) {
    pos = new PVector(width / 4, height / 2);
    vel = new PVector();
    acc = new PVector();
    mass = m;
    r = sqrt(mass) * 10;
  }

  void run() {
    render();
    update();
    applyG();
  }

  void applyG() {
    PVector g = new PVector(0, 0.7);
    acc.add(g);
  }

  void jump() {
    PVector j = new PVector(0, -10);
    applyForce(j);
  }

  void applyForce(PVector force) {
    PVector f = PVector.div(force, mass);
    acc.add(f);
  }

  void update() {
    vel.add(acc);
    pos.add(vel);
    pos.y = constrain(pos.y, this.r, height - this.r);
    acc.mult(0);
  }

  void render() {
    pushMatrix();
    noStroke();
    fill(100, 100, 0);
    ellipse(pos.x, pos.y, r * 2, r * 2);
    popMatrix();
  }
}
