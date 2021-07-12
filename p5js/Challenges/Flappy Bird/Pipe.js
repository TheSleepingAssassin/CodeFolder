class Pipe {
  constructor() {
    this.gap = 150;
    this.x = width;
    this.w = 20;
    this.h = floor(random(1, height - this.gap))
    this.xspeed = 3;
  }

  hits(bird) {
    if (bird.pos.x > this.x && bird.pos.x < this.x + this.w) {
      if (bird.pos.y < this.h || bird.pos.y > this.h + this.gap) {
        return true;
      }
    }
    return false;
  }

  update() {
    this.x -= this.xspeed;
  }

  show() {
    noStroke();
    fill(255);
    rect(this.x, 0, this.w, this.h);
    rect(this.x, this.h + this.gap, this.w, height);
  }
}
