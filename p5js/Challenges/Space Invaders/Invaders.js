class Invader {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.edge = false;
    this.xdir = 5;
  }

  shiftDown() {
    this.xdir *= -1;
    this.y += this.r * 2;
  }

  move() {
    this.x += this.xdir;
  }

  hitEdge() {
    if (this.x >= width - this.r || this.x <= this.r) {
      this.edge = true;
      if (this.edge) {
        this.shiftDown();
      }
    }
  }

  show() {
    ellipse(this.x, this.y, this.r * 2);
  }
}
