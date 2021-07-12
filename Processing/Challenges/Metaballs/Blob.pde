class Blob {

  PVector pos, vel;
  float r;

  Blob(float x, float y, float r) {
    pos = new PVector(x, y);
    vel = PVector.random2D();
    vel.mult(random(2, 5));
    this.r = r;
  }

  void bounce() {
    if (pos.x > width || pos.x < 0) {
      vel.x *= -1;
    }

    if (pos.y > height || pos.y < 0) {
      vel.y *= -1;
    }
  }

  void tick() {
    pos.add(vel);

    this.bounce();
  }

  void render() {
    pushMatrix();
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(pos.x, pos.y, r * 2, r * 2);
    popMatrix();
  }

}
