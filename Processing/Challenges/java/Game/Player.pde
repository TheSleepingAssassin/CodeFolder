class Player {
  PVector pos, vel;
  int r;
  Player(PVector pos, int r) {
    this.pos = pos;
    vel = new PVector();
    this.r = r;
  }
  
  void applyForce(PVector force) {
    vel.add(force);
  }
  
  void tick() {
    pos.add(vel);
    vel.mult(0);
  }
  
  void render() {
    pushMatrix();
    translate(pos.x, pos.y);
    fill(255, 0, 0);
    rect(0, 0, r, r);
    popMatrix();
  }
  
  void loop() {
    if (pos.x > width + r) {
      pos.x = -r;
    } else if (pos.x < -r) {
      pos.x = width + r;
    }
    
    if (pos.y > height + r) {
      pos.y = -r;
    } else if (pos.y < -r) {
      pos.y = height + r;
    }
  }
  
  void run() {
    this.render();
    this.tick();
    this.loop();
  }
}
