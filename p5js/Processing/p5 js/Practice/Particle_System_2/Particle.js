class Particle {

  constructor() {

    this.x = 300;
    this.y = 380;
    this.r = random(5, 10);
    this.vx = random(1, -1);
    this.vy = random(-5, -1);
    this.al = 255;
  }

  show() {

    noStroke();
    fill(255, 0, 0, this.al);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {

    this.x += this.vx;
    this.y += this.vy;
    this.al -= 3;
  }

  finished() {

    return this.al < 0;
  }
}
