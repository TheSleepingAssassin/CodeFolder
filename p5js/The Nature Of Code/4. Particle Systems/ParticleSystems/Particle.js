class Particle {

  constructor(x, y, d) {

    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.d = d;
    this.life = 255;
    this.g = createVector(0, 0.2);

  }

  bounce() {

    if (this.pos.x + this.d / 2 >= width) {

      this.pos.x = width - this.d / 2;
      this.vel.x *= -1;

    } else if (this.pos.x - this.d / 2 <= 0) {

      this.pos.x = 0 + this.d / 2;
      this.vel.x *= -1;

    }

    if (this.pos.y + this.d / 2 >= height) {

      this.pos.y = height - this.d / 2;
      this.vel.y *= -1;

    }

  }

  dead() {

    return this.life < 0;

  }

  run() {

    this.tick();
    this.bounce();
    // this.applyG();
    this.render();

  }

  applyG() {

    this.applyForce(this.g);

  }

  applyForce(force) {

    this.acc.add(force);

  }

  tick() {

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    this.life -= 0;

  }

  render() {

    noStroke();
    fill(255, 0, 0, this.life);
    ellipse(this.pos.x, this.pos.y, this.d);

  }

}