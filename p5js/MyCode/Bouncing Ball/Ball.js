class Ball {
  constructor(x, y, m) {
    this.pos = createVector(width / 2, height / 2);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.xspeed = 4;
    this.yspeed = 3;
    this.his = [];
  }

  bounce() {
    if (this.pos.x < this.r || this.pos.x > width - this.r) {
      this.xspeed *= -1;
    }
    if (this.pos.y < this.r || this.pos.y > height - this.r) {
      this.yspeed *= -1;
    }
  }

  update() {
    this.pos.x += this.xspeed;
    this.pos.y += this.yspeed;
    let v = createVector(this.pos.x, this.pos.y);
    this.his.push(v);
    if (this.his.length > 25) {
      this.his.splice(0, 1);
    }
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    for (let i = 0; i < this.his.length; i++) {
      let posi = this.his[i];
      ellipse(posi.x, posi.y, i, i);
    }
  }
}