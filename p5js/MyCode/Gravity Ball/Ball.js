class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.g = 0.2;
    this.yspeed = 2;
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.y += this.yspeed;
    this.yspeed += this.g;
  }

  bounce() {
    if (this.y > height - this.r) {
      this.yspeed *= -0.84;
    }
  }
}
