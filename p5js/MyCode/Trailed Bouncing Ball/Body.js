class Body {
  constructor() {
    this.r = 12;
    this.pos = createVector(random(this.r, width - this.r), random(this.r, height - this.r));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(10, 10);
    this.his = [];
  }

  bounce() {
    if (this.pos.x < this.r || this.pos.x > width - this.r) {
      this.vel.x *= -1;
    } else if (this.pos.y < this.r || this.pos.y > height - this.r) {
      this.vel.y *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    let v = createVector(this.pos.x, this.pos.y);
    this.his.push(v);
    if (this.his.length > 25) {
      this.his.splice(0, 1);
    }
    this.acc.mult(0);
  }

  render() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    for (let i = 0; i < this.his.length; i++) {
      let posi = this.his[i];
      ellipse(posi.x, posi.y, i, i);
    }
  }
}