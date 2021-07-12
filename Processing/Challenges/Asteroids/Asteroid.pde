class Asteroid {
  PVector pos, vel;
  float[] offset;
  int total;
  float r;
  Asteroid(PVector pos, float r) {
    this.pos = pos.copy();
    this.r = r * 0.5;

    this.vel = PVector.random2D();
    this.total = floor(random(5, 15));
    this.offset = new float[this.total];
    for (int i = 0; i < this.total; i++) {
      this.offset[i] = random(-5, 5);
    }
  }

  Asteroid() {
    if (floor(random(1)) < 0.5) {
      this.pos = new PVector(random(0, width / 2 - 100), random(0, height / 2 - 100));
    } else {
      this.pos = new PVector(random(width / 2 + 100, width), random(height / 2 + 100, height));
    }
    this.r = random(16, 70);
    this.vel = PVector.random2D();
    this.total = floor(random(5, 15));
    this.offset = new float[this.total];
    for (int i = 0; i < this.total; i++) {
      this.offset[i] = random(-5, 5);
    }
  }

  ArrayList genAst() {
    ArrayList<Asteroid> asts = new ArrayList<Asteroid>();
    asts.add(new Asteroid(this.pos, this.r));
    asts.add(new Asteroid(this.pos, this.r));
    return asts;
  }

  void edges() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }

    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  void update() {
    this.pos.add(this.vel);
  }

  void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    stroke(255);
    noFill();
    beginShape();
    for (int i = 0; i < total; i++) {
      float a = map(i, 0, total, 0, TWO_PI);
      float r = this.r + offset[i];
      float x = r * cos(a);
      float y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    popMatrix();
  }
}
