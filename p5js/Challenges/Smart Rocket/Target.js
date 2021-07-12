class Target {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.g = 150;
    this.w = 15;
    this.h = 15;
  }

  attract(r) {
    let fo = p5.Vector.sub(this.pos, r.pos);
    let distSq = constrain(fo.magSq(), this.g, 750);
    let strength = this.g * 1 / distSq;
    fo.setMag(strength);
    r.applyForce(fo);
  }

  render() {
    push();
    noStroke();
    rectMode(CENTER);
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, this.w, this.h);
    pop();
  }
}