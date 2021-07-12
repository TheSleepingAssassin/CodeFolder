class Body {
  PVector pos, vel, acc;
  
  float r, g;
  Body(PVector _pos) {
    pos = new PVector(_pos.x, _pos.y);
    vel = new PVector(random(-0.4, 0.4), random(-1, -5));
    r = 32;
    g = 0;
  }
  
  boolean dead() {
    return r == 0;
  }
  
  void update() {
    pos.add(vel);
    g++;
    r -= 0.25;
  }
  
  void render() {
    fill(255, g, 0);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
