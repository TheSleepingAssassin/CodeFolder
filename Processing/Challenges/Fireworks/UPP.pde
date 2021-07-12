public class UPP {
  
  PVector pos, vel, acc;
  int r;
  
  public UPP(PVector pos, int r) {
    
    this.pos = pos;
    vel = new PVector();
    acc = new PVector();
    
    this.r = r;
    
  }
  
  public void run() {
    
    this.render();
    this.update();
    
  }
  
  public void applyForce(PVector force) {
    
    acc.add(force);
    
  }
  
  public void update() {
    
    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
    
  }
  
  public void render() {
    
    pushMatrix();
    
    translate(pos.x, pos.y);
    fill(255, 255, 255);
    circle(0, 0, r);
    
    popMatrix();
    
  }
  
  public boolean out() {
    if (pos.y < -r) {
      return true;
    }
    
    return false;
  }
  
}
