class Body {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = sqrt(this.mass) * 10;
    this.prevx = 0;
    this.prevy = 0;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.prevx = this.pos.x;
    this.prevy = this.pos.y;
  }

  show() {
    strokeWeight(3);
    stroke(255);
    line(this.pos.x, this.pos.y, this.prevx, this.prevy);
  }
}