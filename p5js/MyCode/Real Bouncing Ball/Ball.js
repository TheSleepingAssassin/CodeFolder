class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(5, 10);
    this.xspeed = random(-2, 2);
    this.yspeed = random(-2, 2);
  }

  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if(this.x > width - this.r || this.x < this.r) {
      this.xspeed *= -1;
    }
    if(this.y > height - this.r || this.y < this.r) {
      this.yspeed *= -1;
    }
  }
}
