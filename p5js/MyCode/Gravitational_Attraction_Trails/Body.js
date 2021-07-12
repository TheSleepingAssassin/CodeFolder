class Body {
  constructor(m) {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.mass = m;
    this.r = sqrt(this.mass) * 5;
    this.his = [];
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    let v = createVector(this.pos.x, this.pos.y);
    this.his.push(v);
    if (this.his.length > 2) {
      this.his.splice(0, 1);
    }
  }

  render() {
    stroke(255, 0, 0);
    strokeWeight(0.1);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    for (let i = 0; i < this.his.length; i++) {
      let pos = this.his[i];
      line(this.pos.x, this.pos.y, pos.x, pos.y);
    }
  }
}