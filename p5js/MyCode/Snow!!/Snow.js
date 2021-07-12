class Snow {
  constructor() {
    this.pos = createVector(random(width), random(-50, -10));
    this.vel = createVector();
    this.acc = createVector();
    this.r = random(1, 15);
    this.mass = this.r;
  }

  applyForce(force) {
    let f = force.copy();
    f.mult(this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    stroke(255);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }
}
