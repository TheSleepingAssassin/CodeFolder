class Body {
  constructor(pos, m) {
    this.pos = pos.copy();
    this.vel = createVector();
    this.acc = createVector();
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }
}