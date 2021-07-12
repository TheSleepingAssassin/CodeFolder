class Particle {
  constructor() {
    this.pos = createVector(width / 2, height);
    this.vel = createVector(random(-2, 2), random(-5, -1));
    this.d = 50;
    this.al = 5;
    this.g = 0;
  }

  update() {
    this.pos.add(this.vel);
    this.al -= 2;
    this.g++;
    this.d -= 0.4;
  }

  render() {
    noStroke();
    fill(255, this.g, 0, this.al);
    ellipse(this.pos.x, this.pos.y, this.d, this.d)
  }
}