class Asteroid {
  constructor(pos, r) {
    if (pos) {
      this.pos = pos.copy();
    } else {
      this.pos = createVector(random(width), random(height));
    }
    if (r) {
      this.r *= 0.5;
    } else {
      this.r = random(30, 60);
    }
    this.vel = p5.Vector.random2D();
    this.total = floor(random(5, 15));
    this.off = [];
    for (let i = 0; i < this.total; i++) {
      this.off[i] = random(-this.r, this.r);
    }
  }

  break2() {
    let newA = [];
    newA[0] = new Asteroid(this.pos, this.r * 0.5);
    newA[1] = new Asteroid(this.pos, this.r * 0.5);
    console.log(newA.r);
    return newA;
  }

  update() {
    this.pos.add(this.vel);
  }

  render() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    beginShape();
    for (let i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      let r = this.r + this.off[i];
      let x = r * cos(angle);
      let y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  edges() {
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
  }
}