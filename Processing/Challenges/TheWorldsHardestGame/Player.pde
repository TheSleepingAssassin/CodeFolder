class Player
{

  PVector pos, vel, acc;
  float r;

  Player(PVector pos, float r)
  {
    this.pos = pos.copy();
    this.r = r;
  }
  
  void addForce(PVector force)
  {
    this.acc.add(force);
  }
  
  void tick()
  {
  }
  
  void render()
  {
    pushMatrix();
    translate(pos.x, pos.y);
    fill(255, 0, 0);
    noStroke();
    rect(0, 0, this.r * 2, this.r * 2);
    popMatrix();
  }
}
