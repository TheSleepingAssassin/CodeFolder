class Attractor {
  constructor(pos, m) {
    this.pos = pos.copy();
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.g = 250;
  }
}