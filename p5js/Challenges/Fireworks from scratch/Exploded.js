class Exploded {
  constructor() {
    this.hu = random(255);
    this.fw = new Particle(random(width), height, true, this.hu);
    this.finished = false;
    this.particles = [];
  }

  done () {
    if (this.finished && this.particles <= 0) {
      return true;
    } else {
      return false;
    }
  }

  explode() {
    for (let i = 0; i < 10; i++) {
      let p = new Particle(this.fw.pos.x, this.fw.pos.y, false, this.hu);
      this.particles.push(p);
    }
  }

  update() {
    if (!this.finished) {
      this.fw.update();
      this.fw.applyForce(g);
      if (this.fw.vel.y >= 0) {
        this.finished = true;
        this.explode();
      }
    }
    for (let p of this.particles) {
      p.update();
      p.applyForce(g);
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  show() {
    if (!this.finished) {
      this.fw.show();
    }
    for (let p of this.particles) {
      p.show();
    }
  }
}
