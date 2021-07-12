class Dino {
  constructor(h, trex) {
    this.x = 50;
    this.h = h;
    this.trex = trex;
    this.vy = 0;
    this.g = 1;
    this.r1 = this.trex.width;
    this.r2 = this.trex.height;
    this.y = this.h - this.r2 / 2;
  }

  collided(obj) {
    return collideRectRect(this.x, this.y, this.r1, this.r2, obj.x, obj.y, obj.width, obj.height);
  }

  jump() {
    this.vy = -25;
  }

  move() {
    this.y += this.vy;
    this.vy += this.g;
    this.y = constrain(this.y, 0, this.h - this.r2 / 2);
  }

  show() {
    image(this.trex, this.x, this.y, this.r1 / 2, this.r2 / 2);
  }
}
