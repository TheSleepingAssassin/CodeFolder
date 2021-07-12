class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.yspeed = 5;
    this.r = 2;
  }

  contains(others) {
    let d = dist(this.x, this.y, others.x, others.y);
    return (d < this.r + others.r);
  }

  update() {
    this.y -= this.yspeed;
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }
}
