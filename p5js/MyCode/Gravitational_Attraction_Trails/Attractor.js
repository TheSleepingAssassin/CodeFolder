class Attractor {
  constructor(m) {
    this.pos = createVector(width / 2, height / 2);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.g = 100;
  }

  attract(b) {
    let f = p5.Vector.sub(this.pos, b.pos);
    let distSq = constrain(f.magSq(), this.g, 750);
    let strength = this.g * (this.mass, b.mass) / distSq;
    f.setMag(strength);
    b.applyForce(f);
  }

  render() {
    noStroke();
    fill(0, 255, 0);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}