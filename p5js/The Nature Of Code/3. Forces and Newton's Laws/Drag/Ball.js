class Ball {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    //this.vel = p5.Vector.random2D();
    //this.vel.mult(random(3));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }

  drag() {
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let c = 0.1;
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);

    this.applyForce(drag);
  }

  show() {
    stroke(0);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -0.85;
    }

    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -0.85;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.85;
    }
  }
}