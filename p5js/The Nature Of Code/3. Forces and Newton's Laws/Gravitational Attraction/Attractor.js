class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.g = 250;
  }

  attract(b) {
    let f = p5.Vector.sub(this.pos, b.pos);
    let distanceSq = constrain(f.magSq(), 100, 750);
    let strength = this.g * (this.mass, b.mass) / distanceSq;
    f.setMag(strength);
    b.applyForce(f);
    // let force = p5.Vector.sub(this.pos, b.pos);
    // let distanceSq = constrain(force.magSq(), 100, 1000);
    // let G = 100;
    // let strength = G * (this.mass * b.mass) / distanceSq;
    // force.setMag(strength);
    // b.applyForce(force);
  }

  show() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
