class Body {
  constructor() {
    this.vx = floor(random(1));
    this.vy = floor(random(1));
    this.xs = 0;
    this.ys = 0;
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(this.xSpeed(), this.ySpeed());
    this.r = 16;
  }

  xSpeed() {
    switch (this.vx) {
      case 0:
        this.xs = 4;
        break;
      case 1:
        this.xs = -4;
        break;
    }
  }

  ySpeed() {
    switch (this.vy) {
      case 0:
        this.ys = 4;
        break;
      case 1:
        this.ys = -4;
        break;
    }
  }

  render() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}