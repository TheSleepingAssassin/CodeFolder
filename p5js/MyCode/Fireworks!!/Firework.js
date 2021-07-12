class Firework {
  constructor() {
    this.pos = createVector(random(width), random(height, height + 200));
    this.vel = createVector(0, -10);
    this.acc = createVector(0, random(0.07, 0.09));
    this.r = 4;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  render() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}