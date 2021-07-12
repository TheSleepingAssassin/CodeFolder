class Particle {
  constructor() {
    this.r = 16;
    this.pos = createVector(width / 2, height + this.r);
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
    this.green = 0;
  }

  shrink() {
    this.r -= 0.08;
  }

  update() {
    this.pos.x += this.vx;
    this.pos.y += this.vy;
    this.alpha -= 1.5;
    this.green += 1.2;
  }

  show() {
    noStroke();
    fill(255, this.green, 0, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }

  finished() {
    return this.r < 0;
  }
}
