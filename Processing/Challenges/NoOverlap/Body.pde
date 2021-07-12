class Body {
  PVector pos;
  float r;
  Body() {
    pos = new PVector(random(width), random(height));
    r = 16;
  }

  void render() {
    stroke(255);
    strokeWeight(2);
    fill(127);
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
