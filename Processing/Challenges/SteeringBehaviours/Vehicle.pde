class Vehicle {

  PVector pos, vel, acc;
  float r;

  Vehicle(float x, float y, float r) {
  }

  void run() {
    this.render();
    this.tick();
  }

  void applyForce(PVector force) {
    acc.add(force);
  }

  void tick() {
    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
  }

  void render() {
    push();
    beginShape(TRIANGLES);
    vertex(-r, r);
    vertex(r, r);
    vertex(0, -r);
    endShape(CLOSE);
    pop();
  }

}
