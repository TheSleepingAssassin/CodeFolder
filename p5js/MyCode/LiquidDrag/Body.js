class Body {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }

  dragA() {
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let c = 0.01;
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);

    this.applyForce(drag);
  }

  dragW() {
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    let c = 0.1;
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);

    this.applyForce(drag);
  }

  edges() {
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  render() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}