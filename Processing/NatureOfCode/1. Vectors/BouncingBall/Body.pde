class Body {
  PVector pos;
  PVector vel;
  float r;
  Body() {
    pos = new PVector(width / 2, height / 2);
    vel = new PVector(random(3, 5), random(3, 5));
    r = 16;
  }
  
  void bounce() {
    if (pos.x < r || pos.x > width - r) {
      vel.x = -vel.x;
    }
    if (pos.y < r || pos.y > height - r) {
      vel.y = -vel.y;
    }
  }
  
  void update() {
    pos.add(vel);
  }
  
  void render() {
    noStroke();
    fill(255);
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
