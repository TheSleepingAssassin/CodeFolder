class Particle {
  PVector pos, vel;
  float r, lifespan;
  Particle() {
    this.pos = new PVector(width / 2, height / 2);
    this.vel = PVector.random2D();
    this.vel.mult(random(3, 7));
    this.r = 8;
    this.lifespan = 255;
  }

  boolean isDead() {
    return this.lifespan < 0 && (this.pos.x > width + this.r || this.pos.x < -this.r || this.pos.y > height + this.r || this.pos.y < -this.r);
  }

  void update() {
    this.pos.add(this.vel);
    this.lifespan -= 4.5;
  }

  void render() {
    fill(200, this.lifespan);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
}
