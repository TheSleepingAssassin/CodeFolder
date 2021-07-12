class Repeller {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.g = 25;
  }

  repel(b) {
    let f = p5.Vector.sub(this.pos, b.pos);
    let distSq = constrain(f.magSq(), this.g, 750);
    let strength = this.g * (this.mass, b.mass) / distSq;
    f.setMag(strength);
    f.mult(-1);
    b.applyForce(f);
  }

  show() {
    noStroke();
    fill(0, 255, 0);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
