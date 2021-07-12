class Ship {
  constructor(x) {
    this.w = 10;
    this.h = 15;
    this.x = x;
    this.y = height - this.h;
    this.dir = 0;
  }

  setDir(dir) {
    this.dir = dir;
  }

  move() {
    this.x += this.dir;
  }

  show() {
    rect(this.x, this.y, this.w * 2, this.h * 2);
  }
}
