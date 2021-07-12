class Body {
  PVector pos, vel, acc;
  
  float r, life;
  Body(PVector _pos) {
    pos = new PVector(_pos.x, _pos.y);
    vel = PVector.random2D();
    acc = new PVector();
    r = 4;
    life = 255;
  }
  
  boolean dead() {
    return life == 0;
  }
  
  void applyForce(PVector _force) {
    acc.add(_force);
  }
  
  void update() {
    vel.add(acc);
    pos.add(vel);
    life -= 2.5;
    acc.mult(0);
  }
  
  void render() {
    fill(255, life);
    noStroke();
    ellipse(pos.x, pos.y, r * 2, r * 2);
  }
}
