class Walker {
  float x, y, r;
  Walker(float _x, float _y) {
    x = _x;
    y = _y;
    r = 2;
  }
  
  void move() {
    x += random(-3, 3);
    y += random(-3, 3);
    x = constrain(x, 0, width - 1);
    y = constrain(y, 0, height - 1);
  }
  
  void render() {
    stroke(255);
    strokeWeight(r * 2);
    point(x, y);
  }
}
