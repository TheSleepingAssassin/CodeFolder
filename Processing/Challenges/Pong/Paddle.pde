class Paddle {
  PVector pos;
  float w, h;
  boolean subtracting, adding;
  Paddle(PVector pos, float w, float h) {
    this.pos = new PVector(pos.x, pos.y);
    this.w = w;
    this.h = h;
    this.adding = false;
    this.subtracting = false;
  }

  void addV(boolean b) {
    adding = b;
  }

  void subV(boolean b) {
    subtracting = b;
  }

  void update() {
    if (adding) {
      pos.add(new PVector(0, 5));
    } else if (subtracting) {
      pos.sub(new PVector(0, -5));
    }
  }

  void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    fill(255);
    rect(0, 0, w, h);
    popMatrix();
  }
}
